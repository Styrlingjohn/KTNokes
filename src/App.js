import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Site from "./components/Site";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Gallery from "./components/pages/Gallery";
import Services from "./components/pages/Services";


function App() {
    return(
        <div >
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Site />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Gallery' element={<Gallery />}/>
                <Route path='/Services' element={<Services />}/>
            </Routes>
        </BrowserRouter>
    </div>
    )
}


export default App;