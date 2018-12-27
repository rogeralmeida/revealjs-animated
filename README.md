# RevealJs-Animated

This is a revealjs plugin to facilitate the usage of animations inside your slides.

## How to install
1) Install the plugin on your revealjs presentation folder
```shell
    npm install revealjs-animated
```
2) Import the plugin on your RevealJs initialisation
```javascript
    //index.html
    Reveal.initialize({
        dependencies: [
            // Other plugins
            {src: 'node_modules/revealjs-animated/dist/revealjs-animated.js', async: true}
        ]
    });
```
## How does it work?
This plugin will look for specific classes to define how to animated elements inside your RevealJs slides.
For now, it is meant to be used with revealjs `fragments`.
The class `animated` is required to keep the element visible.

## Usage

### Move to MIDDLE TOP

```html
    <h1 id="titulo" class="fragment animated move-to-middle-top">Middle Top</h1>
```
#### attributes
|Name|Required|Default Value|Description|
|---|---|---|---|
|data-animated-duration|No|1000|Animation duration time in miliseconds|
|data-animated-iterations|No|1|How many iterations should the animation have|
|data-animated-fill|No|forwards|Final state of the animation. Possible values are `forwards`, `none`, `backwards`, `both`, `auto`. More details on [MDN: EffectTiming.fill](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill)


### Move to specific position
```html
    <p class="fragment animated move-to">Default Parameters</p>
```
#### Attributes
|Name|Required|Default Value|Description|
|---|---|---|---|
|data-move-to-left|No|50px| Distance that the animated object should move in the X axis|
|data-move-to-top|No|25px| Distance that the animated object should move in the Y axis|
|data-animated-duration|No|1000|Animation duration time in miliseconds|
|data-animated-iterations|No|1|How many iterations should the animation have|
|data-animated-fill|No|forwards|Final state of the animation. Possible values are `forwards`, `none`, `backwards`, `both`, `auto`. More details on [MDN: EffectTiming.fill](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill)

### Scale Up
```html
    <p class="fragment animated scale-up">Let me Grow!</p>
```
#### Attributes

|Name|Required|Default Value|Description|
|---|---|---|---|
|data-scale-up-from|No|1|Transformation starting point|
|data-scale-up-to|No|2|Transformation ending position|
|data-scale-up-duration|No|1000|Animation duration time in miliseconds|
|data-scale-up-iterations|No|1|How many iterations should the animation have|
|data-scale-up-fill|No|forwards|Final state of the animation. Possible values are `forwards`, `none`, `backwards`, `both`, `auto`. More details on [MDN: EffectTiming.fill](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill)


### Scale Down
```html
    <p class="fragment animated scale-down">Let me Shrink!</p>
```
#### Attributes

|Name|Required|Default Value|Description|
|---|---|---|---|
|data-scale-down-from|No|1|Transformation starting point|
|data-scale-down-to|No|0.5|Transformation ending position|
|data-scale-down-duration|No|1500|Animation duration time in miliseconds|
|data-scale-down-iterations|No|1|How many iterations should the animation have|
|data-scale-down-fill|No|forwards|Final state of the animation. Possible values are `forwards`, `none`, `backwards`, `both`, `auto`. More details on [MDN: EffectTiming.fill](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill)

### Rotate
```html
    <p class="fragment animated rotate">Rotate!</p>
```
#### Attributes

|Name|Required|Default Value|Description|
|---|---|---|---|
|data-scale-rotate-from|No|`0deg`|Transformation starting point|
|data-scale-rotate-to|No|`180deg`|Transformation ending position|
|data-scale-rotate-duration|No|1000|Animation duration time in miliseconds|
|data-scale-rotate-iterations|No|1|How many iterations should the animation have|
|data-scale-rotate-fill|No|forwards|Final state of the animation. Possible values are `forwards`, `none`, `backwards`, `both`, `auto`. More details on [MDN: EffectTiming.fill](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill)