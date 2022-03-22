// // wrapper component
// import { Route } from "react-router-dom";
// import Main from "./Main";

// const MainNavRoute = props => {
//     const { component: RoutedComponent,...rest } = props;
//     // render actual Route from react-router
//     return (
//         <Route
//         {...rest}
//         render={props => {
//             return (
//                 <Main>
//                     <RoutedComponent {...props} />
//                 </Main>
//             )
//         }}
//       />
//     )
//   };
// export default MainNavRoute;