import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Site from "./components/Site";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


function App() {
    return(
        <div >
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Site />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </div>
    )
}


export default App;