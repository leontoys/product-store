import { useState } from 'react'
import { Route, Routes  } from "react-router-dom";
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import CreatePage from '../pages/CreatePage';
import "./styles.css"

function App() {

  return (
    <>
      <Navbar/> {/**This will be displayed on all routes as it is above */}
      <Routes>
        <Route path='/'       element={<HomePage></HomePage>}></Route>
        <Route path='/create' element={<CreatePage></CreatePage>}></Route>
      </Routes>
      </>  
  )
}

export default App
