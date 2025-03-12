import React from "react";
import "./EducationSection.css";

// Example data; replace with your real education history
const educationData = [
  {
    id: 1,
    year: "2023 - 2028 (Present)",
    degree: "Dual Degree (BTech + MTech) in Computer Science",
    institution: "Indian Institute of Technology (IIT) Kharagpur",
    description: "Focused on software engineering, data structures, and AI."
  },
  {
    id: 2,
    year: "2021 - 2023",
    degree: "12th Grade",
    institution: "FIITJEE Hyderabad",
    description:
      "Specialized in big data, machine learning, and cloud computing."
  },
  {
    id: 3,
    year: "2010 - 2021",
    degree: "10th Grade",
    institution: "Vikas the Concept School",
    description:
      "Continuously exploring advanced AI/ML techniques, LLMs, and cutting-edge frameworks."
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
      <h2>Education</h2>
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
    </section>
  );
}

export default EducationSection;
