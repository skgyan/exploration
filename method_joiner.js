// join methods

const joiner = (a, b) => () => {
  // console.log('joiner');
  a();
  b();
};

function one() {
  console.log("one");
}

function two() {
  console.log("two");
}

function three() {
  console.log("three");
}

function four() {
  console.log("four");
}

const joinMethods = joiner(one, joiner(two, joiner(three, four)));

export default joinMethods;
