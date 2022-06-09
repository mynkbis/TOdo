import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Input.css"
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

  const HandleAdd=(e)=>{
 // alert("added")
//  localStorage.setItem("lists", JSON.stringify(items))
     e.preventDefault();
   

    //  const allData={id:new Date().getTime().toString(),name:items}

    //  console.log(allData)

    if(items && items.length > 0)
     data.push(items)

      const newdata = data.map((item, index) => {
        return {id: index, title: item}
      })
     if(data?.length){
      localStorage.setItem("lists", JSON.stringify(newdata))
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


  return (
  <div className='fieldBox'>
  <form className='fieldBox'>
  <input placeholder='Enter todo item..' type="text" value={items} onChange={HandleEvent}></input>
  <button onClick={HandleAdd}>Submit</button>
   {/* <li>{items}</li>  */}
    {/* {data.map((itemval, id="name+1")=>{return <li key={id+1}>{itemval}</li>})} */}
 </form>
 {data.map((itemval, index)=>{return <p key={index}>{itemval}</p>})}
 {data.length > 0 &&   <button onClick={routeChange} key={data.index}>Show List</button>}
 
 </div>
  )
}


export default FieldValue   