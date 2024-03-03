import React, { useState } from 'react';

function ContactInfo() {
    const [page, setPage] = useState(0);
    const FormTitles = ['', '', '', '', '', ''];

    const PageDisplay = () => {
        if (page === 0) {
            return <div className="input-container">
                <input type="text" className="input-field" placeholder="" />
                <div className="input-placeholder">Name / Surname</div>
            </div>;
        } else if (page === 1) {
            return <div className="input-container">
                <input type="text" className="input-field" placeholder="" />
                <div className="input-placeholder">Email Address</div>
            </div>;
        } else if (page === 2) {
            return <div className="input-container">
                <input type="text" className="input-field" placeholder="" />
                <div className="input-placeholder">Mobile phone number</div>
            </div>;
        } else if (page === 3) {
            return <div className="input-container">
                <input type="text" className="input-field" placeholder="" />
                <div className="input-placeholder">Zip code</div>
            </div>;
        } else if (page === 4) {
            return <div className="input-container">
                <input type="text" className="input-field" placeholder="" />
                <div className="input-placeholder">City of Residence</div>
            </div>;
        } else {
            return null; // Return null for the last page or handle other pages as needed
        }
    };

    return (
        <div className="form">
            <div className="progressbar"></div>
            <div className="formContainer">
                <div className="body">{PageDisplay()}</div>
                <div className="formFooter" style={{ marginTop: '12px' }}>
                    <button
                        type="button"
                        className="btn btn-nxtprev btn-nxtprev-prev"
                        style={{ marginRight: '10px' }}
                        disabled={page === 0}
                        onClick={() => setPage((currPage) => currPage - 1)}
                    >
                        <i className="glyphicon glyphicon-menu-left" style={{ fontSize: '11px' }} /> Prev
                    </button>
                    <button
                        type="button"
                        className="btn btn-nxtprev btn-nxtprev-next"
                        disabled={page === FormTitles.length - 1}
                        onClick={() => setPage((currPage) => currPage + 1)}
                    >
                        Next <i className="glyphicon glyphicon-menu-right" style={{ fontSize: '11px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
