const factory = require('../src/animation-factory');

test('it should be able to create a move-to-middle-top animation', () => {
    var element = document.createElement('h1');
    expect(element).toBeDefined();
    element.setAttribute("data-animated-duration", "1000");
    element.setAttribute("data-animated-iterations", "1");
    element.setAttribute("data-animated-fill", "forwards");
    var animation = factory.buildAnimation(element);
    expect(animation.playState).toBe("paused");
});