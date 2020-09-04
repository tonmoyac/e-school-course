import React from 'react';
import courseData from '../../fakeData/courseData';
import { useState } from 'react';
import './Course.css';
import CourseCard from '../courseCard/courseCard'
import EnrollCart from '../EnrollCart/EnrollCart';

const Course = () => {
    const [courses] = useState(courseData);

    const [enrollCart, setEnrollcart] = useState([]);

    const handleAddCourse = (course) => {
        const newEnrollCart =[...enrollCart, course];
        setEnrollcart(newEnrollCart)
    }
    return (
        <div className="container">
            <div className="row">
            <div className="course-container col-md-9">
            <div className="card-group">
                <div className="row">
                {
                    courses.map(course => <CourseCard 
                    courseData={course}
                    handleAddCourse={handleAddCourse}
                >
                        </CourseCard>)
                }
                </div>
            </div>
            </div>
            <div className="enrolled-container col-md-3 d-flex align-items-center">
                <EnrollCart enrollCart={enrollCart} ></EnrollCart>
            </div>
            </div>
        </div>
    );
};

export default Course;