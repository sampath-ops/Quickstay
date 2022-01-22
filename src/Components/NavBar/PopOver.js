import { useRef, useState } from 'react';
import { Popover,ArrowContainer } from 'react-tiny-popover'
const PopOver = (props) => {
    const [isPopoverOpen,setIsPopoverOpen] = useState(false);
    const clickMeButtonRef = useRef();
    return ( 
        <Popover
        isOpen={isPopoverOpen}
        positions={['bottom']} 
        padding={6}
        onClickOutside={() => setIsPopoverOpen(false)}
        ref={clickMeButtonRef}
        // content={<div className='popover-content' onClick={props.signout}>Log out</div>}
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
           S
        </div>
        </Popover>
     );
}
 
export default PopOver;