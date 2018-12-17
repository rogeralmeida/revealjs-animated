var AnimationFactory = require('./animation-factory');

RevealJsAnimated = (function () {
    return {
        initialize: function (revealjsInstance){
            revealjsInstance.addEventListener( 'fragmenthidden', function( event ) {
                var element = event.fragment;
                AnimationFactory.revertAnimation(element);
            } );
            revealjsInstance.addEventListener( 'fragmentshown', function( event ) {
                var element = event.fragment;
                AnimationFactory.buildAnimation(element);
            } );
        }
    };
})();