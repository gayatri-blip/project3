import { useSearchParams } from "react-router-dom"

function Demo(props) {

const[searchParams,setSearchParams]=useSearchParams();
const search=searchParams.get('search') ||'';

const handleChange=(e)=>{
    setSearchParams({search:e.target.value})

}

    return (
        <>
          <h2>Search (URL param)</h2>  
          <input type="text"value={search}onChange={handleChange} placeholder="Type to Search....." />
          <p>Search term in Url:{search}</p>
        </>
    )
}
export default Demo;
