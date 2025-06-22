import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { images } from '../../constants/image';

const Products = () => {
  const [classifications, setClassifications] = useState([]);
  const classificationNameMap = {
    台灣咖啡豆系列: 'Taiwan',
    東南亞咖啡豆系列: 'South Asia',
    中南美洲咖啡豆系列: 'Latin America',
    非洲咖啡豆系列: 'Africa Series',
    相關用品及其他: 'Others',
  };

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams] = useSearchParams();
  const classification = searchParams.get('classification') || '';
  const page = parseInt(searchParams.get('page')) || 1;
  const [showTopBtn, setShowTopBtn] = useState(false);

  const [addingId, setAddingId] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;
  const route = `${apiUrl}/api/v1/products`;

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

  // 取得商品
  useEffect(() => {
    axios
      .get(route, {
        params: {
          classification,
          page,
        },
      })
      .then((res) => {
        const data = res.data.data;

        setProducts(data.products);
        setClassifications(data.classification);

        const total = data.total;
        const perPage = 6;
        setTotalPages(Math.ceil(total / perPage));
      })
      .catch((err) => {
        const msg = err.response?.data?.message || '發生錯誤';
        setModalMsg(msg);
        setIsOpen(true);
        setProducts([]);
        setTotalPages(1);
        navigate('/products');
      });
  }, [classification, page]);

  // 加入購物車
  const handleAddToCart = async (productId) => {
    try {
      setAddingId(productId);
      const token = localStorage.getItem('token');
      if (!token) {
        setModalMsg('尚未登入，請先登入會員');
        setIsOpen(true);
        return;
      }

      await axios.post(
        `${apiUrl}/api/v1/users/membership/cart`,
        {
          product_id: productId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      setModalMsg('已加入購物車');
    } catch (error) {
      const msg = error.response?.data?.message || '加入失敗，請稍後再操作';
      setModalMsg(msg);
    } finally {
      setAddingId(null);
      setIsOpen(true);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-coffee-bg-light products-custom-style">
        <div className="products-banner-container">
          <img
            src={images.productsBanner}
            alt="products banner"
            className="narrow-banner"
          />
        </div>
        <div className="container products-container p-0 ">
          {/* 分類項目 */}
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
            {classification && (
              <>
                <li className="products-breadcrumb-arrow">&gt;</li>
                <li className="products-breadcrumb-item">
                  <Link
                    to={`/products?classification=${classification}`}
                    className="products-breadcrumb-link"
                  >
                    {classification ? classification : '所有商品'}
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* 商品列表 */}
          <div className="row p-0 m-0 product-custom">
            <div className="col-md-2 p-0 m-0 ">
              <ul className="products-sidebar m-0 p-0">
                <li className="products-sidebar-title">商品總覽</li>
                {classifications.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/products?classification=${encodeURIComponent(item.name)}&page=1`}
                      className={`products-sidebar-link ${item.name === classification ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-10 p-0 m-0 ps-md-5 products-card-container">
              {/* 分類名稱 */}
              <div className="products-title">
                <p className="products-title-chinese m-0">
                  {classification ? classification : '所有商品'}
                </p>
                <span className="products-title-line"></span>
                <p className="products-title-english m-0">
                  {classification
                    ? classificationNameMap[classification] || classification
                    : 'All Products'}
                </p>
              </div>

              {/* 商品 */}
              <div className="products-card">
                {products.map((product) => (
                  <div
                    className="card products-card-custom rounded-0"
                    key={product.id}
                  >
                    <img
                      src={product.image_url}
                      className="card-img-top card-img rounded-0"
                      alt={product.name}
                    />
                    <div className="products-card-body">
                      <div className="products-card-title-detail">
                        <h5 className="card-title products-card-title m-0">
                          {product.name}
                        </h5>
                        <div className="products-card-title-icon">
                          <img
                            src={images.unlikeIcon}
                            alt="unlike icon"
                            className="icon-detail"
                          />
                        </div>
                      </div>
                      <div className="products-card-text">
                        <div className="text-icon-group">
                          <div className="text-icon">
                            <img
                              src={images.flavorIcon}
                              alt="icon"
                              className="text-icon-detail"
                            />
                          </div>
                          <p className="text-title m-0">特徵</p>
                        </div>
                        <p className="text-content m-0">{product.feature}</p>
                      </div>
                      <div className="products-card-bottom">
                        <div>
                          <p className="card-price m-0">
                            NTD$&nbsp;{product.price}
                          </p>
                        </div>
                        <div>
                          <Link
                            to={`/products/${product.id}`}
                            className="nav-link btn px-3 py-2 card-btn rounded-0 w-100"
                          >
                            查看詳情
                          </Link>
                        </div>
                      </div>
                      <button
                        className="btn products-card-btn rounded-0"
                        onClick={() => handleAddToCart(product.id)}
                        disabled={addingId === product.id}
                      >
                        {addingId === product.id ? '加入中...' : '加入購物車'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 頁碼 */}
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-custom m-0">
                  {page > 1 && (
                    <li className="page-item pagination-custom-item">
                      <Link
                        to={`/products?classification=${classification}&page=${page - 1}`}
                        className="page-link pagination-custom-link"
                      >
                        &laquo;
                      </Link>
                    </li>
                  )}
                  {[...Array(totalPages)].map((_, i) => (
                    <li
                      className={`page-item pagination-custom-item ${i + 1 === page ? 'active' : ''}`}
                      key={i}
                    >
                      <Link
                        to={`/products?classification=${classification}&page=${i + 1}`}
                        className="page-link pagination-custom-link"
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                  {page < totalPages && (
                    <li className="page-item pagination-custom-item">
                      <Link
                        to={`/products?classification=${classification}&page=${page + 1}`}
                        className="page-link pagination-custom-link"
                      >
                        &raquo;
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* top */}
      {showTopBtn && (
        <button className="back-to-top" onClick={scrollToTop}>
          <img src={images.topBtn} alt="back to top btn" />
        </button>
      )}

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
                <h5 className="custom-modal-title">系統通知</h5>
                <button
                  type="button"
                  className="custom-modal-close"
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/products');
                  }}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body custom-modal-body">{modalMsg}</div>
              <div className="modal-footer custom-modal-footer">
                <button
                  type="button"
                  className="custom-modal-btn"
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/products');
                  }}
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Products;
