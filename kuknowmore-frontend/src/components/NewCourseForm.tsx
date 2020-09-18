import React, {useState} from 'react';
import { Course } from '../interfaces';
import CoursesService from '../services/CoursesService';
type NewCourseFromProps = {
    onNewCourseCreated?: (newCourse: Course) => void,
};

const NewCourseFrom = (props: NewCourseFromProps) => {
    const [newCourseNumber, setNewCourseNumber] = useState<string>('');
    const [newCourseTitle, setNewCourseTitle] = useState<string>('');
    
    const handleNewCourseNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCourseNumber(e.target.value);
    };
      
    const handleSave = () => {
        const newCourse = {
            number: newCourseNumber,
            title: newCourseTitle,
        };

        CoursesService.createCourse(newCourse)
            .then(savedNewCourse => {
                if (savedNewCourse !== null) {
                    if (props.onNewCourseCreated !== undefined) {
                        props.onNewCourseCreated(savedNewCourse);
                    }
                } else{
                    alert("Save error");
                }
            });
    };
    
    return (
        <div>
            Number: <input value={newCourseNumber} onChange={handleNewCourseNumberChange}/><br />
            Title: <input value={newCourseTitle} onChange={(e) => {setNewCourseTitle(e.target.value);}}/> <br />
            <button onClick={handleSave}>Save</button>
        </div>
    )
};

export default NewCourseFrom;