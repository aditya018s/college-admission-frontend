/* eslint-disable no-unused-vars */
import axios from "axios";
import {  useState } from "react";
import "./StudentTable.css"

export default function StudentTable() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:9090/api/students");
      setStudents(response.data);
    } catch (error) {
      alert("Failed to fetch students!");
    }
  };
  return (
    <>
      <div className="table-container">
        <h2>Admitted Students</h2>
        <button className="display-btn" onClick={fetchStudents}>
          Display Data
        </button>

        {students.length > 0 ? (
          <div className="table-wrapper">
            <table className="student-table" >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Father</th>
                  <th>Mother</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Course</th>
                  <th>Prev. College</th>
                  <th>Prev. School</th>
                  <th>%/CGPA</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, index) => (
                  <tr
                    key={s.id}>
                    <td>{index + 1}</td>
                    <td>{s.studentName}</td>
                    <td>{s.fatherName}</td>
                    <td>{s.motherName}</td>
                    <td>{s.dateOfBirth}</td>
                    <td>{s.gender}</td>
                    <td>{s.mobileNumber}</td>
                    <td>{s.email}</td>
                    <td>{s.address}</td>
                    <td>{s.courseApplyingFor}</td>
                    <td>{s.previousCollege}</td>
                    <td>{s.previousSchool}</td>
                    <td>{s.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="no-data">
            Click "Display Data" to load records.
          </p>
        )}
      </div>
    </>
  );
}
