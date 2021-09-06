// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create function to build the table
function buildTable(data) {

  // Empty the table data with an empty string
  tbody.html("");

  // foreach function to loop through the array and append data rows
  data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");

      // Loop through each field in dataRow and add each value
      //as a table cell
      Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
      );
  });
}


