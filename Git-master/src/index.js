
const displayID = "printscreen";
const displayElement = document.getElementById(displayID);

if (!displayElement) {
   throw new Error('Element with ID ' + displayID + ' not found');
}

/**
 * appends the specified value to the value of the displayElement
 * */
const appendValue = function(value) {
   return displayElement.value + value;
}


 /**
  * Displays the specified action on the display element
  */
const displayAction = function(id) {
   if (id === "b1") {
      displayElement.value = appendValue("1");
   } else if (id === "b2") {
      displayElement.value = appendValue("2");
   } else if (id === "b3") {
      displayElement.value = appendValue("3");
   }
   else if (id === "b3") {
      displayElement.value = appendValue("3");
   }
   else if (id === "b4") {
      displayElement.value = appendValue("4");
   }
   else if (id === "b5") {
      displayElement.value = appendValue("5");
   }
   else if (id === "b6") {
      displayElement.value = appendValue("6");
   }
   else if (id === "b7") {
      displayElement.value = appendValue("7");
   }
   else if (id === "b8") {
      displayElement.value = appendValue("8");
   }
   else if (id === "b9") {
      displayElement.value = appendValue("9");
   }
   else if (id === "b0") {
      displayElement.value = appendValue("0");
   }
   
}

const calcButtonIDs = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b0"]
calcButtonIDs.forEach(function (id) {
   const currentButton = document.getElementById(id);
   if (currentButton) {
      currentButton.onclick = function (event) {
         event.preventDefault();
         displayAction(id);
      }
   } else {
      console.warn('Element with ID ' + id + ' not found');
   }
})



/**
 * 1. Enter first value to input
 * 2. Check if the add button has been clicked
 * 3. Pick the first value from the input/displayElement
 * 4. Pick the second value from the displayElement
 * 5. Check if enter button has been clicked
 * 6. If so, add the first and second values
 */

const inputs = [];

const addButton = document.getElementById("add");
    addButton.onclick = function (event) {
     event.preventDefault();
     
     displayElement.value;
     inputs.push(displayElement.value)
     displayElement.value = mysum(inputs)
        // mysum(inputs);
    // console.log(mysum(inputs))
    
     }

     function mysum(inputs){
            inputs.forEach(function (num){
            
            var sum =parseFloat(num) + parseFloat(num); 
            return sum;
           

      })

        }
    

