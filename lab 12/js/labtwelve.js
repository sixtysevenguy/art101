// index.js - Lab 12
// Author: Blake Dringenberg
// Date: May 22, 2023

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
  
    if (mod === 0) {
      return "Straw Hats";
    } else if (mod === 1) {
      return "Blackbeard Pirates";
    } else if (mod === 2) {
      return "Red haired Shanks Pirates";
    } else {
      return "White Beard Pirates";
    }
  }
  
  document.getElementById("button").addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    var output = document.createElement("p");
    output.textContent = "The Sorting Hat has sorted you into " + house;
    output.classList.add("styled-paragraph"); // Add your own CSS class for styling
    document.getElementById("output").appendChild(output);
  });
  