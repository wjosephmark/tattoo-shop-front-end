import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className="content-wrapper">


          <div className="heading-wrapper">
            <div className="heading-background-wrapper">
              <img className="background" src="https://static.wixstatic.com/media/8b1cc9_f1037f780b32439292a1af2c21e9fba9~mv2_d_2048_1521_s_2.jpg/v1/fill/w_986,h_386,al_c,q_85,usm_0.66_1.00_0.01/8b1cc9_f1037f780b32439292a1af2c21e9fba9~mv2_d_2048_1521_s_2.webp" />
              <div className="logo-wrapper">
                <img className="logo" src="https://static.wixstatic.com/media/8b1cc9_a575576eb6714d368bf65355922f6c3c~mv2.jpg/v1/fill/w_600,h_229,al_c,q_80,usm_0.66_1.00_0.01/8b1cc9_a575576eb6714d368bf65355922f6c3c~mv2.webp" />
              </div>
            </div>
          </div>

          <div className="contact-container">
            <div className="address-container">
              <a href="https://www.google.com/maps/dir/''/slc+ink/@40.7438352,-111.9654013,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x8752f53aa4bb0ae3:0x776ab595c1ab7241!2m2!1d-111.8915845!2d40.7438587" />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
