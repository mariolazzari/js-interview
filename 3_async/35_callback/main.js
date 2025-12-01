// Write an asynchronous function which executes callback after finishing it's asynchronous task
// What problem callbacks solve?

const asyncFn = cb => {
  setTimeout(() => {
    cb("done");
  }, 1000);
};

asyncFn(msg => {
  console.log("callback", msg);
});
