export const formatFixedDigit = (value, digits) => {
  if (isNaN(value) || value < 0 || !digits) return value;
  const zeros = "0".repeat(digits - 1);
  const threshold = Number(`1${zeros}`) - 1;
  return value > threshold ? value.toString() : `${zeros}${value}`;
};

export default formatFixedDigit;