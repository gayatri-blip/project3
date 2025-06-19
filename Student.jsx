import { Link } from "react-router-dom"

function Student(props) {
    let student=[
        {id:1,name:"ARCHANA"},
        {id:2,name:"ASHWINI"},
        {id:3,name:"SHIVSNI"}
    ]
    

    return (
        <>
        {
          student.map((s)=>{
            return (

                <>
                <Link to={`/stud_Details/${s.id}`} key={s.id} className='my1'>{s.name}</Link>
                <br />
                </>

            )
            

          })  
        }
        </>
    )
}

export default Student;
