import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Input.css"
import ListPage from '../../pages/ListingPage';
import { userData, userDispatchData } from '../../context';


function FieldValue() {
    
// const [items, setItems]=useState("");


const [data, Setdata]=useState([])

const items=React.useContext(userData);
const setItems=useContext(userDispatchData);




const HandleEvent=(e)=>{
    setItems(e.target.value)
    
}


const HandleAdd=(e)=>{
 // alert("added")
     e.preventDefault();
  Setdata((oldData)=>{
    return[...oldData, items]

    

})
setItems("");
};

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `../listingPage`; 
      navigate(path);
    }

  return (
  <div className='fieldBox'>
  <form className='fieldBox'>
  <input placeholder='Enter todo item..' type="text" value={items} onChange={HandleEvent}></input>
  <button onClick={HandleAdd}>Submit</button>
 {/* <li>{items}</li>  */}
 {/* {data.map((itemval, id="name+1")=>{return <li key={id+1}>{itemval}</li>})} */}

 {data.map((itemval, index)=>{return <ListPage key={index} id={index} text={itemval}/>})}
  
   </form>

  <button onClick={routeChange}>Show List</button>
 
  </div>
  )
}


export default FieldValue   