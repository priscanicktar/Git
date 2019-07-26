
const displayID = "printscreen";
const displayElement = document.getElementById(displayID);
let action = "";

if (!displayElement) {
   throw new Error('Element with ID ' + displayID + ' not found');
}

/**
 * appends the specified value to the value of the displayElement
 * */
const appendValue = function (value) {
  return action ? value : displayElement.value + value;
  
}

/**
 * Displays the specified action on the display element
 */

const displayAction = function (id) {
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
 action = "";
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



const inputs = [];
var mysum = [];
const addButton = document.getElementById("add");
addButton.onclick = function (event) {
   event.preventDefault();
   action = "sum";
   var digit = displayElement.value;
   inputs.push(digit);

   displayElement.value = "";

   var sum = 0;
  
   inputs.forEach(function (num) {
      sum = sum + parseFloat(num);

   })

   mysum.push(sum);
   // console.log(mysum.pop());

   displayElement.value = mysum.pop().toString();

}


const enterID = "enter";
const equalButton = document.getElementById(enterID);
equalButton.onclick = function (event) {
   event.preventDefault();
   // console.log("enter clicked")
   if (addButton) {
      displayElement.value = mysum.pop().toString();
      // alert("Enter button pressed")
   }
   else {
      console.warn("errooooor")
   }
}


