/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `delay` (in milliseconds).
 * 2. Use `setTimeout` to log the message after the specified delay.
 * 3. Return a promise that resolves once the message is logged.
 *
 * Example Usage:
 * delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done."));
 */
function delayedReminder(message, delay) {
  // Return a promise
  // Use setTimeout to log the message after the specified delay
  // Resolve the promise once the message is logged
}
/**
 * Function 1: delayedReminder
 * Description: Logs a message after a specified delay using setTimeout
 * @param {string} message - The message to log
 * @param {number} delay - Delay in milliseconds before logging
 * @returns {number} - The timer ID from setTimeout
 */
function delayedReminder(message, delay) {
    // Use setTimeout to log the message after the delay
    const timerId = setTimeout(() => {
        console.log(message);
    }, delay);
    
    // Return the timer ID so it can be cleared if needed
    return timerId;
}
module.exports = { delayedReminder };

