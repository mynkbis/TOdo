import React, { useContext } from 'react'
import "./ListingPage.css"
import { userData, userDispatchData, useTodoContext } from '../context'
import DeleteButton from "../Components/DeleteButton/Button"
import EditButton from "../Components/EditButton/Edit"

function ListPage(props) {

    
 return (

    <div className='listingBox' > 
    {props.text}
    <DeleteButton/>
    <EditButton/>
    </div>
  )
}

export default ListPage;
