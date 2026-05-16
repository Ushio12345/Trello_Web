export const mapOrder = (originalArray, orderArray, key) => {
  if (!orderArray || !originalArray || !key) return [];

  const cloneArray = [...originalArray];
  const orderedArray = cloneArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]);
  });
  return orderedArray;
};
