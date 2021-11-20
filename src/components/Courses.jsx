import React, { useState } from "react";
import { courses } from "../data/courses";
import Course from "./Course";
import "../styling/_course.scss";

const Courses = () => {
  const [active, setActive] = useState();

  return (
    <div className="courses">
      {courses.map((course, index) => {
        return (
          <Course
            key={index}
            course={course}
            active={active}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
};

export default Courses;
