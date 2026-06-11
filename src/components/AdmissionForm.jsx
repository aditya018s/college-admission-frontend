import axios from "axios";
import { useState } from "react";
import "./AdmissionForm.css";

const initialState = {
  studentName: "",
  fatherName: "",
  motherName: "",
  dateOfBirth: "",
  gender: "",
  mobileNumber: "",
  email: "",
  address: "",
  courseApplyingFor: "",
  previousCollege: "",
  previousSchool: "",
  percentage: "",
};

export default function AdmissonForm() {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async () => {

    // 1. Check each required field individually
    if (!formData.studentName) {
      setMessage("Please enter Student Name!");
      return;
    }

    if (!formData.mobileNumber) {
      setMessage("Please enter Mobile Number!");
      return;
    }

    if (!formData.email) {
      setMessage("Please enter Email ID!");
      return;
    }

    // 2. Then validate format
    if (!/^\d{10}$/.test(formData.mobileNumber)) {
      setMessage("Mobile number must be exactly 10 digits!");
      return;
    }

    if (!/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/.test(formData.email)) {
      setMessage("Invalid email format!");
      return;
    }

    // 3. All good — hit the API
    try {
      await axios.post("http://localhost:9090/api/students", formData);
      setMessage("Student admitted successfully!");
      setFormData(initialState);
    } catch (error) {
      setMessage(error.response?.data || "Something went wrong. Try again!");
    }

  };

  return (
    <>
      <div className="form-container">
        <h2>Student Admission Form</h2>

        <input
          className="form-input"
          placeholder="Student Name *"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Father's Name"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Mother's Name"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="date"
          placeholder="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />

        <select
          className="form-input"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          className="form-input"
          placeholder="Mobile Number *"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Email ID *"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Course Applying For"
          name="courseApplyingFor"
          value={formData.courseApplyingFor}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Previous College Name"
          name="previousCollege"
          value={formData.previousCollege}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Previous School Name"
          name="previousSchool"
          value={formData.previousSchool}
          onChange={handleChange}
        />
        <input
          className="form-input"
          placeholder="Percentage / CGPA"
          name="percentage"
          value={formData.percentage}
          onChange={handleChange}
        />

        <button className="submit-btn" onClick={handleSubmit}>
          Submit Data
        </button>

        {message && (
          <p className={
            message.includes("successfully") ? "success-msg" : "error-msg"
          }>
            {message}
          </p>
        )}
      </div>
    </>
  );
}
