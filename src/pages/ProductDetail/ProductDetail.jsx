import { useState, useEffect } from 'react';
import {
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { images } from '../../constants/image';

const thumbnailUrls = [
  'https://images.unsplash.com/photo-1625021659159-f63f546d74a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1553292218-4892c2e7e1ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1604838699342-2343976f84ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const ProductDetail = () => {
  const { product_id } = useParams();
  const minValue = 1;
  const [quantity, setQuantity] = useState(minValue);
  const [mainImage, setMainImage] = useState('');
  const [product, setProduct] = useState(null);

  const [addingId, setAddingId] = useState(null);

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const [showTopBtn, setShowTopBtn] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;
  const productRoute = `${apiUrl}/api/v1/products/${product_id}`;
  const cartRoute = `${apiUrl}/api/v1/cart`;

  const handleGoBack = () => {
    navigate('/products');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (product === null) return;
    if (!product?.id) {
      navigate('/products');
    }
  }, [product, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 取單商品詳情
  useEffect(() => {
    axios
      .get(productRoute)
      .then((res) => {
        const data = res.data.data;

        if (data) {
          setProduct(data);
          setMainImage(data.image_url || thumbnailUrls[0]);
        } else {
          navigate('/products');
        }
      })
      .catch(() => {
        setProduct({});
        navigate('/products');
      });
  }, [product_id]);

  // 加入購物車
  const handleAddToCart = () => {
    if (!product) return;

    setAddingId(true);
    const token = localStorage.getItem('token');
    if (!token) {
      setModalMsg('尚未登入，請先登入會員');
      setIsOpen(true);
      setAddingId(false);
      return;
    }

    axios
      .post(
        cartRoute,
        {
          product_id: product.id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        setModalMsg('已加入購物車');
      })
      .catch((error) => {
        const msg = error.response?.data?.message || '加入失敗，請稍後再試';
        setModalMsg(msg);
      })
      .finally(() => {
        setAddingId(false);
        setIsOpen(true);
      });
  };

  // 數量加減事件
  const handleDecrease = () => {
    if (quantity > minValue) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleChange = (e) => {
    const val = Number(e.target.value);
    if (!isNaN(val) && val >= minValue) {
      setQuantity(val);
    }
  };

  if (!product) {
    return <div></div>;
  }

  return (
    <>
      <Header />
      <div className="bg-coffee-bg-light products-custom-style">
        <div className="container products-container p-0 ">
          {/* 分類項目 */}
          <div></div>
          <ul className="products-breadcrumb m-0 p-0">
            <li className="products-breadcrumb-item">
              <Link to="/" className="products-breadcrumb-link">
                首頁
              </Link>
            </li>
            <li className="products-breadcrumb-arrow">&gt;</li>
            <li className="products-breadcrumb-item">
              <Link to="/products" className="products-breadcrumb-link">
                商品資訊
              </Link>
            </li>
            <li className="products-breadcrumb-arrow">&gt;</li>
            <li className="products-breadcrumb-item">
              <Link to="/products" className="products-breadcrumb-link">
                所有商品
              </Link>
            </li>
          </ul>

          {/* 主要商品內容 */}
          <div key={product_id} className="detail-container">
            <div className="img-custom-layout">
              {/* 商品 */}
              <div className="product-main">
                <img
                  src={mainImage}
                  alt="thumbnails 1"
                  className="product-main-img"
                />
                {/* 商品縮圖 */}
                <div className="product-thumbnails">
                  {[product.image_url, ...thumbnailUrls]
                    .slice(0, 4)
                    .map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt={`thumbnail-${idx}`}
                        className="img-style"
                        onClick={() => setMainImage(url)}
                      />
                    ))}
                </div>

                {/* 商品內容 */}
                <div className="product-main-content">
                  <div className="product-main-content-info">
                    <div className="product-main-content-info-title">
                      <h4 className="product-name m-0">{product.name}</h4>
                      <div className="product-like-icon">
                        <img
                          src={images.unlikeIcon}
                          alt="unlike icon"
                          className="icon-detail"
                        />
                      </div>
                    </div>
                    <div className="product-main-content-origin m-0">
                      <div className="text-icon-group">
                        <div className="text-icon">
                          <img
                            src={images.originIcon}
                            alt="icon"
                            className="text-icon-detail"
                          />
                        </div>
                        <p className="text-title m-0">產地</p>
                      </div>
                      <p className="text-content">{product.origin || ' '}</p>
                    </div>
                    <div className="product-main-content-flavor m-0">
                      <div className="text-icon-group">
                        <div className="text-icon">
                          <img
                            src={images.flavorIcon}
                            alt="icon"
                            className="text-icon-detail"
                          />
                        </div>
                        <p className="text-title m-0">風味</p>
                      </div>
                      <p className="text-content">
                        {product.flavor || ' '}
                      </p>{' '}
                    </div>
                    <div className="product-main-content-detail m-0">
                      <div className="text-icon-group">
                        <div className="text-icon">
                          <img
                            src={images.infoIcon}
                            alt="icon"
                            className="text-icon-detail"
                          />
                        </div>
                        <p className="text-title m-0">詳細資訊</p>
                      </div>
                      <p className="text-content">
                        品種：{product.variety || ' '}
                      </p>
                      <p className="text-content">
                        處理方式：{product.process_method || ' '}
                      </p>
                      <p className="text-content">
                        酸度：{product.acidity || ' '}
                      </p>
                      <p className="text-content">
                        甜感：{product.flavor || ' '}
                      </p>
                      <p className="text-content">
                        尾顏：{product.aftertaste || ' '}
                      </p>
                    </div>

                    {/* 購買相關 */}
                    <div className="product-main-summary">
                      <div className="product-order-options">
                        <div className="product-order-options-quantity">
                          <button
                            type="button"
                            className="quantity-decrease"
                            onClick={handleDecrease}
                          >
                            <div className="decrease-icon">
                              <img
                                src={images.productDecrease}
                                alt="product-decrease"
                                className="decrease-detail"
                              />
                            </div>
                          </button>
                          <div className="quantity-value">
                            <input
                              type="number"
                              className="value-input border-0"
                              value={quantity}
                              onChange={handleChange}
                              min={minValue}
                              inputMode="numeric"
                            />
                          </div>
                          <button
                            type="button"
                            className="quantity-increase"
                            onClick={handleIncrease}
                          >
                            <div className="increase-icon">
                              <img
                                src={images.productIncrease}
                                alt="product-increase"
                                className="increase-detail"
                              />
                            </div>
                          </button>
                        </div>

                        <div className="product-order-options-stock">
                          庫存：{product.stock || 999}
                        </div>
                      </div>

                      <div className="product-price">
                        NTD${product.price || 999}
                      </div>
                    </div>

                    <button
                      className="product-main-cart border-0"
                      onClick={handleAddToCart}
                      disabled={addingId}
                    >
                      {addingId ? '加入中...' : '加入購物車'}
                    </button>
                  </div>

                  <div className="product-main-description">
                    <h6 className="description-title m-0">商品說明</h6>
                    <span className="description-line"></span>
                    <p className="description-content m-0">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 評論 */}
          <div className="reviews-custom">
            <button
              type="button"
              className="d-none d-md-block reviews-custom-btn border-0"
            >
              <div className="arrow-icon">
                <img
                  src={images.reviewArrowL}
                  alt="review-arrow-left"
                  className="icon-detail"
                />
              </div>
            </button>

            <div className="reviews-custom-content">
              <div className="reviews-title">
                <h5 className="title-detail m-0">客戶評論</h5>
                <span className="d-none d-md-flex title-line"></span>
              </div>
              <div className="reviews-select">
                {/* 單一則評論 */}
                <div className="reviews-box">
                  <div className="reviews-box-top">
                    <img src={images.profile} alt="customer profile" />
                    <div className="reviews-box-top-detail">
                      <div className="reviews-box-top-detail-text">
                        <p className="customer-name m-0">Soham</p>
                        <p className="review-time  m-0">2024/09/22</p>
                      </div>
                      <div className="reviews-box-top-stars">
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="reviews-box-content">
                    這款豆子帶有優雅的花香與柑橘果酸，口感明亮清爽，是我每天早上最喜歡的手沖選擇，喝起來就像陽光灑進窗台的味道。沖煮時，香氣慢慢瀰漫整個空間，像是一種柔和而穩定的提醒：新的一天可以這樣溫柔開始。冷卻後的風味依然乾淨不雜，酸甜平衡，尾韻輕柔帶點蜜香，特別適合在安靜的早晨中靜靜享受，成為我日常生活中最小而確實的幸福。
                  </div>
                </div>
                <div className="reviews-box">
                  <div className="reviews-box-top">
                    <img src={images.profile} alt="customer profile" />
                    <div className="reviews-box-top-detail">
                      <div className="reviews-box-top-detail-text">
                        <p className="customer-name m-0">Soham</p>
                        <p className="review-time  m-0">2024/09/22</p>
                      </div>
                      <div className="reviews-box-top-stars">
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="reviews-box-content">
                    這款豆子帶有優雅的花香與柑橘果酸，口感明亮清爽，是我每天早上最喜歡的手沖選擇，喝起來就像陽光灑進窗台的味道。沖煮時，香氣慢慢瀰漫整個空間，像是一種柔和而穩定的提醒：新的一天可以這樣溫柔開始。冷卻後的風味依然乾淨不雜，酸甜平衡，尾韻輕柔帶點蜜香，特別適合在安靜的早晨中靜靜享受，成為我日常生活中最小而確實的幸福。
                  </div>
                </div>
                <div className="reviews-box">
                  <div className="reviews-box-top">
                    <img src={images.profile} alt="customer profile" />
                    <div className="reviews-box-top-detail">
                      <div className="reviews-box-top-detail-text">
                        <p className="customer-name m-0">Soham</p>
                        <p className="review-time  m-0">2024/09/22</p>
                      </div>
                      <div className="reviews-box-top-stars">
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="reviews-box-content">
                    這款豆子帶有優雅的花香與柑橘果酸，口感明亮清爽，是我每天早上最喜歡的手沖選擇，喝起來就像陽光灑進窗台的味道。沖煮時，香氣慢慢瀰漫整個空間，像是一種柔和而穩定的提醒：新的一天可以這樣溫柔開始。冷卻後的風味依然乾淨不雜，酸甜平衡，尾韻輕柔帶點蜜香，特別適合在安靜的早晨中靜靜享受，成為我日常生活中最小而確實的幸福。
                  </div>
                </div>
                <div className="reviews-box">
                  <div className="reviews-box-top">
                    <img src={images.profile} alt="customer profile" />
                    <div className="reviews-box-top-detail">
                      <div className="reviews-box-top-detail-text">
                        <p className="customer-name m-0">Soham</p>
                        <p className="review-time  m-0">2024/09/22</p>
                      </div>
                      <div className="reviews-box-top-stars">
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                        <img
                          src={images.starIcon}
                          alt="starts"
                          className="review-starts"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="reviews-box-content">
                    這款豆子帶有優雅的花香與柑橘果酸，口感明亮清爽，是我每天早上最喜歡的手沖選擇，喝起來就像陽光灑進窗台的味道。沖煮時，香氣慢慢瀰漫整個空間，像是一種柔和而穩定的提醒：新的一天可以這樣溫柔開始。冷卻後的風味依然乾淨不雜，酸甜平衡，尾韻輕柔帶點蜜香，特別適合在安靜的早晨中靜靜享受，成為我日常生活中最小而確實的幸福。
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="d-none d-md-block reviews-custom-btn border-0"
            >
              <div className="arrow-icon">
                <img
                  src={images.reviewArrowR}
                  alt="review-arrow-right"
                  className="icon-detail"
                />
              </div>
            </button>
          </div>
          <button onClick={handleGoBack} className="go-back-btn rounded-0">
            返回上頁
          </button>
        </div>
        <div></div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="modal show fade d-block custom-modal"
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog custom-modal-dialog">
            <div className="modal-content custom-modal-content">
              <div className="modal-header custom-modal-header">
                <h5 className="custom-modal-title">註冊失敗</h5>
                <button
                  type="button"
                  className="custom-modal-close"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body custom-modal-body">{modalMsg}</div>
              <div className="modal-footer custom-modal-footer">
                <button
                  type="button"
                  className="custom-modal-btn"
                  onClick={() => setIsOpen(false)}
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTopBtn && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img src={images.topBtn} alt="back to top btn" />
        </button>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
