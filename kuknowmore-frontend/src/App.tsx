import React, { useEffect, useState } from 'react';

import './App.css';
import { Courses } from './interfaces';
import CourseItem from './CourseItem';
//

const App = () => {
  //type Courses from interfaces.ts
  const [courses, setCourses] = useState<Courses[]>([]);

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
    </div>
  );
}
export default App;


