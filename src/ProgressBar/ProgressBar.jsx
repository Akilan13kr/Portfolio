import React from 'react';
import './ProgressBar.css'

function ProgressBar(props) {
  return (
    <div className="col-sm-6">
      <div className="skill-bar wow slideInRight" data-wow-delay="0.2s">
        <div className="progress-lebel">
          <h4>{props.label}</h4>
        </div>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={props.value}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: props.value + '%' }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
