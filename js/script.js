// Fields

const nameField = document.querySelector('#name');
const roleField = document.querySelector('#other-job-role');

// Drop Down Menus

const title = document.querySelector('#title');
const color = document.querySelector('#color');
const design = document.querySelector('#design');

// Sections

const activities = document.querySelector('#activities');

// Checkboxes

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Main Functions

// The 'display' Function Determines Whether A Certain Field Should Be Visible Or Not.

const display = (field, displayValue) => field.style.display = displayValue;

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
    const checked = activity.checked;

    // disableActivites
    // This Function Disables Activities In Which The User Can Not Participate.

    const disableActivites = () => {

        for (const checkbox of checkboxes) {

            if ((!(checkbox.checked)) && checkbox.dataset.dayAndTime === activityTime) {

                checkbox.disabled = true;
                checkbox.parentNode.className = 'disabled';

            }

        }

    }

    // clearDisabledActivities
    // This Function Clears All Disabled Activities That Take Place At The Same Time.

    const clearDisabledActivities = () => {

        for (const checkbox of checkboxes) {

            if (checkbox.dataset.dayAndTime === activityTime) {

                checkbox.disabled = false;
                checkbox.parentNode.className = '';

            }

        }
        
    }

    // Disable Activities If The User Checked An Activity, And Clear Relevant Disabled Activities If The User Unchecked An Activity.

    if (checked) 
        disableActivites();

    else
        clearDisabledActivities();
         
}

// Listeners
// These Functions Add An Event Listener To The Relevant Variables.

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

// Activation Function

const run = () => {

    nameField.focus();

    display(roleField, 'none');
    addRoleMenuListener();

    color.disabled = true;
    addDesignMenuListener();

    addActivitiesBoxListener();

}

// Run The Script

run();