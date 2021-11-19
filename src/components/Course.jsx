import React from "react";
import Accordion from "./Accordion";

const Course = ({ course, active, setActive }) => {
  const { course: title, chapters } = course;
  return (
    <div className="course">
      <div className="title">{title}</div>
      <div>
        {chapters?.length > 0 &&
          chapters.map((chapter) => {
            return (
              <Accordion
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
