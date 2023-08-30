const getDaysDifference = (a, b) => {
  if (!(a instanceof Date) || !(b instanceof Date)) {
    throw new Error("Both parameters must be valid Date objects");
  }
  return b.getTime() - a.getTime() > 0 ? (b.getTime() - a.getTime()) / 1000 / 60 / 60 / 24 : 0;
};

module.exports = { getDaysDifference };
