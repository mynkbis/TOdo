import React, { useState } from 'react'
import './DeleteButton.css'

function DeleteButton(props) {

  const {id, setNewData }= props;
  const HandleDelete=(id)=>{

    
  const localData = JSON.parse(localStorage.getItem('lists'));
  const newList = localData.filter((item) => item.id != id);
  localStorage.setItem("lists", JSON.stringify(newList));
  setNewData(newList);
  }

  return (
    <div className='trashButton'>
        <button onClick={() => HandleDelete(id)}>Trash</button>
    </div>
  )
}

export default DeleteButton