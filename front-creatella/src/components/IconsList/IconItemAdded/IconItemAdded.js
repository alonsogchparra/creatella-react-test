import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../store/actions';


const iconItemAdded = ({ icon, currency, onRemoveIcon }) => {

  return (
    <div className="col s12 m4">
      <div className="card small">
        <div className="card-title">
          <span style={{ fontSize: icon.size }}>{ icon.face }</span>
        </div>
        <div className="card-content">
          <p><strong>Size: </strong>{icon.size} px</p>
          <p><strong>Price: </strong>${currency}</p>
          <p><strong>Date: </strong>{new Date(icon.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
          <div className="card-action">
            <button
              className="waves-effect waves-light btn-small"
              onClick={() => onRemoveIcon(icon.id)}
              >
              Remove Icon <i className="material-icons right">remove_shopping_cart</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveIcon: (id) => dispatch(actions.removeIcon(id))
  }
}

export default connect(null, mapDispatchToProps)(iconItemAdded);