
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  App  from "./routes/App"
import  Single  from "./components/single";
import { Navbar } from "./components/navbar";
import injectContext from "./context/AppContext";
import { Footer } from "./components/footer";
import { Cart } from "./components/cart";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename =  "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/single/:theId" element={<Single />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);