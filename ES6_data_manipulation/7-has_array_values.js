export default function hasValuesFromArray(set, array) {
  const checkValues = array.every((element) => set.has(element));
  return checkValues;
}
