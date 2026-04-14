const { countdownTimer } = require('../src/countdown');

jest.useFakeTimers();

describe('countdownTimer', () => {
  beforeEach(() => {
    console.log = jest.fn(); // Mock console.log
  });

  afterEach(() => {
    jest.clearAllMocks(); // Reset mocks after each test
  });

  test('should log remaining time at intervals and stop at 0', () => {
    const startTime = 5; // 5 seconds
    const interval = 1000; // 1 second
    const timerId = countdownTimer(startTime, interval);

    // Fast-forward all timers
    jest.advanceTimersByTime(startTime * interval);

    // Verify that console.log was called correctly
    expect(console.log).toHaveBeenCalledTimes(startTime);
    for (let i = startTime; i > 0; i--) {
      expect(console.log).toHaveBeenCalledWith(i);
    }

    // Verify clearInterval was called
    clearInterval(timerId); // Ensure cleanup to avoid overlapping
  });
});
//Logs the remaining time at regular intervals and stops at 0.
//
//Steps:
//1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
//2. Use `setInterval` to decrement the time and log the remaining time.
//3. Stop the timer using `clearInterval` when the remaining time reaches 0.
//4. Return the timer ID so it can be used for test validation
countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
