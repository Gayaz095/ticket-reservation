import React, {useContext} from 'react'
import Context from "../Context"
import './Seat.css'

export default function Seat(props){
    
    const { movies } = useContext(Context)
    const context = useContext(Context)
    const seatNumber = props.seatNo
    const seatStatus = props.seatColor ? props.seatColor : "seatUnoccupied" 

    const handleSeat = (e, seatNumber) => {
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
        if (movies.seatNumbers.includes(seatNumber)) {
            const newMovieSeats = movies.seatNumbers.filter((seat) => {
                return seat !== seatNumber
            })
            seatColor.remove("seatOccupied")
            seatColor.add("seatUnoccupied")
            context.changeState({...movies, seatNumbers: newMovieSeats, totalSeats: movies.totalSeats-1 })
        } else {
            seatColor.remove("seatUnoccupied")
            seatColor.add("seatOccupied")
            context.changeState({...movies, seatNumbers: [...movies.seatNumbers, seatNumber], totalSeats: movies.totalSeats+1 })
        }
    };

    return (
        <div>
            <div className={`seat seat-${seatNumber} ${seatStatus}`}
                onClick={(e) => handleSeat(e,props.seatNo)} />
        </div>
    )
};
