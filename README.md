# RevealJs-Animated

A revealjs plugin to facilitate the usage of animations inside your slides.

[![Build Status](https://travis-ci.org/rogeralmeida/revealjs-animated.svg?branch=master)](https://travis-ci.org/rogeralmeida/revealjs-animated)

[Check out the examples](https://rogeralmeida.github.io/revealjs-animated-examples/)

## How to install
1) Install the plugin on your revealjs presentation folder
```bash
    npm install revealjs-animated
```
2) Import the plugin in your RevealJs initialisation
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
This plugin will look for specific CSS classes to define how to animated elements inside your RevealJs slides.
For now, it is meant to be used with revealjs `fragments`.
The CSS class `animated` is required to keep the element visible.

## Usage

### Move to MIDDLE TOP

```html
    <h1 id="titulo" class="fragment animated move-to-middle-top">Middle Top</h1>
```
#### attributes
This animation doesn't allow any attribute.

### Move to specific position
```html
    <p class="fragment animated move-to">Default Parameters</p>
```
#### Attributes
|Name|Default Value|Description|
|---|---|---|
|data-animated-move-to-left|50px| Distance that the animated object should move in the X axis|
|data-animated-move-to-top|25px| Distance that the animated object should move in the Y axis|

### Scale Up
```html
    <p class="fragment animated scale-up">Let me Grow!</p>
```
#### Attributes

|Name|Default Value|Description|
|---|---|---|
|data-animated-scale-up-from|1|Transformation starting point|
|data-animated-scale-up-to|2|Transformation ending position|

### Scale Down
```html
    <p class="fragment animated scale-down">Let me Shrink!</p>
```
#### Attributes

|Name|Default Value|Description|
|---|---|---|
|data-animated-scale-down-from|1|Transformation starting point|
|data-animated-scale-down-to|0.5|Transformation ending position|

### Rotate
```html
    <p class="fragment animated rotate">Rotate!</p>
```
#### Attributes

|Name|Default Value|Description|
|---|---|---|
|data-animated-rotate-from|`0deg`|Transformation starting point|
|data-animated-rotate-to|`180deg`|Transformation ending position|

## General Time Attributes
The `duration`, `iteration` and `fill` animation's properties can be controlled via the following attributes:

#### attributes
|Name|Required|Default Value|Description|
|---|---|---|---|
|data-animated-duration|No|1000|Animation duration time in miliseconds|
|data-animated-iterations|No|1|How many iterations should the animation have|
|data-animated-fill|No|forwards|Final state of the animation. Possible values are `forwards`, `none`, `backwards`, `both`, `auto`. More details on [MDN: EffectTiming.fill](https://developer.mozilla.org/en-US/docs/Web/API/EffectTiming/fill)
# Combining animations
Starting from version 1.2.0 you can combine multiple animations to create sofisticated animations. To combine animations you just have to add multiple CSS classes to the same fragment

```html
<p class="fragment animated move-to-middle-top rotate">Move to top and rotate</p>
```
Note that the [General Time Attributes](#general-time-attributes) will applied to the animatino combo, not to each animation individually.