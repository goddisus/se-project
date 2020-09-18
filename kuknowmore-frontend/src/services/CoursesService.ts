import { Course, Review} from '../interfaces';
import { baseUrl } from '../config/const';

async function fetchCourses(): Promise<Course[]> {
    const res = await fetch(`${baseUrl}/courses`);
    const courses = await res.json();
    return courses;  
}

async function createCourse(newCourse: Course): Promise<Course|null> {
    const res = await fetch(`${baseUrl}/courses`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newCourse),
    });
    const savedNewCourse: Course = await res.json();
    if (savedNewCourse.id !== undefined) {
        return savedNewCourse;
    } else{
        return null;
    }
}

async function fetchReviews(courseId: string): Promise<Review[]> {
    const res = await fetch(`${baseUrl}/courses/${courseId}/review`);
    const reviews = await res.json();
    return reviews;  
}

export default {
    fetchCourses,
    createCourse,
    fetchReviews,
};