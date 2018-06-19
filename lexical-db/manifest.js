var grammarLoader = (function(files){
    'use strict';
    var i = 0;
    var grammarParts = [];
    var onDone = null;
    var pwd = '';
    
    function part(grammarJSON){
        grammarParts.push(grammarJSON);
    }
    function loadScript(url, cb){
        var node = document.createElement('script');
        node.src = url;
        node.async = true;
        node.addEventListener('load', cb);
        document.getElementsByTagName('body')[0].appendChild(node);
    }
    function loadOne(){
        if(i < files.length){
            loadScript(pwd + '/' + files[i++], loadOne);
        }
        else {
            onDone(grammarParts);
        }
    }
    function load(pwd1, cb){
        onDone = cb;
        pwd = pwd1;
        i = 0;
        grammarParts.length = 0;
        loadOne();
    }

    return {
        part: part,
        load: load
    };
})([
    'main.js'
]);