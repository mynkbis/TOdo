import React, { useContext } from 'react'
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

 return (

    <div className='listingBox' > 
    {getLocalItems}
    <DeleteButton/>
    <EditButton/>
    </div>
  )
}

export default ListPage;
