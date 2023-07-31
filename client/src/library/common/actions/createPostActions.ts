import { createAsyncAction } from 'typesafe-actions'

import { IPost } from '../interfaces/createPostInterfaces'

import * as types from '../types/createPostTypes'

export const createImage = createAsyncAction(
	types.createImage.REQUEST,
	types.createImage.SUCCESS,
	types.createImage.FAILURE,
)<string, any, undefined>()

export const createPost = createAsyncAction(
	types.createPost.REQUEST,
	types.createPost.SUCCESS,
	types.createPost.FAILURE,
)<any, IPost, undefined>()