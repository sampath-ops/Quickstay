import './PropertyContact.css';
import PropertyAddress from './PropertyAddress';
import PropertySharing from './PropertySharing';
import ContactButton from './ContactButton';
import React, { useEffect, useState } from 'react';
const PropertyContact = () => {

   const [float, setFloat] = useState(false);
   useEffect(() => {
      const handleScroll = () => {
         setFloat(window.scrollY > 132);
     }
     window.addEventListener("scroll",handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);


    return ( 
        <div className={`propertycontact ${float ? "float-rightpart": ""}`}>
           <PropertyAddress/>
           <PropertySharing/>
           <ContactButton/>
        </div>
     );
}
 
export default PropertyContact;