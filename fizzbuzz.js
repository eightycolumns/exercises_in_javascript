for (let i = 1; i < 101; i += 1) {
  let s = '';

  if (i % 3 === 0) s += 'Fizz';
  if (i % 5 === 0) s += 'Buzz';

  console.log(s || i);
}
