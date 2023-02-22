import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepages from './Homepage';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Reservations from '../pages/Reservations';
import OrderOnline from '../pages/OrderOnline';
import Login from '../pages/Login';
import Feedback from '../pages/Feedback';
import Confirmation from '../pages/Confirmation';

export default function Routing() {
    const handleSubmit= () => {
        console.log("Form submitted!");
    }
    return (
        <Routes>
            <Route path="*" element={<Homepages/>} />
            <Route path="/about" element={<About/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/reservations" element={<Reservations/>}></Route>
            <Route path="/order-online" element={<OrderOnline/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/feedback" element={<Feedback onSubmit={handleSubmit}/>}></Route>
            <Route path="/confirmation" element= {<Confirmation />}/>
        </Routes>
  );
}