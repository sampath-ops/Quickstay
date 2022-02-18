import React from 'react';
import './ContactUs.css';
import Hero from './Hero';
import MainSub from '../NavBar/MainSub';
import Locations from '../Home/PopularSearches/Locations/Location';
import {Helmet} from "react-helmet";
export default function ContactUs(props) {
    return (
        <MainSub searchedProperties={props.searchedProperties} >
            <Helmet>
                <title>Contact Us | QuickStay</title>
                <meta name="description" content="Leave a query or get in touch with us for any doubt/query. Call: +91-8387868880. Email: support@quickstayrooms.com. " />
            </Helmet>
            <Hero/>
            <Locations getAllProperties={props.allProperties}/>
        </MainSub>
    )
}
