import './AboutProperty.css';

const AboutProperty = () => {
    return ( 
        <div className="about-property">
            <h2>ABOUT THIS PROPERTY</h2>
            <p><b>PROPERTY CODE:</b> QS13012</p>
            <p><b>LOCATION:</b> House no. 2889, Near shemrock school, Sector 69, Mohali</p>
            <div className="internal-details">
                <div className="internal-details1">
                    <p>TOTAL FLOORS: 6</p>
                    <p>FLOOR NO.: 2</p>
                    <p>BATHROOM TYPE: Attached</p>
                </div>
                <div className="internal-details2">
                    <p>SECURITY DEPOSIT: ₹8000</p>
                    <p>MAINTENANCE CHARGES: ₹0</p>
                    <p>ELECTRICICTY CHARGES: Included</p>
                </div>
            </div>
        </div>
     );
}
 
export default AboutProperty;