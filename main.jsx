import React from 'react'
import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
// import Home from './react_router_Dom/Home.jsx'
// import About from './react_router_Dom/About.jsx'
// import Contact from './react_router_Dom/contact.jsx'
// import Error from './react_router_Dom/Error.jsx'
// import Navbar from './react_router_Dom/Navbar.jsx'
// import { Product,All,Men,Women } from './react_router_Dom/product.jsx'
 import Student from './Student.jsx'
 import Stud_Details from './Stud_Details.jsx'
// import Demo from './react_router_Dom/Demo.jsx'
// import SearchParam from './react_router_Dom/Searchparam.jsx'
// const LazyData =React.lazy(()=> import("./Data.jsx"));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
     <Router>
      {/* <Navbar/> */}
      {/* <Demo/> */}
       {/* <SearchParam/>  */}
      <Routes>
        {/* <Route path='/'element={<Home/>}></Route>
         <Route path='/About'element={<About/>}></Route>
        <Route path='/Contact'element={<Contact/>}></Route>
        <Route path='/*'element={<Error/>}></Route>
        <Route path='/Product'element={<Product/>}>
         <Route index element={<All/>}></Route>
          <Route path='/Product/Men'element={<Men/>}></Route>
           <Route path='/Product/Women'element={<Women/>}></Route>
        </Route>*/}
        <Route path='/Student'element={<Student/>}></Route> 
         <Route path='/Stud_Details/:id'element={<Stud_Details/>}></Route> 
         {/* <Route path='/SearchParam/'element={<SearchParam/>}></Route>  */}
         {/* <Route path='/Data'element={ */}
          {/* <React.Suspense fallback="Loading...."> */}
            {/* <LazyData/> */}
          {/* </React.Suspense>>} */}
         {/* </Route> */}
      </Routes>
    </Router> 

    
  </StrictMode>,
)
