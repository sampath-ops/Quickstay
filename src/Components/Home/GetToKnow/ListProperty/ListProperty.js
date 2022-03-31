import React from 'react'

import MainSub from '../../../NavBar/MainSub';
import Locations from '../../PopularSearches/Locations/Location'
import Find from '../../FollowAndFind/Find';
import Hero from './Hero';
import './ListProperty.css';
import {Helmet} from "react-helmet";
export default function ListProperty(props) {
    
    return (
        <MainSub searchedProperties={props.searchedProperties} >
            <Helmet>
                <title>List your property for FREE | QuickStay</title>
                <meta name="description" content="We help you list your rental property in a few easy steps. Let us market, manage and maintain your property to save your unnecessary headache."/>
                <meta name="keywords" content="list your property, property management service, lease your property, rent your property, free property listing, best property management company" />
            </Helmet>
            <Hero/>
            <Find/>
            <Locations getAllProperties={props.allProperties}/>
        </MainSub>
    )
}
