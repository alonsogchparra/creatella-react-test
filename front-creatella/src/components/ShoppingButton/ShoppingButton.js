import React from 'react';

const shoppingButton = (props) => {
  return (
    <div className="fixed-action-btn">
      <a className="btn-floating btn-large blue-grey darken-4 waves-effect waves-light btn modal-trigger" href="#modal1">
        <i className="large material-icons">shopping_cart</i>
      </a>
    </div>
  );
}

export default shoppingButton;