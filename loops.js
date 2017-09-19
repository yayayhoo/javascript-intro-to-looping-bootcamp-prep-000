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
    spy;
  }
  return 'done';
}

function doWhileLoop(array) {
  do {
    array.pop();
  }while (array.length>0 || maybeTrue() == 'false');
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
