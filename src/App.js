import "./App.css";
import {
	Route,
	Routes,
	Switch,
	BrowserRouter,
	useNavigationType,
	useNavigate,
} from "react-router-dom";

import HomePage from "./pages/homepage/Hompage.Component";

function App() {
	return (
		<div className='App'>
			<>
				<Routes>
					<Route exact path='/' element={<HomePage />} />
				</Routes>
			</>
			-
		</div>
	);
}

// swithc is removed and we use routes now  it was used to allow to mathc one component and render it

export default App;
