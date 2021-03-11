// from data.js
var tableData = data;

// YOUR CODE HERE!   
// function display(tableData){
//   var tbody = d3.select("tbody")
//   tbody.text("")
//   tableData.forEach((sighting) => {
//   var row = tbody.append("tr");
//   Object.entries(sighting).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });
// })};

//Function to display all the data in data.js file and dynamically inseart/update the HTML table rows
function display(tableData){
  d3.select("tbody")
    .text("")
    .selectAll("tr")
    .data(tableData)
    .enter()
    .append("tr")
    .html(function(d) {
      return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;
    })};

//Call the display function
display(tableData);


  var inputDate = d3.select("#datetime")
  var inputText = d3.selectAll("input")
  var buttonDate = d3.select("filter-btn")
  var buttonClear = d3.select("clearFilter")

  // filter data with desired date
  function changeHandler(){  
      d3.event.preventDefault();
      console.log(inputDate.property("value"));
      var new_table = tableData.filter(sighting => sighting.datetime===inputDate.property("value"))
      display(new_table);
  }
  
  // event listener to handle change and click
  inputDate.on("change", changeHandler) 
  inputText.on("change", additionalFilters)
  buttonDate.on("click", changeHandler)
  buttonClear.on("click", display)

  //Function to handle additional filters for other columns in the table
  function additionalFilters() {
    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    tableData = tableData.filter(obj => obj[key] == value);
    display(tableData);
};