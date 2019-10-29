import React from 'react';

const sortPanel = ({ sortByPrice, sortBySize, sortByDate, sortById }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="center"><h4>Sort by:</h4></div>
        <div className="col s3 m3">
          <button
            className="waves-effect waves-light btn"
            onClick={sortByPrice}
          >
          Price
          </button>
        </div>
        <div className="col s3 m3">
          <button
            className="waves-effect waves-light btn"
            onClick={sortByDate}
          >
          Date
          </button>
        </div>
        <div className="col s3 m3">
          <button
            className="waves-effect waves-light btn"
            onClick={sortBySize}
          >
          Size
          </button>
        </div>
        <div className="col s3 m3">
          <button
            className="waves-effect waves-light btn"
            onClick={sortById}
            >
            Default
          </button>
        </div>
      </div>
    </div>
  )
}

export default sortPanel;