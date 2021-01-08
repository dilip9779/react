import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div>
        <SideBar/>
        <Header/> 
    </div>  
  );
}

export default App;