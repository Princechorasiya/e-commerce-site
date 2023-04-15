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
import ShopPage from "./pages/shop/Shop.Page";
import Header from "./components/header/HeaderComponent";

function App() {
	return (
		<div className='App'>
			<Header />
			<>
				<Routes>
					<Route exact path='/' element={<HomePage />} />
					<Route path='/shop' element={<ShopPage />} />
				</Routes>
			</>
		</div>
	);
}

// swithc is removed and we use routes now  it was used to allow to mathc one component and render it

export default App;
