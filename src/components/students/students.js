import React from "react";
import Student from "./student/student";

const Students = ({ studentslist }) => {
  return studentslist.map((student, index) => (
    <Student
      id={student.id}
      name={student.name}
      classNumber={student.classnumber}
      phoneNumber={student.phonenumber}
      Email={student.email}
      key={student.id}
    />
  ));
};
export default Students;
