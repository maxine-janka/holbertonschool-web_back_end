export default function createEmployeesObject(departmentName, employees) {
  const department = {
    [departmentName]: [
      ...employees,
    ],
  };
  return department;
}

// Use computed property name [] to get the value of departmentName as the key.
// Without it, its just a static key name.
