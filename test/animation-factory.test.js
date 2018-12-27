/* eslint-disable no-undef */
'use strict';

import AnimationFactory from '../src/animation-factory';

// eslint-disable-next-line no-undef
describe.skip('Animation Factory', async () => {
    // eslint-disable-next-line no-undef
    beforeAll(async () =>{
        // eslint-disable-next-line no-undef
        await page.goto('http://localhost:4444/test/scenarios/middle-top.html');
    });


    // eslint-disable-next-line no-undef
    it('should be able to create a move-to-middle-top animation', async () => {
        await expect(page).toMatch('Middle Top');
        await page.addScriptTag({path: './dist/revealjs-animated.js'});
        let elementHandler = await page.evaluateHandle(() => {
            let element = document.querySelector('#middle-top');
            // eslint-disable-next-line no-console
            console.debug(`element: ${element}`);
            element.setAttribute('data-animated-duration', '1000');
            element.setAttribute('data-animated-iterations', '1');
            element.setAttribute('data-animated-fill', 'forwards');
            // eslint-disable-next-line no-console
            console.log(`AnimationFactory: ${Object.getOwnPropertyNames(AnimationFactory)}`);
            let animation = window.AnimationFactory.buildAnimation(element);
            expect(animation).toBeDefined();
            return element;
        });
        // eslint-disable-next-line no-console
        console.log(`hanlder methods: ${Object.getOwnPropertyNames(elementHandler)}`);
        // eslint-disable-next-line no-console
        console.log(`hanlder element methods: ${Object.getOwnPropertyNames(elementHandler.asElement())}`);
    });
});
