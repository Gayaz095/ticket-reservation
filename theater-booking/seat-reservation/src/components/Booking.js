import React from 'react'
import Context from "../Context"
import { useNavigate } from 'react-router-dom';
import Timer from '../Timer';
import './Seat.css'

export default function Booking() {
	const {movies} = React.useContext(Context)
	const [flag, setFlag] = React.useState(false);
  const [disable, setDisable] = React.useState(false);

  React.useEffect(()=>{
  	setTimeout(() => {
			setDisable(true)
			setFlag(!flag)
    }, 3000);
  },
  []);

  const navigate = useNavigate();
  function handleSeating() {
      navigate('/')
  };

  return (
    <div className='container'>
        <div className='rowBooking'>
          <p style={{backgroundColor: 'brown', color: 'white'}}>You have limited time for booking the seats.</p>
          <p>Seats selected : {movies.totalSeats}</p>
          <p>Total amount is : {movies.totalSeats*movies.amount}</p>
          <button style={{padding:"10px"}} disabled={disable} onClick={handleSeating}>
                  Back to seating arrangement.
          </button>
          <Timer />
        
          {flag && 
            <div className="go-back">
              <p>Cannot change booking now!</p>       
            </div>}
        </div>
    </div>
  )
};
