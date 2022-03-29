let x = 1;
function func() {
  console.log(x); // * cannot access x before initialization
  let x = 2;
}
func();