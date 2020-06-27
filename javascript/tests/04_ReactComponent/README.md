# Slider Challenge

## The Plan

Meet the requirements:
- Sliders can take in one or many children, including a single image or set of tiles.
- Sliders take in an interval that defaults to 4 seconds
- Sliders are customizable and many instances of them can exist in the same view

Get inspiration from `Beatport.com`'s sliders and try to mimic them as much as possible.

The `Slider` component takes the following props
- Interval (defaults to 4 seconds)
- Title (defaults to "BEATPORT CHALLENGE")

The `Slider` component maintains the following state:
- Current Index
- Autoincrement is managed by a `setTimeout` function
