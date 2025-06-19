import { Navigate, useNavigate } from "react-router-dom";

function Home(props) {
  let navigate=useNavigate()
    

    return (
        <>
          <h1>Home component</h1> 
          <button onClick={()=>{navigate('About')}}>About</button> 
        </>
    )
}
export default Home;
