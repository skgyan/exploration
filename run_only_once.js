// run oly once method

function once(func) {
  let hasRun = false;
  return function() {
    console.log("hasRun => ", hasRun);
    if (!hasRun) {
      hasRun = true;
      func();
    }
  };
}

const purrr = () => console.log("purrrrr");
let printPurrr = once(purrr);

// printPurrr(); // => purrrr
// printPurrr();
// printPurrr();

export default printPurrr;
