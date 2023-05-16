// index.js - Lab 10 - Javascript Events and Forms
// Author: Blake Dringenberg
// Date: May 15th, 2023

//sort name with submit button
function sortUserName(userName) {
  
  // split array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  
  // sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  
  // string together
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  
  //  return the name
  return nameSorted;
}

// adding button
var button = document.getElementById('submit-button');
button.addEventListener('click', function() {
  console.log("We got here.");
  inputValue = document.getElementById('username').value;
  var sortedName = sortUserName(inputValue);
  console.log("Results", sortedName);
  document.getElementById("output").innerHTML = sortedName;
});

