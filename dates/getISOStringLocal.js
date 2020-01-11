export const getISOStringLocal = date => {
  const tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  return new Date(date - tzoffset).toISOString().slice(0, -1);
};

export default getISOStringLocal;