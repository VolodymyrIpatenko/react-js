// let arr = [1, 2, 3, 3, 3, 3, 3];

// function threeTimes(arr) {
//   return arr.find(el => arr.filter(val => val === el).length === 5);
// }

// console.log(threeTimes(arr));

// let time = 1000;
// for (let i = 1; i <= 10; i += 1) {
//   function foo(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, time);
//   }
//   foo(i);
//   // time += 1000;
// }

// /////
// function flatten(arrr) {
//   return arrr.reduce(
//     (acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur),
//     []
//   );
// }

// const arrr = [
//   [1, 2],
//   [3, [4, [5]]],
// ];

// const flattened = flatten(arrr);
// console.log(flattened);
// ////////////

// const arrTwo = [
//   [1, 2],
//   [3, [4, [5]]],
// ];

// const flattenedTwo = arrTwo.flat(Infinity);
// console.log(flattenedTwo);

// console.time('dcode');
// let n = 0;
// for (let i = 0; i < 10000000; i += 1) {
//   n += i;
// }
// console.timeEnd('dcode');

var funcs;

for (var i = 0; i < 3; i++) {
  funcs = function () {
    console.log('Value: ' + i);
  };
}
for (var j = 0; j < 3; j++) {
  // funcs();
}
funcs();
