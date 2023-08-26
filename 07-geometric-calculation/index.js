const calculateTriangleArea = (a, b, c) => {
  const semiPerimeter = (a + b + c) / 2;
  const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
  return area;
};

module.exports = { calculateTriangleArea };
