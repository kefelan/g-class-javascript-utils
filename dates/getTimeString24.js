export const getTimeString24 = date =>
  date &&
  `${(date.getHours() < 10 ? "0" : "") +
  date.getHours()}:${(date.getMinutes() < 10 ? "0" : "") +
  date.getMinutes()}`;

export default getTimeString24;