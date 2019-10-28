import React from 'react';

const iconItem = ({icon, currency}) => {

  return (
    <div className="col s12 m4">
      <div className="card small">
        <div className="card-title">
          <span style={{fontSize: icon.size}}>{icon.face}</span>
        </div>
        <div className="card-content">
          <p><strong>Size: </strong>{icon.size} px</p>
          <p><strong>Price: </strong>${currency}</p>
          <div className="card-action">
            <button className="waves-effect waves-light btn-small">Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default iconItem;