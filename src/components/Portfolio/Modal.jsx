import React from 'react';

export default function Modal({ project, modal, closeModal, slider }) {

    return (
        <>
            <div className="modal" style={modal ? { display: 'block' } : { display: 'none' }} tabIndex="-1">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content py-5 px-2">
                        <button onClick={() => closeModal()} className='btn-close position-absolute end-0 top-0 p-4 fs-2'></button>
                        <h2 className='text-center fw-bold'>{project.name}</h2>
                        <div className='d-flex justify-content-center align-items-center my-4'>
                            <div className='line line-dark'></div>
                            <i className="fas fa-solid fa-star fa-2x"></i>
                            <div className='line line-dark'></div>
                        </div>
                        <img src={project.src} className='w-75 mx-auto mt-3 mb-5' alt="" />
                        <p className='w-75 mx-auto lead'>{project.desc}</p>
                        <button onClick={() => closeModal()} className='myBtn w-25 mx-auto py-3 fw-bold'>Close Window</button>
                        <div className='arrows'>
                            <button onClick={() => slider(-1)}><i className="fa-solid fa-caret-left"></i></button>
                            <button onClick={() => slider(1)}><i className="fa-solid fa-caret-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
