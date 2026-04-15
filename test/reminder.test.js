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
function delayedReminder(message, delay) {
  setTimeout(function () {
    console.log(message);
  }, delay);
}
const { delayedReminder } = require('../src/reminder')

jest.useFakeTimers()

describe('delayedReminder', () => {
  test('should log the message after the specified delay', async () => {
    console.log = jest.fn() // Mock console.log

const message = 'This is your reminder!'
const delay = 3000 // 3 seconds

// Call the function
const reminderPromise = delayedReminder(message, delay)

// Fast-forward the timer
jest.advanceTimersByTime(delay)

// Await the promise
await reminderPromise

// Verify the message was logged
expect(console.log).toHaveBeenCalledTimes(1)
expect(console.log).toHaveBeenCalledWith(message)
  })
})
module.exports = { delayedReminder };

