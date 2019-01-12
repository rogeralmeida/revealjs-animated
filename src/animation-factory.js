var AnimationFactory = (() => {
    const ATTRIBUTE_PREFIX              = 'data-animated';
    const MOVE_TO_LEFT_ATTRIBUTE        = `${ATTRIBUTE_PREFIX}-move-to-left`;
    const MOVE_TO_TOP_ATTRIBUTE         = `${ATTRIBUTE_PREFIX}-move-to-top`;
    const ROTATE_FROM_ATTRIBUTE         = `${ATTRIBUTE_PREFIX}-rotate-from`;
    const ROTATE_TO_ATTRIBUTE           = `${ATTRIBUTE_PREFIX}-rotate-to`;
    const SCALE_UP_FROM_ATTRIBUTE       = `${ATTRIBUTE_PREFIX}-scale-up-from`;
    const SCALE_UP_TO_ATTRIBUTE         = `${ATTRIBUTE_PREFIX}-scale-up-to`;
    const SCALE_DOWN_FROM_ATTRIBUTE     = `${ATTRIBUTE_PREFIX}-scale-down-from`;
    const SCALE_DOWN_TO_ATTRIBUTE       = `${ATTRIBUTE_PREFIX}-scale-down-to`;
    const DURATION_ATTRIBUTE            = `${ATTRIBUTE_PREFIX}-duration`;
    const ITERATIONS_ATTRIBUTE          = `${ATTRIBUTE_PREFIX}-iterations`;
    const FILL_ATTRIBUTE                = `${ATTRIBUTE_PREFIX}-fill`;

    const DEFAULT_ROTATE_FROM       = '0deg';
    const DEFAULT_ROTATE_TO         = '180deg';
    const DEFAULT_MOVE_TO_LEFT      = '50px';
    const DEFAULT_MOVE_TO_TOP       = '25px';
    const DEFAULT_SCALE_UP_FROM     = 1;
    const DEFAULT_SCALE_UP_TO       = 2;
    const DEFAULT_SCALE_DOWN_FROM   = 1;
    const DEFAULT_SCALE_DOWN_TO     = 0.5;
    const DEFAULT_DURATION          = 1500;
    const DEFAULT_FILL              = 'forwards';
    const DEFAULT_ITERATIONS        = 1;

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
        const rotateFrom = getTextAttribute(element, ROTATE_FROM_ATTRIBUTE, DEFAULT_ROTATE_FROM);
        const rotateTo = getTextAttribute(element, ROTATE_TO_ATTRIBUTE, DEFAULT_ROTATE_TO);
        
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
        var leftDistance = getTextAttribute(element, MOVE_TO_LEFT_ATTRIBUTE, DEFAULT_MOVE_TO_LEFT);
        var topDistance = getTextAttribute(element, MOVE_TO_TOP_ATTRIBUTE, DEFAULT_MOVE_TO_TOP);
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
        const scaleFrom = getNumberAttribute(element, SCALE_UP_FROM_ATTRIBUTE, DEFAULT_SCALE_UP_FROM);
        const scaleTo = getNumberAttribute(element, SCALE_UP_TO_ATTRIBUTE, DEFAULT_SCALE_UP_TO);
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
        const scaleFrom = getNumberAttribute(element, SCALE_DOWN_FROM_ATTRIBUTE, DEFAULT_SCALE_DOWN_FROM);
        const scaleTo = getNumberAttribute(element, SCALE_DOWN_TO_ATTRIBUTE, DEFAULT_SCALE_DOWN_TO);
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
            const duration = getNumberAttribute(element, DURATION_ATTRIBUTE, DEFAULT_DURATION);
            const iterations = getNumberAttribute(element, ITERATIONS_ATTRIBUTE, DEFAULT_ITERATIONS);
            const fill = getTextAttribute(element, FILL_ATTRIBUTE, DEFAULT_FILL);
            const time = {duration: duration, iterations: iterations, fill: fill};
            return element.animate(animations, time);
        }
    };
})();

export default AnimationFactory;