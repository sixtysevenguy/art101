// index.js - Lab 7 Javascript
// Author: Blake Dringenberg
// Date: May 3rd, 2023

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

function sortUserName(){
  var username = window.prompt("Hello!! Please tell me your name. I'll make it even cooler B)");
  console.log("username =", username);
  //split string to array
  var nameArray = username.split('');
  console.log("nameArray =", nameArray);
  //sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to a string
  var nameSorted =nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //return 
  return nameSorted;
}
//output
document.writeln("Thanks for telling me! Here's your SICK new name :p - - - - - - - - >", sortUserName(), "</br>");

