export default object => {
  let form_data = new FormData();

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      form_data.set(key, object[key]);
    }
  }

  return form_data;
};