import { Routes,Route } from "react-router-dom";
import React from 'react';
export default (
    <Routes id="outer-container">
        <Route exact path="/"/>
        <Route path="/login"/>
        <Route path="/premium"/>
        <Route path="/blogs" />
        <Route path="/cities/:id"/>
        <Route path="/properties" />
        <Route path="/choose-plan" />
        <Route path="/about" />
        <Route path="/property-details/:id"/>
        <Route path="/list-property" />
        <Route path="/contact-us" />
        <Route path="/privacy-policy" />
        <Route path="/terms"/>
        <Route path="*"/>
    </Routes>
)

