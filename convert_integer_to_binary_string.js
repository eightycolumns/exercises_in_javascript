for (let i = 0; i < 256; i += 1) {
  let binaryString = '';

  if (i === 0) {
    binaryString = '0';
  } else {
    for (let j = i; j > 0; j = Math.floor(j / 2)) {
      binaryString = j % 2 + binaryString;
    }
  }

  console.log(
    ' '.repeat(3 - i.toString().length) + i + '\t' +
    ' '.repeat(8 - binaryString.length) + binaryString
  );
}
