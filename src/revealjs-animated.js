var AnimationFactory = require('./animation-factory');

RevealJsAnimated = (function () {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.reveal .slides section .fragment.animated {
            opacity: 1;
            visibility: visible;  
        }`;
    document.getElementsByTagName('head')[0].appendChild(style);

    return {
        initialize: function (revealjsInstance){
            revealjsInstance.addEventListener( 'fragmenthidden', function( event ) {
                var element = event.fragment;
                AnimationFactory.buildAnimation(element, true);
            } );
            revealjsInstance.addEventListener( 'fragmentshown', function( event ) {
                var element = event.fragment;
                AnimationFactory.buildAnimation(element);
            } );
        }
    };
})();