import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import FormFieled from 'library/components/FormField'
import ColorfulSpinner from 'library/components/ColorfulSpinner'
import Info from 'library/components/Info'

import { getRandomPrompt } from 'library/utils/getRandomPrompt'

import previewPNG from 'resources/pictures/preview.png'

import styles from './createPost.module.scss'

const TITLE = 'Create'
const SUB_TITLE = 'Generate an imaginative image through DALL-E AI and share it with the community'

const CreatePost = () => {
	const navigate = useNavigate()
	const [form, setForm] = useState({
		name: '',
		prompt: '',
		photo: '',
	})
	const [generatingImg, setGeneratingImg] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleSumbit = () => {

	}

	const handleChange = (e: any) => {
		setForm({...form, [e.target.name]: e.target.value})
	}

	const handleSurpriseMe = () => {
		const randomPrompt = getRandomPrompt(form.prompt)
		setForm({...form, prompt: randomPrompt})
	}

	const generateImg = () => {

	}

	return (
		<div className={styles.wrapper}>
			<Info
				title={TITLE}
				subTitle={SUB_TITLE}
			/>
			<form
				className={styles.formWrapper}
				onSubmit={handleSumbit}
			>
				<div className={styles.innerWrapper}>
					<FormFieled
						labelName='Your name'
						type='text'
						name='name'
						placeholder='John Doe'
						value={form.name}
						handleChange={(e: any) => handleChange(e)}
					/>
					<FormFieled
						labelName='Prompt'
						type='text'
						name='prompt'
						placeholder='A Dinosaur exploring Cape Town, photography'
						value={form.prompt}
						handleChange={(e: any) => handleChange(e)}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>
				</div>
				<div>
					{form.photo ? (
						<img
							src={form.photo}
							alt={form.prompt}
							className={styles.photo}
						/>
					) : (
						<img
							src={previewPNG}
							alt='preview'
							className={styles.previewImg}
						/>
					)}

					{generatingImg && <ColorfulSpinner size={2} />}
				</div>

				<div>
					<button
						type='button'
						onClick={generateImg}
						className={styles.button}
					>
						{generatingImg ? 'Generating...' : 'Generate'}
					</button>
				</div>

				<div>
					<p>** Once you have created the image you want, you can share it with others in the community **</p>
					<button
						type='submit'
						className={styles.button}
					>
						{isLoading ? 'Sharing...' : 'Share with the Community'}
					</button>
				</div>
			</form>
		</div>
	)
}

export default CreatePost