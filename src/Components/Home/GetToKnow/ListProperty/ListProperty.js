import React from 'react'

import MainSub from '../../../NavBar/MainSub';
import Locations from '../../PopularSearches/Locations/Location'
import Find from '../../FollowAndFind/Find';
import Hero from './Hero';
import './ListProperty.css';

export default function ListProperty() {
    
    return (
        <MainSub>
            <Hero/>
            <Find/>
            <Locations/>
        </MainSub>
    )
}
