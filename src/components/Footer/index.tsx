import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div id='footer'>
      <div className='ftr_cont'>
        <div className='container'>
          <div className='ftr_top'>
            <div className='ftr_logo'>
              <a href='/'>
                <img
                  src={require("../../assets/images/ftr_logo.png")}
                  alt='logo'
                />
              </a>
              <div className='cont_info'>
                <div>
                  <span>Email Address:</span>
                  <a href='mailto:vituallajuphet@yahoo.com'>
                    vituallajuphet@yahoo.com
                  </a>
                </div>
                <div>
                  <span>Phone Number:</span>
                  <a href='tel:09058927403'>09058927403</a>
                </div>
              </div>
            </div>
            <div className='sitemap'>
              <h3>Sitemap</h3>
              <ul>
                <li>
                  <a href='#sec1'>Donate Now</a>
                </li>
                <li>
                  <a href='#'>Contributors</a>
                </li>
                <li>
                  <a href='#'>Who Am I</a>
                </li>
              </ul>
            </div>
            <div className='social_cont'>
              <h3>Social Media</h3>
              <div className='soc'>
                <a href='#'>
                  <img src={require("../../assets/images/fb.png")} alt='' />
                </a>
                <a href='#'>
                  <img
                    src={require("../../assets/images/youtube.png")}
                    alt=''
                  />
                </a>
                <a href='#'>
                  <img src={require("../../assets/images/linkin.png")} alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='ftr_btm'>
          Copyright 2022 - All Rights Reserved by Juphet Vitualla
        </div>
      </div>
    </div>
  );
};

export default Footer;
