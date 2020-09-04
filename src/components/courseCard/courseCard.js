import React from 'react';
import './courseCard.css'

const courseCard = (props) => {
    const {img, courseName, description, uploaded, instructor, price} =props.courseData

    return (

                <div className="card col-md-4">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h3 className="card-title">{courseName}</h3>
                    <p className="card-text">{description}</p>
                    <small className="text-muted">Uploded: {uploaded}</small>
                    <h5>Course by: {instructor}</h5>
                    <h3>Price: {price}$</h3>

                    </div>
                    <div className="cardFooter"
                    onClick={() => props.handleAddCourse(props.courseData)}>
                        <button type="button" className="btn btn-success">Enroll Now</button>
                    </div>
                </div>
    );
};

export default courseCard;