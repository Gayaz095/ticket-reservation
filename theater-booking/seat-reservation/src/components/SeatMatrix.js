import React from "react"
import Seat from './Seat'
import './Seat.css'

const GenerateSeats = (seatNumbers) => {
	return (
		<div className="row">
			{
			seatNumbers.map((seatNumber) => {
				return <Seat seatNo={seatNumber} key={seatNumber}/>
			})
			}
		</div>
	)
};

export default function SeatMatrix () {
	return (
			<div className="seatArrangement">
			<p style={{backgroundColor: 'aqua'}}>Seating arrangement:</p>
				<div className="seatMatrix">
					{GenerateSeats([1, 2, 3])}
					{GenerateSeats([4, 5, 6])}
					{GenerateSeats([7, 8, 9])}
				</div>
		</div>
	)
};
