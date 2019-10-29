import React from 'react';
import IconsAddedModal from '../IconsAddedModal/IconsAddedModal';

const modalCart = ({ icons }) => {
  return (
    <div id="modal1" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Icons added</h4>
        <p>Check before press the BUY button</p>
        <IconsAddedModal icons={icons} />
      </div>
      <div className="modal-footer">
        <button className={ icons.length === 0 ?  "modal-close waves-effect waves-green btn-flat disabled" : "modal-close waves-effect waves-green btn-flat"}>Agree</button>
      </div>
    </div>
  )
}

export default modalCart;