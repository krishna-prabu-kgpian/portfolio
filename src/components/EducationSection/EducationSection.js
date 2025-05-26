import React from "react";
import "./EducationSection.css";

// Example data; replace with your real education history
const educationData = [
  {
    id: 1,
    year: "2023 - 2028 (Present)",
    degree: "Dual Degree (BTech + MTech) in Computer Science",
    institution: "Indian Institute of Technology (IIT) Kharagpur",
    description: "Pursuing a Dual Degree in Computer Science and Engineering with a CGPA of 9.26, focusing on AI, robotics, and real-time systems"
  },
  {
    id: 2,
    year: "2021 - 2023",
    degree: "12th Grade",
    institution: "FIITJEE Hyderabad",
    description:
      "Completed Class XII with 957/1000 through FIITJEE’s integrated JEE program, securing AIR 604 in JEE Advanced and 1482 in JEE Mains"
  },
  {
    id: 3,
    year: "2010 - 2021",
    degree: "10th Grade",
    institution: "Vikas the Concept School",
    description:
      "Completed Class X with an A2 grade, where I first developed a love for math and explored extracurriculars like chess and game development"
  }
];

function TimelineItem({ year, degree, institution, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-year">{year}</div>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>{degree}</h3>
        <h4>{institution}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="education-title">Education</h2>
        <div className="timeline">
          {educationData.map((item) => (
            <TimelineItem
              key={item.id}
              year={item.year}
              degree={item.degree}
              institution={item.institution}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
