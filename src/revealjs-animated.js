import AnimationFactory from './animation-factory';
import 'web-animations-js';

const RevealJsAnimation = window.RevealJsAnimation || (() => {
    if(typeof Reveal !== 'undefined'){
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `.reveal .slides section .fragment.animated {
                opacity: 1;
                visibility: visible;
            }`;
        document.getElementsByTagName('head')[0].appendChild(style);

        // eslint-disable-next-line no-undef
        Reveal.addEventListener( 'fragmenthidden', function( event ) {
            var element = event.fragment;
            AnimationFactory.buildAnimation(element, true);
        } );

        // eslint-disable-next-line no-undef
        Reveal.addEventListener( 'fragmentshown', function( event ) {
            var element = event.fragment;
            AnimationFactory.buildAnimation(element);
        } );
    }
})();

export default RevealJsAnimation;