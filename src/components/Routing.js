import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepages from './Homepage';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Reservations from '../pages/Reservations';
import OrderOnline from '../pages/OrderOnline';
import Login from '../pages/Login';
import Confirmation from '../pages/Confermation';

export default function Routing() {
    return (
        <Routes>
            <Route path="*" element={<Homepages/>} />
            <Route path="/about" element={<About/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
            <Route path="/reservations" element={<Reservations/>}></Route>
            <Route path="/order-online" element={<OrderOnline/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/confirmation" element= {<Confirmation />}/>
        </Routes>
  );
}