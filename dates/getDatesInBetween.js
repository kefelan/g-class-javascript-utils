export const getDatesInBetween = (start, end) => {
  const startDate = new Date(start).setHours(0, 0, 0, 0);
  const endDate = new Date(end).setHours(0, 0, 0, 0);
  let dates = [];
  let remaining = endDate - startDate;
  while (remaining >= daysToMilli(1)) {
    dates.push(new Date(startDate + remaining));
    remaining = remaining - daysToMilli(1);
  }
  dates.reverse();
  return dates;
};

export default getDatesInBetween;