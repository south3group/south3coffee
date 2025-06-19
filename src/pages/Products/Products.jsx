import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { images } from '../../constants/image';

const Products = () => {
  return (
    <>
      <Header />
      <div className="bg-coffee-bg-light products-custom-style">
        <div className="products-banner-container">
          <img
            src={images.productsBanner}
            alt="products banner"
            style={{ width: '100%', height: 'auto' }}
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
            <li className="products-breadcrumb-arrow">&gt;</li>
            <li className="products-breadcrumb-item">
              <Link to="/products" className="products-breadcrumb-link">
                台灣咖啡豆系列
              </Link>
            </li>
          </ul>

          {/* 商品列表 */}
          <div className="row p-0 m-0 product-custom">
            <div className="col-md-2 p-0 m-0 ">
              <ul className="products-sidebar m-0 p-0">
                <li className="products-sidebar-title">商品總覽</li>
                <li>
                  <Link to="/products" className="products-sidebar-link">
                    台灣咖啡豆系列
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="products-sidebar-link">
                    東南亞咖啡豆系列
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="products-sidebar-link">
                    中南美咖啡豆系列
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="products-sidebar-link">
                    非洲咖啡豆系列
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="products-sidebar-link">
                    相關用品及其他
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-10 p-0 m-0 ps-md-5 products-card-container">
              {/* 分類名稱 */}
              <div className="products-title">
                <p className="products-title-chinese m-0">台灣咖啡豆系列</p>
                <span className="products-title-line"></span>
                <p className="products-title-english m-0">
                  Taiwan coffee beans
                </p>
              </div>
              <div className="products-card">
                {/* 卡片 */}
                <div className="card products-card-custom rounded-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee products"
                  />
                  <div className="products-card-body">
                    <div className="products-card-title-detail">
                      <h5 className="card-title products-card-title m-0">
                        晨光之秋
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
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味
                      </p>
                    </div>
                    <div className="products-card-bottom">
                      <div>
                        <p className="card-price m-0">NTD$&nbsp;500</p>
                      </div>
                      <div>
                        <Link
                          to="/products/detail"
                          className="nav-link btn px-3 py-2 card-btn rounded-0 w-100"
                        >
                          查看詳情
                        </Link>
                      </div>
                    </div>
                    <button className="d-none btn products-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
                {/* 卡片 */}
                <div className="card products-card-custom rounded-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee products"
                  />
                  <div className="products-card-body">
                    <div className="products-card-title-detail">
                      <h5 className="card-title products-card-title m-0">
                        晨光之秋
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
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味可風味可風味
                      </p>
                    </div>
                    <div className="products-card-bottom">
                      <p className="card-price m-0">NTD$&nbsp;500</p>
                      <button className="btn card-btn rounded-0">
                        查看詳情
                      </button>
                    </div>
                    <button className="d-none btn products-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
                {/* 卡片 */}
                <div className="card products-card-custom rounded-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee products"
                  />
                  <div className="products-card-body">
                    <div className="products-card-title-detail">
                      <h5 className="card-title products-card-title m-0">
                        晨光之秋
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
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味
                      </p>
                    </div>
                    <div className="products-card-bottom">
                      <p className="card-price m-0">NTD$&nbsp;500</p>
                      <button className="btn card-btn rounded-0">
                        查看詳情
                      </button>
                    </div>
                    <button className="d-none btn products-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
                {/* 卡片 */}
                <div className="card products-card-custom rounded-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee products"
                  />
                  <div className="products-card-body">
                    <div className="products-card-title-detail">
                      <h5 className="card-title products-card-title m-0">
                        晨光之秋
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
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味可風味可風味
                      </p>
                    </div>
                    <div className="products-card-bottom">
                      <p className="card-price m-0">NTD$&nbsp;500</p>
                      <button className="btn card-btn rounded-0">
                        查看詳情
                      </button>
                    </div>
                    <button className="d-none btn products-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
                {/* 卡片 */}
                <div className="card products-card-custom rounded-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee products"
                  />
                  <div className="products-card-body">
                    <div className="products-card-title-detail">
                      <h5 className="card-title products-card-title m-0">
                        晨光之秋
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
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味可風味可風味
                      </p>
                    </div>
                    <div className="products-card-bottom">
                      <p className="card-price m-0">NTD$&nbsp;500</p>
                      <button className="btn card-btn rounded-0">
                        查看詳情
                      </button>
                    </div>
                    <button className="d-none btn products-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
                {/* 卡片 */}
                <div className="card products-card-custom rounded-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee products"
                  />
                  <div className="products-card-body">
                    <div className="products-card-title-detail">
                      <h5 className="card-title products-card-title m-0">
                        晨光之秋
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
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味
                      </p>
                    </div>
                    <div className="products-card-bottom">
                      <p className="card-price m-0">NTD$&nbsp;500</p>
                      <button className="btn card-btn rounded-0">
                        查看詳情
                      </button>
                    </div>
                    <button className="d-none btn products-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>

              {/* 頁碼 */}
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-custom m-0">
                  <li className="page-item pagination-custom-item">
                    <a
                      className="page-link pagination-custom-link"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item pagination-custom-item">
                    <a className="page-link pagination-custom-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item pagination-custom-item">
                    <a className="page-link pagination-custom-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item pagination-custom-item">
                    <a className="page-link pagination-custom-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item pagination-custom-item">
                    <a
                      className="page-link pagination-custom-link"
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
