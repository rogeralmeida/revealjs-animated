# RevealJs-Animated

This is a extension for revealjs framework to make usage of the animation-api.

## How to install
Add the js file to your reveal js page.
And initialise it after the RevealJs initialisation.
```
    <script src="js/reveal.js"></script>
    <script src="js/web-animations.min.js"></script>
    <script src="js/revealjs-animated.js"></script>
    ...
    Reveal.initialize({
        ...
    });
    RevealJsAnimated.initialize(Reveal);
```
## Usage

### Move to MIDDLE TOP

```
    <h1 
        id="titulo" 
        class="fragment animated move-to-middle-top" 
        data-animated-kind="top-center" 
        data-animated-duration="1000" 
        data-animated-iterations="1" 
        data-animated-fill="forwards">Middle Top</h1>
```

### Move to specific position
```
    <p 
        class="fragment animated move-to" 
        data-move-to-left="-90px" 
        data-move-to-top="20px" 
        data-animated-duration="300" 
        data-animated-iterations="1" 
        data-animated-fill="forwards">One Item</p>
```
## To Do
* Unit Tests