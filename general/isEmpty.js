export const isEmpty = obj => {
  if (!obj) return true;
  if (typeof obj === "string") return !obj;
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === "object") {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
      return obj.constructor === Object;
    } else {
      let empty = true;
      for (let key of keys) {
        if (!isEmpty(obj[key])) {
          empty = false;
          return empty;
        }
      }
      return empty;
    }
  }
};

export default isEmpty;