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
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';

import './imageDetails.scss';

class ImageDetails extends Component {
  static propTypes = {
    onFetchImageDetails: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    imageDetail: PropTypes.object.isRequired,
    imageDetailStatus: PropTypes.string.isRequired,
  };

  componentDidMount() {
    this.props.onFetchImageDetails(
      this.props.match.params.id,
      this.props.match.params.secret,
      this.props.match,
    );
  }

  render() {
    const {
      photo,
    } = this.props.imageDetail;

    return (
      <Fragment>
        {this.props.imageDetailStatus === 'successful' &&
          <div className="image-details">
            <div className="image-details__image">
              <Image photo={photo} />
            </div>
            <div className="image-details__data">
              {photo.owner.realname && <p className="image-details__data-item"><span className="image-details__title">Author:</span> {photo.owner.realname}</p>}
              {photo.description._content &&
                <p className="image-details__data-item">
                  <span className="image-details__title">Description: </span>
                  <span dangerouslySetInnerHTML={{ __html: photo.description._content }} />
                </p>
                }
              {photo.dates.taken && <p className="image-details__data-item"><span className="image-details__title">Date:</span> {photo.dates.taken}</p>}
            </div>
          </div>
        }
        {this.props.imageDetailStatus === 'loading' &&
          <Loader />
        }
        <Error error={this.props.imageDetailStatus} />
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
