import React from "react";
import Card from "./Card";
import Footer from "./Footer";
const App = () => {
	return (
		<div>
			<div className="d-flex ms-5 me-5  gap-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="p-3 text-center bg-secondary ">
				 <Footer />
			</div>
			
		</div>
	)
};

export default App;
