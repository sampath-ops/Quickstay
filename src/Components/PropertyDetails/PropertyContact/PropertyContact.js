import './PropertyContact.css';
import PropertyAddress from './PropertyAddress';
import PropertySharing from './PropertySharing';
import ContactButton from './ContactButton';
import React, { useEffect, useState } from 'react';
const PropertyContact = (props) => {

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
           <PropertyAddress propDetails={props.propDetails}/>
           <PropertySharing sharing={props.propDetails.options}/>
           <ContactButton  propDetails={props.propDetails}/>
        </div>
     );
}
 
export default PropertyContact;