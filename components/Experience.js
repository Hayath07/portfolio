import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Experience = ({ title, cards }) => {
  return (
    <div id="experience" className="bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <VerticalTimeline
          // layout="1-column-left" // Ensures a single-column layout
          lineColor="light grey" // Customizes the line color
          style={{
            "--vertical-timeline-line-width": "10px", // Makes the line thinner
          }}
        >
          {cards?.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              icon={exp.icon}
              contentStyle={{ background: '#f0f0f0', color: '#333' }}
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <h4 className="text-md font-medium text-gray-600">{exp.company}</h4>
              <p className="text-sm mt-2">{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};