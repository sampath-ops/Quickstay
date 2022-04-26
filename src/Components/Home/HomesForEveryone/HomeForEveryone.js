import Template from "../BoxTemplate";
import Description from "../Description";
const HomesForEveryone = () => {

    const heading = ["Homes for","everyone"]
    const description = "Rent a beautiful PG for women or explore a coliving space in India but never compromise on your choices! Choose among private room, shared room, apartments or coliving.";
    const homeforeveryone = [
        {
            id:0,
            name:'HomesForEveryone/Private',
            alter:'Stays just for you!',
            text:'Stays just for you!'
        },
        {
            id:1,
            name:'HomesForEveryone/Sharing',
            alter:'Stays for friends!',
            text:'Stays for friends!'
        },
        {
            id:2,
            name:'HomesForEveryone/Coliving',
            alter:'Coliving stays!',
            text:'Coliving stays!'
        },
    ]

    return ( 
        <div className="homes_for_everyone custom_box-template">
            <Description head={heading} para={description}/>
            <Template images={homeforeveryone} />
        </div>
     );
}
 
export default HomesForEveryone;