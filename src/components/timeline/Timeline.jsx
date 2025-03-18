import React, { useEffect, useRef, useState } from 'react';
import './timeline.scss';

const events = [
  {
    startDate: new Date(2024, 6, 1),
    endDate: null, // Ongoing
    description: "USC Information Technology Services",
    details: "Software Engineer (A/V)",
    color: "#FF6B6B"
  },
  {
    startDate: new Date(2023, 0, 1),
    endDate: new Date(2023, 11, 31),
    description: "USC Viterbi School of Engineering",
    details: "Graduate Teaching Assistant (CSCI 544: Applied NLP)",
    color: "#FF9F1C"
  },
  // {
  //   startDate: new Date(2022, 9, 1),
  //   endDate: new Date(2024, 4, 31),
  //   description: "USC Information Technology Services",
  //   details: "LE Engineering Assistant",
  //   color: "#FF6B6B"
  // },
  {
    startDate: new Date(2022, 7, 1),
    endDate: new Date(2024, 4, 31),
    description: "University of Southern California",
    details: "Master of Science in Computer Science (GPA: 3.5/4.0)",
    color: "#4ECDC4"
  },
  {
    startDate: new Date(2022, 0, 1),
    endDate: new Date(2022, 4, 31),
    description: "Sensussoft Software Pvt Ltd",
    details: "Software Development Engineer Intern",
    color: "#45B7D1"
  },
  {
    startDate: new Date(2020, 6, 1),
    endDate: new Date(2020, 9, 31),
    description: "Singular Informatics Pvt Ltd",
    details: "Software Development Engineer Intern",
    color: "#FF9F1C"
  },
  {
    startDate: new Date(2018, 7, 1),
    endDate: new Date(2022, 4, 31),
    description: "SRM Institute of Science and Technology",
    details: "B. Tech in Computer Science and Engineering (GPA: 3.7/4.0)",
    color: "#4ECDC4"
  }
];

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  const formatDateRange = (start, end) => {
    const formatDate = (date) => date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    return end ? `${formatDate(start)} - ${formatDate(end)}` : `${formatDate(start)} - Present`;
  };

  return (
    <div className={`timeline ${isVisible ? 'visible' : ''}`} ref={timelineRef} style={{ position: 'relative' }}>
      <div className="timeline-line"></div>
      {events.map((event, index) => (
        <div key={index} className={`event ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="event-content" style={{ backgroundColor: event.color }}>
            <h3>{formatDateRange(event.startDate, event.endDate)}</h3>
            <h4>{event.description}</h4>
            <p>{event.details}</p>
          </div>
          <div className="event-dot" style={{ backgroundColor: event.color }}></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
