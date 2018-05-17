import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import GalleryItem from '../galleryItem/GalleryItem';

import './list.scss';

const List = ({ galleryList }) => (
  <Fragment>
    <div className="list">
      {galleryList.map(item => (<GalleryItem item={item} key={item.id} />))}
    </div>
  </Fragment>
);

List.propTypes = {
  galleryList: PropTypes.array.isRequired,
};

export default List;
