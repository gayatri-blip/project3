import React from "react";
import { Link, Outlet } from "react-router-dom";


function Product(props) {
    

    return (
        <>
          <h1>All products page</h1>  
          
          <Link to="/Product/All">All</Link>
          <br />
          <Link to="/Product/Men">Men</Link>
          <br />
          <Link to='/Product/Women'>Women</Link>
          <Outlet/>

        </>
    )
}



  function  All (props) {
    

    return (
        <>
            <h1>All products</h1>
        </>
    )
}


function Men (props) {
    

    return (
        <>
            <h1>Men products</h1>
        </>
    )
}


 function Women(props) {
    

    return (
        <>
            <h1>Women products</h1>
        </>
    )
}

export {Product,All,Men,Women}

