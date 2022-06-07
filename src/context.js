import { createContext, React, useContext, useState } from "react";

const userData=createContext();   // to query the context state
const userDispatchData=createContext();  // to mutate coontext state

const UserDataProvider=({children})=>{

const [addItems, setAddItems]=useState();
// const [data, setdata]=useState();

return(

    <userData.Provider value={addItems}>
    <userDispatchData.Provider value={setAddItems}>{children}
    </userDispatchData.Provider>
    </userData.Provider>
)
}

export {UserDataProvider, userData, userDispatchData}