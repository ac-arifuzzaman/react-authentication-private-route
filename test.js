// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import AuthProvider from "./AuthProvider/AuthProvider";
// import Dashboard from "./Component/Dashboard/Dashboard";
// import Header from "./Component/Header/Header";
// import Home from "./Component/Home/Home";
// import Login from "./Component/Login/Login";
// import Registration from "./Component/Registration/Registration";
// import Shipping from "./Component/Shipping/Shipping";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";

// function App() {
//   return (
//     <div className="App">
//       <AuthProvider>
//         <BrowserRouter>
//           <Header></Header>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/shipping" element={<Shipping />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/registration" element={<Registration />} />
//             <Route path="/*" element={<PrivateRoute />}>
//               <Route path="dashboard" element={<Dashboard />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";

// const PrivateRoute = () => {
//   const { user } = useAuth();
//   return user.email ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;
