import React from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';


function NavTabs() {





    return (
        <header className='header' >
            <div className=' H-1 '>
                <a href='/'>
                    <img alt="Logo" className="logo" src="KTNokesLogo.png" />
                </a>


                <Dropdown >
                    <DropdownToggle id='dropdown-basic' >
                        Menu
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem href="/">
                            Home
                        </DropdownItem>

                        <DropdownItem href="/About" >
                            About the Company
                        </DropdownItem>

                        <DropdownItem href="/Contact" >
                            Contact
                        </DropdownItem>

                        <DropdownItem href="/Gallery" >
                            Gallery
                        </DropdownItem>

                        <DropdownItem href="/Services"  >
                            Process and Services
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </header>
    );
}

export default NavTabs;