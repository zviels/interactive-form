// Fields

const nameField = document.querySelector('#name');
const roleField = document.querySelector('#other-job-role');

// Drop Down Menus

const title = document.querySelector('#title');

// Main Functions

// Display
// This Function Determines Whether A Certain Field Should Be Visible Or Not.

const display = (field, displayValue) => field.style.display = displayValue;

// AddRoleMenuListener
// This Function Adds An Event Listener To The Title Element.

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

// Run

const run = () => {

    nameField.focus();
    display(roleField, 'none');
    addRoleMenuListener();

}

// Run The Script

run();