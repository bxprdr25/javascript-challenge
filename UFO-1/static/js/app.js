// ### Level 1: Automatic Table and Date Search (Required)

// * Create a basic HTML web page or use the [index.html](StarterCode/index.html) file provided (we recommend building your own custom page!).

// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

// * Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time` column to find rows that match user input.

// from data.js
var tableData = data;

// YOUR CODE HERE!
function display(){
  d3.select("tbody")
    .selectAll("tr")
    .data(tableData)
    .enter()
    .append("tr")
    .html(function(d) {
      return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
    })};

    
// function display(){
//   var tbody = d3.select("tbody");
//   tableData.forEach((sighting) => {
//   var row = tbody.append("tr");
//   Object.entries(sighting).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// })};

display();



  var inputText = d3.select("#datetime")
  var button = d3.select("filter-btn")

  // filter data with desired date
  function changeHandler(){  
      d3.event.preventDefault();
      console.log(inputText.property("value"));
      var new_table = tableData.filter(sighting => sighting.datetime===inputText.property("value"))
      display(new_table)
  };
  
  // event listener to handle change and click
  inputText.on("change", changeHandler)
  button.on("click", changeHandler)