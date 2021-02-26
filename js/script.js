// Form

const form = document.querySelector('form');

// Fields

const nameField = document.querySelector('#name');
const roleField = document.querySelector('#other-job-role');
const email = document.querySelector('#email');

// Drop Down Menus

const title = document.querySelector('#title');
const color = document.querySelector('#color');
const design = document.querySelector('#design');
const payment = document.querySelector('#payment');

// Sections

const activities = document.querySelector('#activities');
const creditCard = document.querySelector('#credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

// Checkboxes

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Other Variables

let selectedPaymentMethod;

// Main Functions

// The 'display' Function Determines Whether A Certain Element Should Be Visible Or Not.

const display = (element, displayValue) => element.style.display = displayValue;

// displayTotalCost

const displayTotalCost = () => {

    const cost = document.querySelector('#activities-cost');

    let totalCost = 0;

    for (const checkbox of checkboxes)
        if (checkbox.checked)
            totalCost += parseInt(checkbox.dataset.cost);

    cost.textContent = `Total: $${totalCost}`;        

}

// disableActivitiesExcept
// This Function Disables Activities That Take Place At The Same Time, Except For The Recently Checked Activity.

const disableActivitiesExcept = (activity) => {

    // See When The Activity Takes Place, And Whether It Was Checked Or Unchecked.

    const activityTime = activity.dataset.dayAndTime;
    const activityChecked = activity.checked;

    for (const checkbox of checkboxes) {

        // Disable Activities If The User Checked An Activity, And Clear Relevant Disabled Activities If The User Unchecked An Activity.

        if (activityChecked && (!(checkbox.checked)) && checkbox.dataset.dayAndTime === activityTime) {

            // Disable Activities In Which The User Can Not Participate.

            checkbox.disabled = true;
            checkbox.parentNode.className = 'disabled';

        }

        else if (checkbox.dataset.dayAndTime === activityTime) {

            // Clear All Disabled Activities That Take Place At The Same Time

            checkbox.disabled = false;
            checkbox.parentNode.className = '';

        }
        
    }
         
}

// setPaymentMethod
// This Function Sets The Payment Method According To The Provided Value.

const setPaymentMethod = (value) => {

    const paymentOptions = payment.children;
    const paymentMethods = [creditCard, paypal, bitcoin];

    // Update The HTML So It Would Display Which Payment Method The User Has Chosen.

    for (const paymentOption of paymentOptions)

        if (paymentOption.value === value) {

            paymentOption.setAttribute('selected', '');
            selectedPaymentMethod = paymentOption.value;

        }
            
        else if (paymentOption.hasAttribute('selected'))
            paymentOption.removeAttribute('selected');        

    // Show The Relevant Section For The Chosen Payment Method, And Hide All The Other Sections.

    for (const paymentMethod of paymentMethods)

        if (paymentMethod.id === value)
            display(paymentMethod, '');
        
        else
            display(paymentMethod, 'none');    

}

// Validations

// isValidName

const isValidName = () => /^[A-Z]+$/i.test(nameField.value);

// isValidEmail

const isValidEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|net)/i.test(email);

// isActivityChecked

const isActivityChecked = () => {

    for (const checkbox of checkboxes)
        if (checkbox.checked)
            return true;

    return false;

}

// isValidCreditCard

const isValidCreditCard = () => {

    const cardNumber = document.querySelector('#cc-num');
    const zipCode = document.querySelector('#zip');
    const cvv = document.querySelector('#cvv');

    return /^\d{13,16}$/.test(cardNumber.value) && /^\d{5}$/.test(zipCode.value) && /^\d{3}$/.test(cvv.value);
    
}

// Listeners
// These Functions Add An Event Listener To The Relevant Variables.

// Real Time Error Messages
// These Functions Will Only Display A Hint If A Value In A Field Is Invalid.

// nameValidator

const nameValidator = (hint) => {

    const nameStartsWithLetter = /^[A-Z]$/.test(nameField.value[0]);

    if (nameField.value == '')
        hint.textContent = 'Name Field Cannot Be Blank.';

    else if (!(isValidName()))
        hint.textContent = 'Name Can Contain Letters Only.';

}

