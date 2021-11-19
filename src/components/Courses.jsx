import React, { useState, useEffect } from "react";
import { courses as courseData } from "../data/courses";
import Course from "./Course";
import "../styling/_course.scss";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [active, setActive] = useState();

  useEffect(() => {
    if (courseData) {
      setCourses(courseData);
    }
  }, [courseData]);

  return (
    <div className="courses">
      {courses.map((course) => {
        return <Course course={course} active={active} setActive={setActive} />;
      })}
    </div>
  );
};

export default Courses;
