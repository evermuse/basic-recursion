function chirp(n) {

  if (n > 0) {
    console.log('chirp');
    n--;
    chirp(n);
  }

}

chirp(6);