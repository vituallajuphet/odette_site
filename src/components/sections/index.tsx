import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Sections = () => {
  return (
    <div id='sec1'>
      <div className='sec1_cont'>
        <div className='container'>
          <div className='sec1_top'>
            <h2 className=''>
              Call For Donations
              <span className=''>For The Victims of Typhoon Odette</span>
            </h2>
            <p>
              In support of the disaster response, rest assured that all of
              donations will be given to the victims of the typhoon.
            </p>
          </div>
          <div className='sec1_btm'>
            <div className='gcash_cont'>
              <img
                src={require("../../assets/images/gcsh.jpg")}
                alt='gcash code'
              />
              <div className='gnumber'>Mobile Number: 0905-892-7403</div>
            </div>
            <div className='bank_cont'>
              <div className='bank_cont_inner'>
                <div className='left_row'>
                  <div>Account Name:</div>
                  <div>Account Number:</div>
                  <div>Bank Name:</div>
                </div>
                <div className='right_row'>
                  <div>JUPHET VITUALLA</div>
                  <div>654-3-654-25859-8</div>
                  <div>METRO BANK</div>
                </div>
              </div>
              <div className='sec_ftr1'>
                Please email a copy of the bank deposit slip or any transactions
                to the email address below for the verification and we will add
                your personal details including the amount on the Contributors
                page.
                <div className='email_cont'>
                  Email address:
                  <a href='mailto:vituallajuphet@yahoo.com'>
                    vituallajuphet@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
