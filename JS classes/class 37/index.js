


function checkForLastName() {
   var targetField = document.getElementById("lastNameField");
    if (targetField.value.length === 0) {
      alert("Please enter your last name");
      targetField.focus();
      targetField.style.background = "yellow";
      return false;
      }
      targetField.style.background = "white";
 }