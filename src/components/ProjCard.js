import React from 'react';
import '../css/ProjCard.css';

const ss = require('../assets/images/ss_travel_app.png'); // with require

const ProjCard = () => {
  return (
    <div className="card-container col-lg-4 col-md-6 col-sm-12">
        <div className="card">
            <img src={ss} className="card-img-top"
                alt="Travel app - StayExplorer"/>
            <div className="card-body">
                <h5 className="card-title">Travel App - StayExplorer</h5>
                <p className="card-text">
                <span>HTML</span><span>JAVASCRIPT</span><span>CSS</span>
                </p>
                <div className="find_out_more"></div>
            </div>
        </div>
    </div>
  )
}

export default ProjCard