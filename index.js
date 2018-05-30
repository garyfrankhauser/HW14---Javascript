// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredDateTime to dataSet initially
var filteredDateTime = dataSet;

// renderTable renders the filteredDateTime to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredDateTime.length; i++) {
    // Get get the current datetime object and its fields
    var datetime = filteredDateTime[i];
    var fields = Object.keys(datetime);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the datetime object, create a new cell at set its inner text to be the current value at the current datetime's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = datetime[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterdatetime = $datetimeInput.value.trim().toLowerCase();

  // Set filterevent to an array of all events whose "datetime" matches the filter
  filteredDateTime = dataSet.filter(function(event) {
    var eventdatetime = event.datetime.toLowerCase();

    // If true, add the datetime to the filterdatetime, otherwise don't add it to filteredAddresses
    return eventdatetime === filterdatetime;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
