const whenFulfill = conditioner =>
  (async function wait() {
    if (typeof conditioner !== "function")
      return Promise.reject("A condition checking function is required.");
    await asyncPause(250);
    if (!conditioner()) return wait();
    return Promise.resolve(true);
  })();

export default whenFulfill;