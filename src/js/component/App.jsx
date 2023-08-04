import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Jumbotron />
			<div className="d-flex m-auto ms-5 me-5 mb-5 row m-5 justify-content-center align-items-center">
				<Card 
					img="https://as2.ftcdn.net/v2/jpg/00/99/13/07/1000_F_99130742_OsZsx8ku46AP6NPtguwOTr8bSqgfHM5W.jpg"
					title="Evil Raccoon"
					description="This is a description of the first card"
					button="Find out More!"
				/>
				<Card
					img="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
					title="Dog"
					description="This is a description of the second card"
					button="Find out More!"
				/>
				<Card
					img="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
					title="Cat"
					description="This is a description of the third card"
					button="Find out More!"
				/>
				<Card
					img="https://www.kidpid.com/wp-content/uploads/2021/08/mouse-animal.jpg"
					title="Cute mouse"
					description="This is a description of the fourth card"
					button="Find out More!"
				/>
			</div>
			<Footer className="mt-auto" />
		</Fragment>
	)
};

export default App;
