let countAgeInDays = birthYear => {
    let age = 0;
    for (let i = 2020; i >= birthYear; i--) {
        if (i % 100 === 0) {
            age += (i % 400 === 0 ? 366 : 365);
        } else {
            age += (i % 4 === 0 ? 366 : 365);
        }
    }
    return age;
}

console.log(countAgeInDays(2019));

// Alt solution by P Earth - you can call the 
// checkLeapYear function from last exercise rather
// than clutter up this particular function 