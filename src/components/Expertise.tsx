import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "OpenAI",
    "LangChain",
    "LangGraph",
    "RAG",
    "LLM",
    "Hugging Face",
    "TensorFlow",
    "Python",
    "Streamlit",
    "Azure OpenAI"
];

const labelsSecond = [
    "PostgreSQL",
    "Neo4j",
    "Milvus",
    "ChromaDB",
    "FAISS",
    "SQL Server",
    "SQLite",
    "Python",
    "Java",
    "Azure"
];

const labelsThird = [
    "Python",
    "Java",
    "C++",
    "Angular",
    "Spring",
    "Docker",
    "Git",
    "Visual Studio Code",
    "Jira",
    "YAML"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Generative AI & LLM</h3>
                    <p>I specialize in building enterprise-grade Generative AI solutions using Large Language Models, RAG architectures, and cutting-edge AI frameworks to enable intelligent decision making and automation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Science & Engineering</h3>
                    <p>I design and implement robust data architectures, working with relational, vector, and graph databases to support AI and analytics workflows from data ingestion to insight generation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Research & Development</h3>
                    <p>I lead R&D projects using Agile methodologies, from requirements specification to deployment. I provide technical documentation, scientific publications, and knowledge transfer through presentations and training.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;