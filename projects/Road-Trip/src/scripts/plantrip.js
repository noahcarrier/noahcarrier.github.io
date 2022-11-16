// document elements
const stateSelect = document.querySelector("#stateSelect");
const addBtn = document.querySelector("#addBtn");
// temporary add button i added just to test script - delete later
<<<<<<< Updated upstream
=======
const tempAdd = document.querySelector("#tempAdd");


// Adds a state to the trip
function addState(stateId) {
    console.log("adding state" + stateId + " to trip");
}
>>>>>>> Stashed changes

// Toggles a state button visible or invisible

var trip = new Array();
let counter = -1;

// Updates trip array and unhides state
addBtn.addEventListener("click", function(e){
    counter++;
<<<<<<< Updated upstream
    trip[counter] = Number(stateSelect.value);
    stateSelect.value = "blank";
=======
    trip[counter] = stateSelect.value;
    addState(trip[counter]);
>>>>>>> Stashed changes
});

done_btn.addEventListener("click", function() {
    localStorage.setItem("yourTrip", trip);
    
    window.location.href='trip.html';
});

