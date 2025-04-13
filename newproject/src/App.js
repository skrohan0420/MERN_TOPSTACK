import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import TestFetch from "./pages/TestFetch";
import TodoList from "./pages/TodoList";
import "./App.css";

const App = () => {


	// react components - react props
	// react JSX 
	// react froms - inputs
	// react hooks - useState, useEffect
	// react Array map
	// npm librerys - react-router-dom
	// react - fetch

	return (
		<>
			<BrowserRouter>
				<Routes>

					<Route path="/" element={<Layout />}>

						<Route index element={<Home />} />
						<Route path="blogs" element={<Blogs />} />
						<Route path="contact" element={<Contact />} />
						<Route path="fetch" element={<TestFetch />} />
						<Route path="todo-list" element={<TodoList />} />
						<Route path="*" element={<NoPage />} />

					</Route>

				</Routes>
			</BrowserRouter>
		</>
	)
};

export default App;