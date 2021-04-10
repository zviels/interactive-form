# Interactive Form

A front end project I built for my portfolio during my studies at [Treehouse](https://teamtreehouse.com). In this project I used JavaScript to enhance an interactive registration form for a fictional Full Stack conference.

Using the supplied HTML and CSS files, I added my own JavaScript to make the form more user-friendly by -

- Adding conditional behavior and interactivity.
- Validating user input and providing helpful error messages when the user enters invalid information into the form fields.

## Table of Contents

- [Preview](https://github.com/zviels/interactive-form#preview)
- [Quick Start](https://github.com/zviels/interactive-form#quick-start)
- [Overview](https://github.com/zviels/interactive-form#overview)
- [Built With](https://github.com/zviels/interactive-form#built-with)
- [Thanks](https://github.com/zviels/interactive-form#thanks)

## Preview

<a href="https://zviels.github.io/interactive-form">
  <img src="https://i.imgur.com/gjeOhba.gif" alt="App Preview" width="100%">
</a>

## Quick Start

To view the app -

- You can [download the ZIP file](https://github.com/zviels/interactive-form/archive/refs/heads/main.zip), extract it and open `index.html`.
- Alternatively, you can watch the app online [here](https://zviels.github.io/interactive-form).

## Overview

As mentioned above, I developed this app as part of my studies at [Treehouse](https://teamtreehouse.com). I participated in their [Techdegree](https://teamtreehouse.com/techdegree) program. In this section you can read about -

- The topics I learned before I started developing the app.
- The requirements I had to meet to complete this project.
- Additional features I chose to implement for the app.
- The rating the project received.

### What Did I Learn?

Here is what I learned before I started working on the project -

- The Landscape of JavaScript <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">
- HTML Forms <img src="https://img.shields.io/badge/-HTML%20Course-3659a2" alt="HTML Course">
- Accessibility For Web Developers <img src="https://img.shields.io/badge/-HTML%20Course-3659a2" alt="HTML Course">
- Responsive Images <img src="https://img.shields.io/badge/-HTML%20Course-3659a2" alt="HTML Course">
- Mobile-First CSS Layout <img src="https://img.shields.io/badge/-CSS%20Course-3659a2" alt="CSS Course">
- CSS Flexbox Layout <img src="https://img.shields.io/badge/-CSS%20Course-3659a2" alt="CSS Course">
- Regular Expressions in JavaScript <img src="https://img.shields.io/badge/-JS%20Course-3659a2" alt="JS Course">

I also learned more about JS conditionals. Specifically, I learned about -

- The switch statement.
- The ternary operator.
- Short circuit evaluation.

### Project Requirements

#### "Name" Field

- On page load, the cursor should have appeared in the "Name" field, ready for a user to type.

#### "Job Role" Section

- I had to show / hide a text field when the user selected / deselected "Other" from the Job Role menu.

#### "T-Shirt" Section

I had to -

- Disable the "Color" field when the page loads.
- Enable the "Color" field when a theme is selected.
- Update the "Color" field correctly when a T-Shirt theme is selected or changed.
- Update the "Color" **drop down menu** correctly when a T-Shirt theme is selected or changed. 

#### "Register for Activites" Section

- I had to update correctly the total cost of selected activities in the form, when users selected or deselected activities.

To exceed expectations, I also had to prevent the user from selecting two activities that occur at the same day and time.

#### "Payment Info" Section

- When the page loads, "Credit Card" should have been selected in the payment field. In addition, the credit card section should have been the only payment section displayed in the form's UI.
- I had to update the payment section correctly when the user changed the selected payment method in the drop down menu.

#### Form Validation

Form submissions should have used the `submit` event on the `form` element.

Form could not be submitted until the following requirements have been met -

- "Name" field isn't blank.
- "Email" field contains a correctly formatted email address.
- At least one activity has been selected.
- If "Credit Card" is the selected payment option, the three credit card fields accept only numbers - a 13 to 16-digit credit card number, a 5-digit zip code, and a 3-digit CVV value.

The form should have been submitted when all the required fields were filled out correctly.

**Note:** This is a front end project. The information that the user fills in the form is not sent to a server or stored in a database. When all the required fields are filled out correctly, the page simply refreshes on its own when the submit button is clicked.

To exceed expectations -

- At least one required field should have validated user input in real time, as the user interacts with the field.
- At least one required field should have provided validation error messages that differ, depending on the reason the field is invalid.
- Form fields that have real time validation and conditional error messages should have been detailed in the project's `README.md` file. I added real time validation and conditional error messages to all form fields.

#### Accessibility

- The activities should have had obvious `focus` state indicators when tabbing through the form's inputs.
- On submission, the validation error message, icon and color should have been displayed on invalid required fields ("Name", "Email Address", "Register for Activities"; "Card Number", "Zip Code", "CVV" - if "Credit Card" was the selected payment method).

#### Code Quality

To meet the project requirements, I also had to add code comments to the `js/script.js` file. In addition, no unresolved errors should have appeared in the console when the form was loaded, or when the user was interacting with the form.

### Additional Features

These are features I chose to implement for the project, even though I didn't have to. The additional features may extend the functionality of the app, improve the user experience or beautify the user interface.

As of this moment I have implemented two additional features for the app.

- If "Credit Card" is the selected payment method, you have to fill in the card's expiration date. Furthermore, the expiration date must be at least one month later than today.
- On form submission, if the form contains invalid or incomplete information - you will be taken to the top of the page. This way you will be able to fix all the errors from top to bottom.

### Rating

There are two possible grades for each Techdegree project - "Meets Expectations" and "Exceeds Expectations".

This project received the **"Exceeds Expectations"** rating.

:100:

## Built With

- HTML
- CSS
- JavaScript

## Thanks

<a href="https://teamtreehouse.com">
  <img src="https://static.teamtreehouse.com/assets/marketing/opengraph/logo_twitter-cd0ecb90408499f45a2191805f54362981da5a69ddcfaa6ec93556d64e289036.png" alt="Treehouse Logo" width="100%" height="50%">
</a>

Thanks to [Treehouse](https://teamtreehouse.com) for providing the starter files for this project -

- `index.html`
- `styles.css`
- `data.js`

In addition, a huge thank you to everyone who reviewed the project! :grinning: