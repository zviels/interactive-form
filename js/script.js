// Form

const form = document.querySelector('form');

// Fields

const nameField = document.querySelector('#name');
const roleField = document.querySelector('#other-job-role');
const email = document.querySelector('#email');

// Credit Card Fields

const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

// Drop Down Menus

const title = document.querySelector('#title');
const color = document.querySelector('#color');
const design = document.querySelector('#design');
const payment = document.querySelector('#payment');
const expirationMonth = document.querySelector('#exp-month');
const expirationYear = document.querySelector('#exp-year');

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

// Validation Functions
// These Functions Determine If The Information That The Form Contains Is Valid Or Not.

// isValidName

const isNameValid = () => /^[A-Z]+$/i.test(nameField.value);

// isValidEmail

const isEmailValid = () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|net)$/i.test(email.value);

// isActivityChecked

const isActivityChecked = () => {

    for (const checkbox of checkboxes)
        if (checkbox.checked)
            return true;

    return false;

}

// isCreditCardNumberValid

const isCreditCardNumberValid = () =>/^\d{13,16}$/.test(cardNumber.value);

// isZipCodeValid

const isZipCodeValid = () => /^\d{5}$/.test(zipCode.value);

// isCvvValid

const isCvvValid = () => /^\d{3}$/.test(cvv.value);

// isExpirationMonthValid

const isExpirationMonthValid = () => expirationMonth.value !== 'Select Date';

// isExpirationYearValid

const isExpirationYearValid = () => expirationYear.value !== 'Select Year';

// isExpirationDateValid

const isExpirationDateValid = () => {

    const expirationDate = new Date(parseInt(expirationYear.value), parseInt(expirationMonth.value) - 1);
    const today = new Date();

    return expirationDate > today;

}

// Real Time Error Messages
// These Functions Set Error Messages That Appear In Real Time.

// setNameError

const setNameError = (hint) => {

    if (nameField.value == '')
        hint.textContent = 'Name Field Cannot Be Blank.';

    else
        hint.textContent = 'Name Can Contain Letters Only.';

}

// setEmailError

const setEmailError = (hint) => {    

    if (email.value == '')
        hint.textContent = 'Email Address Must Be Provided.';
    
    else if (!(/^([A-Z0-9._%+-]+)(@)/i.test(email.value)))
        hint.textContent = 'Email Address Must Start With A Valid Recipient Name, Followed By An @ Sign. Recipient Name Can Contain Only Letters, Numbers, Dots (.), Underscores (_), Percentages (%), Pluses (+) And Minuses (-).';
    
    else
        hint.textContent = 'Email Address Must Include A Valid Domain Name, Followed By A Top Level Domain (.Com Or .Net). Domain Name Can Contain Only Letters, Numbers, Dots (.) And Hyphens (-).';

}

// setActivityError

const setActivityError = (hint) => hint.textContent = 'At Least One Activity Has To Be Checked.';

// setCardNumberError

const setCardNumberError = (hint) => {

    if (cardNumber.value === '')
        hint.textContent = 'Credit Card Number Must Be Provided.';

    else
        hint.textContent = 'Credit Card Number Must Be Between 13 And 16 Digits.';
    
}

// SetZipCodeError

const setZipCodeError = (hint) => {

    if (zipCode.value === '')
        hint.textContent = 'Zip Code Must Be Provided.';

    else
        hint.textContent = 'Zip Code Must Include Exactly 5 Digits.';
    
}

// setCvvError

const setCvvError = (hint) => {

    if (cvv.value === '')
        hint.textContent = 'CVV Must Be Provided.';

    else
        hint.textContent = 'CVV Must Include Exactly 3 Digits.';
    
}

// setExpirationMonthError

const setExpirationMonthError = (hint) => hint.textContent = 'Expiration Month Must Be Specified.';

// setExpirationYearError

const setExpirationYearError = (hint) => hint.textContent = 'Expiration Year Must Be Specified.';

// setExpirationDateError

const setExpirationDateError = (hint) => {
    
    if (isExpirationMonthValid() && isExpirationYearValid())
        hint.textContent = 'Expiration Date Must Be At Least One Month Later Than Today.';

}

// errorHandler
// This Function Displays An Error Message Based On The Arguments It Receives.

const errorHandler = (id, isValid, setError) => {

    const hint = document.querySelector(id);

    if ((!(isValid)) || (!(isValid()))) {

        setError(hint);
        display(hint, 'block');

    }
        
    else
        display(hint, '');    

}

// Listeners
// These Functions Add An Event Listener To The Relevant Variables.

// addFieldListeners

const addFieldListeners = () => {

    const events = ['focus', 'keyup'];

    // addNameFieldListeners

    const addNameFieldListeners = () => {

        for (const event of events)
            nameField.addEventListener(event, () => errorHandler('#name-hint', isNameValid, setNameError));

    }

    // addEmailListener

    const addEmailListeners = () => {

        for (const event of events)
            email.addEventListener(event, () => errorHandler('#email-hint', isEmailValid, setEmailError));

    }

    // addCardNumberListener

    const addCardNumberListener = () => {

        for (const event of events)
            cardNumber.addEventListener(event, () => errorHandler('#cc-hint', isCreditCardNumberValid, setCardNumberError));

    }

    // addZipCodeListener

    const addZipCodeListener = () => {

        for (const event of events)
            zipCode.addEventListener(event, () => errorHandler('#zip-hint', isZipCodeValid, setZipCodeError));

    }

    // addCvvListener

    const addCvvListener = () => {

        for (const event of events)
            cvv.addEventListener(event, () => errorHandler('#cvv-hint', isCvvValid, setCvvError));

    }

    // Actually Create The Event Listeners.

    addNameFieldListeners();
    addEmailListeners();

    addCardNumberListener();
    addZipCodeListener();
    addCvvListener();

}

// lookForUncheckedActivities

const lookForUncheckedActivities = () => activities.addEventListener('mouseleave', () => errorHandler('#activities-hint', isActivityChecked, setActivityError));

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

    // Look For Unchecked Activities, And Display An Error Message If Needed.

    errorHandler('#activities-hint', isActivityChecked, setActivityError);
    
});

// addPaymentMethodBoxListener
// The Value Of The Selected Option Is Sent As An Argument To The 'setPaymentMethod' Function.

const addPaymentMethodBoxListener = payment.addEventListener('change', (e) => setPaymentMethod(e.target.value));

// addExpirationMonthListener

const addExpirationMonthListener = expirationMonth.addEventListener('change', () => {
    
    errorHandler('#exp-month-hint', isExpirationMonthValid, setExpirationMonthError);
    errorHandler('#exp-date-hint', isExpirationDateValid, setExpirationDateError);

});

// addExpirationYearListener

const addExpirationYearListener = expirationYear.addEventListener('change', () => {
    
    errorHandler('#exp-year-hint', isExpirationYearValid, setExpirationYearError);
    errorHandler('#exp-date-hint', isExpirationDateValid, setExpirationDateError);

});

// addFormListener

const addFormListener = form.addEventListener('submit', (e) => {

    // handleInvalidInformation

    const handleInvalidInformation = (id, setError) => {

        const isValid = false;

        e.preventDefault();
        errorHandler(id, isValid, setError);

    }

    // Look For Invalid Information. If Such Information Exists - Handle It.

    if (!(isNameValid()))
        handleInvalidInformation('#name-hint', setNameError);

    else if (!(isEmailValid()))
        handleInvalidInformation('#email-hint', setEmailError);
    
    else if (!(isActivityChecked()))
        handleInvalidInformation('#activities-hint', setActivityError);
    
    else if (selectedPaymentMethod === 'credit-card')

        if (!(isExpirationMonthValid()))
            handleInvalidInformation('#exp-month-hint', setExpirationMonthError);

        else if (!(isExpirationYearValid()))
            handleInvalidInformation('#exp-year-hint', setExpirationYearError);
            
        else if (!(isExpirationDateValid()))
            handleInvalidInformation('#exp-date-hint', setExpirationDateError);

        else if (!(isCreditCardNumberValid()))
            handleInvalidInformation('#cc-hint', setCardNumberError);

        else if (!(isZipCodeValid()))
            handleInvalidInformation('#zip-hint', setZipCodeError);
            
        else if (!(isCvvValid()))
            handleInvalidInformation('#cvv-hint', setCvvError); 
    
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
    lookForUncheckedActivities();

    setPaymentMethod('credit-card');

}

// Run The Script

run();