# Slider Challenge

## The Plan

Meet the requirements:
- Sliders can take in one or many children, including a single image or set of tiles.
- Sliders take in an interval that defaults to 4 seconds
- Sliders are customizable and many instances of them can exist in the same view

Get inspiration from `Beatport.com`'s sliders and try to mimic them as much as possible.

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
- if `withAutoIncrement` is set to true, a `setTimemout` function increments the `currentIndex` based on the provided `interval`
- when a user clicks on the "prev" and "next" buttons, `currentIndex` will `increment` and `decrement`
- if the `currentIndex` is the last index in the array, when incrementing, the `currentIndex` will return to 0. If the `currentIndex` is the first index in the array, when decrementing, the index will return the last index of the array.

`paused` is set during the `mouseEnter` and `mouseLeave` events



`components`
  `Slider`
    `index.js`
    `slider.scss`
    `Slider.js`
    `SliderHeader.js`
    `SliderHeaderButtons.js`
    `SliderFooterButtons`
