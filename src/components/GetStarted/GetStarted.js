import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsQuestion } from 'react-icons/bs';
import CustomDropdown from '../Dropdown/Dropdown';
import './getstarted.css'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

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
            <div className='main-container-get'>
                <div className='get-started-container'>
                    <p>
                        AI revolutionizes industries, predicting outcomes and fostering innovation.
                        Its cognitive abilities empower efficient decision-making, transforming the way we live and work.
                    </p>
                    <button onClick={openModal}>Get Started</button>
                </div>

                {modalIsOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <div className='about-you' >
                                About You<BsQuestion className='icon-about-you' data-tooltip-id="my-tooltip-1" />
                                <ReactTooltip
                                    id="my-tooltip-1"
                                    place="bottom"
                                    content="The more the details you provide about yourelf the more accurate the prediction will be.."
                                />
                            </div>
                            <div className='drop-down-container'>
                                <div className="image-avotor">
                                    <input type="file" id="file" className="hidden" />
                                    <label
                                        for="file"
                                        className="text-border cursor-pointer flex flex-col items-center justify-center text-center p-7 gap-2 text-sm font-extrabold"
                                    >
                                        Avator <br /> Optional
                                    </label>
                                </div>
                                <CustomDropdown />
                                <div className='personality-content'>
                                    <textarea placeholder='A few words about your personality...' />
                                </div>
                            </div>
                            <Link to='/product'>
                                <button className='submit'>Submit</button>
                            </Link>

                            {/* Close Modal */}
                            <button className="close" onClick={closeModal}>
                                <AiOutlineClose />
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default GetStarted