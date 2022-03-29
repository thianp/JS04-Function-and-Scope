function checkPrime(input) {
    let j = input - 1;
      
        while (j >= 1 && input % j !== 0) {
          j--;
          if (j === 1) {
            console.log("prime");
          }
        }

        if (j!== 1) {
            console.log("not prime");
        }
}

function findPrimeRange(input) {
    for (let i = 0; i <= input; i++) {
        let j = i - 1;
      
        while (j >= 1 && i % j !== 0) {
          j--;
          if (j === 1) {
            console.log(i);
          }
        }
      }
}

console.log(checkPrime(10));
// console.log(findPrimeRange(100));
  