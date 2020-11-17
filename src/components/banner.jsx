import React from 'react';

const banner = props => {
  const { waves } = props
  return (
    <div>
      <img className="banner-img" src={waves} alt="waves banner at the bottom of the screen" />
    </div>
  );
}

export default banner;
