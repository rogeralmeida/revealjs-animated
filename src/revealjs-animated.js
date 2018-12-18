var AnimationFactory = require('./animation-factory');

var RevealJsAnimation = window.RevealJsAnimation || (() => {
    if(typeof Reveal !== 'undefined'){
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `.reveal .slides section .fragment.animated {
                opacity: 1;
                visibility: visible;
            }`;
        document.getElementsByTagName('head')[0].appendChild(style);

        Reveal.addEventListener( 'fragmenthidden', function( event ) {
            var element = event.fragment;
            AnimationFactory.buildAnimation(element, true);
        } );
        Reveal.addEventListener( 'fragmentshown', function( event ) {
            var element = event.fragment;
            AnimationFactory.buildAnimation(element);
        } );
    }
})();