/**

Function: recurringTimer
Description: Starts a recurring timer that logs a message at fixed intervals. *
Steps:
Accept two parameters: message (string) and interval (in milliseconds).
Use setInterval to repeatedly log the message at the specified interval.
Return the timer ID so it can be used for stopping the timer. *
Example Usage:
const timerId = recurringTimer("Hello, world!", 2000); // Logs "Hello, world!" every 2 seconds. */
/**

Function: stopRecurringTimer
Description: Stops a recurring timer using its ID. *
Steps:
Accept the timer ID as a parameter.
Use clearInterval to stop the recurring timer. *
Example Usage:
stopRecurringTimer(timerId); // Stops the recurring timer started with the given ID. */ function recurringTimer(message, interval) { // Set up a timer using setInterval to log the message const timerId = setInterval(() => { console.log(message); }, interval); // Return the timer ID return timerId; }
function stopRecurringTimer(timerId) {
  // Stop the timer using clearInterval
  clearInterval(timerId);
  // Return the timer ID for validation
  return timerId;
}

module.exports = { recurringTimer, stopRecurringTimer };}