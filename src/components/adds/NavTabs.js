import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';


function NavTabs({ currentPage, handlePageChange }) {





    return (
        <header className='header' >
            <div className=' H-1 '>
                <img alt="Logo" className="logo" src="KTNokesLogo.png" />


                <Dropdown >
                    <DropdownToggle id='dropdown-basic' >
                        Menu
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="#home" onClick={() => handlePageChange('Home')} >
                            Home
                        </DropdownItem>

                        <DropdownItem href="#about" onClick={() => handlePageChange('About')} >
                            About the Company
                        </DropdownItem>

                        <DropdownItem href="#contact" onClick={() => handlePageChange('Contact')} >
                            Contact
                        </DropdownItem>
                      
                        <DropdownItem href="#gallery" onClick={() => handlePageChange('Gallery')} >
                            Gallery
                        </DropdownItem>
                        
                        <DropdownItem href="#services" onClick={() => handlePageChange('Services')} >
                            Process and Services
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
    );
}

export default NavTabs;