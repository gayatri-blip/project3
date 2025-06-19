import { useParams } from "react-router-dom"

function Stud_Details(props) {
    let {id}=useParams()

    return (
        <>
          <h1>Student ID:{id}</h1>  
        </>
    )
}

export default Stud_Details;