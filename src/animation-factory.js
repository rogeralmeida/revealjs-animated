var AnimationFactory = (() => {

    function getNumberAttribute(element, attributeName, defaultValue){
        if(!element.hasAttribute(attributeName)){
            return defaultValue;
        }
        return Number(element.getAttribute(attributeName));
    }

    function getTextAttribute(element, attributeName, defaultValue){
        if(!element.hasAttribute(attributeName)){
            return defaultValue;
        }
        return element.getAttribute(attributeName);
    }

    function middleTop(element, reverse=false) {
        var topDistance = (element.offsetTop + element.parentElement.offsetTop) * -1;
        var transform = ["translate(0px, 0px)", `translate(0px, ${topDistance}px)`];
        if (reverse){
            transform = [`translate(0px, ${topDistance}px)`, "translate(0px, 0px)"];
        }
        var keyframes = {transform: transform};
        var duration = getNumberAttribute(element, "data-animated-duration", 1000);
        var iterations = getNumberAttribute(element, "data-animated-iterations", 1);
        var fill = getTextAttribute(element, "data-animated-fill", 'forwards');
        var timing = {duration: duration, iterations: iterations, fill: fill};
        return element.animate(keyframes, timing);
    }

    function moveTo(element, reverse=false){
        var leftDistance = getTextAttribute(element, "data-move-to-left", '50px');
        var topDistance = getTextAttribute(element, "data-move-to-top", '25px');
        var transform = ["translate(0px, 0px)", `translate(${leftDistance}, ${topDistance})`];
        if(reverse){
            transform = [`translate(${leftDistance}, ${topDistance})`, "translate(0px, 0px)"];
        }
        var keyframes = {transform: transform};
        var duration = getNumberAttribute(element, "data-animated-duration", 1000);
        var iterations = getNumberAttribute(element, "data-animated-iterations", 1);
        var fill = getTextAttribute(element, "data-animated-fill", 'forwards');
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

    const moveToMiddleTopClass = 'move-to-middle-top';
    const moveToClass = 'move-to';
    const scaleUpClass = 'scale-up';
    const scaleDownClass = 'scale-down';
    const methodMap = new Map();
    methodMap.set(moveToMiddleTopClass, middleTop);
    methodMap.set(moveToClass, moveTo);
    methodMap.set(scaleUpClass, scaleUp);
    methodMap.set(scaleDownClass, scaleDown);

    return {
        buildAnimation: (element, reverse=false) => {
            element.classList.forEach((clazz)=> {
               if (methodMap.has(clazz) ){
                   var method = methodMap.get(clazz);
                   method(element, reverse);
               }
            });
        }
    };
})();

module.exports = AnimationFactory;