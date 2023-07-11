import {fetch} from 'library/utils/fetch'

export const loadTestDataRequest = () => 
	fetch.get(`/some_endPoint`)