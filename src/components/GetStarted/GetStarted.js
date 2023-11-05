import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsQuestion } from 'react-icons/bs';
import CustomDropdown from '../Dropdown/Dropdown';
import './getstarted.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Profile from '../../assets/Profile.png'

const GetStarted = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = () => {
        if (!selectedOption) {
            setShowError(true);
        } else {
            setShowError(false);
            navigate('/product');
        }
    };

    return (
        <>
            <div className="main-container-get">
                <div className="get-started-container">
                    <p>
                        AI revolutionizes industries, predicting outcomes and fostering innovation. Its cognitive abilities empower
                        efficient decision-making, transforming the way we live and work.
                    </p>
                    <button onClick={openModal}>Get Started</button>
                </div>

                {modalIsOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <div className="about-you">
                                About You<BsQuestion className="icon-about-you" data-tooltip-id="my-tooltip-1" />
                                <ReactTooltip
                                    id="my-tooltip-1"
                                    place="bottom"
                                    content="The more the details you provide about yourself the more accurate the prediction will be.."
                                />
                            </div>
                            <div className="drop-down-container">
                                <div className="image-avotor">
                                    <input type="file" id="file" className="hidden" />
                                    <label for="file">
                                        <img src={Profile} alt='profile' />
                                    </label>
                                </div>
                                <CustomDropdown showError={showError} handleDropdownChange={setSelectedOption} />
                                <div className="personality-content">
                                    <textarea placeholder="A few words about your personality..." />
                                </div>
                            </div>
                            <button className="submit" onClick={handleSubmit}>
                                Submit
                            </button>

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
    );
};

export default GetStarted;
