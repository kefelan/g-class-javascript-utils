export const capitalize = string => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeAll = string => {
  if (!string) return "";
  const parts = string.split(/\s/g);
  return parts.map(p => capitalize(p)).join(" ");
};

export default {
  capitalize,
  capitalizeAll
};