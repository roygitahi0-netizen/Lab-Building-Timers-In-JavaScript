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
function recurringTimer(message, interval) {
  // Set up a timer using setInterval to log the message
  // Return the timer ID
}

function stopRecurringTimer(timerId) {
  // Stop the timer using clearInterval
}
function recurringTimer(message, interval) {
  const timerId = setInterval(function () {
    console.log(message);
  }, interval);

  return timerId;
}

function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}
const { recurringTimer, stopRecurringTimer } = require('../src/recurringTimer')

jest.useFakeTimers()

describe('recurringTimer', () => {
  test('should log the message at the specified interval', () => {
    console.log = jest.fn() // Mock console.log

const message = 'Recurring message'
const interval = 2000 // 2 seconds
const timerId = recurringTimer(message, interval)

// Simulate multiple intervals
jest.advanceTimersByTime(6000) // Advance by 6 seconds (3 intervals)

// Verify the message is logged 3 times
expect(console.log).toHaveBeenCalledTimes(3)
expect(console.log).toHaveBeenCalledWith(message)

// Stop the timer
stopRecurringTimer(timerId)
  })

  test('should stop logging when stopRecurringTimer is called', () => {
    console.log = jest.fn()

const message = 'Stop this message'
const interval = 1000 // 1 second
const timerId = recurringTimer(message, interval)

// Simulate a few intervals and then stop
jest.advanceTimersByTime(3000) // Advance by 3 seconds
stopRecurringTimer(timerId)
jest.advanceTimersByTime(2000) // Advance by another 2 seconds

// Verify the message was logged 3 times and no more
expect(console.log).toHaveBeenCalledTimes(3)
expect(console.log).toHaveBeenCalledWith(message)
  })
})


module.exports = { recurringTimer, stopRecurringTimer };