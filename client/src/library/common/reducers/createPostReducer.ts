import {ActionType, getType} from 'typesafe-actions'

import * as actions from '../actions/createPostActions'

export type TestState = Readonly<{
	isPhotoLoading: boolean
	isSharingLoading: boolean
	isError: boolean
	photoText: string
}>

const initialState: TestState = {
	isPhotoLoading: false,
	isSharingLoading: false,
	isError: false,
	photoText: '',
}

const authReducer = (
	state = initialState,
	action: ActionType<typeof actions>
): TestState => {

	switch (action.type) {

		case getType(actions.createImage.request):
			return {
				...state,
				isPhotoLoading: true,
			}

		case getType(actions.createImage.success):
			return {
				...state,
				photoText: action.payload,
				isPhotoLoading: false
			}

		case getType(actions.createImage.failure):
			return {
				...state,
				isPhotoLoading: false,
				isSharingLoading: false,
				isError: true,
			}

		case getType(actions.createPost.request):
			return {
				...state,
				isSharingLoading: true,
			}

		case getType(actions.createPost.success):
			return {
				...state,
				isSharingLoading: false,
				isError: false,
			}

		case getType(actions.createPost.failure):
			return {
				...state,
				isSharingLoading: false,
				isError: true,
			}

		default:
			return state
	}
}

export default authReducer