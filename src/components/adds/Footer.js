import React from "react";

function Footer() {



    return (
        <section className="F-cont">

            <section className="F-CI">
                <h3> Contact Info: </h3>
                <a href="tel:801-860-7592"> Phone: 801-860-7592 </a>
                <a href="mailto:ktnokes@gmail.com">Email: ktnokes@gmail.com </a>
            </section>
            <br />
            <section className="F-CI">
                <a className='Instalink' href='https://www.instagram.com/ktnokes_customhomes/' >
                    <img className='Insta'
                        alt="Instagram"
                        src='./Pics/Icons/Instagram_logo.png' >
                    </img>
                </a>
                {/* <a href="Facebook.com"> Facebook </a> */}
            </section>


        </section>
    )
};


export default Footer;
