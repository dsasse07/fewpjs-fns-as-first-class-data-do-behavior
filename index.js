/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let splitTime = timeString.split(":")
  let hour = parseInt(splitTime[0])
  switch (true) {
    case (hour < 12):
      return "Good Morning"
    case (hour > 17):
      return "Good Evening"
    default:
      return "Good Afternoon"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let node = document.querySelector('#greeting')
  node.innerText = string
}