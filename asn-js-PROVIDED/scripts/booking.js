/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
/*jshint esversion: 6 */
let costPerDay = 35;
let dayCounter = 0;
let calculatedCost = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function updateClick(day) {
    if (!day.classList.contains('clicked')) {
        day.classList.add('clicked');
        dayCounter += 1;
    } else {
        day.classList.remove('clicked');
        dayCounter -= 1;
    }
    recalculate();
}

const ids = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const dayButtons = ids.map(id => document.getElementById(id));
dayButtons.forEach(button => {
    button.addEventListener("click", function() {
        updateClick(button);
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const clear = document.getElementById("clear-button");

function clearAll() {
    dayButtons.forEach(button => {
        if (button.classList.contains("clicked")) {
            button.classList.remove("clicked");
        }
    });
    dayCounter = 0; 
    recalculate(); 
}

clear.addEventListener("click", function() {
    clearAll();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
const halfDay = document.getElementById("half");
const fullDay = document.getElementById("full");

function halfRate() {
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    costPerDay = 20;
    recalculate();
}

halfDay.addEventListener("click", function() {
    halfRate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullRate() {
    halfDay.classList.remove('clicked');
    fullDay.classList.add('clicked');
    costPerDay = 35;
    recalculate();
}

fullDay.addEventListener("click", function() {
    fullRate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const costDisplay = document.getElementById('calculated-cost');

function recalculate() {
    calculatedCost = costPerDay * dayCounter;
    costDisplay.innerHTML = calculatedCost;
}
