export default function appendToEachArrayValue(array, appendString) {
  let newArr = []
    for (let idx of array) {
      idx = appendString + idx
      //console.log(idx)
      newArr.push(idx)
  }
  return newArr;
}

// ANOTHER OPTION, MODIFIES THE ORIGINAL, COULD MAKE NEW ARRAY AND STIL USE THIS METHOD
//  export default function appendToEachArrayValue(array, appendString) {
//     for (let [idx, value] of array.entries()) {
//       array[idx] = appendString + value;
//       console.log(array[idx]);
//     }
//     return array;
//   }
