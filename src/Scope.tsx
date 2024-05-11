// const textOne = 'hello one'

// console.log(textOne)

const Scope = () => {
	if (true) {
		const textTwo = 'text two'
	}
	console.log(textTwo)

	return <div>scope</div>
}

export default Scope
