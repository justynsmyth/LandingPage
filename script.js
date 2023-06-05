// Get the target date
var targetDate = new Date("2021-10-23T00:00:00Z");

// Function to calculate the time difference
function getTimeDifference(targetDate) {
  var currentDate = new Date();
  var timeDifference = Math.abs(currentDate - targetDate);
  
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

// Function to update the timer display
function updateTimer() {
  var timerElement = document.getElementById("timer");
  var time = getTimeDifference(targetDate);
  
  var timerText = time.days + " days, " + time.hours + " hours, " + time.minutes + " minutes, " + time.seconds + " seconds";
  timerElement.innerHTML = timerText;
}

// Update the timer display every second
setInterval(updateTimer, 1000);



