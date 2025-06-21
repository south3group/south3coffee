import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import '../../pages/Home/Home.scss';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import About from '../../components/Abouts/About';
import Carousel from '../../components/Carousel/Carousel';

import logo1 from '../../assets/Images/competition-logo1.png';
import logo2 from '../../assets/Images/competition-logo2.png';
import logo3 from '../../assets/Images/competition-logo3.png';
import logo4 from '../../assets/Images/competition-logo4.png';
import logo5 from '../../assets/Images/competition-logo5.png';
import logo6 from '../../assets/Images/competition-logo6.png';

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div className="banner-container">
          <Banner />
        </div>
        <div className="banner-text homeTitle">
          <h1>築一個屬於你的咖啡故事 </h1>
          <p>「為夢想而品味，為品質而築造。」</p>
        </div>
      </div>

      <div>
        <Carousel autoPlay={true} interval={15000} />
      </div>

      {/* 賽事認證 */}
      <section className="py-5" style={{ backgroundColor: '#f8f6f3' }}>
        <div className="container">
          <div className="row justify-content-center align-items-center g-4">
            <div className="text-center homeTitle">
              <h1>榮獲國內外賽事及評鑒的得獎咖啡豆</h1>
            </div>

            <div className="col-6 col-md-4 col-lg-2 text-center">
              <img
                src={logo1}
                alt="巴拿馬認證"
                className="img-fluid cert-logo"
              />
            </div>

            <div className="col-6 col-md-4 col-lg-2 text-center">
              <img src={logo2} alt="有機認證" className="img-fluid cert-logo" />
            </div>

            <div className="col-6 col-md-4 col-lg-2 text-center">
              <img
                src={logo3}
                alt="雨林聯盟的UTZ認證"
                className="img-fluid cert-logo"
              />
            </div>

            <div className="col-6 col-md-4 col-lg-2 text-center">
              <img
                src={logo5}
                alt="國際級精品咖啡評鑑"
                className="img-fluid cert-logo"
              />
            </div>

            <div className="col-6 col-md-4 col-lg-2 text-center">
              <img
                src={logo4}
                alt="公平貿易認證"
                className="img-fluid cert-logo"
              />
            </div>

            <div className="col-6 col-md-4 col-lg-2 text-center">
              <img
                src={logo6}
                alt="COE卓越盃"
                className="img-fluid cert-logo"
              />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Footer />
    </>
  );
};

export default Home;
