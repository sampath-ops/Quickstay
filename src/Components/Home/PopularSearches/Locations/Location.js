import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Location.css';
import PopularSearches from '../PopularSearches';
import { useState } from 'react';
// import { query,collection,where,getDocs } from 'firebase/firestore';
// import { db } from '../../../../firebase.config';

const Locations = (props) => {

    const locations = ["Bengaluru","Chennai","Delhi","Gurgaon","Hyderabad","Jaipur","Kolkata","Mumbai","Patna","Pune"];

    const [cityName,setCityName] = useState("Bengaluru");

    const cityNameHandler = async(name)=>{
       setCityName(name);
        // const q = query(collection(db,"properties"),where("city","==",name));
        // const snap = await getDocs(q);
        // props.getAllProperties(snap);
    }

    return ( 
        <div className="locations">
            <div>
                {
                    locations.map((location,index)=>(
                        <div  key={index} onClick={()=>cityNameHandler(location)}>{location}</div>
                    ))
                }
             
            </div>
            <PopularSearches cityName = {cityName} getAllProperties={props.getAllProperties}/>
            <Accordion allowZeroExpanded={true}>
                {
                    locations.map((location,index)=>(
                        <AccordionItem key={index}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    QuickStay in {location}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <PopularSearches cityName = {cityName}/>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
     );
}
 
export default Locations;