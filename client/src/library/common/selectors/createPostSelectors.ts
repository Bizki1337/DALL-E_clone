import {RootState} from 'core/store/configureStore'

export const getCreatePostPhotoIsLoading = (state: RootState) => state.createPost.isPhotoLoading
export const getCratePostData = (state: RootState) => state.createPost.photoText

export const getCreatePostSharingIsLoading = (state: RootState) => state.createPost.isSharingLoading