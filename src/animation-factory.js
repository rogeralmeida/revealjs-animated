var AnimationFactory = (() => {
    return {
        buildAnimation: (element) => {
            var keyFrames = {transform: ["translate(0px, 0px)", `translate(0px, -300px)`]};
            var timing = {duration: 1000, iterations: 1000, fill: 'forwards'};
            var animation = element.animate(keyFrames, timing);
            return animation;
        }
    };
})();

module.exports = AnimationFactory;