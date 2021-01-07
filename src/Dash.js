import React from "react";
import "./dash2.css";

function Dash(props) {
	return (
		<div>
			<div className="main">
				<div className="box productsContainer">
					{/* <h1> HELLO {props.users[0].name}</h1> */}

					<a
						className="products"
						href="C:/Users/Dell/Desktop/CODE/pedals/products.html"
					>
						<h2 className="ProductsHeader">PRODUCTS</h2>
						<img
							className="pedalOne"
							src="/frontPedal.png"
							alt="chorusPedal"
						/>
						{/* <img
						className="pedalOneLine"
						src="frontPedalLine.svg"
						alt="chorusPedal"
					/> */}
					</a>
				</div>
				<div className="box customiseContainer">
					<a
						className="customise"
						href="C:/Users/Dell/Desktop/CODE/pedals/customise.html"
					>
						<h2 className="customiseHeader">CUSTOMISE</h2>
						<img
							className="customiseImg"
							src="customisePedalLine.svg"
							alt="customise"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Dash;
