import React, {useContext} from "react"
import Context from "../Context"
import { useNavigate } from 'react-router-dom';

export default function Total (){
	const {movies} = useContext(Context)
	const navigate = useNavigate();

    function handleClick() {
        navigate('/booking')
    };

	return (
		<div>
			<p>Seats selected : {movies.totalSeats}</p>
			<p>Total amount is : {movies.totalSeats*movies.amount}</p>
			<button onClick={handleClick}>
					Booking Page
			</button>
		</div>
	)
};
