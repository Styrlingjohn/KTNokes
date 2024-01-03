import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/adds/Footer'
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Gallery from "./components/pages/Gallery";
import Services from "./components/pages/Services";
import NavTabs from "./components/adds/NavTabs";
import Home from "./components/pages/Home";


function App() {
    return (
        <div >
            <section>
                <NavTabs />
            </section>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='About' element={<About />} />
                    <Route path='Contact' element={<Contact />} />
                    <Route path='Gallery' element={<Gallery />} />
                    <Route path='Services' element={<Services />} />
                </Routes>
            </BrowserRouter>
            <section>
                <Footer/>
            </section>
        </div>

    )
}


export default App;