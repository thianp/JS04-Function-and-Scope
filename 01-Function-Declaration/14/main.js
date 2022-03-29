// function max(a, b = -Infinity, c = -Infinity, d = -Infinity) {
//   if (a === undefined) return undefined;
//   return Math.max(a, b, c, d);
// }

// console.log(max());

// Alt solution by P Earth
function isValidNumber(num) {
  if (
    num === null ||
    String(num).trim === "" ||
    isNaN(num) ||
    typeof num === "boolean"
  )
    return false;
  return true;
}

function max(a, b, c, d) {
  if (a === undefined) return undefined;
  if (b === undefined) {
    if (isValidNumber(a)) return a;
    else return NaN;
  } else {
    if (isValidNumber(a) && isValidNumber(b)) {
      return a > b ? a : b;
    } else return NaN;
  }
}
