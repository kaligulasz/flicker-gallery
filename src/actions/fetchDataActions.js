import { getGalleryList, getAdditionalGalleryList } from './galleryListActions';
import { getImageDetail } from './imageDetailActions';

export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED';
export const FETCH_DATA_DONE = 'FETCH_DATA_DONE';
export const FETCH_IMAGE_DETAIL_DATA_DONE = 'FETCH_IMAGE_DETAIL_DATA_DONE';
export const FETCH_ADDITIONAL_DATA_START = 'FETCH_ADDITIONAL_DATA_START';
export const FETCH_ADDITIONAL_DATA_DONE = 'FETCH_ADDITIONAL_DATA_DONE';


export const getDataDone = data => ({
  type: FETCH_DATA_DONE,
  data,
});

export const getDataFailed = error => ({
  type: FETCH_DATA_FAILED,
  error,
});

export const getAdditionalDataDone = () => ({
  type: FETCH_ADDITIONAL_DATA_DONE,
});

export const getAdditionalDataStart = () => ({
  type: FETCH_ADDITIONAL_DATA_START,
});

export const getImageDetailDataDone = data => ({
  type: FETCH_IMAGE_DETAIL_DATA_DONE,
  data,
});

export const fetchGalleryListData = (defaultPage = 1) => (
  (dispatch) => {
    if (defaultPage !== 1) { dispatch(getAdditionalDataStart()); }
    fetch(`//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=928743d85fc985e795744c745ffe7896&tags=dogs&per_page=100&page=${defaultPage}&format=json&nojsoncallback=1`)
      .then(response => (
        response.json()
      ))
      .then((data) => {
        if (defaultPage === 1) {
          dispatch(getGalleryList(data));
          dispatch(getDataDone(data));
        } else {
          dispatch(getAdditionalGalleryList(data));
          dispatch(getAdditionalDataDone());
        }
      })
      .catch((error) => {
        dispatch(getDataFailed(error));
      });
  }
);

export const fetchImageDetailData = (photoId, secret) => (
  dispatch => (
    fetch(`//api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=928743d85fc985e795744c745ffe7896&photo_id=${photoId}&secret=${secret}&format=json&nojsoncallback=1`)
      .then(response => (
        response.json()
      ))
      .then((data) => {
        dispatch(getImageDetail(data));
        dispatch(getImageDetailDataDone(data));
      })
      .catch((error) => {
        dispatch(getDataFailed(error));
      })
  )
);