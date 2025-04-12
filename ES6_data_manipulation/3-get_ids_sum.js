export default function getStudentIdsSum(studentList) {
  const sumOfIds = studentList
  .reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return sumOfIds;
}
