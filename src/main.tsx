import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import Scope from './Scope'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Scope />
		{/* <App /> */}
	</React.StrictMode>
)
