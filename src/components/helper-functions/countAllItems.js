const countAllItems = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);
export default countAllItems;
