	
/**

Function: delayedReminder
Description: Logs a reminder message after a specified delay. *
Steps:
Accept two parameters: message (string) and delay (in milliseconds).
Use setTimeout to log the message after the specified delay.
Return a promise that resolves once the message is logged. *
Example Usage:
delayedReminder("Time to stretch!", 3000).then(() => console.log("Reminder done.")); */ function delayedReminder(message, delay) { // Return a promise return new Promise((resolve) => { // Use setTimeout to log the message after the specified delay setTimeout(() => { console.log(message); resolve(); }, delay); }) // Resolve the promise once the message is logged return Promise.resolve();
}

module.exports = { delayedReminder };