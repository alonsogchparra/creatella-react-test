import React from 'react';
import IconItemAdded from '../IconsList/IconItemAdded/IconItemAdded';

const iconsAddedModal = ({ icons }) => {

  const displayIcons = icons.length === 0 ? (
      <h3>Not icons added yet.</h3>
  ) : (
    <div className="row">
      {icons.map(icon => {
        const currency = icon.price / 100;
        return (
          <IconItemAdded
            key={icon.id}
            icon={icon}
            currency={currency}
          />
        )
      })}
    </div>
  );

  return (
    <div>
      {displayIcons}
    </div>
  )
}

export default iconsAddedModal;