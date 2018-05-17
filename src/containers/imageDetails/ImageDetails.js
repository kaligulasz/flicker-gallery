import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { fetchImageDetailData } from '../../actions/fetchDataActions';

// Reducers
import { getImageDetail } from '../../reducers/imageDetailReducer';
import { getImageDetailStatus } from '../../reducers/fetchDataReducer';

// Components
import Image from '../../components/image/Image';

class ImageDetails extends Component {
  static propTypes = {
    onFetchImageDetails: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    imageDetail: PropTypes.object.isRequired,
    imageDetailStatus: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.onFetchImageDetails(this.props.match.params.id);
  }

  render() {
    const {
      photo,
    } = this.props.imageDetail;

    return (
      <Fragment>
        {this.props.imageDetailStatus === 'successful' &&
          <div>
            <Image photo={photo} />
            <p>Author: {photo.owner.realname}</p>
            <p>Description: {photo.description._content}</p>
            <p>Date: {photo.dates.taken}</p>
          </div>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => (
  {
    imageDetail: getImageDetail(state),
    imageDetailStatus: getImageDetailStatus(state),
  }
);

export default connect(
  mapStateToProps,
  {
    onFetchImageDetails: fetchImageDetailData,
  },
)(ImageDetails);
