var AnimationFactory = (() => {

    var getNumberAttribute = (element, attributeName, defaultValue) => {
        if(!element.hasAttribute(attributeName)){
            return defaultValue;
        }
        return Number(element.getAttribute(attributeName));
    };

    var getTextAttribute = (element, attributeName, defaultValue) => {
        if(!element.hasAttribute(attributeName)){
            return defaultValue;
        }
        return element.getAttribute(attributeName);
    };

    const rotate = (element, reverse=false, animations=[{transform: ''}, {transform: ''}]) => {
        const rotateFrom = getTextAttribute(element, 'data-animated-rotate-from', '0deg');
        const rotateTo = getTextAttribute(element, 'data-animated-rotate-to', '180deg');
        
        if (!reverse){ //Sorry for the little Yoda language here
            animations[0].transform += ` rotate(${rotateFrom}) `;
            animations[1].transform += ` rotate(${rotateTo}) `;
        } else {
            animations[1].transform += ` rotate(${rotateFrom}) `;
            animations[0].transform += ` rotate(${rotateTo}) `;
        }
        return animations;
    };

    const middleTop = (element, reverse=false, animations=[{transform: ''}, {transform: ''}]) => {
        var topDistance = (element.offsetTop + element.parentElement.offsetTop) * -1;
        if (!reverse){
            animations[0].transform += ' translate(0px, 0px)';
            animations[1].transform += ` translate(0px, ${topDistance}px)`;
        } else {
            animations[1].transform += ' translate(0px, 0px)';
            animations[0].transform += ` translate(0px, ${topDistance}px)`;
        }
        return animations;
    };

    function moveTo(element, reverse=false, animations=[{transform: ''}, {transform: ''}]){
        var leftDistance = getTextAttribute(element, 'data-move-to-left', '50px');
        var topDistance = getTextAttribute(element, 'data-move-to-top', '25px');
        if (!reverse){
            animations[0].transform += ' translate(0px, 0px)';
            animations[1].transform += ` translate(${leftDistance}, ${topDistance})`;
        } else {
            animations[1].transform += ' translate(0px, 0px)';
            animations[0].transform += ` translate(${leftDistance}, ${topDistance})`;
        }
        return animations;
    }

    function scaleUp(element, reverse=false, animations=[{transform: ''}, {transform: ''}]) {
        const scaleFrom = getNumberAttribute(element, 'data-scale-up-from', 1);
        const scaleTo = getNumberAttribute(element, 'data-scale-up-to', 2);
        if (!reverse){
            animations[0].transform += ` scale(${scaleFrom}, ${scaleFrom})`;
            animations[1].transform += ` scale(${scaleTo}, ${scaleTo})`;
        } else {
            animations[1].transform += ` scale(${scaleFrom}, ${scaleFrom})`;
            animations[0].transform += ` scale(${scaleTo}, ${scaleTo})`;
        }
        return animations;
    }

    function scaleDown(element, reverse=false, animations=[{transform: ''}, {transform: ''}]) {
        const scaleFrom = getNumberAttribute(element, 'data-scale-down-from', 1);
        const scaleTo = getNumberAttribute(element, 'data-scale-down-to', 0.5);
        if (!reverse){
            animations[0].transform += ` scale(${scaleFrom}, ${scaleFrom})`;
            animations[1].transform += ` scale(${scaleTo}, ${scaleTo})`;
        } else {
            animations[1].transform += ` scale(${scaleFrom}, ${scaleFrom})`;
            animations[0].transform += ` scale(${scaleTo}, ${scaleTo})`;
        }
        return animations;
    }

    const moveToMiddleTopClass = 'move-to-middle-top';
    const moveToClass = 'move-to';
    const scaleUpClass = 'scale-up';
    const scaleDownClass = 'scale-down';
    const rotateClass = 'rotate';
    const methodMap = new Map();
    methodMap.set(moveToMiddleTopClass, middleTop);
    methodMap.set(moveToClass, moveTo);
    methodMap.set(scaleUpClass, scaleUp);
    methodMap.set(scaleDownClass, scaleDown);
    methodMap.set(rotateClass, rotate);

    return {
        buildAnimation: (element, reverse=false) => {
            let animations = [{transform: ''}, {transform: ''}];
            element.classList.forEach((clazz)=> {
                if (methodMap.has(clazz) ){
                    var method = methodMap.get(clazz);
                    animations = method(element, reverse, animations);
                }
            });
            const duration = getNumberAttribute(element, 'data-animated-duration', 1500);
            const iterations = getNumberAttribute(element, 'data-animated-iterations', 1);
            const fill = getTextAttribute(element, 'data-animated-fill', 'forwards');
            const time = {duration: duration, iterations: iterations, fill: fill};
            return element.animate(animations, time);
        }
    };
})();

export default AnimationFactory;