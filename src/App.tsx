import axios from 'axios'
import { useEffect, useState } from 'react'

interface AppType {
	name: string
	key: number
}

function App() {
	const [loading, setLoading] = useState(true)
	const [data, setData] = useState([])
	const [value, setValue] = useState('')

	async function getData() {
		try {
			const { data } = await axios.get(
				'https://api-v2.elchocrud.pro/api/v1/821b04d959337916f9343a048907dc62/get-roma'
			)
			console.log(data)
			setLoading(false)
			setData(data)
		} catch (error) {
			console.log(`Error getting data: ${error}`)
			setLoading(false)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	async function postData() {
		const { data } = await axios.post(
			'https://api-v2.elchocrud.pro/api/v1/821b04d959337916f9343a048907dc62/get-roma',
			{ name: value }
		)
		getData()
		console.log(data)
	}
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{data.map((item: AppType, key: number) => (
						<h1 key={key}>{item.name}</h1>
					))}
				</div>
			)}

			<div>
				<input type='text' onChange={e => setValue(e.target.value)} />
				<button onClick={postData}>add</button>
			</div>
		</div>
	)
}

export default App
