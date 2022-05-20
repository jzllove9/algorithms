const gcd = (a, b) => {
  if (!a || !b) return a || b;
  if (a === b) return a;
  const p = Math.max(Math.abs(a), Math.abs(b));
  const q = Math.min(Math.abs(a), Math.abs(b));
  const mod = p % q;
  return mod === 0 ? q : gcd(q, mod);
};

export default gcd;
