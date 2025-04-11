export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const idArr = arr.map(({ id }) => id);
    return idArr;
  } return [];
}
