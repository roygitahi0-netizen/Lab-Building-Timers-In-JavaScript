/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */
/**
 * Function 4: countdownTimer
 * Description: Creates a countdown timer that logs remaining time every second
 * @param {number} startTime - Starting number for countdown (e.g., 5)
 * @returns {number} - The timer ID from setInterval
 */
function countdownTimer(startTime) {
    let currentTime = startTime;
    
    // Log the starting time immediately
    console.log(currentTime);
    
    // Create interval that runs every 1000ms (1 second)
    const timerId = setInterval(() => {
        currentTime--; // Decrease by 1
        
        if (currentTime > 0) {
            // Log current time if still greater than 0
            console.log(currentTime);
        } else if (currentTime === 0) {
            // Log "Time's up!" when reaching 0 and stop the timer
            console.log("Time's up!");
            clearInterval(timerId);
        }
    }, 1000);
    
    // Return the timer ID
    return timerId;
}

// ==========================================
// EXPORT FUNCTIONS FOR TESTING
// ==========================================
// This makes the functions available to the test file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        delayedReminder,
        recurringTimer,
        stopRecurringTimer,
        countdownTimer
    };
}

module.exports = { countdownTimer };
