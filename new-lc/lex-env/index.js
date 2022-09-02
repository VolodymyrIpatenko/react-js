const obj = {
  name: 'Bill',

  func() {
    console.log(this);
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};
obj.func();

// class Robot {
//   constructor(name, catchPhrase) {
//     this.name = name;
//     this.catchPhrase = catchPhrase;
//   }
// }

// Robot.prototype.speak = function () {
//   console.log(this.catchPhrase);
//   return this.catchPhrase;
// };

// const ironG = new Robot('Iron Giant', 'Be good');

// console.log(ironG.speak());
