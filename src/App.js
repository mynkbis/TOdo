
import { useState } from 'react';
import './App.css';

import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import AddPage from './pages/AddPage';
import ListPage from './pages/ListingPage';
import SinglePage from './pages/SinglePage';
import { UserDataProvider } from './context';

function App() {

 return (
   <UserDataProvider> 
   <BrowserRouter>   
  <div className="App">
    
      <div className='mainBoxApp'> 
<h5>ToDo</h5>
      <Routes>
<Route exact path='/' element={<AddPage/>}/>
<Route exact path='/listingPage' element={<ListPage/>}/>
<Route exact path='/singlePage' element={<SinglePage/>}/>
     
</Routes>
  </div>
     </div>

    </BrowserRouter> 
</UserDataProvider>

  );
}

export default App;
