export const preventDefaultStopProp = event => {
  event && typeof event.preventDefault === "function" && event.preventDefault();

  event &&
  typeof event.stopPropagation === "function" &&
  event.stopPropagation();
};

export default preventDefaultStopProp;