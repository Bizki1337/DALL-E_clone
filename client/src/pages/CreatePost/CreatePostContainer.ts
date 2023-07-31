import {connect} from 'react-redux'

import {RootState} from 'core/store/configureStore'

import * as actions from 'library/common/actions/createPostActions'
import * as selectors from 'library/common/selectors/createPostSelectors'

import CreatePost from './CreatePost'

const mapStateToProps = (store: RootState) => ({
	isPhotoLoading: selectors.getCreatePostPhotoIsLoading(store),
	isSharingLoading: selectors.getCreatePostSharingIsLoading(store),
	photoText: selectors.getCratePostData(store)
})

const mapDispatchToProps = {
	generateImage: actions.createImage.request,
	createPost: actions.createPost.request,
}

export type ContainerProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
