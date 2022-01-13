import { Link, NavLink, Route, Routes,useParams} from 'react-router-dom'
import { useState } from 'react'
import PaintingDetails from './PintingDetails'

function Collection({collection, onHandleClick}){

//const [selectedPainting, setSelectedPainting]=useState([])

// function handleClick(object){
//     const singlePaining = prop.filter((selected)=> selected.id === object.id)
//     setSelectedPainting(singlePaining)
// }


// function handleClick(object){
//     const singlePaining = collection.filter((selected)=> selected.id === object.id)
//     setSelectedPainting(singlePaining)
// }


const objectToRender = collection.map((object) => (
    <article key={object.id}> 
   <Link to={object.id}><img src={object.image} alt="Kein Bild" height="300 px" onClick={()=> onHandleClick(object)}/></Link>
    {/* <h3>{object.title}</h3>
    <h4>{object.artistName}</h4> */}
</article>))


return(
<div>
    {objectToRender}
    {/* {selectedPainting.length > 0 && <PaintingDetails clickedObject={selectedPainting}/>} */}
</div>
)
}

export default Collection