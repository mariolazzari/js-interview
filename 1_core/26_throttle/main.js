// Throttle function
const throttle = (fn, ms) => {
  let isWaiting = false;

  return (...args) => {
    if (isWaiting) {
      return;
    }

    fn(...args);
    isWaiting = true;

    setTimeout(() => {
      isWaiting = false;
    }, ms);
  };
};

// Usage
const throttledLog = throttle(name => console.log("Ciao " + name), 500);

// Call it multiple times
throttledLog("Mario");
throttledLog("Luigi");
throttledLog("Giovanni");
// Only the first call logs immediately, then the next allowed after 500ms
