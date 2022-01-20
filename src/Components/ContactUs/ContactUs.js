import React from 'react';
import './ContactUs.css';
import Hero from './Hero';
import MainSub from '../NavBar/MainSub';
import Locations from '../Home/PopularSearches/Locations/Location';

export default function ContactUs() {
    return (
        <MainSub>
            <Hero/>
            <Locations/>
        </MainSub>
    )
}