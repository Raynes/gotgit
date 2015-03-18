function foo(x) {
  var y; //x is already defined. look up.
  x += 5;
  y = 3;

  console.log(x + y);
  console.log(y);
}
