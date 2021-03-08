# Frontend Mentor - Fylo data storage component

![Design preview for the Fylo data storage component coding challenge](./design/desktop-preview.jpg)

## Link to finished project

[You can view the finished project here](https://fylo-data-storage-liard-six.vercel.app/)

## The challenge

The challenge was to build out this data storage component and get it looking as close to the design as possible, ensuring the optimal layout for the site depending on their device's screen size

## Technologies used

* HTML5
* SCSS
* Vanilla JavaScript
* BEM methodology
* Mobile first
* Responsive Web Design


## How it works

The Fylo storage component is controlled by `storage` object, which is an instance of `Progress` class.

To instantiate:

```
const storage = new Progress(max,current);
```
`max` must be number, it is the maximum value available (here: maximum available storage)

If `current` is not passed to the constructor function, it defaults to 0 (here: currently used storage).

*Methods:*

* to obtain values, you can use the following:
```
storage.getMax() 
// returns max value (here: max available storage)

storage.getCurrent() 
// returns current value (here: currently used storage)

storage.getRemaining() 
// returns the difference between max and current 
// (here: available storage)

storage.getProportionUsed()
// returns the current/max quotient 

```

* to update values, you can use the following:
```
storage.add(size)
// size must be a number
// adds size value to current value

storage.remove(size)
// size must be a number
// substracts size from current value

storage.changeMax(max) 
// max must be a number
// can be used to increase or decrease max value
// updates max value to the value passed inside this function
```

`onChange()` method can be used to update the visual representation. This method is executed on change of `max` or `current` values.

In this project, `storage.onChange` is set to the `updateProgressBar` function.

`updatesProgressBar` function has been defined outside of the Progress class to ensure the class is reusable - the data it represents could be displayed in other ways (as pie charts, numbers etc.)

## Styling and accessibility

The challenge was styled Mobile first.
I included custom hover and focus styles to the buttons in the menu, as well as aria-labels to ensure accessibility.

Font color in the component change when used storage value exceeds available storage.

## Feedback

Feedback is always welcome, so if you have any to give on this challenge please email liberska[at]mail[dot]com.

