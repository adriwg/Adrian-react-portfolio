import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/InfoGroup.css';

const InfoGroup = (props) => {
  return (
    <div className="info_group">
            <div className="info_icon">
            <FontAwesomeIcon icon={props.icon} size="2xl" style={{color: "#303944",}} />
            </div>  
            <div className="info_text">
          <div className="info_title">{props.title}:</div>
              <a href={props.link} className="info_link">{props.linkName}</a>
            </div>
          </div>
  )
}

export default InfoGroup