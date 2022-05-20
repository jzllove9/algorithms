const primality = (n) => {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  if (n - Math.round(n)) return false;
  const t = Math.sqrt(n);
  for (let i = 3; i <= t; i += 2) if (n % i === 0) return false;
  return true;
};

export default primality;
