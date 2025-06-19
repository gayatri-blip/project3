import { useSearchParams } from "react-router-dom"

function SearchParam(props) {
    let [SearchParam,setsearchParam]=useSearchParams()
    let price=SearchParam.get('price')
    let cat=SearchParam.get('cat')
    let sub=SearchParam.get('sub')
    function Update()
    {
        setsearchParam({price:1000,cat:"Men",sub:"T:shirt"})
    }

    

    return (
        <>
        <button onClick={Update}>set parameters</button>
        <br />
        price:{price}
        <br />
        category: {cat}
        <br />
        sub_category: {sub}
            
        </>
    )
}
export default SearchParam;
