export const GET_GALLERY_LIST = 'GET_GALLERY_LIST';
export const GET_ADDITIONAL_GALLERY_LIST = 'GET_ADDITIONAL_GALLERY_LIST';

export const getGalleryList = data => ({
  type: GET_GALLERY_LIST,
  data,
});

export const getAdditionalGalleryList = data => ({
  type: GET_ADDITIONAL_GALLERY_LIST,
  data,
});
