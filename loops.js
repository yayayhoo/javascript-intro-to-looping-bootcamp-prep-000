function forLoop(array) {
  var a=[];
  n = 25;
  for (var i = 0; i < n; i++) {

    a[i] = "I am "+i+" strange loops.";
  }
  a[1] = "I am 1 strange loop.";
  return a.concat(array);
}

function whileLoop(n) {
  while (n) {
    // n--;
    console.log(--n);
  }
  return 'done';
}

function doWhileLoop(array) {
  do {
    array.pop();
  }while (array.length>0 && maybeTrue() == 'false');
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
