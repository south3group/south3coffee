import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header/Header';
import '../../pages/Home/Home.scss';
import Footer from '../../components/Footer/Footer';
import HomeBanner from '../../components/Banner/HomeBanner';
import About from '../../components/Abouts/About';
import Carousel from '../../components/Carousel/Carousel';
import HomeCard from '../../components/ProductCard/HomeCard';
import { images } from '../../constants/image';
import { HomeImg } from '../../constants/HomeImg';

const Home = () => {
  const navigate = useNavigate();
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [equipmentProducts, setEquipmentProducts] = useState([]);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const hotRoute = `${apiUrl}/api/v1/products/bestSeller`;
  const equipmentRoute = `${apiUrl}/api/v1/products/extras`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // top 按鈕
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //取得熱門商品
  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const response = await axios.get(hotRoute);

        if (response.status === 200 && response.data.data) {
          const apiData = response.data.data.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image_url,
            origin: [item.origin],
            feature: item.feature,
            description: item.description,
          }));

          setBestSellerProducts(apiData);
        }
      } catch (error) {
        console.error('取得熱門商品失敗:', error);
        console.log('hotRoute:', hotRoute);
      }
    };

    fetchBestSellers();
  }, []); // 空陣列代表只在首次渲染時執行一次

  //取得咖啡用具及其他

  useEffect(() => {
    const fetchEquipmentProducts = async () => {
      try {
        const response = await axios.get(equipmentRoute);

        if (response.status === 200 && response.data.data) {
          const apiData = response.data.data.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image_url,
            description: item.description,
          }));

          setEquipmentProducts(apiData);
        }
      } catch (error) {
        console.error('取得相關用品及其他商品失敗:', error);
        console.log('equipmentRoute:', equipmentRoute);
      }
    };

    fetchEquipmentProducts();
  }, []); // 空陣列代表只在首次渲染時執行一次

  return (
    <>
      <Header />

      <div className="banner-container ">
        <HomeBanner />
      </div>

      {/* 熱賣商品區塊 */}
      {bestSellerProducts.length > 0 && (
        <section className="py-4">
          <div className="container">
            <div className="text-center homeTitle mb-5">
              <h1 className="mb-2">熱賣商品</h1>
              <p className="text-muted">Best seller</p>
              <hr
                className="w-25 mx-auto"
                style={{ height: '2px', background: '#8B4513' }}
              />
            </div>
            <div className="row g-4">
              {bestSellerProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={index === 0 ? 'col-12' : 'col-lg-4 col-md-6'}
                >
                  <HomeCard product={product} clickable isLarge={index === 0} />
                </div>
              ))}
            </div>

            {/* 查看更多按鈕 */}
            <div className="text-center mt-4 mb-5">
              <button
                className="btn btn-outline-coffee-primary-300 btn-lg text-coffee-primary-800 px-5"
                onClick={() => navigate('/products')}
              >
                查看更多
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 輪播圖 */}
      <div>
        <Carousel autoPlay={true} interval={15000} />
      </div>

      {/* 咖啡用品區 */}
      {equipmentProducts.length > 0 && (
        <section className="py-4 bg-light">
          <div className="container">
            <div className="text-center mb-5 homeTitle">
              <h1 className="mb-2">相關用品及其他</h1>
              <p className="text-muted">Related Equipment & Extras</p>
              <hr
                className="w-25 mx-auto"
                style={{ height: '2px', background: '#8B4513' }}
              />
            </div>
            <div className="row g-4">
              {equipmentProducts.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6">
                  <HomeCard product={product} clickable />
                </div>
              ))}
            </div>

            {/* 查看更多按鈕 */}
            <div className="text-center mt-4 mb-5">
              <button
                className="btn btn-outline-coffee-primary-300 btn-lg text-coffee-primary-800 px-5"
                onClick={() => navigate('/products')}
              >
                查看更多
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 賽事認證 */}
      <section className="py-4" style={{ backgroundColor: '#f8f6f3' }}>
        <div className="container">
          <div className="text-center homeTitle mb-5">
            <h1>榮獲國內外賽事及評鑒的得獎咖啡豆</h1>
          </div>

          {/* 手機版滑動logo */}
          <div className="d-flex d-md-none overflow-auto px-2">
            {HomeImg.logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-center me-3 cert-logo-slide"
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="img-fluid cert-logo"
                />
              </div>
            ))}
          </div>

          {/* 電腦版logo */}
          <div className="row justify-content-center align-items-center g-4 d-none d-md-flex">
            {HomeImg.logos.map((logo, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-2 text-center">
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="img-fluid cert-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />

      {showTopBtn && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img src={images.topBtn} alt="back to top btn" />
        </button>
      )}
      <Footer />
    </>
  );
};

export default Home;
