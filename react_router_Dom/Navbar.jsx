import { Link } from "react-router-dom";
function Navbar(props) {
    

    return (
        <>
         <ul>
            <li>
               <Link to="/" className='myLink'>Home</Link> 
            
            </li>
            

            <li>
               <Link to="/About" className='myLink'>About</Link> 
            
            </li>

            <li>
               <Link to="/Contact" className='myLink'>Contact</Link> 
            
            </li>
            <li>
               <Link to="/product" className='myLink'>Product</Link> 
            
            </li>
            
    



            </ul>   
        </>
    )
}
export default Navbar;
