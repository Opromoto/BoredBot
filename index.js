/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

2. Display the text of the activity in the browser
*/


let classLists = ["color1", "color2", "color3", "color4"]
let num = 0

document.getElementById("get-activity").addEventListener("click", function() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
    })
    if(num === classLists.length) {
      num = 0
    } else {
      num++
    }
    document.body.classList = classLists[num]
})