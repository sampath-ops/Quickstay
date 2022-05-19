import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
const Refund = (props) => {
    return (  
        <MainSub searchedProperties={props.searchedProperties}>
            <div className="privacy_policy">
                <h1 className="policy_head">TERMS OF USE & REFUND POLICY:</h1>
                <div className="policy_section">
                    <h2>DEPOSIT</h2>
                    <p>Terms:</p>
                    <p className="policy_text">
                        <ol>
                        <li>When a room is nalised through QuickStay App, you are required to pay the deposit money as per property rules.</li>
                        <li> The deposit money charged solely depends on the room rent amount and on the number of
                        days it is charged.</li>
                        <li>The reason behind charging deposit money is just for security assurance so that the residents
                        do not damage/cause any harm to the property.</li>
                        </ol>
                    </p>
                    <p>Refund:</p>
                    <p className="policy_text">
                        <ol>
                        <li>The deposit money can be refunded when you leave the room permanently.</li>
                        <li> It will be processed to the respective mode of payment and be re ected within 7 working days.</li>
                        <li>A full refund is generally initiated except when the resident does not serve the notice period of 30 days, or cause any damage to the property.</li>
                        </ol>
                    </p>
                </div>
                <div className="policy_section">
                <h2>MEMBERSHIP</h2>
                    <p>Terms:</p>
                    <p className="policy_text">
                        <ol>
                        <li>There are four membership plans(Basic Plan, Standard Plan, Pro Plan, Moneyback Plan) holding a validity of 30, 30, 45, 60 days respectively.</li>
                        <li>QuickStay App shows the listings for free, users can only contact property owners after a successful purchase of the membership plan of their choice.</li>
                        </ol>
                    </p>
                    <p>Refund:</p>
                    <p className="policy_text">
                        <ol>
                        <li>The membership fee is non-adjustable in the room rent.</li>
                        <li>The membership fee is non-refundable. Only users who have purchased the Moneyback plan are eligible for a full refund in case of non-availability of room of their desired choice.</li>
                        <li>The refund has to be claimed within a week of plan expiry. It will be processed once you shift to your new property that is not available on QuickStay App.</li>
                        <li>For claiming the refund, you just need to submit a valid copy of your rental agreement. QuickStay will verify the claim, this may include physical visit of the property premises</li>
                        </ol>
                    </p>
                </div>
                <div className="policy_section">
                    <h2>QUICK ADS</h2>
                    <p>Terms:</p>
                    <p className="policy_text">
                        <ol>
                        <li>The Ads package hold a validity of 30 days and 90 days, based on the plan chosen by the property owner.</li>
                        <li> This offer is valid for all the property owners who provide all requirements through the QuickStay app.</li>
                        <li>QuickStay property owners are not bound to this program. Every participation is voluntary and the offer is purely made on a "best-e ort" basis.</li>
                        <li>In case, property owners get a tenant lead from QuickAds, QuickStay does not guarantee tenant authenticity.</li>
                        <li>All the QuickAds tenant leads will be entertained through messages or calls directly from tenants only.</li>
                        <li>It is suggested for the property owners to keep the "Receive Calls" option always "On".</li>
                        <li>You can apply for the QuickAds program multiple times, once your ongoing plan gets expired.</li>
                        <li>QuickStay reserves the right to add/modify/alter/change or vary these terms and conditions without prior notice or without assigning any reason or whatsoever or to extend or withdraw this program altogether.</li>
                        <li>Proceed only if you agree to all the terms & conditions stated above.</li>
                        </ol>
                    </p>
                    <p>Refund:</p>
                    <p className="policy_text">
                        <ol>
                        <li>The advertising fee is non-adjustable/non-refundable.</li>
                        <li>Once the property ad is active, property owners cannot withdraw the request and will not get any refund.</li>
                        </ol>
                    </p>
                </div>
            </div>
            <Locations getAllProperties={props.allProperties}/>
        </MainSub>
    );
}
 
export default Refund;