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
        <main>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </main>
    )
}

export default Reservations