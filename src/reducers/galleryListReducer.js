import { GET_GALLERY_LIST, GET_ADDITIONAL_GALLERY_LIST } from '../actions/galleryListActions';

const galleryList = (state = {
  list: {},
}, action) => {
  switch (action.type) {
    case GET_GALLERY_LIST:
      return {
        ...state,
        list: action.data,
      };
    case GET_ADDITIONAL_GALLERY_LIST:
      return {
        ...state,
        list: {
          ...state.list,
          photos: {
            ...state.list.photos,
            photo: state.list.photos.photo.concat(action.data.photos.photo),
            page: action.data.photos.page,
          },
        },
      };
    default:
      return state;
  }
};

export const getGalleryList = state => state.galleryList.list;

export default galleryList;
