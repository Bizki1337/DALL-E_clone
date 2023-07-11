import styles from './colorfulSpinner.module.scss'

const INITIAL_DIMENSION = 10
const INITIAL_BORDER_SIZE = 2

interface IColorfulSpinner {
	size?: number
}

const ColorfulSpinner = ({
	size = 1,
}: IColorfulSpinner) => (
	<span 
		className={styles.spinner}
		style={{
			width: INITIAL_DIMENSION * size,
			height: INITIAL_DIMENSION * size,
			border: `${INITIAL_BORDER_SIZE * size}px solid #5f6f97`
		}}
	/>
)

export default ColorfulSpinner