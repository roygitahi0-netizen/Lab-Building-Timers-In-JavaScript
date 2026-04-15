
src(countdownertime) /**

Function: countdownTimer
Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0. *
Steps:
Accept two parameters: startTime (in seconds) and interval (in milliseconds).
Use setInterval to decrement the time and log the remaining time.
Stop the timer using clearInterval when the remaining time reaches 0.
Return the timer ID so it can be used for test validation. *
Example Usage:
countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds. */ function countdownTimer(startTime, interval) { // Initialize the remaining time let remainingTime = startTime; // Set up a timer using setInterval const timerId = setInterval(() => { // Log the remaining time and decrement it console.log(remainingTime); remainingTime--; }, interval); // Stop the timer when time reaches 0 if (remainingTime === 0) { clearInterval(timerId); } // Return the timer ID for validation return timerId; }
module.exports = { countdownTimer };}
