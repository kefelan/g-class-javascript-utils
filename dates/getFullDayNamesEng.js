export const getFullDayNamesEng = date => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[date.getDay()];
};

export default getFullDayNamesEng;