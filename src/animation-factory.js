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
        var transform = ['translate(0px, 0px)', `translate(0px, ${topDistance}px)`];
        if (reverse){
            transform = [`translate(0px, ${topDistance}px)`, 'translate(0px, 0px)'];
        }
        var keyframes = {transform: transform};
        var duration = getNumberAttribute(element, 'data-animated-duration', 1000);
        var iterations = getNumberAttribute(element, 'data-animated-iterations', 1);
        var fill = getTextAttribute(element, 'data-animated-fill', 'forwards');
        var timing = {duration: duration, iterations: iterations, fill: fill};
        return element.animate(keyframes, timing);
    }

    function moveTo(element, reverse=false){
        var leftDistance = getTextAttribute(element, 'data-move-to-left', '50px');
        var topDistance = getTextAttribute(element, 'data-move-to-top', '25px');
        var transform = ['translate(0px, 0px)', `translate(${leftDistance}, ${topDistance})`];
        if(reverse){
            transform = [`translate(${leftDistance}, ${topDistance})`, 'translate(0px, 0px)'];
        }
        var keyframes = {transform: transform};
        var duration = getNumberAttribute(element, 'data-animated-duration', 1000);
        var iterations = getNumberAttribute(element, 'data-animated-iterations', 1);
        var fill = getTextAttribute(element, 'data-animated-fill', 'forwards');
        var timing = {duration: duration, iterations: iterations, fill: fill};
        return element.animate(keyframes, timing);
    }

    function scaleUp(element, reverse=false) {
        const scaleFrom = getNumberAttribute(element, 'data-scale-up-from', 1);
        const scaleTo = getNumberAttribute(element, 'data-scale-up-to', 2);
        var keyframes = {transform: [`scale(${scaleFrom}, ${scaleFrom})`, `scale(${scaleTo}, ${scaleTo})`]};
        if(reverse){
            keyframes = {transform: [`scale(${scaleTo}, ${scaleTo})`, `scale(${scaleFrom}, ${scaleFrom})`]};
        }
        const duration = getNumberAttribute(element, 'data-scale-up-duration', 1500);
        const iterations = getNumberAttribute(element, 'data-scale-up-iterations', 1);
        const fill = getTextAttribute(element, 'data-scale-up-fill', 'forwards');
        const time = { duration: duration, iterations: iterations, fill: fill };
        return element.animate(keyframes, time);
    }

    function scaleDown(element, reverse=false) {
        const scaleFrom = getNumberAttribute(element, 'data-scale-down-from', 1);
        const scaleTo = getNumberAttribute(element, 'data-scale-down-to', 0.5);
        var transform = [`scale(${scaleFrom}, ${scaleFrom})`, `scale(${scaleTo}, ${scaleTo})`];
        if (reverse){
            transform = [`scale(${scaleTo}, ${scaleTo})`, `scale(${scaleFrom}, ${scaleFrom})`];
        } 
        const keyframes = {transform: transform};
        const duration = getNumberAttribute(element, 'data-scale-down-duration', 1500);
        const iterations = getNumberAttribute(element, 'data-scale-down-iterations', 1);
        const fill = getTextAttribute(element, 'data-scale-down-fill', 'forwards');
        const time = {duration: duration, iterations: iterations, fill: fill};
        return element.animate(keyframes, time);
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

export default AnimationFactory;