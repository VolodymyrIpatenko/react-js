const user = {
  age: 30,
  agreeToTerms: true,
  password: 'jdngjudgn9944',
};

const user2 = {
  age: 17,
  agreeToTerms: true,
};

function checkAge(user) {
  return user.age >= 18;
}

function checkPassword(user) {
  return user.password.length > 8;
}

function checkTerms(user) {
  return user.terms === true;
}

function validate(...functions) {
  return function (obj) {
    for (let i = 0; i < functions.length; i += 1) {
      if (functions[i](obj) === false) return false;
    }
    return true;
  };
}

const validator1 = validate(checkTerms, checkAge, checkPassword);
const validator2 = validate(checkTerms, checkAge);

console.log(validator1(user));
console.log(validator2(user2));
