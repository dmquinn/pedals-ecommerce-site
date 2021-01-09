import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import Dash from "./Dash";
import Header from "./Header";
import Products from "./Products";

function App() {
	// const USERS = [{ name: "Rob", age: 20 }];
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Header />
					<Dash />
					{/* <Dash users={USERS} /> */}
				</Route>
				<Route path="/products" exact>
					<Header />

					<Products />
				</Route>
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
