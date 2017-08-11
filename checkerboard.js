for (let i = 0; i < 8; i += 1) {
  for (let j = 0; j < 8; j += 1) {
    if (is_even(i + j)) {
      process.stdout.write('*');
    } else {
      process.stdout.write(' ');
    }
  }

  process.stdout.write('\n');
}

function is_even(d) {
  return d % 2 == 0;
}
