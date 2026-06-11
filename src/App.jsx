import { useState } from "react";
import AdmissionForm from "./components/AdmissionForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

export default function App() {
  const [view, setView] = useState("form");

  return (
    <div>
      <div className="app-header">
        <h1>College Admission Management System</h1>
        <div className="nav-buttons">
          <button className={`nav-btn ${view === "form" ? "active" : ""}`} onClick={() => setView("form")}>Submit Data</button>
          <button className={`nav-btn ${view === "table" ? "active" : ""}`} onClick={() => setView("table")}>Display Data</button>
        </div>
      </div>

      {view === "form" ? <AdmissionForm /> : <StudentTable />}
    </div>
  );
}

