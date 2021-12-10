import { Link } from 'react-router-dom';
import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Location.css';
import PopularSearches from '../PopularSearches';


const Locations = () => {
    const locations = ["Bengaluru","Chennai","Delhi","Gurgaon","Hyderabad","Jaipur","Kolkata","Mumbai","Patna","Pune","Chennai","Delhi","Gurgaon","Hyderabad","Jaipur","Kolkata"];
    return ( 
        <div className="locations">
            <div>
                {
                    locations.map((location,index)=>(
                        <div  key={index}><Link to="#">{location}</Link></div>
                    ))
                }
            </div>
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
                                <PopularSearches/>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
     );
}
 
export default Locations;