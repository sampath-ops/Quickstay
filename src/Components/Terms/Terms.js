import MainSub from "../NavBar/MainSub";
import Locations from "../Home/PopularSearches/Locations/Location";
const Terms = (props) => {
    return ( 
        <MainSub searchedProperties={props.searchedProperties}>
            <div className="privacy_policy">
                <h1 className="policy_head">TERMS &#38; CONDITIONS</h1>
                <p className="policy_text">Welcome to the QUICKSTAY ROOMS Terms of Use agreement. For purposes of this agreement, “Site” refers to the Company’s website/mobile application, which can be accessed at <a href="https://www.quickstayrooms.com/">www.quickstayrooms.com</a> or through our mobile application “QuickStay Rooms”. “Service” refers to the Company’s services accessed via the Site, in which users can . The terms “QuickStay”, “we,” “us,” and “our” refer to the Company. “You” refers to you, as a user of our Site or our Service.</p>
                <p className="policy_text">
                The following Terms of Use apply when you view or use the Service via our website
                located at <a href="https://www.quickstayrooms.com/">www.quickstayrooms.com</a> or by accessing the Service through clicking
                on the application “QuickStay Rooms” on your mobile device.
                </p>
                <p className="policy_text">
                Please review the following terms carefully. By accessing or using the Service, you signify
                your agreement to these Terms of Use. <b>If you do not agree to be bound by these Terms
                and Conditions in their entirety, you may not access or use the Service.</b>
                </p>

                {/* SECTION 1 */}
                <div className="policy_section">
                    <h2>PRIVACY POLICY</h2>
                    <p className="policy_text">
                    The Company respects the privacy of its Service users. Please refer to the Company’s
                    Privacy Policy (found here: Privacy Policy ) which explains how we collect, use, and
                    disclose information that pertains to your privacy. When you access or use the Service,
                    you signify your agreement to the Privacy Policy as well as these Terms and Conditions.
                    </p>
                </div>

                {/* SECTION 2 */}
                <div className="policy_section">
                    <h2>ABOUT THE SERVICE</h2>
                    <p className="policy_text">QuickStay is an online platform that enables renting of residential properties. It helps property owners to list their empty PG/Flat/Room and tenants to find, compare, book a decent rental stay at comfort of their home.</p>
                    <p className="policy_text">Not only this, users can find a roommate/flatmate with matching interests.</p>
                </div>

                {/* SECTION 3 */}
                <div className="policy_section">
                    <h2>REGISTRATION: RULES FOR USER CONDUCT AND USE OF THE SERVICE</h2>
                    <p className="policy_text">You need to be at least 13 years old to register for and use the Service.</p> 
                    <p className="policy_text"> If you are a user who signs up for the Service, you will create a personalized account which includes a unique username and password to access the Service and to receive messages from the Company. You agree to notify us immediately of any unauthorized use of your password and/or account through email <a href="mailto:rooms.quickstay@gmail.com">“rooms.quickstay@gmail.com”</a>. The Company will not be responsible for any liabilities, losses, or damages arising out of the unauthorized use of your member name, password and/or account.</p>
                </div>

                 {/* SECTION 4 */}
                    <div className="policy_section">
                        <h2>USER RESTRICTIONS</h2>
                        <p className="policy_text">
                        Your permission to use the Site is conditioned upon the following use, posting and conduct restrictions:
                        </p>
                        <p className="policy_text">
                        You agree that you will not under any circumstances:
                        </p>
                        <ul>
                        <li>Access the Service for any reason other than your personal, non-commercial use solely as permitted by the normal functionality of the Service,</li>
                        <li>Collect or harvest any personal data of any user of the Site or the Service</li>
                        <li>Use the Site or the Service for the solicitation of business in the course of trade or in connection with a commercial enterprise;</li>
                        <li>Distribute any part or parts of the Site or the Service without our explicit written permission (we grant the operators of public search engines permission to use spiders to copy materials from the site for the sole purpose of creating publicly-available searchable indices but retain the right to revoke this permission at any time on a general or specific basis);</li>
                        <li>Use the Service for any unlawful purpose or for the promotion of illegal activities;</li>
                        <li>Attempt to, or harass, abuse or harm another person or group;</li>
                        <li>Use another user’s account without permission;</li>
                        <li>Intentionally allow another user to access your account;</li>
                        <li>Provide false or inaccurate information when registering an account;</li>
                        <li>Interfere or attempt to interfere with the proper functioning of the Service;</li>
                        <li>Make any automated use of the Site, the Service or the related systems, or take any action that we deem to impose or to potentially impose an unreasonable or disproportionately large load on our servers or network infrastructure;</li>
                        <li>Bypass any robot exclusion headers or other measures we take to restrict access to the Service, or use any software, technology, or device to scrape, spider, or crawl the Service or harvest or manipulate data;</li>
                        <li>Circumvent, disable or otherwise interfere with any security-related features of the Service or features that prevent or restrict use or copying of content, or enforce limitations on use of the Service or the content accessible via the Service; or</li>
                        <li>Publish or link to malicious content of any sort, including that intended to damage or disrupt another user’s browser or computer.</li>
                        </ul>
                    </div>

                {/* SECTION 4 */}
                <div className="policy_section">
                    <h2>POSTING AND CONDUCT RESTRICTIONS</h2>
                    <p className="policy_text">When you create your own personalized account, you may be able to provide Email id , contact number , google data(inclusive of profile pic of user, full name , UID ) IP address, location, sessions logged in , OS version ,OS name ,browser to the Service provider. You are solely responsible for the User Content that you post, upload, link to or otherwise make available via the Service.</p>
                    <p className="policy_text">It will remain the same for all operating system users.</p>
                    <p className="policy_text">You agree that we are only acting as a passive conduit for your online distribution and publication of your User Content. The Company, however, reserves the right to remove any User Content from the Service at its sole discretion.</p>
                    <p className="policy_text">We grant you permission to use and access the Service, subject to the following express conditions surrounding User Content. You agree that failure to adhere to any of these conditions constitutes a material breach of these Terms.</p>
                    <p className="policy_text">By transmitting and submitting any User Content while using the Service, you agree as follows:</p>
                    <ul>
                        <li>You are solely responsible for your account and the activity that occurs while signed in to or while using your account;</li>
                        <li>You will not post information that is malicious, libelous, false or inaccurate;</li>
                        <li>You will not post any information that is abusive, threatening, obscene, defamatory, libelous, or racially, sexually, religiously, or otherwise objectionable and offensive;</li>
                        <li>You retain all ownership rights in your User Content but you are required to grant the following rights to the Site and to users of the Service as set forth more fully under the “License Grant” and “Intellectual Property” provisions below: When you upload or post User Content to the Site or the Service, you grant to the Site a
                        worldwide, non-exclusive, royalty-free, transferable license to use, reproduce,
                        distribute, prepare derivative works of, display, and perform that Content in
                        connection with the provision of the Service; and you grant to each user of the
                        Service, a worldwide, non-exclusive, royalty-free license to access your User
                        Content through the Service, and to use, reproduce, distribute, prepare derivative
                        works of, display and perform such Content to the extent permitted by the Service
                        and under these Terms of Use;</li>
                        <li>You will not submit content that is copyrighted or subject to third party proprietary rights, including privacy, publicity, trade secret, or others, unless you are the owner of such rights or have the appropriate permission from their rightful owner to specifically submit such content; and</li>
                        <li>You hereby agree that we have the right to determine whether your User Content
                        submissions are appropriate and comply with these Terms and conditions, remove
                        any and/or all of your submissions, and terminate your account with or without prior
                        notice.</li>
                    </ul>
                    <p className="policy_text">You understand and agree that any liability, loss or damage that occurs as a result of the use of any User Content that you make available or access through your use of the Service is solely your responsibility. The Site is not responsible for any public display or misuse of your User Content.</p>
                    <p className="policy_text">The Site does not, and cannot, pre-screen or monitor all User Content. However, at our discretion, we, or technology we employ, may monitor and/or record your interactions with the Service or with other Users.</p>
                </div>

                {/* SECTION 5 */}
                <div className="policy_section">
                    <h2>PAYMENT CONDITIONS</h2>
                    <p className="policy_text">The payment can be made by any electronic mode. By agreeing with the terms and conditions the user is deemed to accept the terms and conditions of RAZORPAY
                    </p>
                    <p className="policy_text">( https://razorpay.com/terms ). All payment of our company is managed under this company. For the process of payment the user has to give his personal details like card number, CVV , bank details, etc. to the RAZORPAY and our company. For all the details you will be held responsible. There will be no liability of our company or RAZORPAY if the information given by the user is misrepresentative.
                    </p>
                </div>

                 {/* SECTION 5 */}
                 <div className="policy_section">
                     <h2>ONLINE CONTENT DISCLAIMER</h2>
                     <p className="policy_text">Opinions, advice, statements, offers, or other information or content made available through the Service, but not directly by the Site, are those of their respective authors, and should not necessarily be relied upon. Such authors are solely responsible for such content.</p>
                     <p className="policy_text">We do not guarantee the accuracy, completeness, or usefulness of any information on the Site or the Service nor do we adopt nor endorse, nor are we responsible for, the accuracy or reliability of any opinion, advice, or statements made by other parties. We take no responsibility and assume no liability for any User Content that you or any other user or third party posts or sends via the Service. Under no circumstances will we be responsible for any loss or damage resulting from anyone’s reliance on information or other content posted on the Service, or transmitted to users.</p>
                     <p className="policy_text">Though we strive to enforce these Terms of Use, you may be exposed to User Content that is inaccurate or objectionable when you use or access the Site or the Service. We reserve the right, but have no obligation, to monitor the materials posted in the public areas of the Site or the Service or to limit or deny a user’s access to the Service or take other appropriate action if a user violates these Terms of Use or engages in any activity that violates the rights of any person or entity or which we deem unlawful, offensive, abusive, harmful or malicious. The Company shall have the right to remove any material that in its sole opinion violates, or is alleged to violate, the law or this agreement or which might be offensive, or that might violate the rights, harm, or threaten the safety of users or others. Unauthorized use may result in criminal and/or civil prosecution under Federal, State and local law. If you become aware of a misuse of our Service or violation of these Terms of Use, please contact us: <a href="mailto:rooms.quickstay@gmail.com">rooms.quickstay@gmail.com</a></p>
                 </div>

                  {/* SECTION 6 */}
                  <div className="policy_section">
                      <h2>TERMS AND CONDITIONS WITH PG OWNERS</h2>
                      <p className="policy_text">
                      There will be no liability of QuickStay in case of contracts between user and PG owner. By entering into contract with QuickStay, the user is deemed to enter into contract with PG owner.
                      </p>
                  </div>

                  {/* SECTION 7 */}
                  <div className="policy_section">
                      <h2>LINKS TO OTHER SITES AND/OR MATERIALS</h2>
                      <p className="policy_text">
                      By agreeing the terms and conditions, it is deemed that you are agreeing with the terms
                      and conditions of RAZORPAY(Third party).As part of the Service, we may provide you with
                      convenient links to third party website(s) (https://razorpay.com/terms/). These links are provided as a courtesy to Service subscribers. We have no control over Third Party Sites or Third Party Applications, Software or Content or the promotions, materials, information, goods or services available on these Third Party Sites or Third Party Applications, Software or Content. Such Third Party Sites and Third Party Applications, Software or Content are not investigated, monitored or checked for accuracy, appropriateness, or completeness, and we are not responsible for any Third Party Sites accessed through the Site or any Third Party Applications, Software or Content posted on, available through or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained in the Third Party Sites or the Third Party Applications, Software or Content. Inclusion of, linking to or permitting the use or installation of any Third Party Site or any Third Party Applications, Software or Content does not imply our approval or endorsement. If you decide to leave the Site and access the Third Party Sites or to use or install any Third Party Applications, Software or Content, you do so at your own risk and you should be aware that our terms and policies, including these Terms of Use, no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any Third Party Site to which you navigate from the Site or relating to any applications you use or install from the Third Party Site.
                      </p>
                  </div>

                  {/* SECTION 8 */}
                  <div className="policy_section">
                      <h2>EMAIL MAY NOT BE USED TO PROVIDE NOTICE</h2>
                      <p className="policy_text">
                      Communications made through the Service’s email and messaging system will not
                      constitute legal notice to the Site, the Service, or any of its officers, employees, agents or representatives in any situation where legal notice is required by contract or any law or regulation.
                      </p>
                  </div>

                  {/* SECTION 9 */}
                  <div className="policy_section">
                      <h2>USER CONSENT TO RECEIVE COMMUNICATIONS IN ELECTRONIC FORM</h2>
                      <p className="policy_text">
                      For contractual purposes, you: (a) consent to receive communications from us in an
                      electronic form via the email address you have submitted; and (b) agree that all Terms of Use, agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications would satisfy if it were in writing. The foregoing does not affect your non-waivable rights.
                      </p>
                      <p className="policy_text">
                      We may also use your email address to send you other messages, including information
                      about the Site or the Service and special offers. You may opt out of such email by
                      changing your account settings, using the “Unsubscribe” link in the message, or by
                      sending an email to <a href="mailto:rooms.quickstay@gmail.com">rooms.quickstay@gmail.com</a> or mail to the following postal address:
                      </p>
                      <p className="policy_text">
                      Customer Support: <br /> Chitkara Innovation Incubator Foundation, Sector 82, Mohali, Punjab <br /> Opting out may prevent you from receiving messages regarding the Site, the Service or special offers.
                      </p>
                  </div>

                   {/* SECTION 9 */}
                   <div className="policy_section">
                       <h2>WARRANTY DISCLAIMER</h2>
                       <p className="policy_text">
                        THE SERVICE, IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND. WITHOUT
                        LIMITING THE FOREGOING, WE EXPRESSLY DISCLAIM ALL WARRANTIES,
                        WHETHER EXPRESS, IMPLIED OR STATUTORY, REGARDING THE SERVICE
                        INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE, TITLE, SECURITY, ACCURACY AND NON-
                        INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE MAKE NO WARRANTY
                        OR REPRESENTATION THAT ACCESS TO OR OPERATION OF THE SERVICE WILL
                        BE UNINTERRUPTED OR ERROR FREE. YOU ASSUME FULL RESPONSIBILITY AND
                        RISK OF LOSS RESULTING FROM YOUR DOWNLOADING AND/OR USE OF FILES,
                        INFORMATION, CONTENT OR OTHER MATERIAL OBTAINED FROM THE SERVICE.
                        SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF WARRANTY,
                        SO THIS PROVISION MAY NOT APPLY TO YOU.
                       </p>
                   </div>

                    {/* SECTION 9 */}
                    <div className="policy_section">
                        <h2>LIMITATION OF DAMAGES: RELEASE</h2>
                        <p className="policy_text">TO THE EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE SITE, THE SERVICE, ITS AFFILIATES, DIRECTORS, OR EMPLOYEES, OR ITS LICENSORS OR PARTNERS, BE LIABLE TO YOU FOR ANY LOSS OF PROFITS, USE, OR DATA, OR FOR ANY INCIDENTAL, INDIRECT, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, HOWEVER ARISING, THAT RESULT FROM: (A) THE USE, DISCLOSURE, OR DISPLAY OF YOUR USER CONTENT; (B) YOUR USE OR INABILITY TO USE THE SERVICE; (C) THE SERVICE GENERALLY OR THE SOFTWARE OR SYSTEMS THAT MAKE THE SERVICE AVAILABLE; OR (D) ANY OTHER INTERACTIONS WITH USE OR WITH ANY OTHER USER OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF LIABILITY, SO THIS PROVISION MAY NOT APPLY TO YOU.</p>
                        <p className="policy_text">If you have a dispute with one or more users, a restaurant or a merchant of a product or service that you review using the Service, you release us (and our officers, directors, agents, subsidiaries, joint ventures and employees) from claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes.</p>
                        <p className="policy_text">If you are a California resident using the Service, you may specifically waive California Civil Code §1542, which says: “A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which if known by him must have materially affected his settlement with the debtor.”</p>
                    </div>

                     {/* SECTION 9 */}
                     <div className="policy_section">
                        <h2>MODIFICATION OF TERMS AND CONDITIONS</h2>
                        <p className="policy_text">
                        We can amend these Terms and conditions at any time and will update these Terms and
                        conditions in the event of any such amendments. It is your sole responsibility to check the Site from time to time to view any such changes in this agreement. Your continued use of the Site or the Service signifies your agreement to our revisions to these Terms and conditions. We will endeavor to notify you of material changes to the Terms by posting a notice on our homepage and/or sending an email to the email address you provided to us upon registration. For this additional reason, you should keep your contact and profile information current. Any changes to these Terms (other than as set forth in this paragraph) or waiver of our rights hereunder shall not be valid or effective except in a written agreement bearing the physical signature of one of our officers. No purported waiver or modification of this agreement on our part via telephonic or email communications shall be valid.
                        </p>
                     </div>

                     {/* SECTION 10 */}
                     <div className="policy_section">
                        <h2>GENERAL TERMS</h2>
                        <p className="policy_text">
                        If any part of this Terms and conditions agreement is held or found to be invalid or
                        unenforceable, that portion of the agreement will be construed as to be consistent with applicable law while the remaining portions of the agreement will remain in full force and effect. Any failure on our part to enforce any provision of this agreement will not be considered a waiver of our right to enforce such provision. Our rights under this agreement survive any transfer or termination of this agreement.
                        </p>
                        <p className="policy_text">
                        You agree that any cause of action related to or arising out of your relationship with the Company must commence within ONE year after the cause of action accrues. Otherwise, such cause of action is permanently barred.
                        </p>
                     </div>

                      {/* SECTION 10 */}
                      <div className="policy_section">
                          <h2>GOVERNING LAW AND JURISDICTION</h2>
                          <p className="policy_text">These Terms and conditions and your use of the Site are governed by the Companies Act , 2013</p>
                          <p className="policy_text">And Information Technology , 2000 . It is also governed by the Children’s Online Privacy Protection Act of 1998 under United states federal Law(COPPA). By agreeing these terms user will agree that if any dispute arise between the user and the service provider , the dispute will first be resolved in personal Arbitrary , if the user is still not satisfied then he can approach the higher judicial authority.</p>
                          <p className="policy_text">We may assign or delegate these Terms of Service and/or our Privacy Policy, in whole or in part, to any person or entity at any time with or without your consent. You may not assign or delegate any rights or obligations under the Terms of Service or Privacy Policy without our prior written consent, and any unauthorized assignment or delegation by you is void.</p>
                          <p className="policy_text">YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE,
                          UNDERSTAND THE TERMS OF USE, AND WILL BE BOUND BY THESE TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS OF USE TOGETHER WITH THE PRIVACY POLICY AT Privacy Policy REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US AND THAT IT SUPERSEDES ANY PROPOSAL OR PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF THIS AGREEMENT.</p>
                          <p className="policy_text">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                      </div>

            </div>
            <Locations getAllProperties={props.allProperties}/>
        </MainSub>
     );
}
 
export default Terms;