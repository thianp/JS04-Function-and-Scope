// - ให้สร้างฟังก์ชันที่ทำงานได้เหมือนฟังก์ชันด้านล่าง โดยให้เขียน 3 แบบ
// - ใช้ if แต่ห้ามใช้ else
// - ใช้ ? แทน if
// - ใช้ || แทน if

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Did parents allow you?");
//   }
// }

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     if (age <= 18) {
//         return confirm("Did parents allow you?");
//     }
// }

// function checkAge(age) {
//     let toReturn;
//     (age > 18) ? toReturn = true : toReturn = confirm("Did your parents allow you?");
//     return toReturn;
// }

function checkAge(age) {
    let toReturn;
    toReturn = true
    toReturn = ((age > 18 && toReturn === true) || confirm("Did parents allow you"));
    return toReturn;
}

// Alt solution (Note):
// function orInsteadIf(age) {
//     let ageOver18 = true;
//     ageOver18 = age > 18 || false;
//     return ageOver18 || confirm('Did your parents allow you?');
// }