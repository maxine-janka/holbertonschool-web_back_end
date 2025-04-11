export default function getStudentsByLocation(studentList, city) {
  // Iterate each 'student' object in the array, access the location property and compare to input city
  const filteredList = studentList.filter(student => student.location === city);
    return filteredList;
}
