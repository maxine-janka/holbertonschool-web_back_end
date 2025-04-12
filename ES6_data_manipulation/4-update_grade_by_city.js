export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsInCity = studentList
    .filter(student => student.location === city); // New arr with filtered students from specified city

  // From filtered list create new array
  // for each student in filtered list, search the newGrades input array, if there is a match with student id's, store the grade object in studentGradeObject
  const updatedStudents = studentsInCity.map(student => {
    const studentGradeObject = newGrades.find(grade => grade.studentId === student.id);

    // If grade object exists from prev match, take the grade property and store in grade, otherwise set as NA
    let grade;
    if (studentGradeObject) {
      grade = studentGradeObject.grade
    } else {
      grade = 'N/A';
    }
    
    // Use original student data and add grade property to create newStudent Object
    // for current student
    const newStudent = {
      ...student,
      grade: grade
    };

    return newStudent;
  });

  // Map adds newStudent as an element to new array updatedStudents
  return updatedStudents;
}
