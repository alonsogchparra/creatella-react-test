import React from 'react';
import IconsAddedModal from '../IconsAddedModal/IconsAddedModal';
import { connect } from 'react-redux'
import * as actions from '../../store/actions';


const modalCart = ({ icons, onRemoveAllIcons }) => {
  return (
    <div id="modal1" className="modal modal-fixed-footer">
      <div className="modal-content">
        <h4>Icons added</h4>
        <p>Check before press the BUY button</p>
        <IconsAddedModal icons={icons} />
      </div>
      <div className="modal-footer">
        <button
          className={ icons.length === 0 ?
            "modal-close waves-effect waves-green btn-flat disabled" :
            "modal-close waves-effect waves-green btn-flat"}
        >
        Buy
        </button>
        <button
          className={ icons.length === 0 ?
            "waves-effect waves-green btn-flat disabled" :
            "waves-effect waves-green btn-flat"}
          onClick={() => onRemoveAllIcons()}
        >
        Remove All
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps =  dispatch => {
  return {
    onRemoveAllIcons: () => dispatch(actions.removeAllIcons())
  }
}

export default connect(null, mapDispatchToProps)(modalCart);