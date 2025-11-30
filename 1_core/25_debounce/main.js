const debounce = (fn, ms) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};

// Usage
const debouncedLog = debounce(name => console.log("Ciao " + name), 500);

// Call it multiple times
debouncedLog("Mario");
debouncedLog("Mario");
debouncedLog("Mario"); // Only this call will log "ciao" after 500ms
