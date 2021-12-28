import './PropertyContact.css';
import PropertyAddress from './PropertyAddress';
import PropertySharing from './PropertySharing';
import ContactButton from './ContactButton';
import React, { useEffect, useState } from 'react';
const PropertyContact = () => {

   // const [offset, setOffset] = useState(0);
   // useEffect(() => {
   //    window.onscroll = () => {
   //       setOffset(window.pageYOffset)
   //    }
   // }, []);

   const [float, setFloat] = useState(false);
   useEffect(() => {
     window.addEventListener("scroll", () => {
         setFloat(window.scrollY > 132);
     });
//      return () => {
//       // remove state when unmount
//       setFloat(false);
//   };
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