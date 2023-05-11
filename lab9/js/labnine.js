// index.js - Lab 9
// Author: Blake Dringenberg
// Date: May 10th, 2023

 //assigning varial output
 var outputEl = document.getElementById("output");
 console.log("outputEl: ", outputEl);
 
 // create a new element 
 var new1El = document.createElement("info");

 // make it say something
 new1El.innerHTML = "Something new.";
 new1El.id = "new-one";

 //make it say something else
 var new2El = document.createElement("info");
 new1El.id = "new-two";
 new2El.innerHTML = "Something else.";

 // append both elements 
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

//change two css things
 new1El.style.color = "orange";
 new2El.style.color = "red";
 outputEl.style.border = "dashed 10px blue";
 outputEl.style.backgroundColor = "black";

