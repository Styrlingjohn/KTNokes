import React, { useState } from "react";
import NavTabs from "./adds/NavTabs";
import About from './pages/About';
import Home from "./pages/Home";
import Footer from "./adds/Footer";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";


function Site() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Gallery') {
      return <Gallery />;
    }
    if (currentPage === 'Services') {
      return <Services />;
    }
  };


  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div className="siteHolder">
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>

      {renderPage()}

        <Footer />

    </div>

  );
};

export default Site;