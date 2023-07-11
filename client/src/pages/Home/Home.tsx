import Button from 'library/components/Button'

import { ContainerProps } from './HomeContainer'

import styles from './home.module.scss'

const Home = ({
	title,
	isLoading,
	pushTestAction,
}: ContainerProps) => {
	return (
		<div className={styles.wrapper}>
			Welcome!
		</div>
	)
}

export default Home