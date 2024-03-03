import React, { useState } from 'react';

function CareerPlans() {
    const [page, setPage] = useState(0);
    const FormTitles = ['', '', '', '', '', ''];

    const PageDisplay = () => {
        if (page === 0) {
            return (<div class="form-group">
                <div class="col-sm-12 col-md-12 col-xs-12">
                    <input type="radio" name="arrangements" id="radio5" class="radio" value="Bording" required />
                    <label for="radio5">Yes, I am registered with the Employment Agency / Job Centre</label>
                </div>
                <div class="col-sm-12 col-md-12 col-xs-12">
                    <input type="radio" name="arrangements" id="radio6" class="radio" value="I am about to register with the Employment Agency / Job Centre" required />
                    <label for="radio6">I am about to register with the Employment Agency / Job Centre</label>
                </div>
                <div class="col-sm-12 col-md-12 col-xs-12">
                    <input type="radio" name="arrangements" id="radio7" class="radio" value="No, I am not yet registered Employment Agency / Job Centre" required />
                    <label for="radio7">No, I am not yet registered Employment Agency / Job Centre</label>
                </div>
                <div class="clear_fix"></div>
            </div>);
        }
        else if (page === 1) {
            return <input type="text" name="emailaddress" placeholder="Email address" class="form-control" required />;
        }
        else if (page === 2) {
            return <input type="text" name="phonenumber" placeholder="Mobile phone number" class="form-control" required />;
        }
        else if (page === 3) {
            return <input type="text" name="zipcode" placeholder="Zip code" class="form-control" required />;
        }
        else if (page === 4) {
            return <input type="text" name="residence" placeholder="City of Residence" class="form-control" required />;
        }
    };

    return (
        <div className="form">
            <div className="progressbar"></div>
            <div className="formContainer">
                <div className="body">{PageDisplay()}</div>
                <div className="formFooter" style={{ marginTop: '12px' }}>
                    <button type="button" className="btn btn-labeled btn-danger"
                        style={{ marginRight: '10px' }}
                        disabled={page === 0}
                        onClick={() => setPage((currPage) => currPage - 1)}>
                        <i className="glyphicon glyphicon-arrow-left" />
                    </button>
                    <button type="button" className="btn btn-labeled btn-primary"
                        disabled={page === FormTitles.length - 1}
                        onClick={() => setPage((currPage) => currPage + 1)}>
                        <i className="glyphicon glyphicon-arrow-right" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CareerPlans;
