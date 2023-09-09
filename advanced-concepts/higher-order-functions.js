// Will be hoisted, hence it'll be global
// function sayHi(message) {
//   return 'Said...' + message;
// }

// It'll only work on local unless exporting it
const sayHi = function (message) {
  return 'Said...' + message;
};

function funWrapper(callback) {
  callback('Called by wrapper');
}

funWrapper(sayHi);
funWrapper((m) => console.log(m));

function funCreator() {
  return function (message) {
    return 'Said...' + message;
  };
}
const fn = funCreator();
fn('hello');
