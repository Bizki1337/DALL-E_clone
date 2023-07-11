import {Outlet} from 'react-router-dom'

import Header from 'library/common/frames/Header'

import styles from './routeStyles.module.scss'

const Layout = () => {

	return (
		<div className={styles.container}>
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout