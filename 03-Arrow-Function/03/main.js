const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * undefined because no return statement

const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // ** return 28.27 because without curly brackets the fn will automatically return the output