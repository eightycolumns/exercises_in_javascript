for (let i = 0; i < 256; i += 1) {
  let binaryString = toBinaryString(i);

  console.log(
    ' '.repeat(3 - i.toString().length) + i + '\t' +
    ' '.repeat(8 - binaryString.length) + binaryString
  );
}

function toBinaryString(int) {
  if (int === 0) {
    return '0';
  }

  let binaryString = '';

  while (int > 0) {
    binaryString = int % 2 + binaryString;
    int = Math.floor(int / 2);
  }

  return binaryString;
}
