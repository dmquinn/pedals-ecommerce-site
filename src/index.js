import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const express = require("express");
// const app = express();

// app.use(express.static("./public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();

// app.listen(3000, () => {
// 	console.log("serving on port 3000");
// });
