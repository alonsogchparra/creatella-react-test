import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import IconItem from './IconItem/IconItem';

const iconList = ({ icons, M }) => {

  const displayContent = icons.length === 0 ?
    <Spinner /> : (
      <div>
        <div className="row">
        {icons.map(icon => {
          const currency = icon.price / 100;
          return (
            <IconItem
              key={icon.id}
              icon={icon}
              currency={currency}
              M={M}
            />
          )
        })}
      </div>
      <h4>"~ end of catalogue ~"</h4>
    </div>
  )

  return (
  <div>
    {displayContent}
  </div>
  );

};

export default iconList;