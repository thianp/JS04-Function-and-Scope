// let checkLeapYear = year => {
//     if (year % 100 === 0) {
//         return year % 400 === 0 ? true : false;
//     } else {
//         return year % 4 === 0 ? true : false;
//     }
// }

// console.log(checkLeapYear(2005));

// Alt solution by P Earth
// const isLeapYear = year => {
//     if (year % 4 !== 0) return false;
//     if (year % 100 !== 0) return true;
//     if (year % 400 === 0) return true;
//     return false;
// }

// Alt solution 2
const isLeapYear = (year) => {
  if (year % 4 === 0) {
    return year % 100 !== 0 || year % 400 === 0;
  }
};
