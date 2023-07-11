import Button from 'library/components/Button'
import { useNavigate } from 'react-router-dom'
import logoSVG from 'resources/icons/logo.svg'

import styles from './header.module.scss'

const Header = () => {

	const navigate = useNavigate()

	return (
		<div className={styles.wrapper}>
			<img
				src={logoSVG}
				className={styles.logo}
				onClick={() => navigate('/home')}
			/>
			<button
				className={styles.button}
				onClick={() => navigate('/create_post')}
			>
				Create
			</button>
		</div>
	)
}

export default Header