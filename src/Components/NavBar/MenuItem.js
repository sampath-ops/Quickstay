// import React from "react";
// import {Link} from "react-router-dom";
// /* MenuItem.jsx*/
// class MenuItem extends React.Component{
//     constructor(props){
//       super(props);
//       this.state = {
//         hover:false,
//       }
//     }
    
//     handleHover(){
//       this.setState({hover:!this.state.hover});
//     }
    
//     render(){
//       const styles={
//         container: {
//           opacity: 0,
//           animation: '1s appear forwards',
//           animationDelay:this.props.delay,
//         },
//         menuItem:{
//           fontFamily:`'Open Sans', sans-serif`,
//           fontSize: '1.2rem',
//           padding: '1rem 0',
//           margin: '0 5%',
//           cursor: 'pointer',
//           color: 'black',
//           transition: 'color 0.2s ease-in-out',
//           animation: '0.5s slideIn forwards',
//           animationDelay:this.props.delay,
  
//         },
//         line: {
//           width: '90%',
//           height: '1px',
//           background: 'gray',
//           margin: '0 auto',
//           animation: '0.5s shrink forwards',
//           animationDelay:this.props.delay,
          
//         },
//         link:{
//           color:'inherit',
//           textDecoration:'none'
//         }
//       }
//       return(
//         <div style={styles.container}>
//           <div 
//             style={styles.menuItem} 
//             onMouseEnter={()=>{this.handleHover();}} 
//             onMouseLeave={()=>{this.handleHover();}}
//             onClick={this.props.onClick}
//           >
//              <Link style={styles.link} to={this.props.children.link}>{this.props.children.route} </Link>
//           </div>
//         <div style={styles.line}/>
//       </div>  
//       )
//     }
//   }
// export default MenuItem;