# Interactive Form
 
## Project Description

In this project, I used JavaScript to enhance an interactive registration form.

I made the form user-friendly by adding customized and conditional behavior and interactivty.

In addition, I validated user input and provided helpful error messages. Those messages show up when the user enters invalid information into the form fields.

## Technologies I Have Used

I used only JavaScript to write this project.
**I did not use any libraries or frameworks in this project!**

## My Development Process

### 25/02/2021

- Uploaded starter files.
- On page load, I made the cursor appear in the "Name" field.
- Made the job role text field appear only when the user selects "Other" from the Job Role menu.
- Disabled the "Color" drop down menu when the page loads. It becomes enabled again only when a "Theme" is selected. The drop down menu and the selected option also update correctly when a T-Shirt theme is changed.
- Displayed the total cost of selected activites. The total cost correctly updates in the form when the user selects or deselects activities. I also prevented the user from selecting two activities that take place at the same day and time!

## 26/02/2021

- Made the credit card section appear on page load. The "Credit Card" option is also selected in the payment field by default. In addition, the payment section updates correctly when the user changes the selected payment method in the drop down menu.
- Added form validation. Form submissions use 'submit' event on the 'form' element. Form cannot be submitted until the "Name" field isn't blank, "Email" field contains a correctly formatted email address, and at least one activity has been selected. In addition, if "Credit Card" is the selected payment option, the three credit card fields accept only numbers (a 13 to 16-digit credit card number, a 5-digit zip code and a 3-digit CVV value).

## 28/02/2021

- Added real time validation. Required fields validates user input in real time as the user interacts with the field.
- Added conditional error messages to most required fields.
- Made the "Expiration Month" and "Expiration Year" fields required.
- Made the error messages appear when a user tries to submit the form with invalid or incomplete information.
- Added an obvious 'focus' state when tabbing through the activities. I used the 'focus' CSS class for this.

## 02/03/2021

- Improved accessibility.
- On form submission, if the form contains invalid or incomplete information - the user will be taken to the top of the page. This way he will be able to fix all errors from top to bottom.

## Real Time Validation & Conditional Error Messages

### The "Name" Field

There are two conditional error messages regarding this field.

- An error message will appear in case the field is empty.
- An error message will appear in case the name does not contain letters only.

### The "Email Address" Field

There are three conditional error messages regarding the email address.

- An error message will appear in case the field is blank.
- An error message will appear in case the beginning of the email address is invalid or incomplete. The address must start with a recipient name, followed by an at sign. A valid recipient name can contain only letters, numbers, dots (.), underscores (_), percentages (%), pluses (+) and minuses (-).
- An error message will also appear in case the end of the email address is invalid or incomplete. After the at sign, the email address must include a domain name, followed by a top level domain (.com or .net). A valid domain name can contain only letters, numbers, dots and hyphens.

### The Activities Section

The script will detect an attempt to "skip" over the section without checking at least one activity. An error message will appear in this case.
This is done by using the "mouseleave" event type.

### The Credit Card Section

- As mentioned above, I decided to require from the user to fill the expiration date. Error messages will appear if the user tries to submit the form without this information.
- The expiration date also must be at least one month later than today. An error message will appear if this is not the case, when the user chooses the expiration month and year.
- None of the text fields (card number, zip code, CVV) can be empty. An error message will appear in this case.
- An error message will appear in case the credit card number does not include 13-16 digits.
- An error message will appear in case the zip code does not include exactly 5 digits.
- An error message will appear in case the CVV does not include exactly 3 digits.