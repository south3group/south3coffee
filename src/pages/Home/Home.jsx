import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import '../../pages/Home/Home.scss';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';

const Home = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   //首頁載入時呼叫 API
  //   axios
  //     .get('/api/')
  //     .then((res) => {
  //       console.log('API 資料:', res.data);
  //       // 你可以根據 API 結果決定是否導頁
  //       // 例如：如果使用者已登入，就導向 dashboard
  //       if (res.data.loggedIn) navigate('/dashboard');
  //     })
  //     .catch((err) => {
  //       console.error('API 錯誤:', err);
  //     });
  // }, []);

  // const handleGoNext = () => {
  //   navigate('/nextpage'); // 假設有個下一頁
  // };

  return (
    <>
      <Header />
      <div>
        <div className="banner-container">
          <Banner />
        </div>
        <div className="banner-text">
          <h1>築一個屬於你的咖啡故事 </h1>
          <p>「為夢想而品味，為品質而築造。」</p>
        </div>
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Home;
