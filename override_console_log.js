const originalLog = console.log;
console.log = (...arg) => {
  const date = new Date();
  arg.unshift(date);
  originalLog.apply(console, arg);
};

// test
//console.log("hiii", "ho", "bye", 'a');

export default originalLog;
