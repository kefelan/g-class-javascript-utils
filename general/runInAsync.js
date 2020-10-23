export default (method, delay) => async function(...args) {
  new Promise(resolve =>
    setTimeout(() => {
      resolve(method(...arguments));
    }, delay || 0)
  );
};