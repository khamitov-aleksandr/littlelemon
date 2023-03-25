import React from 'react';
import BookingForm from './BookingForm';
import {useReducer} from 'react';
import {fetchAPI} from '../bookingsAPI.js'

function Reservations() {
    function updateTimes(date) {
        return (
            fetchAPI(date)
        );
    }

    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    return (
        <div className="bg-img">
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </div>
    )
}

export default Reservations