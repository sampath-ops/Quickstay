import { useEffect, useRef, useState } from 'react';
import { Popover,ArrowContainer } from 'react-tiny-popover'
import {doc,getDoc} from "firebase/firestore";
import { db } from '../../firebase.config';
const PopOver = (props) => {
    const [isPopoverOpen,setIsPopoverOpen] = useState(false);
    const clickMeButtonRef = useRef();
    const [userInitial,setUserInitial] = useState("");
    useEffect(()=>{
      async function fetchData(){
        const documentRef = doc(db,"users",props.auth.currentUser.uid);
        const userDocument = await getDoc(documentRef);
        // GET USER INITIAL FROM NAME
        if(userDocument.exists()){
          setUserInitial(userDocument.data().name.charAt(0).toUpperCase());
        }
    }
    if(userInitial.length < 1 && props.auth.currentUser){
      fetchData();
    }
    })

    return ( 
        <Popover
        isOpen={isPopoverOpen}
        positions={['bottom']} 
        padding={6}
        onClickOutside={() => setIsPopoverOpen(false)}
        ref={clickMeButtonRef}
        content={({ position, childRect, popoverRect }) => (
            <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
              position={position}
              childRect={childRect}
              popoverRect={popoverRect}
              arrowColor={'black'}
              arrowSize={10}
              arrowStyle={{ opacity: 1 }}
              className='popover-arrow-container'
              arrowClassName='popover-arrow'
            >
              <div
                className='popover-content'
                onClick={props.signout}
              >
                Logout
              </div>
            </ArrowContainer>
          )}
        >
        <div className='user-profile' onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
           {userInitial ? userInitial : "S"}
        </div>
        </Popover>
     );
}
 
export default PopOver;