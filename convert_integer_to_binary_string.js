try {
  for (let i = 0; i < 256; i += 1) {
    let binaryString = toBinaryString(i);

    console.log(
      ' '.repeat(3 - i.toString().length) + i + '\t' +
      ' '.repeat(8 - binaryString.length) + binaryString
    );
  }
} catch (e) {
  console.log('Error: ' + e.message);
}

function integerDivision(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('integerDivision() expects nonzero divisor');
  }

  let quotient = dividend / divisor;

  if (quotient < 0) {
    return Math.ceil(quotient);
  } else {
    return Math.floor(quotient);
  }
}

function toBinaryString(int) {
  if (int < 0) {
    throw new Error('toBinaryString() expects nonnegative integer');
  }

  if (int === 0) {
    return '0';
  }

  let binaryString = '';

  while (int > 0) {
    binaryString = int % 2 + binaryString;
    int = integerDivision(int, 2);
  }

  return binaryString;
}
