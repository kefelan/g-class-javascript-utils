export default value => {
  if (!value) return false;
  if (typeof value === "boolean") return value;
  if (typeof value !== "string")
    return console.warn(`${value} is not a string or boolean value.`) && false;
  return value === "true" ? true : value === "false" ? false : value;
};