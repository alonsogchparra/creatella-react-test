import React from 'react';
import IconItem from './IconItem/IconItem';

const iconList = ({icons}) => (
  <div>
    <div className="row">
      {icons.map(icon => {
        const currency = icon.price / 100;
        return (
          <IconItem key={icon.id} icon={icon} currency={currency} />
        )
      })}
    </div>
  </div>
);

export default iconList;