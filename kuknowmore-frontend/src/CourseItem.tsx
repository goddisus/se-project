import React from 'react';
import { Courses } from './interfaces';

type CourseItemProps = {
    course: Courses,
};

const CourseItem = (props: CourseItemProps) => {
    const course: Courses = props.course;

    return (
        <li>{course.number} - {course.title}</li>
    );
};

export default CourseItem;