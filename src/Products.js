import React from "react";
import "./products.css";

function Products() {


	return (
		<div className="mt-3 prodPage">
			<div className="mt-3 productsContainer">
				<select className="selectProduct">
					<option value="">Select Product</option>
					<option value="pedal1.png">UmbertoEcho</option>
					<option value="pedal2.png">FuzzAldrin</option>
					<option value="pedalCustomiseLine.svg">KingSpring</option>
				</select>

				<div className="productsPage">
					<h2 className="productName">UMBERTO ECHO</h2>
					<img className="backLine" src="frontPedalLine.svg" alt="" />
					<img className="productImg" src="frontPedal.png" alt="" />
				</div>
			</div>
			<div className="textContainer">
				<div className="productInfo">
					<h5 className="ProductText">
						This is a kind of 2 in one pedal, an OD/Booster. Set the
						GAIN very low and turn up the OUTPUT to boost your
						signal, or set the OUTPUT at 9 O'Clock and make your
						signal be driven by the GAIN knob. Both get you a
						stunning sound!
						<br />
						<br />
						As you introduce some gain to your signal, the clean/dry
						sound will be blended in a magical way! Try to find
						where you're gonna stand! Specifications: ​ Powder
						coated die cast aluminum enclosure w/silk screened
						graphic DC output w/negative center compatible w/std 9V
						AC adaptor 5mm blue water clear LED indicator
						Professionnal Jacks Neutrik® NY229 Controls: OUTPUT:
						Controls the overall volume of the pedal. TREBLE:
						Introduces high freqs as you turn it up. GAIN: Adds
						drive and cut your dry signal at the same time.
						<br />
						<br />
						Specifications: ​ Powder coated die cast aluminum
						enclosure w/silk screened graphic DC output w/negative
						center compatible w/std 9V AC adaptor 5mm blue water
						clear LED indicator Professionnal Jacks Neutrik® NY229
						Controls: OUTPUT: Controls the overall volume of the
						pedal. TREBLE: Introduces high freqs as you turn it up.
						GAIN: Adds drive and cut your dry signal at the same
						time.
					</h5>
				</div>
				<h5 className="price">EUR. 59.00</h5>
			</div>
			<h3 className="customerRating">CUSTOMER RATING</h3>
		</div>
	);
}

export default Products;
