export const minutesToMilli = minutes => minutes * 60 * 1000;

export const hoursToMilli = hours => minutesToMilli(hours * 60);

export const daysToMilli = days => hoursToMilli(days * 24);

export default {
  minutesToMilli,
  hoursToMilli,
  daysToMilli
};