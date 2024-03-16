import React from "react";
import myResume from "../assets/Resume.pdf"; 

function ResumePage() {
  return (
    <div className="main-container2">
      <section>
        <div className="text-center">
          <a href={myResume} className="btn btn-primary" download>
            <i className="bi bi-cloud-download me-2"></i>Download My Resume
          </a>
        </div>
        <div className="mt-5">
          <iframe
            src={myResume}
            style={{ width: "100%", height: "600px" }} 
            title="Resume"
          >
            Your browser does not support PDFs. <a href={myResume}>Download My Resume</a>
          </iframe>
        </div>
      </section>
    </div>
  );
}

export default ResumePage;
