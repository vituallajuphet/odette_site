import React from "react";

const MainContent = () => {
  return (
    <div id='main'>
      <div className='main_cont'>
        <div className='container'>
          <main>
            <div className='left_main'>
              <h1>
                Be The Reason <span>Someone Smiles Today!</span>
              </h1>
              <p>
                Another powerful storm, <strong>Typhoon Odette</strong>, worst
                and ravaged visayas Philippines, particularly Cebu, Bohol, and
                Southern Leyte. Hundreds of houses and building are destroyed,
                give the gift of love of christmas by donating cash to help the
                victims of typhoon. Many of displaced families are living in the
                evacuation center such schools and goverment
                establishments/buildings. They are need of clean water, roofs,
                blankets, clothings, foods and medicines.
              </p>
              <a href='#donate'>Donate Now</a>
            </div>
            <div className='right_main'>
              <img
                src={require("../../assets/images/main_image.jpg")}
                alt='person needs help'
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
