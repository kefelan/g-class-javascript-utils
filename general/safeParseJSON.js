export const safeParseJSON = string => {
  let parsed;
  try {
    parsed = JSON.parse(string);
  } catch (e) {
    console.error("safeParseJSON", e);
  }
  return parsed;
};

export default safeParseJSON;