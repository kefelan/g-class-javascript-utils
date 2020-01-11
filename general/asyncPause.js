export const asyncPause = async ms =>
  new Promise(resolve => setTimeout(resolve, ms));

export default asyncPause;