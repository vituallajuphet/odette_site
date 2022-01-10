import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: require(`../../assets/images/1.jpg`),
  },
  {
    original: require(`../../assets/images/2.jpg`),
  },
  {
    original: require(`../../assets/images/3.jpg`),
  },
  {
    original: require(`../../assets/images/4.jpg`),
  },
  {
    original: require(`../../assets/images/5.jpg`),
  },
  {
    original: require(`../../assets/images/6.jpg`),
  },
  {
    original: require(`../../assets/images/7.jpg`),
  },
  {
    original: require(`../../assets/images/8.jpg`),
  },
  {
    original: require(`../../assets/images/9.jpg`),
  },
  {
    original: require(`../../assets/images/10.jpg`),
  },
  {
    original: require(`../../assets/images/11.jpg`),
  },
  {
    original: require(`../../assets/images/12.jpg`),
  },
  {
    original: require(`../../assets/images/13.jpg`),
  },
  {
    original: require(`../../assets/images/14.jpg`),
  },
];

const Hero = () => {
  return (
    <div id='hero'>
      <div className='hero_cont'>
        <div className='container'>
          <div className='slides'>
            <ImageGallery
              showPlayButton={false}
              showBullets={true}
              autoPlay={true}
              items={images}
            />
          </div>
          <div className='hero_content'>
            <h2>
              Your Donations <span>make a difference!</span>
            </h2>
            <p>
              Give the <strong>Gift of Hope</strong> for the victims of typhoon{" "}
              <strong>Odette.</strong> Any amount is greatly appreciated.
            </p>
            <a href='#donate'>Make A Donation</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
