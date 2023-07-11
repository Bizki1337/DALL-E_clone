import { surpriseMePrompts } from 'library/common/data/prompts'


export const getRandomPrompt = (prompt: string) => {
	const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
	const randomPrompt = surpriseMePrompts[randomIndex]

	if (randomPrompt === prompt) getRandomPrompt(prompt)

	return randomPrompt
}