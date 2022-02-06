import './AboutProperty.css';

const AboutProperty = (props) => {
    const about = props.propDetails;
    return ( 
        <div className="about-property">
            <h2>ABOUT THIS PROPERTY</h2>
            <p><b>PROPERTY CODE:</b> {about.propertyCode}</p>
            <p><b>LOCATION:</b> {about.originalAddress}</p>
            <div className="internal-details">
                    <p>TOTAL FLOORS: {about.totalFloors}</p>
                    <p>FLOOR NO: 2</p>
                    <p>BATHROOM TYPE: {about.bathroomType.toString()}</p>
                    <p>SECURITY DEPOSIT: {about.securityDeposit}</p>
                    <p>MAINTENANCE CHARGES: {about.maintenanceCharges}</p>
                    <p>ELECTRICICTY CHARGES: {about.electricityCharges}</p>
                
            </div>
        </div>
     );
}
 
export default AboutProperty;