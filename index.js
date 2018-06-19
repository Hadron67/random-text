(function($, randtxt, grammarLoader, ClipboardJS){
    'use strict';
    var output = $('#output-container');
    var running = false;
    grammarLoader.load('lexical-db', function(grammarParts){
        $('#loading-ind').fadeOut(function(){
            var generate = randtxt.loader();
            for(var i = 0, _a = grammarParts; i < _a.length; i++){
                generate.load(_a[i]);
            }
            generate = generate.done();
            function update(){
                output.html(generate());
            }
            $('#btn-run').click(function(){
                running = !running;
            });
            var clip = new ClipboardJS('#btn-copy', {
                text: function(trigger){
                    return output.html();
                }
            });
            clip.on('success', function(){
                var t = true;
                $('#copy-hint').fadeIn();
                $(document).off('click');
                $(document).click(function(){
                    if(t){
                        t = false;
                    }
                    else {
                        $('#copy-hint').fadeOut();
                        $(document).off('click');
                    }
                });
                return true;
            });
            clip.on('error', function(e){
                console.error('copy failed: ' + e);
            });
            update();
            (function onEnterFrame(){
                running && update();
                requestAnimationFrame(onEnterFrame);
            })();
        });
    });

})(jQuery, randtxt, grammarLoader, ClipboardJS);

