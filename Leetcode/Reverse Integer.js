function reverse(x) {
    const result = parseInt([...String(x)].reverse().join(''), 10);
    if (result > 0x7FFFFFFF) return 0;
    return result * Math.sign(x);
  }