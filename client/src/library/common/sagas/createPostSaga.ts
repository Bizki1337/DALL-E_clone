import {call, put, takeLatest} from 'redux-saga/effects'
import {push} from 'connected-react-router'

import * as api from '../apis/createPostApi'
import * as types from '../types/createPostTypes'
import * as actions from '../actions/createPostActions'

function* createImageSaga(action: ReturnType<typeof actions.createImage.request>) {
	try {
		const {data: data} = yield call(api.genereteImage, action.payload)
		yield put(actions.createImage.success(data.photo))
	} catch (error: unknown) {
        yield put(actions.createImage.failure())
		if (error instanceof Error) {
			console.error(error)
		}
	}
}

function* createPostSaga(action: ReturnType<typeof actions.createPost.request>) {
	try {
		const {data: data} = yield call(api.createPost, action.payload)
		console.log('data', data)
		yield put(push('/'))
		// yield put(actions.createPost.success())
	} catch (error: unknown) {
        yield put(actions.createPost.failure())
		if (error instanceof Error) {
			console.error(error)
		}
	}
}

export default function* test() {
	yield takeLatest(types.createImage.REQUEST, createImageSaga)
	yield takeLatest(types.createPost.REQUEST, createPostSaga)
}