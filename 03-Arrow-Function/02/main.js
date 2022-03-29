// let checkPrime = input => {
//     let j = input - 1;
      
//     while (j >= 1 && input % j !== 0) {
//       j--;
//       if (j === 1) {
//         console.log("prime");
//       }
//     }

//     if (j!== 1) {
//         console.log("not prime");
//     }
// }

// using boolean
let checkPrime = input => {
    let isPrime = true;

    for (i = 2; i < input; i++) {
        if (input % i === 0) {
            isPrime = false;
            break;
        }
    }

    return isPrime;
}

console.log(checkPrime(11));