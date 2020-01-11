export const yyyymmdd = (Date, separator) => {
  if (!Date) return;
  if (typeof Date.getTime !== "function") {
    console.warn("Not a valid date object");
    return Date;
  }
  separator = (typeof separator === "string" && separator) || "/";
  return `${Date.getFullYear()}${separator}${formatFixedDigit(
    Date.getMonth() + 1,
    2
  )}${separator}${formatFixedDigit(Date.getDate(), 2)}`;
};

export default yyyymmdd;