import React, { useContext } from "react";
import Context from "../Context";
import SeatMatrix from "./SeatMatrix";
import SeatAvailability from "./SeatAvailability";
import Total from "./Total";
import "./Seat.css";

export default function Movies() {
	const { movies } = useContext(Context)
	const movieData = useContext(Context)

	const GenerateOptions = () => {
		const moviesObject = movies.movieNames
		return Object.keys(moviesObject).map((items, key) => {
			return <option value={items} key={key}>{items} - Amount:{moviesObject[items]}</option>
		})
	};

	const handleClick = (e) => {
		const price = movies.movieNames[e.target.value]
		movieData.changeState({...movies, amount: price})
	};

	return (
		<div className="container">
			<select className="options" onChange={handleClick}>
				{GenerateOptions()}
			</select>
			<SeatMatrix />
			<SeatAvailability />
			<Total />
		</div>
	)
};
