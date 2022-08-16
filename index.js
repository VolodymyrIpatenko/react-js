let arr = [1, 2, 3, 3, 3, 3, 3];

function threeTimes(arr) {
  return arr.find(el => arr.filter(val => val === el).length === 5);
}

console.log(threeTimes(arr));

let time = 1000;
for (let i = 1; i <= 10; i += 1) {
  function foo(x) {
    setTimeout(() => {
      console.log(x);
    }, time);
  }
  foo(i);
  // time += 1000;
}
