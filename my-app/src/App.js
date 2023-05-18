import logo from './logo.svg';
import './App.css';
import FileDetails from './components/FileDetails';
import React, { useEffect, useState } from "react";
import Navbar from './components/NavBar';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';

import {BrowserRouter,Route, Routes} from "react-router-dom";
import AddModal from './components/Modals/AddModal';
import EditModal from './components/Modals/EditModal';

function App() {
  return (
    <div>
   
      <BrowserRouter>
      <SideBar/>
      <Routes>
      <Route path ="/dashboard" Component={Dashboard}></Route>
      <Route path ="/details" Component={FileDetails}></Route>
      <Route  exact path ="/create" Component={AddModal}></Route>
      <Route  exact path ="/edit/:id" Component={EditModal}></Route>
      </Routes>
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
