import React from 'react'

export default function Contact() {

    function handleForm(e) {
        e.preventDefault();
    }

    return (
        <>
            <div id='contact'>
                <div className='container text-center'>
                    <h2>CONTACT ME</h2>
                    <div className='d-flex justify-content-center align-items-center my-4'>
                        <div className='line line-dark'></div>
                        <i className="fas fa-solid fa-star fa-2x"></i>
                        <div className='line line-dark'></div>
                    </div>
                    <div className='row text-start'>
                        <div className='col-lg-8 offset-lg-2'>
                            <form onSubmit={(e) => { handleForm(e) }} id="contactForm" name="sentMessage" noValidate="novalidate">
                                <div className="control-group">
                                    <label className='input-label'>Name</label>
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2 input-box">
                                        <input className="form-control input-me" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className='input-label'>Email Address</label>
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2 input-box">
                                        <input className="form-control input-me" id="email" type="text" placeholder="Email Address" required="required" data-validation-required-message="Please enter your name." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className='input-label'>Phone Number</label>
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2 input-box">
                                        <input className="form-control input-me" id="phone" type="text" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className='input-label'>Message</label>
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2 input-box">
                                        <textarea className="form-control input-me" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div id="success"></div>
                                <div className="form-group">
                                    <button className="btn btm-me my-4" id="sendMessageButton" type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
