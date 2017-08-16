for (let i = 0; i < 8; i += 1) {
  for (let j = 0; j < 8; j += 1) {
    process.stdout.write(isEven(i + j) ? '*' : ' ');
  }

  process.stdout.write('\n');
}

function isEven(d) {
  return d % 2 == 0;
}
