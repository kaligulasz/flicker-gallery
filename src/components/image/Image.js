import React from 'react';
import PropTypes from 'prop-types';

import './image.scss';

const Image = ({ photo, fullwidth }) => {
  const fullwidthClass = fullwidth ? 'image-item--fullwidth' : '';

  return (
    <img
      className={`image-item${fullwidthClass}`}
      src={`//farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
      alt={photo.owner.description || 'flickr image'}
    />
  );
};

Image.propTypes = {
  photo: PropTypes.object.isRequired,
  fullwidth: PropTypes.bool,
};

Image.defaultProps = {
  fullwidth: false,
};

export default Image;
