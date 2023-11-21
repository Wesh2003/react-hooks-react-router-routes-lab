import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
    {/*{code here}*/}
    <NavBar />
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/directors' element={<Directors/>}></Route>
        <Route path='/actors' element={<Actors/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
    </Routes>
    </div>;
}

export default App;
