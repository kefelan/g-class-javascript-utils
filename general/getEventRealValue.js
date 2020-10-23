export default event => {
  if (!event || !event.target) return null;
  const { checked, value } = event.target;
  return checked !== undefined
    ? (checked || undefined)
    : value && (/^[0-9]*$/g).test(value)
      ? Number(value)
      : value;
};