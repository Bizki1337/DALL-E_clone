import {Navigate, Route, Routes} from 'react-router-dom'

import Layout from './Layout'

import HomeContainer from 'pages/Home'
import CreatePostContainer from 'pages/CreatePost'

const CoreRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/home' element={<HomeContainer />} />
                    <Route path='/create_post' element={<CreatePostContainer />} />
                    <Route path='*' element={<Navigate replace to='/home' />} />
                </Route>
            </Routes>
        </>
    )
}

export default CoreRoutes