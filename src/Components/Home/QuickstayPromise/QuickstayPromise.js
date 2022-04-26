import Template from "../BoxTemplate";
import Description from "../Description";
const QuickstayPromise = () => {

    const heading = ["QuickStay","Promise"]
    const description = "We thrive to provide the best room for rent to every customer. Be it a PG for Men, PG for Women or Coliving, we manage to bring the best available option for you! Keep renting with us!";
    const homeforeveryone = [
        {
            id:0,
            name:'QuickStayPromise/ZeroBrokerage',
            alter:'ZERO BROKERAGE',
            text:'ZERO BROKERAGE'
        },
        {
            id:1,
            name:'QuickStayPromise/VerifiedStays',
            alter:'VERIFIED STAYS',
            text:'VERIFIED STAYS'
        },
        {
            id:2,
            name:'QuickStayPromise/OwnerHome',
            alter:'OWNER HOMES',
            text:'OWNER HOMES'
        },
    ]

    return (
        <div className="quickstay_promise custom_box-template">
             <Description head={heading} para={description}/>
            <Template images={homeforeveryone} />
        </div>
      );
}
 
export default QuickstayPromise;