// index.js - Lab 15
// Author: Blake Dringenberg
// Date:5/31/23



$(document).ready(function() {
    // Add click event to the button
    $('#button').click(function() {
      // Make the AJAX call
      $.ajax({
        url: "https://api.chucknorris.io/jokes/random",
        type: "GET",
        dataType: "json",
        success: function(data) {
          // Convert data to a string
          var jsonString = JSON.stringify(data.value);

          // Put the output in the output div
          $('#output').text(jsonString);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
        }
      });
    });
  }); 