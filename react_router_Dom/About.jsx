import { useNavigate } from "react-router-dom";

function About(props) {
    let navigate=useNavigate()
    

    return (
        <>
         <h1>About component</h1>   
         <button onClick={()=>{navigate('/')}}>Home</button>
        </>
    )
}
export default About;
