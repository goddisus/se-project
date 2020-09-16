import React, { useEffect, useState } from 'react';
import { Course } from './interfaces';
import './App.css';
import CourseItem from './components/CourseItem';
import NewCourseFrom from './components/NewCourseForm';

const App = () => {
  //type Courses from interfaces.ts
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  
  const toggleFormVisible = () => {
    //if true then show below
    //if false then invisible
    setFormVisible(!formVisible);
  };

  const fetchCourses = () => {
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(courses => {
      console.log(courses);
      setCourses(courses);
    });
  };

  const handleNewCourseCreated = (course: Course) => {
    fetchCourses();
    setFormVisible(false);
  }

  //check value change or not?
  useEffect(() => {
    fetchCourses();
  },[]);
  //

  return (
    <div className="App">
      <ul>
        {courses.map((item) => ( 
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
      <button onClick={toggleFormVisible}>New course</button>
      {formVisible &&
        <NewCourseFrom onNewCourseCreated={handleNewCourseCreated}/>
      }
    </div>
  );
}
export default App;


