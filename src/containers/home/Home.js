import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { fetchGalleryListData } from '../../actions/fetchDataActions';

// Reducers
import { getGalleryList } from '../../reducers/galleryListReducer';
import { getAppStatus, getAdditionalDataLoading } from '../../reducers/fetchDataReducer';

// Components
import List from '../../components/list/List';
import Loader from '../../components/loader/Loader';
import Error from '../../components/error/Error';

// Styles
import './home.scss';

class Home extends Component {
  static propTypes = {
    onFetchGalleryListData: PropTypes.func.isRequired,
    appStatus: PropTypes.string.isRequired,
    galleryList: PropTypes.object.isRequired,
    additionalDataLoading: PropTypes.bool.isRequired,
  };

  state = {
    prevObserverPosition: 0,
    page: 1,
  }

  componentDidMount() {
    if (this.props.appStatus === 'loading') {
      this.props.onFetchGalleryListData();
    }

    if (this.props.appStatus === 'successful') {
      this.infiniteScrollObserver();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.appStatus !== prevProps.appStatus
      && this.props.appStatus === 'successful'
    ) {
      this.infiniteScrollObserver();
    }

    if (
      this.props.additionalDataLoading !== prevProps.additionalDataLoading
    ) {
      this.infiniteScrollObserver();
    }
  }

  loadingRef = React.createRef();

  infiniteScrollObserver = () => {
    // Observer options
    const options = {
      threshold: 1.0,
    };

    // Create an observer
    this.observer = new IntersectionObserver(this.handleObserver.bind(this), options);

    // Observ the `loadingRef`
    this.observer.observe(this.loadingRef.current);
  }

  handleObserver = (entities) => {
    const actualObserverPosition = entities[0].boundingClientRect.y;

    if (this.state.prevObserverPosition > actualObserverPosition) {
      this.props.onFetchGalleryListData(this.state.page + 1);
      this.setState({ page: this.state.page + 1 });
    }

    this.setState({ prevObserverPosition: actualObserverPosition });
  }

  render() {
    const {
      appStatus,
      galleryList,
    } = this.props;

    return (
      <div className="home">
        <h1>Gallery</h1>
        { appStatus === 'successful' &&
        <Fragment>
          <List galleryList={galleryList.photos.photo} />
          <div
            className="home__infinite-scroll-wrapper"
            ref={this.loadingRef}
          />
          {this.props.additionalDataLoading && <Loader />}
        </Fragment>
        }

        { appStatus === 'loading' &&
          <Loader />
        }
        <Error error={this.props.appStatus} />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    appStatus: getAppStatus(state),
    galleryList: getGalleryList(state),
    additionalDataLoading: getAdditionalDataLoading(state),
  }
);

export default connect(
  mapStateToProps,
  {
    onFetchGalleryListData: fetchGalleryListData,
  },
)(Home);
