import React from 'react'

export default function Footer() {
    return (
        <>
            <div id='footer'>
                <div className='container text-center'>
                    <div className='row'>
                        <div className='col-lg-4 mb-5 mb-lg-0'>
                            <h4 className='mb-4'>LOCATION</h4>
                            <p className='lead mb-0'>2215 John Daniel Drive <br />
                                Clark, MO 65243</p>
                        </div>
                        <div className='col-lg-4 mb-5 mb-lg-0'>
                            <h4 className='mb-4'>AROUND THE WEB</h4>
                            <div className=''>
                                <a className="btn btn-outline-light btn-social mx-1"><i className='fab fa-brands fa-facebook-f'></i></a>
                                <a className="btn btn-outline-light btn-social mx-1"><i className='fab fa-twitter'></i></a>
                                <a className="btn btn-outline-light btn-social mx-1"><i className="fab fa-brands fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-social mx-1"><i className='fab fa-dribbble'></i></a>
                            </div>
                        </div>
                        <div className='col-lg-4 mb-5 mb-lg-0'>
                            <h4 className='mb-4'>ABOUT FREELANCER</h4>
                            <p className='lead mb-0'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='copyWrite'>
                <p>Copyright © Your Website 2021</p>
            </div>
        </>
    )
}
