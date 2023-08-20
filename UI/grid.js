$(document).ready(function() {
    // Button click event listener
    $("#displayTextBtn").click(function() {
      $("#displayText").toggle();
      $("#fileUploadSection").toggle(); // Toggle the upload section
    });
  
    // Data ruleset file input change event
    $("#dataRulesetInput").change(function(e) {
      const file = e.target.files[0];
      if (file) {
        // You can process the uploaded file here
        console.log("Data ruleset file selected:", file.name);
      }
    });
  
    // Logs file input change event
    $("#logsInput").change(function(e) {
      const file = e.target.files[0];
      if (file) {
        // You can process the uploaded file here
        console.log("Logs file selected:", file.name);
      }
    });
  });
