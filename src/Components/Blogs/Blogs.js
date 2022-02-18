import { Helmet } from "react-helmet";
import MainSub from '../NavBar/MainSub';
const Blogs = (props)=>{
    return(
        <MainSub searchedProperties={props.searchedProperties}>
            <Helmet>
                <title>Blogs | QuickStay</title>
                <meta name="description" content="Catch up on all the facts, tips and experiences about student life and working professional life at the QuickStay Blog!"/>
            </Helmet>
        </MainSub>
    )
}
export default Blogs;