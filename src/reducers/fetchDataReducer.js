import {
  FETCH_DATA_DONE,
  FETCH_DATA_FAILED,
  FETCH_IMAGE_DETAIL_DATA_START,
  FETCH_IMAGE_DETAIL_DATA_DONE,
  FETCH_ADDITIONAL_DATA_START,
  FETCH_ADDITIONAL_DATA_DONE,
} from '../actions/fetchDataActions';

const apiData = (state = {
  list: [],
  appStatus: 'loading',
  imageDetailStatus: 'loading',
  additionalDataLoading: false,
}, action) => {
  switch (action.type) {
    case FETCH_DATA_DONE:
      return {
        ...state,
        list: action.data,
        appStatus: 'successful',
      };
    case FETCH_DATA_FAILED:
      return {
        ...state,
        appStatus: 'failed',
      };
    case FETCH_ADDITIONAL_DATA_START:
      return {
        ...state,
        additionalDataLoading: true,
      };
    case FETCH_ADDITIONAL_DATA_DONE:
      return {
        ...state,
        additionalDataLoading: false,
      };
    case FETCH_IMAGE_DETAIL_DATA_START:
      return {
        ...state,
        imageDetailStatus: 'loading',
      };
    case FETCH_IMAGE_DETAIL_DATA_DONE:
      return {
        ...state,
        imageDetailStatus: 'successful',
      };
    default:
      return state;
  }
};

export const getAppStatus = state => state.apiData.appStatus;
export const getImageDetailStatus = state => state.apiData.imageDetailStatus;
export const getAdditionalDataLoading = state => state.apiData.additionalDataLoading;

export default apiData;
