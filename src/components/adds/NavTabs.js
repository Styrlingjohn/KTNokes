import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {

    const linkStyle = { border: '1px black', padding: '5px', textDecoration: 'none', };


    return (
        <header className='header' >
            <div className=' H-1 '>
                <img alt="Logo" className="logo" src="KTNokesLogo.png" />

                <nav className="main-header-menu">
                    <ul
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            textDecoration: 'none',
                        }}

                        className="list-unstyled"
                    >

                        <li style={linkStyle} className='nav-tab'>
                            <a
                                href="#home"
                                onClick={() => handlePageChange('Home')}
                                className={currentPage === 'Home' ? 'nav-linkactive' : 'nav-link'}
                            >
                                Home
                            </a>
                        </li>

                        <li style={linkStyle} className='nav-tab'>
                            <a
                                href="#about"
                                onClick={() => handlePageChange('About')}
                                className={currentPage === 'About' ? 'nav-linkactive' : 'nav-link'}

                            >
                                About
                            </a>
                        </li>

                        <li style={linkStyle} className='nav-tab'>
                            <a
                                href="#contact"
                                onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-linkactive' : 'nav-link'}
                            >
                                Contact
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavTabs;