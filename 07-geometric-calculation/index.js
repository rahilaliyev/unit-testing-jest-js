const calculateTriangleArea = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    throw new Error("Side variables must be numbers");
  }

  if (a < 0 || b < 0 || c < 0) {
    throw new Error("Side lengths must be positive");
  }

  const semiPerimeter = (a + b + c) / 2;
  const area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
  return area;
};

module.exports = { calculateTriangleArea };
