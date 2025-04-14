export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
}
  const setToArrayAndFilter = Array.from(set).filter((element) => typeof element === 'string' && element.startsWith(startString));
  // console.log(setToArrayAndFilter);
  const sliceStartString = setToArrayAndFilter.map((element) => element.slice(startString.length));
  // console.log(sliceStartString);
  const newString = sliceStartString.join('-');
  // console.log(newString);
  return newString;
}
