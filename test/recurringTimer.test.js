/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 *
 * Steps:
 * 1. Accept two parameters: `message` (string) and `interval` (in milliseconds).
 * 2. Use `setInterval` to repeatedly log the message at the specified interval.
 * 3. Return the timer ID so it can be used for stopping the timer.
 *
 * Example Usage:
 * const timerId = recurringTimer("Hello, world!", 2000); // Logs "Hello, world!" every 2 seconds.
 */

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 *
 * Steps:
 * 1. Accept the timer ID as a parameter.
 * 2. Use `clearInterval` to stop the recurring timer.
 *
 * Example Usage:
 * stopRecurringTimer(timerId); // Stops the recurring timer started with the given ID.
 */
/**
 * Function 2: recurringTimer
 * Description: Logs a message repeatedly at a specified interval using setInterval
 * @param {string} message - The message to log
 * @param {number} interval - Time in milliseconds between each log
 * @returns {number} - The timer ID from setInterval
 */
function recurringTimer(message, interval) {
    // Use setInterval to log the message repeatedly
    const timerId = setInterval(() => {
        console.log(message);
    }, interval);
    
    // Return the timer ID so it can be stopped later
    return timerId;
}

/**
 * Function 3: stopRecurringTimer
 * Description: Stops a recurring timer using clearInterval
 * @param {number} timerId - The timer ID returned from recurringTimer
 */
function stopRecurringTimer(timerId) {
    // Use clearInterval to stop the recurring timer
    clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };