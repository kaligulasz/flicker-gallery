import { GET_IMAGE_DETAIL } from '../actions/imageDetailActions';

const imageDetail = (state = {
  details: {},
}, action) => {
  switch (action.type) {
    case GET_IMAGE_DETAIL:
      return {
        ...state,
        details: action.data,
      };
    default:
      return state;
  }
};

export const getImageDetail = state => state.imageDetail.details;

export default imageDetail;
