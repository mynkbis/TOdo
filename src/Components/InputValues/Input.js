import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Input.css"
import ListPage from '../../pages/ListingPage';
import { userData, userDispatchData } from '../../context';


// to get data from LS

function FieldValue() {
    
// const [items, setItems]=useState("");


const [data, Setdata]=useState([])
const items=React.useContext(userData);
const setItems=useContext(userDispatchData);


const HandleEvent=(e)=>{
    setItems(e.target.value)
  }

const Handleboth=()=>{
  HandleAdd();
  
}

const HandleAdd=(e)=>{
 // alert("added")
//  localStorage.setItem("lists", JSON.stringify(items))
     e.preventDefault();
     data.push(items)

     if(data?.length){
      localStorage.setItem("lists", JSON.stringify(data))
     }
     Setdata(data)

    
setItems("");
};


let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `../listingPage`; 
      // navigate(path+'/'+data);
      navigate(path);
    }


    // add data to local storage



// localStorage.setItem("lastname", "Smith");



  return (
  <div className='fieldBox'>
  <form className='fieldBox'>
  <input placeholder='Enter todo item..' type="text" value={items} onChange={HandleEvent}></input>
  <button onClick={HandleAdd}>Submit</button>


 {/* <li>{items}</li>  */}
 {data.map((itemval, id="name+1")=>{return <li key={id+1}>{itemval}</li>})}

 {data.map((itemval, index)=>{return <ListPage/>})}
 </form>
 <button onClick={routeChange}>Show List</button>
 
  </div>
  )
}


export default FieldValue   