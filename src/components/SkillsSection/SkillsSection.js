import React from "react";
import "./SkillsSection.css";

function SkillsSection() {
  return (
    <section className="skills-tree-section" id="skills">
      <h2>Skills Tree</h2>
      
      <div className="skill-tree-container">
        <svg 
          viewBox="0 0 600 400" 
          className="skill-tree-svg"
          aria-label="Skills Tree Diagram"
        >
          {/* Lines (Edges) */}
          {/* LLMs -> RAG */}
          <line x1="300" y1="50" x2="200" y2="150" stroke="#000" strokeWidth="2" />
          {/* LLMs -> LangChain */}
          <line x1="300" y1="50" x2="400" y2="150" stroke="#000" strokeWidth="2" />
          {/* RAG -> LangGraph */}
          <line x1="200" y1="150" x2="200" y2="250" stroke="#000" strokeWidth="2" />
          {/* RAG -> Models */}
          <line x1="200" y1="150" x2="300" y2="250" stroke="#000" strokeWidth="2" />
          {/* LangChain -> Annotation */}
          <line x1="400" y1="150" x2="400" y2="250" stroke="#000" strokeWidth="2" />

          {/* Nodes (Circles + Text) */}
          {/* Root Node: LLMs */}
          <circle cx="300" cy="50" r="15" fill="#000" />
          <text
            x="300"
            y="50"
            fill="#fff"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            LLMs
          </text>

          {/* RAG */}
          <circle cx="200" cy="150" r="15" fill="#000" />
          <text
            x="200"
            y="150"
            fill="#fff"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            RAG
          </text>

          {/* LangChain */}
          <circle cx="400" cy="150" r="15" fill="#000" />
          <text
            x="400"
            y="150"
            fill="#fff"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            LangChain
          </text>

          {/* LangGraph */}
          <circle cx="200" cy="250" r="15" fill="#000" />
          <text
            x="200"
            y="250"
            fill="#fff"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            LangGraph
          </text>

          {/* Models */}
          <circle cx="300" cy="250" r="15" fill="#000" />
          <text
            x="300"
            y="250"
            fill="#fff"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            Models
          </text>

          {/* Annotation */}
          <circle cx="400" cy="250" r="15" fill="#000" />
          <text
            x="400"
            y="250"
            fill="#fff"
            fontSize="10"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            Annotation
          </text>
        </svg>
      </div>
    </section>
  );
}

export default SkillsSection;
