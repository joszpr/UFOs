// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create function to build the table
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Create a function to update the filters if search parameters are provided.
function updateFilters() {
    // Create empty Object to save key value pairs of search parameters for future statistics
    var filters = {};
    // Create local copy of the tableData
    let filteredData = tableData;
    // Create variables to hold the values of search criteria
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    // If any input is provided; add criteria to table filter and save search criteria as object
    if (date) {filteredData = filteredData.filter(row => row.datetime === date);
    filters.date = date;};
    if (city) {filteredData = filteredData.filter(row => row.city === city);
    filters.city = city;};
    if (state) {filteredData = filteredData.filter(row => row.state === state);
    filters.state = state;};
    if (country) {filteredData = filteredData.filter(row => row.country === country);
    filters.country = country;};
    if (shape) {filteredData = filteredData.filter(row => row.shape === shape);
    filters.shape = shape;};
    // Print search criteria in console
    console.log(filters);
    // Update table
    buildTable(filteredData);
}

// Event listeners for Filter and Clear Filter buttons
    // Functionality for the Filter button
//d3.select("#filter-btn").on("click", updateFilters);
    // Functionality for the Clear Filter button
d3.select("#unfilter-btn").on("click", clearTable);
    // Functionality for the event listener for changes in input fields by "Enter" or mouseclick
d3.selectAll("input").on("change", updateFilters);

// Clear Search button function
function clearTable() {
  tbody.html("");
  data.forEach((dataRow) => {
      let row = tbody.append("tr");
      Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
      );
  });
  buildTable(tableData);
}

// Build the table when the page loads
buildTable(tableData);
