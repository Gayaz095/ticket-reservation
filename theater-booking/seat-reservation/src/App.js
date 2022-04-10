import React, {Fragment, useState} from "react"
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Movies from "./components/Movies"
import Total from "./components/Total"
import Context from './Context'
import Booking from "./components/Booking"
import Seat from "./components/Seat";

const App = () => {

	const [movies, EditMovies] = useState({
		movieNames: {
			"Movie1": 50,
			"Movie2": 100,
		},
		amount: 50,
		totalSeats: 0,
		seatNumbers: []
	});

	return (
		<div>	
			<Context.Provider value={{ movies, changeState: EditMovies }}>
			<Routes>
		    	<Route path="/" element={<Movies />} ></Route>
				<Route path="/seat" element={<Seat />}></Route>
				<Route path='/total' element={<Total />} ></Route>
				<Route path='/booking' element={<Booking />} ></Route>
			</Routes>
			</Context.Provider>	
		</div>
	)
};

export default App;
