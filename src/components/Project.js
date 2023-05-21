import React from 'react';
import '../css/Project.css';

const Project = (props) => {

  return (
    <div className="card-container col-lg-4 col-md-6 col-sm-12">
        <div className="card">
        <img src={props.image} className="card-img-top"
                alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                {props.des}
                </p>
                <div className="btn_wrapper">
                    <a href={props.deployURL}>Demo</a>
                    <a href={props.repo}>Repo</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project