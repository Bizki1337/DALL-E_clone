import {all, fork} from 'redux-saga/effects'

import testSaga from 'library/common/sagas/testSaga'
import createPostSaga from 'library/common/sagas/createPostSaga'

export default function* coreSaga() {
	yield all([
		fork(testSaga),
		fork(createPostSaga),
	])
}
