import React, { useEffect, useState } from 'react';
import { Course } from './interfaces';
import './App.css';
import NewCourseForm from './components/NewCourseForm';
import CourseItem from './components/CourseItem';
import NewCourseFrom from './components/NewCourseForm';

const App = () => {
  //type Courses from interfaces.ts
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [newCourseNumber, setNewCourseNumber] = useState<string>('');
  const [newCourseTitle, setNewCourseTitle] = useState<string>('');
  
  const toggleFormVisible = () => {
    //if true then show below
    //if false then invisible
    setFormVisible(!formVisible);
  };

  //check value change or not?
  useEffect(() => {
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(courses => {
      console.log(courses);
      setCourses(courses);
    });
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
        <NewCourseFrom />
      }
    </div>
  );
}
export default App;


