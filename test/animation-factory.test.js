'use strict';

const factory = require('../src/animation-factory');

beforeAll(async() => {
    page.goto('http://www.google.com');
});

test('it should be able to create a move-to-middle-top animation', () => {
    const element = page.document.documentElement.createElement('h1');
    expect(element).toBeDefined();
    element.setAttribute("data-animated-duration", "1000");
    element.setAttribute("data-animated-iterations", "1");
    element.setAttribute("data-animated-fill", "forwards");
    var animation = factory.buildAnimation(element);
    expect(animation.playState).toBe("paused");
});