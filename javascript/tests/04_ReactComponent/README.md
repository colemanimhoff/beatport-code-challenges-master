# Slider Challenge

![Slider Component](https://media.giphy.com/media/l2FbTIsiWHvX0dhkLd/giphy.gif)

## The Plan

Meet the requirements:
- Sliders can take in one or many children, including a single image or set of tiles.
- Sliders take in an interval that defaults to 4 seconds
- Sliders are customizable and many instances of them can exist in the same view

Get inspiration from [Beatport](https://www.beatport.com/) sliders and try to mimic them as much as possible.

Any child can be passed to a slider, with a `className` of `tile`.

`Tile` and `Tiles` are special child components to the `Slider` that take an array of images.

## The Slider Component

The `Slider` component takes the following props
- `interval` (defaults to 4 seconds)
- `title` (defaults to "BEATPORT CHALLENGE")
- `withHeaderButtons` (defaults to true)
- `withAutoIncrement` (defaults to true)
- `type` (defaults to "large")

The `Slider` component maintains the following state:
- `currentIndex`
- `paused`

`currentIndex` is set in the following ways:
- If `withAutoIncrement` is set to true, a `setTimemout` function increments the `currentIndex` with a frequency based on the provided `interval`
- When a user clicks on the "prev" and "next" buttons located in the `HeaderButtons` component, `currentIndex` will `increment` and `decrement`
- If the `currentIndex` is the last index in the array, when incrementing, the `currentIndex` will return to 0. If the `currentIndex` is the first index in the array, when decrementing, the index will return the last index of the array.

`paused` is set during the `mouseEnter` and `mouseLeave` events

## File Structure

components
 |_Slider
    |_index.js
    |_slider.scss
    |_Slider.js
    |_sliderHeader.js
    |_SliderHeaderButtons.js
    |_SliderFooterButtons
    |_Tiles.js
    |_Tile.js