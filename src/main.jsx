import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
)

function App2() {
	chrome.runtime.sendMessage({ message: "getRandomQuestion" }, (response) => {
		console.log("Response received:", response);
	});
	return (
		<>
			<h1 className='text-4xl font-bold bg-red-500'>hello world 3</h1>
		</>
	);
}