import React from "react";
import Accordion from "./Accordion";

const Course = ({ course, active, setActive }) => {
  const { course: title, chapters } = course;
  return (
    <div className="course">
      <div className="title">{title}</div>
      <div>
        {chapters?.length > 0 &&
          chapters.map((chapter, index) => {
            return (
              <Accordion
                key={index}
                chapter={chapter}
                active={active}
                setActive={setActive}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Course;
