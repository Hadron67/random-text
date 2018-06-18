/*
    Copyright 2018 hadroncfy

    Permission is hereby granted, free of charge, to any person obtaining a copy 
    of this software and associated documentation files (the "Software"), to deal 
    in the Software without restriction, including without limitation the rights 
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
    of the Software, and to permit persons to whom the Software is furnished to do so, 
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all 
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
    PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
    CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
    OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function(root, factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory(root.randtxt = {}));
})(this, function(exports){

'use strict';
var META_WEIGHT_AUTO = -1;
var rule = (function(){
    function Rule(lhs, rhs, weight){
        this.lhs = lhs;
        this.rhs = rhs;
        this.weight = weight;
    }
    function fromString(lhs, rhs, escapeChar){
        var rhs2 = [];
        var sym = '', i = 0, lastNt = false;
        var weight = 1;
        typeof escapeChar === 'undefined' && (escapeChar = '%');
        function char(){
            return rhs.charAt(i);
        }
        function emit(sym2, nt){
            nt = !!nt;
            if(!nt && !lastNt){
                sym += sym2;
            }
            else {
                sym.length > 0 && rhs2.push({sym: sym, nt: lastNt});
                sym = sym2;
                lastNt = nt;
            }
        }
        function emitLast(){
            if(sym.length > 0){
                rhs2.push({sym: sym, nt: lastNt});
                sym = '';
            }
        }
        function whiteSpace(){
            while(/[ \t\n\r]/.test(char())){
                i++;
            }
        }
        if(char() === '@'){
            i++;
            var num = 0;
            while(/[0-9]/.test(char())){
                num *= 10;
                num += Number(char());
                i++;
            }
            num === 0 && (num = META_WEIGHT_AUTO);
            weight = num;
            whiteSpace();
        }
        while(i < rhs.length){
            if(char() === escapeChar){
                i++;
                if(i < rhs.length){
                    emit(char());
                    i++;
                }
                else{
                    emit(escapeChar);
                }
            }
            else if(char() === '<') {
                i++;
                var name = '';
                var bounded = false;
                while(i < rhs.length){
                    if(char() === '>'){
                        i++;
                        bounded = true;
                        break;
                    }
                    else {
                        name += char();
                        i++;
                    }
                }
                if(bounded){
                    emit(name, bounded);
                }
                else {
                    emit('<' + name);
                }
            }
            else {
                emit(char());
                i++;
            }
        }
        emitLast();
        return new Rule(lhs, rhs2, weight);
    }
    return {
        fromString: fromString
    };
})();

function loader(grammarJSON, opt){
    opt = opt || {};
    var escapeChar = opt.escapeChar || '%';
    var random = opt.random || function(range){ return Math.random() * range; };
    var startKey = opt.start || 'start';
    var grammar = {}, weightSums = {};
    var weightRules = [];
    var ret = {
        load: load,
        done: done
    };

    return ret;

    function load(grammarJSON){
        function emitRule(rule){
            rules.push(rule);
            rule.weight === META_WEIGHT_AUTO && weightRules.push(rule);
        }
        for(var lhs in grammarJSON){
            var rules = grammar[lhs] ? grammar[lhs] : (grammar[lhs] = []);
            var rulesString = grammarJSON[lhs];
            if(typeof rulesString === 'string'){
                emitRule(rule.fromString(lhs, rulesString, escapeChar));
            }
            else {
                for(var i = 0; i < rulesString.length; i++){
                    emitRule(rule.fromString(lhs, rulesString[i], escapeChar));
                }
            }
            // grammar[lhs] = rules;
        }
        return ret;
    }
    
    function selectRule(lhs){
        var rules = grammar[lhs];
        var sel = random(weightSums[lhs]);
        var leftBound = 0;
        if(rules === undefined){
            throw 'undefined non-terminal "' + lhs + '"';
        }
        for(var i = 0; i < rules.length; i++){
            if(sel >= leftBound && sel < leftBound + rules[i].weight){
                return rules[i];
            }
            leftBound += rules[i].weight;
        }
        throw 'unreachable';
    }
    function calcWeights(){
        var done = false;
        while(!done){
            done = true;
            out: for(var i = 0; i < weightRules.length; i++){
                var rule = weightRules[i];
                if(rule.weight === META_WEIGHT_AUTO){
                    done = false;
                    var weight = 1;
                    for(var j = 0, _a = rule.rhs; j < _a.length; j++){
                        if(_a[j].nt){
                            var ws = 0;
                            for(var k = 0, _b = grammar[_a[j].sym]; k < _b.length; k++){
                                if(_b[k].weight === META_WEIGHT_AUTO){
                                    continue out;
                                }
                                else {
                                    ws += _b[k].weight;
                                }
                            }
                            weight *= ws;
                        }
                    }
                    rule.weight = weight;
                }
            }
        }
    }
    function done(){
        calcWeights();
        for(var lhs in grammar){
            var rules = grammar[lhs];
            var weightSum = 0;
            for(var i = 0; i < rules.length; i++){
                weightSum += rules[i].weight;
            }
            if(weightSum > 0){
                weightSums[lhs] = weightSum;
            }
            else {
                throw 'sum of weights of the rules of non-terminal "' + lhs + '" is 0, which is not allowed.';
            }
        }
        if(!(startKey in grammar)){
            throw 'start rule not specified';
        }
        return function(){
            var stack = [{sym: startKey, nt: true}];
            var done = false;
            while(!done){
                var stack2 = [];
                done = true;
                for(var i = 0; i < stack.length; i++){
                    var item = stack[i];
                    if(item.nt){
                        done = false;
                        for(var j = 0, _a = selectRule(item.sym).rhs; j < _a.length; j++){
                            stack2.push(_a[j]);
                        }
                    }
                    else {
                        stack2.push(item);
                    }
                }
                stack = stack2;
            }
            var output = '';
            for(var i = 0; i < stack.length; i++){
                output += stack[i].sym;
            }
            return output;
        }
    }
}

// exports.rule = rule;
exports.loader = loader;

});