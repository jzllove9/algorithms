const fibonacci = (num) => {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;
  let first = 1; let second = 1; let third = 0;
  for (let i = 3; i <= num; i++) {
    third = first + second;
    first = second;
    second = third;
  }

  return third;
};

export default fibonacci;
