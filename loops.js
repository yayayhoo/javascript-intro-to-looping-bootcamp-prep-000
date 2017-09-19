function forLoop(array) {


  for (var i = 0; i < 25; i++) {

    array[i] = "I am "+i+" strange loops.";
  }
    array[1] = "I am 1 strange loop.";
  return array;
}

function whileLoop(n) {
  while (n) {
    n--;
  }
  return 'done';
}

function doWhileLoop(array) {
  do {
    array.pop();
  }while (array.length > 0)
  return array.length-1;
}
