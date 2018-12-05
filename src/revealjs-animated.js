RevealJsAnimated = (function () {
    return {
        initialize: function (revealjsInstance){
            revealjsInstance.addEventListener( 'fragmentshown', function( event ) {
                var element = event.fragment;
                var topDistance = (element.offsetTop + element.parentElement.offsetTop) * -1;
                var keyframes = {transform: ["translate(0px, 0px)", `translate(0px, ${topDistance}px)`]};
                var duration = Number(element.getAttribute("data-animated-duration"));
                var iterations = Number(element.getAttribute("data-animated-iterations")); 
                var fill = element.getAttribute("data-animated-fill"); 
                var timing = {duration: duration, iterations: iterations, fill: fill};
                element.animate(keyframes, timing);
            } );
        }
    };
})();