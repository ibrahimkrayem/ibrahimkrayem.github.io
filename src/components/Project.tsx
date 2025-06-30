import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
                <h2>RFP Analyzer - AI for Tender Processing</h2>
                <p>Developed a GenAI prototype to optimize tender response processes at Talan, improving efficiency and relevance of responses using LLM and RAG technologies.</p>
            </div>
            <div className="project">
                <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                <h2>AMM RAG - Multimodal Insurance System</h2>
                <p>Built a multimodal multi-agent RAG system for processing structured and unstructured insurance documents. Published results at Intellisys international conference.</p>
            </div>
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Digital Twins & AI Optimization</h2>
                <p>Developed organizational digital twins enhanced with generative AI for real-time business process simulation and decision optimization, focusing on resilience and risk anticipation.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <h2>LLM for Optimization Problems</h2>
                <p>Created automated evaluation tools for optimization models using LLMs with adapted vocabularies, chain-of-thought reasoning, and iterative optimization approaches.</p>
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                <h2>T2I Benchmark - Text-to-Image Evaluation</h2>
                <p>Developed automated evaluation tools and web applications for assessing text-to-image model quality, validated through human evaluation studies.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                <h2>NoC Performance Analysis - Multicore Architecture</h2>
                <p>Developed algorithms for Network-on-Chip performance analysis using Poisson distribution windows and created hybrid simulators combining analytical models for architecture exploration.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Hybrid NoC Analytical Model</h2>
                <p>Created Python-based analytical models using queuing theory for hybrid Network-on-Chip performance evaluation, achieving 500x speed improvement over traditional simulators.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Embedded Virtualization Research</h2>
                <p>Researched embedded virtualization solutions and developed low-cost hardware client prototypes on Raspberry Pi for cloud computing applications at Orange.</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Cloud PC Performance Evaluation</h2>
                <p>Compared HTML5 vs. thick client performance in embedded systems and implemented Citrix solutions for Orange's Cloud PC project during internship.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ibrahimkrayem" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ibrahimkrayem" target="_blank" rel="noreferrer"><h2>GitHub Portfolio & Research Code</h2></a>
                <p>Explore my complete codebase including React portfolio, AI research implementations, NoC simulators, and various R&D projects on GitHub.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;