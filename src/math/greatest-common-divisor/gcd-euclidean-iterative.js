const gcd = (a, b) => {
  if (!a || !b) return a || b;
  if (a === b) return a;

  let q; let p;
  p = Math.max(Math.abs(a), Math.abs(b));
  q = Math.min(Math.abs(a), Math.abs(b));
  while (q) {
    [p, q] = [q, p % q];
  }

  return p;
};

export default gcd;
