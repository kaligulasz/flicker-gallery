import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ item }) => {
  const imageStyles = {
    backgroundImage: `url('//farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg')`,
    height: '15vw',
    backgroundSize: 'cover',
    borderRadius: '5px',
  };

  return (
    <div style={imageStyles} />
  );
};

Thumbnail.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Thumbnail;
