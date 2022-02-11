import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Location.css';
import PopularSearches from '../PopularSearches';
import { useState } from 'react';

const Locations = (props) => {

    // const locations = ["Bengaluru","Chandigarh","Chennai","Delhi","Gurgaon","Hyderabad","Jaipur","Kolkata","Mumbai","Patna","Pune"];

    const locations = ["Bengaluru","Chennai","Delhi","Gurgaon","Hyderabad","Mumbai","Pune"];

    const [cityName,setCityName] = useState("Bengaluru");

    const cityNameHandler = async(name)=>{
       setCityName(name);
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
                    locations.map((location,index)=>{
                        return(
                            <AccordionItem key={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        QuickStay in {location}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <PopularSearches cityName = {location} getAllProperties={props.getAllProperties}/>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </div>
     );
}
 
export default Locations;