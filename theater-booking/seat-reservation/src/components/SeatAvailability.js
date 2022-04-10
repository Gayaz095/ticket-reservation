import React from "react"
import Seat from './Seat'

export default function SeatAvailability(){
	return (
		<div className="row-avail">
			Unoccupied : <Seat seatColor="seatUnoccupied" />
			Selected : <Seat seatColor="seatOccupied" />
		</div>
	)
};
