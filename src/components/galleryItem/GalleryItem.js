import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Thumbnail from '../thumbnail/Thumbnail';
import './galleryItem.scss';

const GalleryItem = ({ item }) => (
  <div className="gallery-item">
    <Link to={`/image-details/${item.id}/${item.secret}`}>
      <Thumbnail item={item} />
    </Link>
  </div>
);

GalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default GalleryItem;
