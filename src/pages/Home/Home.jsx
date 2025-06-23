import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
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

  // useEffect(() => {
  // // 取得熱賣商品
  // axios
  // .get(`${import.meta.env.VITE_API_URL}/api/v1/products`)
  // .then((response) => {
  //   setBestSellerProducts(response.data);
  // })
  // .catch((error) => {
  //   console.error('API 取得熱賣商品失敗', error);
  // });

  // // 取得咖啡用具商品
  // axios
  // .get(`${import.meta.env.VITE_API_URL}/api/v1/products`)
  // .then((response) => {
  //   setEquipmentProducts(response.data);
  // })
  // .catch((error) => {
  //   console.error('API 取得咖啡用具商品失敗', error);
  // });
  // }, []); // 空陣列代表只在首次渲染時執行一次

  // 假資料模擬
  useEffect(() => {
    // 熱賣商品
    const mockBestSellers = [
      {
        id: 1,
        name: '耶加雪菲 日曬',
        price: 450,
        image: HomeImg.coffee[0],
        tags: ['衣索比亞'],
        flavor: '莓果、花香',
        description:
          '踏上台東的賞楓之旅，感受秋天的絢爛與靜謐魅力。在山谷與林間，楓葉層層疊疊，將整個大地染成金黃與火紅，彷彿一幅大自然的絕美畫卷。從台東的鹿野高台出發，遠眺楓紅點綴的壯麗山景，讓秋風拂過臉龐，感受季節交替的詩意。 沿途探訪池上鄉的稻田步道，稻穗與紅葉交織，呈現秋日特有的田園景色。中午享用當地特色農家菜，品味來自土地的純粹美味。午後前往初鹿牧場，感受滿山楓葉與藍天的完美映襯，還能體驗手作乳製品的樂趣，為旅程增添趣味。 結束一天行程前，在知本溫泉放鬆身心，泡在溫暖的泉水中欣賞夜幕降臨，遠山的楓林在夕陽餘暉下更顯迷人。這是一場結合自然、文化與放鬆的秋日美景之旅，台東賞楓團將帶給你難以忘懷的秋天記憶。',
      },
      {
        id: 2,
        name: '肯亞 AA',
        price: 520,
        image: HomeImg.coffee[1],
        tags: ['肯亞'],
        flavor: '葡萄柚、黑醋栗',
        description: '中深焙帶出成熟果香與濃郁香氣，餘韻持久。',
      },
      {
        id: 3,
        name: '巴西 黃波旁',
        price: 400,
        image: HomeImg.coffee[2],
        tags: ['巴西'],
        flavor: '榛果、巧克力',
        description: '低酸平衡、口感滑順，是入門者首選。',
      },
      {
        id: 4,
        name: '巴西 黃波旁',
        price: 400,
        image: HomeImg.coffee[3],
        tags: ['巴西'],
        flavor: '榛果、巧克力',
        description: '低酸平衡、口感滑順，是入門者首選。',
      },
    ];

    // 咖啡用具
    const mockEquipments = [
      {
        id: 101,
        name: '手沖壺 Hario V60',
        price: 980,
        image: HomeImg.equipment[0],
        tags: ['日本製'],
        description: '設計流暢水流控制精準，手沖必備器具。',
      },
      {
        id: 102,
        name: '濾杯組 V60',
        price: 450,
        image: HomeImg.equipment[1],
        tags: ['台灣製'],
        description: '透明濾杯搭配量匙，輕鬆掌握每一杯風味。',
      },
      {
        id: 103,
        name: '磨豆機 手搖款',
        price: 1200,
        image: HomeImg.equipment[2],
        tags: ['不鏽鋼刀盤'],
        description: '可調粗細設計，讓你隨時享受現磨咖啡香。',
      },
      {
        id: 104,
        name: '磨豆機 手搖款',
        price: 1200,
        image: HomeImg.equipment[3],
        tags: ['不鏽鋼刀盤'],
        description: '可調粗細設計，讓你隨時享受現磨咖啡香。',
      },
      {
        id: 105,
        name: '磨豆機 手搖款',
        price: 1200,
        image: HomeImg.equipment[4],
        tags: ['不鏽鋼刀盤'],
        description: '可調粗細設計，讓你隨時享受現磨咖啡香。',
      },
      {
        id: 106,
        name: '磨豆機 手搖款',
        price: 1200,
        image: HomeImg.equipment[5],
        tags: ['不鏽鋼刀盤'],
        description: '可調粗細設計，讓你隨時享受現磨咖啡香。',
      },
    ];

    setBestSellerProducts(mockBestSellers);
    setEquipmentProducts(mockEquipments);
  }, []);

  return (
    <>
      <Header />

      <div className="banner-container">
        <HomeBanner />
      </div>

      {/* 熱賣商品區塊 */}
      {bestSellerProducts.length > 0 && (
        <section className="py-4">
          <div className="container">
            <div className="text-center homeTitle mb-3">
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
                className="btn btn-outline-dark btn-lg px-5"
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
            <div className="text-center mb-3 homeTitle">
              <h1 className="mb-2">咖啡用具及其他</h1>
              <p className="text-muted">Coffee Equipment & Extras</p>
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
                className="btn btn-outline-dark btn-lg px-5"
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
