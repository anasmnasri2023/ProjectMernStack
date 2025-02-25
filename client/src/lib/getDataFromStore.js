export const getDataFromStore = (selector, id) => {
  const data = selector.filter((s) => s._id === id);
  return data[0];
};
