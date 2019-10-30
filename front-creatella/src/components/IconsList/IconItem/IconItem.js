import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';


const iconItem = ({ icon, currency, M, onAddIconsCart }) => {

 const addCartHandler = () => {
    M.toast({html:`Face: ${icon.face} added Cart`});
    onAddIconsCart(icon);
  }

  return (
    <div className="col s12 m4">
      <div className="card small">
        <div className="card-title">
          <span style={{fontSize: icon.size}}>{icon.face}</span>
        </div>
        <div className="card-content">
          <p><strong>Size: </strong>{icon.size} px</p>
          <p><strong>Price: </strong>${currency}</p>
          <p><strong>Date: </strong>{new Date(icon.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
          <div className="card-action">
            <button className="waves-effect waves-light btn-small" onClick={addCartHandler}>
              Add Cart <i className="material-icons right">add_shopping_cart</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAddIconsCart: (icons) => dispatch(actions.addIcons(icons))
  }
}

export default connect(null, mapDispatchToProps)(iconItem);