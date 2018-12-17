var AnimationFactory = (() => {
    function middleTop(element, reverse=false) {
        var topDistance = (element.offsetTop + element.parentElement.offsetTop) * -1;
        var transform = ["translate(0px, 0px)", `translate(0px, ${topDistance}px)`];
        if (reverse){
            transform = [`translate(0px, ${topDistance}px)`, "translate(0px, 0px)"];
        }
        var keyframes = {transform: transform};
        var duration = Number(element.getAttribute("data-animated-duration"));
        var iterations = Number(element.getAttribute("data-animated-iterations"));
        var fill = element.getAttribute("data-animated-fill");
        var timing = {duration: duration, iterations: iterations, fill: fill};
        return element.animate(keyframes, timing);
    }

    function moveTo(element, reverse=false){
        var topDistance = element.getAttribute("data-move-to-left");
        var leftDistance = element.getAttribute("data-move-to-top");
        var transform = ["translate(0px, 0px)", `translate(${leftDistance}, ${topDistance})`];
        if(reverse){
            transform = [`translate(${leftDistance}, ${topDistance})`, "translate(0px, 0px)"];
        }
        var keyframes = {transform: transform};
        var duration = Number(element.getAttribute("data-animated-duration"));
        var iterations = Number(element.getAttribute("data-animated-iterations"));
        var fill = element.getAttribute("data-animated-fill");
        var timing = {duration: duration, iterations: iterations, fill: fill};
        return element.animate(keyframes, timing);
    }

    function scaleUp(element, reverse=false) {
        var keyframes = {transform: ['scale(1, 1)', 'scale(2, 2)']};
        if(reverse){
            keyframes = {transform: ['scale(2, 2)', 'scale(1, 1)']};
        }
        const duration = { duration: 1500, iterations: 1, fill: 'forwards' };
        return element.animate(keyframes, duration);
    }

    function scaleDown(element, reverse=false) {
        var transform = ['scale(1, 1)', 'scale(0.5, 0.5)'];
        if (reverse){
            transform = ['scale(0.5, 0.5)', 'scale(1, 1)'];
        } 
        
        var keyframes = {transform: transform};
        const duration = { duration: 1500, iterations: 1, fill: 'forwards' };
        return element.animate(keyframes, duration);
    }

    return {
        buildAnimation: (element) => {
            if (element.classList.contains('move-to-middle-top')) {
                return middleTop(element);
            } else if (element.classList.contains('move-to')) {
                return moveTo(element);
            } else if (element.classList.contains('scale-up')){
                return scaleUp(element);
            } else if (element.classList.contains('scale-down')){
                return scaleDown(element);
            }
        },
        revertAnimation: (element) => {
            if (element.classList.contains('move-to-middle-top')) {
                return middleTop(element, true);
            } else if (element.classList.contains('move-to')) {
                return moveTo(element, true);
            } else if (element.classList.contains('scale-up')){
                return scaleUp(element, true);
            } else if (element.classList.contains('scale-down')){
                return scaleDown(element, true);
            }
        }
    };
})();

module.exports = AnimationFactory;