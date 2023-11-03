import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsQuestion } from 'react-icons/bs';
import CustomDropdown from '../Dropdown/Dropdown';
import './getstarted.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <Navbar/>
        <div className='main-container-get'>
            <div className='get-started-container'>
                <h1>
                    AI revolutionizes industries, predicting outcomes and fostering innovation.
                    Its cognitive abilities empower efficient decision-making, transforming the way we live and work.
                </h1>
                <button onClick={openModal}>Get Started</button>
            </div>

            {modalIsOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='about-you'>
                            About You<BsQuestion className='icon-about-you' />
                        </div>
                        <div className='drop-down-container'>
                            <div>Avatar Optional</div>
                            <CustomDropdown />
                            <div className='personality-content'>
                                <textarea placeholder='A few words about your personality...'/>
                            </div>
                        </div>
                        <Link to='/product'>
                        <button  className='submit'>Submit</button>
                        </Link>

                        {/* Close Modal */}
                        <button className="close" onClick={closeModal}>
                            <AiOutlineClose />
                        </button>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default GetStarted