import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import CurrentSituation from './CurrentSituation';
import CareerPlans from './CareerPlans';
/* import { ChevronLeft, ChevronRight } from 'react-feather'; */

function Form() {
    const [page, setPage] = useState(0);
    const FormTitles = ['Contact information', 'Career plans', 'Your current situation'];
    const subFormTitles = [
        'To better assist you, we need your contact details. This enables us to reach out to you promptly and share feedback on your eligibility for a Bildungsgutschein.',
        'Please take a moment to answer the following questions, helping us understand whether your career goals are aligned with the scope of our program.',
        'Understanding your current situation is crucial in evaluating your potential for a Bildungsgutschein. Please take a moment to answer the following questions, helping us tailor our support to your unique needs.'
    ];

    const nextPageTitle = page < FormTitles.length - 1 ? `Part ${page + 2}: ${FormTitles[page + 1]}` : '';
    const prevPageTitle = page > 0 ? `Part ${page}: ${FormTitles[page - 1]}` : '';

    const PageDisplay = () => {
        if (page === 0) {
            return <ContactInfo />;
        } else if (page === 1) {
            return <CareerPlans />;
        } else {
            return <CurrentSituation />;
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="form">
                    <div className="progressbar"></div>
                    <div className="form-container">
                        <div className="header">
                            <h1 className='pageHeading'>{FormTitles[page]}
                                <span>{subFormTitles[page]}</span>
                            </h1>

                        </div>
                        <div className="body">{PageDisplay()}</div>
                        <div className="footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {page > 0 && (
                                <div className="btn btn-one left" onClick={() => setPage((currPage) => currPage - 1)}>
                                    <span>{prevPageTitle}</span>
                                </div>
                            )}
                            {page < FormTitles.length - 1 && (
                                <div className="btn btn-one right" onClick={() => setPage((currPage) => currPage + 1)}>
                                    <span>{nextPageTitle}</span>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
