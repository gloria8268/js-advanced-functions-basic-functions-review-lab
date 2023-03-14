// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(target = "*") {
  return function (text) {
    return (`You are ${target}${text}${target}!`)
  }
}

let result = wrapAdjective()
let emphatic = result("a hard worker")
console.log(emphatic)

result = wrapAdjective("||")
emphatic = result("a dedicated programmer")
console.log(emphatic)

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  }
};

let arrayOfTransforms = [
  function (a) { return a * 2 },
  function (a) { return a + 1000 },
  function (a) { return a % 7 }
]

function actionApplyer(integer, arr) {
  if (arr.length === 0) {
    return integer
  } else {
    let number = integer
    for (let i = 0; i < arr.length; i++) {
      number = arr[i](number)
    }
    let message = `${integer}, multiplied by 2, added to 1000 and then modulo 7 is ${number}. Apply each function in the Array of functions on the given base (${integer}) OR on the result of the use of the previous function to get this result`
    console.log(number)
    return number
  }
}