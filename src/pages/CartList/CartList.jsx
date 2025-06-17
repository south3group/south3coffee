import { useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { images } from '../../constants/image';

const CartList = () => {
  const minValue = 1;
  const [quantity, setQuantity] = useState(minValue);

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

  return (
    <>
      <Header />
      <div className="bg-coffee-bg-light cart-custom">
        <div className="cart-banner-container">
          <img
            src={images.productsBanner}
            alt="cart banner"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="container cart-container p-0 ">
          {/* 頁面標題 */}
          <div className="cart-title">
            <p className="cart-title-chinese m-0">購物車</p>
            <span className="cart-title-line"></span>
            <p className="cart-title-english m-0">Shopping cart</p>
          </div>

          <div className="content-style m-0">
            <div className="content-style-cart p-0">
              <div className="cart-custom">
                
                {/* 商品清單 */}
                {/* 手機版 */}
                <div className="d-flex d-md-none cart-custom-mobile">
                  {/* 商品 */}
                  <div className="order-card">
                    <div className="text-group">
                      <div className="product-img-group">
                        <input
                          type="checkbox"
                          className="checkbox-custom rounded-0"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1625021659159-f63f546d74a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="coffee bean img"
                          className="cart-product-img"
                        />
                      </div>
                      <div className="product-info-group">
                        <div className="info-header">
                          <div className="m-0 text-group-header">
                            <p className="text-group-text m-0">
                              嘉義阿里山咖啡豆(500g)
                            </p>
                            <div className="del-icon">
                              <img
                                src={images.delIcon}
                                alt="delete icon-detail"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="m-0 text-group-price">
                          NTD$ <span className="text-group-text">500</span>
                        </p>
                        {/* 增減數量 */}
                        <div className="order-options">
                          <div className="order-options-quantity">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 商品 */}
                  <div className="order-card">
                    <div className="text-group">
                      <div className="product-img-group">
                        <input
                          type="checkbox"
                          className="checkbox-custom rounded-0"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1625021659159-f63f546d74a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="coffee bean img"
                          className="cart-product-img"
                        />
                      </div>
                      <div className="product-info-group">
                        <div className="info-header">
                          <div className="m-0 text-group-header">
                            <p className="text-group-text m-0">
                              嘉義阿里山咖啡豆(500g)
                            </p>
                            <div className="del-icon">
                              <img
                                src={images.delIcon}
                                alt="delete icon-detail"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="m-0 text-group-price">
                          NTD$ <span className="text-group-text">500</span>
                        </p>
                        {/* 增減數量 */}
                        <div className="order-options">
                          <div className="order-options-quantity">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 商品 */}
                  <div className="order-card">
                    <div className="text-group">
                      <div className="product-img-group">
                        <input
                          type="checkbox"
                          className="checkbox-custom rounded-0"
                        />
                        <img
                          src="https://images.unsplash.com/photo-1625021659159-f63f546d74a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="coffee bean img"
                          className="cart-product-img"
                        />
                      </div>
                      <div className="product-info-group">
                        <div className="info-header">
                          <div className="m-0 text-group-header">
                            <p className="text-group-text m-0">
                              嘉義阿里山咖啡豆(500g)
                            </p>
                            <div className="del-icon">
                              <img
                                src={images.delIcon}
                                alt="delete icon-detail"
                              />
                            </div>
                          </div>
                        </div>
                        <p className="m-0 text-group-price">
                          NTD$ <span className="text-group-text">500</span>
                        </p>
                        {/* 增減數量 */}
                        <div className="order-options">
                          <div className="order-options-quantity">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 桌電版 */}
                <table className="d-none d-md-table table cart-custom-table m-0 ">
                  <thead className="cart-custom-style">
                    <tr>
                      <th scope="col" className="cart-custom-style-th">
                        <img src={images.checkboxIcon} alt="checkbox icon" />
                      </th>
                      <th scope="col" className="cart-custom-style-th">
                        商品圖片
                      </th>
                      <th scope="col" className="cart-custom-style-th">
                        商品名稱
                      </th>
                      <th scope="col" className="cart-custom-style-th">
                        單價
                      </th>
                      <th scope="col" className="cart-custom-style-th">
                        數量
                      </th>
                      <th scope="col" className="cart-custom-style-th">
                        小計
                      </th>
                      <th scope="col" className="cart-custom-style-th"></th>
                    </tr>
                  </thead>
                  <tbody className="cart-custom-tbody">
                    <tr>
                      <th scope="row" className="cart-custom-tbody-th">
                        <input type="checkbox" className="checkbox-custom" />
                      </th>
                      <td className="cart-custom-tbody-td cart-product">
                        <img
                          src="https://images.unsplash.com/photo-1625021659159-f63f546d74a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="coffee bean img"
                          className="cart-product-img"
                        />
                      </td>
                      <td className="cart-custom-tbody-td">
                        哥倫比亞咖啡豆(500g)
                      </td>
                      <td className="cart-custom-tbody-td">
                        <p className="box-currency m-0">
                          NTD$ <span>600</span>
                        </p>
                      </td>
                      <td className="cart-custom-tbody-td">
                        {/* 增減數量 */}
                        <div className="order-options">
                          <div className="order-options-quantity">
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
                        </div>
                      </td>
                      <td className="cart-custom-tbody-td">
                        <p className="box-currency m-0">
                          NTD$ <span>1,800</span>
                        </p>
                      </td>
                      <td className="cart-custom-tbody-td">
                        <div className="del-icon">
                          <img src={images.delIcon} alt="delete icon-detail" />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="cart-custom-tbody-th">
                        <input type="checkbox" className="checkbox-custom" />
                      </th>
                      <td className="cart-custom-tbody-td cart-product">
                        <img
                          src="https://images.unsplash.com/photo-1625021659159-f63f546d74a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="coffee bean img"
                          className="cart-product-img"
                        />
                      </td>
                      <td className="cart-custom-tbody-td">
                        哥倫比亞咖啡豆(500g)
                      </td>
                      <td className="cart-custom-tbody-td">
                        <p className="box-currency m-0">
                          NTD$ <span>600</span>
                        </p>
                      </td>
                      <td className="cart-custom-tbody-td">
                        {/* 增減數量 */}
                        <div className="order-options">
                          <div className="order-options-quantity">
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
                        </div>
                      </td>
                      <td className="cart-custom-tbody-td">
                        <p className="box-currency m-0">
                          NTD$ <span>1,800</span>
                        </p>
                      </td>
                      <td className="cart-custom-tbody-td">
                        <div className="del-icon">
                          <img src={images.delIcon} alt="delete icon-detail" />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="cart-custom-tbody-th">
                        <input type="checkbox" className="checkbox-custom" />
                      </th>
                      <td className="cart-custom-tbody-td cart-product">
                        <img
                          src="https://images.unsplash.com/photo-1625021659159-f63f546d74a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="coffee bean img"
                          className="cart-product-img"
                        />
                      </td>
                      <td className="cart-custom-tbody-td">
                        哥倫比亞咖啡豆(500g)
                      </td>
                      <td className="cart-custom-tbody-td">
                        <p className="box-currency m-0">
                          NTD$ <span>600</span>
                        </p>
                      </td>
                      <td className="cart-custom-tbody-td">
                        {/* 增減數量 */}
                        <div className="order-options">
                          <div className="order-options-quantity">
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
                        </div>
                      </td>
                      <td className="cart-custom-tbody-td">
                        <p className="box-currency m-0">
                          NTD$ <span>1,800</span>
                        </p>
                      </td>
                      <td className="cart-custom-tbody-td">
                        <div className="del-icon">
                          <img src={images.delIcon} alt="delete icon-detail" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 結算區域 */}
            <div className="cart-total">
              <div className="cart-total-custom">
                <div className="coupon-section">
                  <p className="coupon-title m-0">優惠券</p>
                  <div className="coupon-input">
                    <input type="text" placeholder="請輸入優惠序號" />
                    <button type="button" className="coupon-btn border-0">
                      <p className="m-0">套用</p>
                    </button>
                  </div>
                </div>
                <div className="price-detail">
                  <p className="product-title m-0">商品金額</p>
                  <div className="price-box">
                    <p className="product-price m-0">NTD$</p>
                    <p className="product-price m-0">3,550</p>
                  </div>
                </div>
                <div className="price-detail">
                  <p className="account-title m-0">折扣金額</p>
                  <div className="price-box">
                    <p className="account-price m-0">NTD$</p>
                    <p className="account-price m-0">0</p>
                  </div>
                </div>

                <span className="total-line"></span>

                <div className="price-detail">
                  <p className="total-title m-0">金額總計</p>
                  <div className="price-box">
                    <p className="total-price m-0">NTD$</p>
                    <p className="total-price m-0">3,550</p>
                  </div>
                </div>

                <div className="coupon-check">
                  <button type="button" className="coupon-check-continue">
                    繼續選購
                  </button>
                  <button
                    type="button"
                    className="coupon-check-proceed border-0"
                  >
                    前往結帳
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 推薦 */}
          <div className="recommend-custom">
            <button
              type="button"
              className="d-none d-md-block recommend-custom-btn border-0"
            >
              <div className="arrow-icon">
                <img
                  src={images.reviewArrowL}
                  alt="recommend-arrow-left"
                  className="icon-detail"
                />
              </div>
            </button>

            <div className="recommend-card">
              <h5 className="recommend-title m-0">本期推薦</h5>

              <div className="card-group">
                {/* 卡片 */}
                <div className="card recommend-card-style m-0 rounded-0 border-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee recommend"
                  />
                  <div className="recommend-card-content">
                    <div className="recommend-card-body">
                      <h5 className="card-title recommend-card-body-title m-0">
                        晨光之秋
                      </h5>
                      <div className="recommend-card-body-title-icon">
                        <img
                          src={images.unlikeIcon}
                          alt="unlike icon"
                          className="icon-detail"
                        />
                      </div>
                    </div>
                    <div className="recommend-card-body-text">
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味
                      </p>
                    </div>
                    <div className="recommend-card-bottom">
                      <div className="recommend-price-box">
                        <p className="recommend-price m-0">NTD$</p>
                        <p className="recommend-price m-0">500</p>
                      </div>
                    </div>

                    <button className="btn recommend-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
                {/* 卡片 */}
                <div className="card recommend-card-style m-0 rounded-0 border-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee recommend"
                  />
                  <div className="recommend-card-content">
                    <div className="recommend-card-body">
                      <h5 className="card-title recommend-card-body-title m-0">
                        晨光之秋
                      </h5>
                      <div className="recommend-card-body-title-icon">
                        <img
                          src={images.unlikeIcon}
                          alt="unlike icon"
                          className="icon-detail"
                        />
                      </div>
                    </div>
                    <div className="recommend-card-body-text">
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味
                      </p>
                    </div>
                    <div className="recommend-card-bottom">
                      <div className="recommend-price-box">
                        <p className="recommend-price m-0">NTD$</p>
                        <p className="recommend-price m-0">500</p>
                      </div>
                    </div>

                    <button className="btn recommend-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
                {/* 卡片 */}
                <div className="card recommend-card-style m-0 rounded-0 border-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee recommend"
                  />
                  <div className="recommend-card-content">
                    <div className="recommend-card-body">
                      <h5 className="card-title recommend-card-body-title m-0">
                        晨光之秋
                      </h5>
                      <div className="recommend-card-body-title-icon">
                        <img
                          src={images.unlikeIcon}
                          alt="unlike icon"
                          className="icon-detail"
                        />
                      </div>
                    </div>
                    <div className="recommend-card-body-text">
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味
                      </p>
                    </div>
                    <div className="recommend-card-bottom">
                      <div className="recommend-price-box">
                        <p className="recommend-price m-0">NTD$</p>
                        <p className="recommend-price m-0">500</p>
                      </div>
                    </div>

                    <button className="btn recommend-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
                {/* 卡片 */}
                <div className="card recommend-card-style m-0 rounded-0 border-0">
                  <img
                    src="https://images.unsplash.com/photo-1620820186187-fc32e79adb74?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="card-img-top card-img rounded-0"
                    alt="coffee recommend"
                  />
                  <div className="recommend-card-content">
                    <div className="recommend-card-body">
                      <h5 className="card-title recommend-card-body-title m-0">
                        晨光之秋
                      </h5>
                      <div className="recommend-card-body-title-icon">
                        <img
                          src={images.unlikeIcon}
                          alt="unlike icon"
                          className="icon-detail"
                        />
                      </div>
                    </div>
                    <div className="recommend-card-body-text">
                      <p className="text-content m-0">
                        帶有焦糖、堅果、可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味可可風味可風味可風味
                      </p>
                    </div>
                    <div className="recommend-card-bottom">
                      <div className="recommend-price-box">
                        <p className="recommend-price m-0">NTD$</p>
                        <p className="recommend-price m-0">500</p>
                      </div>
                    </div>

                    <button className="btn recommend-card-btn rounded-0">
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="d-none d-md-block recommend-custom-btn border-0"
            >
              <div className="arrow-icon">
                <img
                  src={images.reviewArrowR}
                  alt="recommend-arrow-right"
                  className="icon-detail"
                />
              </div>
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default CartList;