// Handler

const handler = (id, isValid, value, validator) => {

    const hint = document.querySelector(id);

    if (!(isValid(value))) {

        validator(hint);
        display(hint, 'block');

    }
        
    else
        display(hint, '');    

}

// addFieldListeners

const addFieldListeners = () => {

    const events = ['focus', 'keyup'];

    // addNameFieldListeners

    const addNameFieldListeners = () => {

        for (const event of events)
            nameField.addEventListener(event, () => handler('#name-hint', isValidName, nameField.value, nameValidator));

    }

    // addEmailListener

    const addEmailListener = () => {

    }

    // Actually Create The Event Listeners.

    addNameFieldListeners();

}

// Other Listeners

// addRoleMenuListener

const addRoleMenuListener = () => {

    title.addEventListener('change', (e) => {

        // The 'jobRole' Variable Holds The Value Of The Selected Option.

        const jobRole = e.target.value;

        // The Job Role Text Field Will Be Displayed Only When The User Selects "Other" From The Job Role Menu.
        
        if (jobRole === 'other')
            display(roleField, '');

        else
            display(roleField, 'none');    

    });

}

// addDesignMenuListener

const addDesignMenuListener = () => {

    const options = color.children;

    // Hide
    // This Function Hides Irrelevant Colors.

    const hide = (theme) => {
        
        // Skip The First Index, Since There Is No Real Option There.

        for (let i = 1; i < options.length; i ++)

            // The Dataset Property Represents HTML Custom Data Attributes In JS.

            if (options[i].dataset.theme === theme)
                options[i].hidden = true;

            else
                options[i].hidden = false;    

    }

    // The 'changeSelection' Function Changes The Default Selected Option Based On The User's Choice.

    /* I Chose To Work Here With The 'setAttribute' & 'removeAttribute' Functions Because The Solution Of The 'selected' Attribute Actually
    Does Not Alter The Structure Of The HTML File. This Solution Does Change The HTML Correctly. */

    const changeSelection = (theme) => {

        let irrelevantColors;

        if (theme === 'js puns')
            irrelevantColors = document.querySelectorAll('[data-theme="heart js"]');
        
        else
            irrelevantColors = document.querySelectorAll('[data-theme="js puns"');    

        options[0].removeAttribute('selected');
        irrelevantColors[0].removeAttribute('selected');

        const relevantColors = document.querySelectorAll(`[data-theme="${theme}"]`);
        relevantColors[0].setAttribute('selected', '');

    }

    // Call The 'hide' Function Whenever A Theme Is Selected

    design.addEventListener('change', (e) => {

        const theme = e.target.value;

        changeSelection(theme);
        
        switch(theme) {

            case 'js puns': hide("heart js");
                            break;

            case 'heart js': hide("js puns");
                            break;

        }

        // Enable The Color Field

        color.disabled = false;

    });

}

// addActivitiesBoxListener

const addActivitiesBoxListener = () => activities.addEventListener('change', (e) => {
    
    const activity = e.target;

    displayTotalCost();
    disableActivitiesExcept(activity);
    
});

// addPaymentMethodBoxListener
// The Value Of The Selected Option Is Sent As An Argument To The 'setPaymentMethod' Function.

const addPaymentMethodBoxListener = payment.addEventListener('change', (e) => setPaymentMethod(e.target.value));

// addFormListener

const addFormListener = form.addEventListener('submit', (e) => {

    if (!(isValidName()))
        e.preventDefault();

    else if (!(isValidEmail(email.value)))
        e.preventDefault();
    
    else if (!(isActivityChecked()))
        e.preventDefault();
    
    else if (selectedPaymentMethod === 'credit-card' && (!(isValidCreditCard())))
        e.preventDefault();
    
});

// Activation Function

const run = () => {

    addFieldListeners();
    nameField.focus();

    display(roleField, 'none');
    addRoleMenuListener();

    color.disabled = true;
    addDesignMenuListener();

    addActivitiesBoxListener();

    setPaymentMethod('credit-card');

}

// Run The Script

run();