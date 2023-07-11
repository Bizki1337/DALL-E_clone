import styles from './formFieled.module.scss'

interface IFormField {
	labelName: string
	type: string
	name: string
	placeholder: string
	value: string
	isSurpriseMe?: boolean
	handleChange: (e: any) => void
	handleSurpriseMe?: () => void
}

const FormFieled = ({
	labelName,
	type,
	name,
	placeholder,
	value,
	isSurpriseMe,
	handleChange,
	handleSurpriseMe, 
}: IFormField) => {
	return (
		<div>
			<div className={styles.labelWrapper}>
				<label
					htmlFor={name}
					className={styles.label}

				>
					{labelName}
				</label>
				{isSurpriseMe && (
					<button
						type='button'
						onClick={handleSurpriseMe}
						className={styles.surpriseMeButton}
					>
						Surprise me
					</button>
				)}
			</div>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={(e: any) => handleChange(e)}
				required
				className={styles.input}
			/>
		</div>
	)
}

export default FormFieled