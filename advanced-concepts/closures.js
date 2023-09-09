function encapsulatedState(x) {
  let state = 10;
  return function () {
    state += x; // capture state and stored in heap
    return state;
  };
}

function outer() {
  let = 1;
  function inner() {
    x = x + 1;
  }
  return inner;
}

const incrementX = outer();
incrementX(); // x = 2
incrementX(); // x = 3
