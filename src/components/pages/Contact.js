import React from 'react';



function Contact() {

    return (
        <div className='container mt-5' style={{color:'white'}}>
            <h1> Contact me! </h1>

            <div>
                <span className='F-Span'> *Basements must be at minimum of 500 Square Feet </span>
            </div>
            <br/>

            <form className='row g-3' action="https://formsubmit.co/ktnokes@gmail.com" method="POST">
                <div className='col-md-6'>
                    <label for='firstName' className='form-label'> First Name: </label>
                    <input type='text' className='form-control' name='name' id="firstName"
                        placeholder='First Name' required></input>
                </div>
                <div className='col-md-6'>
                    <label for='lastName' className='form-label'> Last Name: </label>
                    <input type='text' className='form-control' name='Last Name' id="lastName"
                        placeholder='Last Name' required></input>
                </div>
                <div className='col-md-8'>
                    <label for="emailInfo" className='form-label'> E-Mail: </label>
                    <input type='email' name='Email' className='form-control' id='emailInfo'
                        placeholder='JohnDoe@email.com' required></input>
                </div>
                <div className='col-md-4'>
                    <label for='phoneNumber' className='form-label'> Phone Number: </label>
                    <input type='text' className='form-control' name='Phone Number' id='phoneNumber'
                        required placeholder='123-456-7899'></input>
                </div>

                <div className='col-md-4'>
                    <label for='projectType' className='form-label'>Project Type: </label>
                    <select type='select' className='form-control' name='Project Type' id='projectType' required>
                        <option> ~Select Here~ </option>
                        <option> Basement Finish</option>
                        <option> Remodel </option>
                        <option> New build </option>
                        <option> Addition </option>
                        <option> Other </option>
                    </select>
                </div>
                <div className='col-md-8'>
                    <label for='projectLocation' className='form-label'> Project Location: </label>
                    <input type='text' className='form-control' name='Project Location' id='projectLocation'
                        required placeholder='City'></input>
                </div>
                <div className='col-md-4'>
                    <label for='sqFootage' className='form-label'> Approx. Sq. Footage (min of 500 sqft) </label>
                    <input type='text' className='form-control' name='Sq Footage' id='sqFootage'
                        required placeholder='500*'></input>
                </div>

                <div className='col-md-12'>
                    <label for="comments" className='form-label'> Description of Project </label>
                    <textarea className='form-control' id='comments' name='comments' rows='7' required></textarea>
                </div>

                <div className='col-md-12'>
                    <button type='submit' className='btn btn-primary'> Submit </button>
                </div>
            </form>
            <br/>
        </div>
    );
}

export default Contact; 