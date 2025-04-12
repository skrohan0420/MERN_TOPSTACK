import React, { useState, useEffect } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
	// react components - react props
	// react JSX 
	// react froms - inputs
	// react hooks - useState, useEffect
	// react Array map
	// NPM librery


	const notify = () => toast.info('Wow so easy!', {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});


	return (
		<>
			<button onClick={notify}>Notify!</button>
			<ToastContainer />
		</>
	)
}

export default App;
