import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="November 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Research & Development Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">TALAN</h4>
            <p>
              Generative AI, Research & Development, Software Engineering, Technical Innovation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">PhD in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">IRISA Research Unit - TARAN Team, University of Rennes</h4>
            <p>
              Research & Development Engineer, Artificial Intelligence, Advanced Computing, Scientific Research
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">ENSTA - Systems, IT, Telecommunications & Security</h4>
            <p>
              Systems Engineering, Information Technology, Telecommunications, Cybersecurity
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2019 - September 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">End-of-Studies Internship</h3>
            <h4 className="vertical-timeline-element-subtitle">Orange, Rennes</h4>
            <p>
              Telecommunications, Network Engineering, Industry Experience, Research & Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">Lebanese University - Computer Networks & Telecommunications Engineering</h4>
            <p>
              Network Engineering, Telecommunications, Computer Systems, Foundation in Technology
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;