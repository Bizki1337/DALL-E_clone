import { IPost } from '../interfaces/createPostInterfaces'

import {fetch} from 'library/utils/fetch'

export const genereteImage = (prompt: string) => 
	fetch.post(`/dalle`, {prompt})

export const createPost = (data: IPost) => 
	fetch.post(`/post`, data)