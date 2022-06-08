import React, { useContext, useState } from 'react'
import "./ListingPage.css"
import { userData, userDispatchData, useTodoContext } from '../context'
import DeleteButton from "../Components/DeleteButton/Button"
import EditButton from "../Components/EditButton/Edit"

function ListPage(props) {
// get data from local Storage



const getLocalItems=()=>{
  let list=localStorage.getItem("lists")

  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  } else{
    return[]  
  }
}
const [newData, setNewData]=useState(getLocalItems);

return (

    
    <div className='listingBox' > 
    
      <div className='boxlist'>
    <DeleteButton/>
    {newData.map((newVal)=>{return <p>{newVal}</p>})}
    <EditButton/>
    </div>
    </div>
  )
}

export default ListPage;
