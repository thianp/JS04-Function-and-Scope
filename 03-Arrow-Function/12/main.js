let calcFactorial = input => {
    for (let i = input - 1; i > 0; i--) {
        input *= i;
    }
    return input;
}

console.log(calcFactorial(3));

// Account for 0 and 1 by adding this line before the for loop
// if (input === 0 || input === 1) return 1;