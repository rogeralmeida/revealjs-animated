var AnimationFactory = (() => {
    function middleTop(element) {
        var topDistance = (element.offsetTop + element.parentElement.offsetTop) * -1;
        var keyframes = {transform: ["translate(0px, 0px)", `translate(0px, ${topDistance}px)`]};
        var duration = Number(element.getAttribute("data-animated-duration"));
        var iterations = Number(element.getAttribute("data-animated-iterations"));
        var fill = element.getAttribute("data-animated-fill");
        var timing = {duration: duration, iterations: iterations, fill: fill};
        return element.animate(keyframes, timing);
    }

    function moveTo(element){
        var topDistance = element.getAttribute("data-move-to-left");
        var leftDistance = element.getAttribute("data-move-to-top");
        var keyframes = {transform: ["translate(0px, 0px)", `translate(${leftDistance}, ${topDistance})`]};
        var duration = Number(element.getAttribute("data-animated-duration"));
        var iterations = Number(element.getAttribute("data-animated-iterations"));
        var fill = element.getAttribute("data-animated-fill");
        var timing = {duration: duration, iterations: iterations, fill: fill};
        return element.animate(keyframes, timing);
    }

    function scaleUp(element) {
        var keyframes = {transform: ['scale(1, 1)', 'scale(2, 2)']};
        const duration = { duration: 1500, iterations: 1, fill: 'forwards' };
        return element.animate(keyframes, duration);
    }

    function scaleDown(element) {
        var keyframes = {transform: ['scale(1, 1)', 'scale(0.5, 0.5)']};
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
        }
    };
})();

module.exports = AnimationFactory;