const dog = {
  name: 'fido',
  age: 4,
  bark() {
    console.log('woof');
  },
};

const { name: fullName, age } = dog;

const arr = ['foo', 'bar', 'baz'];

const [, , c] = arr; // const c = arr[2];
