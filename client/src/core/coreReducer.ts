import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {History} from 'history'

import testReducer from 'library/common/reducers/testReducer'
import createPostReducer from 'library/common/reducers/createPostReducer'

const createCoreReducer = (history: History) => combineReducers({
	router: connectRouter(history),
	test: testReducer,
	createPost: createPostReducer,
})

export default createCoreReducer
