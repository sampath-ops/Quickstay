import { Link } from 'react-router-dom';
import './BlogCard.css';
const BlogCard = () => {

    const blogs = [
        {
            text:'12 Reasons why you should travel more...',
            views:52
        },
        {
            text:'12 Reasons why you should travel more...',
            views:52
        },
        {
            text:'12 Reasons why you should travel more...',
            views:52
        }
    ]

    return ( 
        <div className="card"> 
            <div className="row">
            {
                blogs.map((blog,index) =>{
                    const img = require('../../../WebsiteMaterial/living-room.jpg');
                    return(
                        <div className="card-container" key={index}>
                            <Link to="#"> <img src={img.default} alt="living-room" /></Link>
                                <div className="blog-details">
                                     <p>{blog.text}</p>
                                     <hr />
                                     <div className="readmore">
                                         <div>{blog.views} VIEWS</div>
                                         <Link to="#">READ MORE  <i className="fas fa-chevron-right"></i></Link>
                                     </div>
                                </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
     );
}
 
export default BlogCard;