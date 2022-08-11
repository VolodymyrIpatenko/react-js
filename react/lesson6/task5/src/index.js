const length = 5;
const arr = [...new Array(length)].map(() => {
  return Math.floor(Math.random() * (10 - 5) + 5);
});

console.log(arr);
