import React from 'react';

export default function Project({ project, openModal }) {
    return (
        <>
            <div className='col-lg-4 col-md-6'>
                <div className='item'>
                    <div onClick={() => openModal(project.id)} className='rounded-3 position-relative overflow-hidden'>
                        <div className='layer'>
                            <i className="fas fa-solid fa-plus fa-5x text-white"></i>
                        </div>
                        <img src={project.src} className='w-100 rounded-3' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
