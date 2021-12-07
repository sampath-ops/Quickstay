import Description from "../Description";
import BlogCard from "./BlogCard";
import './Blogs.css';
const Blogs = () => {
    const heading = ["Blogs"]
    const description = "If you enjoy reading here's a little something extra, we hope you like it!"
    return ( 
        <div className="blogs">
             <Description head={heading} para={description}/>
             <BlogCard/>
        </div>
     );
}
 
export default Blogs;