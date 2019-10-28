import React from 'react';
import './Spinner.css';

const spinner = (props) => (
  <div className="container_spinner">
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
    <h4>Loading...</h4>
  </div>
);

export default spinner;