import React from 'react';
import { useState } from 'react';
import Modal from './Modal';
import Project from './Project';
import { motion } from 'framer-motion';


export default function Portfolio() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('../../images/', false, /\.(png|jpe?g|svg)$/));
    console.log(images)


    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState({});
    let projects = [
        {
            id: 0,
            src: images['cabin.png'],
            name: 'LOG CABIN',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
        },
        {
            id: 1,
            src: images['cake.png'],
            name: 'TASTY CAKE',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
        },
        {
            id: 2,
            src: images['circus.png'],
            name: 'CIRCUS TENT',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
        },
        {
            id: 3,
            src: images['game.png'],
            name: 'CONTROLLER',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
        },
        {
            id: 4,
            src: images['safe.png'],
            name: 'LOCKED SAFE',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
        },
        {
            id: 5,
            src: images['submarine.png'],
            name: 'SUBMARINE',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'
        },
    ];

    function closeModal() {
        setModal(false);
        document.body.style.overflowY = 'scroll';
    };

    function openModal(id) {
        setModal(true);
        setModalData(projects[id]);
        document.body.style.overflowY = 'hidden';
    };

    function slider(id) {
        let currentId = modalData.id;
        let next = currentId + id;
        if (next < projects.length && next >= 0) {
            setModalData(projects[next]);
        }
    };

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .3 } }} id='portfolio' className='text-center'>
                <div className='container'>
                    <h2>PORTFOLIO</h2>
                    <div className='d-flex justify-content-center align-items-center my-4'>
                        <div className='line line-dark'></div>
                        <i className="fas fa-solid fa-star fa-2x"></i>
                        <div className='line line-dark'></div>
                    </div>
                    <div className='row g-5'>
                        {projects.map((project) => <Project key={project.id} project={project} openModal={openModal} />)}
                    </div>
                </div>
            </motion.div>

            <Modal modal={modal} project={modalData} closeModal={closeModal} slider={slider} />
        </>
    );
}
