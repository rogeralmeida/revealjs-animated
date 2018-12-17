'use strict';

const factory = require('../src/animation-factory');
const puppeteer = require('puppeteer');

describe('Animation Factory', async () => {
    var browser;
    var page;
    beforeAll(async () =>{
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        browser.close();
    });

    it('should be able to create a move-to-middle-top animation', async () => {
        await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
        await page.pdf({path: 'hn.pdf', format: 'A4'});
        // const element = document.documentElement.createElement('h1');
        // expect(element).toBeDefined();
        // element.setAttribute("data-animated-duration", "1000");
        // element.setAttribute("data-animated-iterations", "1");
        // element.setAttribute("data-animated-fill", "forwards");
        // var animation = factory.buildAnimation(element);
        // expect(animation.playState).toBe("paused");
    });
});
