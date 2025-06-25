import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { images } from '../../constants/image';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [total, setTotal] = useState(0);
  const [modalMsg, setModalMsg] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponSuccess, setCouponSuccess] = useState('');
  const [couponError, setCouponError] = useState('');
  const [addingId, setAddingId] = useState(null);
  const [recommendList, setRecommendList] = useState([]);

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  // 取得購物車
  const getCart = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setModalMsg('請先登入會員');
        setIsOpen(true);
        return;
      }
      const res = await axios.get(`${apiUrl}/api/v1/users/membership/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Cache-Control': 'no-cache',
        },
        params: { t: Date.now() }, // 強制避免快取
      });

      const cartData = res.data?.data?.items;
      const cartInfo = res.data?.data;

      if (!Array.isArray(cartData)) {
        throw new Error('從伺服器收到的購物車資料格式不正確');
      }

      const filtered = cartData.filter((item) => !item.deleted_at); // 防止顯示軟刪除項

      setCartItems(
        filtered.map((item) => ({
          product: {
            id: item.product_id,
            name: item.name,
            image_url: item.image_url,
            price: item.price,
          },
          quantity: item.quantity || 1,
          price: item.price,
        })),
      );

      const price =
        cartInfo?.final_price ||
        filtered.reduce(
          (acc, item) => acc + item.price * (item.quantity || 1),
          0,
        );
      setTotal(price);

      const allItemIds = new Set(filtered.map((item) => item.product_id));
      setSelectedItems(allItemIds);
    } catch (error) {
      if (
        error.response?.status === 404 ||
        error.response?.data?.message === '購物車是空的'
      ) {
        setCartItems([]);
        setTotal(0);
      } else {
        const msg =
          error.response?.data?.message || error.message || '取得購物車失敗';
        setModalMsg(msg);
        setIsOpen(true);
      }
    }
  };

  // 更新購物商商品數量
  const updateQuantity = async (productId, newQuantity) => {
    const quantity = Math.max(1, newQuantity);
    setCartItems(
      cartItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setModalMsg('請先登入會員');
        setIsOpen(true);
        return;
      }

      await axios.patch(
        `${apiUrl}/api/v1/users/membership/cart`,
        { product_id: productId, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } catch (error) {
      const msg = error.response?.data?.message || '更新數量失敗';
      setModalMsg(msg);
      setIsOpen(true);
    }
  };

  // 刪除購物車項目
  const removeItem = async (productId) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        `${apiUrl}/api/v1/users/membership/cart/delete`,
        { product_id: productId },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
    } catch (error) {
      const msg = error.response?.data?.message || '刪除失敗';
      setModalMsg(msg);
      setIsOpen(true);
    }
  };

  // 套用優惠券
  const applyCoupon = async () => {
    if (!couponCode.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${apiUrl}/api/v1/users/membership/discount`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ discount_kol: couponCode }),
        },
      );

      const result = await response.json();

      if (response.ok) {
        const safeDiscount = Math.min(result.data.discount_amount || 0, total);
        setDiscountAmount(safeDiscount);
        setCouponError('');
        setCouponSuccess('已成功套用優惠券');
      } else {
        setDiscountAmount(0);
        setCouponError(result.message || '優惠碼無效');
        setCouponSuccess('');
      }
    } catch (err) {
      setDiscountAmount(0);
      setCouponError('伺服器錯誤，請稍後再試');
      setCouponSuccess('');
      console.error('applyCoupon error:', err);
    }
  };

  // 取得推薦商品
  const getBestSeller = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/products/bestSeller`);
      setRecommendList(res.data?.data || []);
    } catch (error) {
      console.error('取得推薦商品失敗', error);
    }
  };

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
      getCart(); //刷新購物車資料
    } catch (error) {
      const msg = error.response?.data?.message || '加入失敗，請稍後再操作';
      setModalMsg(msg);
    } finally {
      setAddingId(null);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    getCart();
    getBestSeller();
  }, []);

  useEffect(() => {
    // 當購物車項目或選中項目改變時，重新計算總金額
    const newTotal = cartItems
      .filter((item) => selectedItems.has(item.product.id))
      .reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cartItems, selectedItems]);

  const handleDecrease = (item) => {
    updateQuantity(item.product.id, item.quantity - 1);
  };

  const handleIncrease = (item) => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleChange = (e, item) => {
    const val = Number(e.target.value);
    if (!isNaN(val)) {
      updateQuantity(item.product.id, val);
    }
  };

  const handleSelectItem = (productId) => {
    setSelectedItems((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(productId)) {
        newSelected.delete(productId);
      } else {
        newSelected.add(productId);
      }
      return newSelected;
    });
  };

  const handleSelectAll = () => {
    if (selectedItems.size === cartItems.length) {
      setSelectedItems(new Set()); // Deselect all
    } else {
      const allItemIds = new Set(cartItems.map((item) => item.product.id));
      setSelectedItems(allItemIds); // Select all
    }
  };

  const minValue = 1;

  return (
    <>
      <Header />
      <div className="bg-coffee-bg-light cart-custom">
        <div className="cart-banner-container">
          <img
            src={images.hotCoffeeBanner}
            alt="cart banner"
            className="narrow-banner"
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
                {cartItems.length > 0 ? (
                  <>
                    {/* 商品清單 */}
                    {/* 手機版 */}
                    <div className="d-flex d-md-none cart-custom-mobile">
                      {cartItems.map((item) => (
                        <div className="order-card" key={item.product.id}>
                          <div className="text-group">
                            <div className="product-img-group">
                              <input
                                type="checkbox"
                                className="checkbox-custom rounded-0"
                                checked={selectedItems.has(item.product.id)}
                                onChange={() =>
                                  handleSelectItem(item.product.id)
                                }
                              />
                              <img
                                src={item.product.image_url}
                                alt={item.product.name}
                                className="cart-product-img"
                              />
                            </div>
                            <div className="product-info-group">
                              <div className="info-header">
                                <div className="m-0 text-group-header">
                                  <p className="text-group-text m-0">
                                    {item.product.name}
                                  </p>
                                  <div
                                    className="del-icon"
                                    onClick={() => removeItem(item.product.id)}
                                  >
                                    <img
                                      src={images.delIcon}
                                      alt="delete icon-detail"
                                    />
                                  </div>
                                </div>
                              </div>
                              <p className="m-0 text-group-price">
                                NTD${' '}
                                <span className="text-group-text">
                                  {item.product.price}
                                </span>
                              </p>
                              {/* 增減數量 */}
                              <div className="order-options">
                                <div className="order-options-quantity">
                                  <button
                                    type="button"
                                    className="quantity-decrease"
                                    onClick={() => handleDecrease(item)}
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
                                      value={item.quantity}
                                      onChange={(e) => handleChange(e, item)}
                                      min={minValue}
                                    />
                                  </div>
                                  <button
                                    type="button"
                                    className="quantity-increase"
                                    onClick={() => handleIncrease(item)}
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
                      ))}
                    </div>

                    {/* 桌電版 */}
                    <div className="d-none d-md-block">
                      <table className="table cart-custom-table m-0">
                        <colgroup>
                          <col style={{ width: '5%' }} />
                          <col style={{ width: '15%' }} />
                          <col style={{ width: '30%' }} />
                          <col style={{ width: '15%' }} />
                          <col style={{ width: '15%' }} />
                          <col style={{ width: '15%' }} />
                          <col style={{ width: '5%' }} />
                        </colgroup>
                        <thead className="cart-custom-style">
                          <tr>
                            <th scope="col" className="cart-custom-style-th">
                              <input
                                type="checkbox"
                                className="checkbox-custom"
                                onChange={handleSelectAll}
                                checked={
                                  cartItems.length > 0 &&
                                  selectedItems.size === cartItems.length
                                }
                              />
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
                            <th
                              scope="col"
                              className="cart-custom-style-th"
                            ></th>
                          </tr>
                        </thead>
                      </table>
                      <div className="table-body-scroll-container">
                        <table className="table cart-custom-table m-0">
                          <colgroup>
                            <col style={{ width: '5%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '30%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '15%' }} />
                            <col style={{ width: '5%' }} />
                          </colgroup>
                          <tbody className="cart-custom-tbody">
                            {cartItems.map((item) => (
                              <tr key={item.product.id}>
                                <th
                                  scope="row"
                                  className="cart-custom-tbody-th"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox-custom"
                                    checked={selectedItems.has(item.product.id)}
                                    onChange={() =>
                                      handleSelectItem(item.product.id)
                                    }
                                  />
                                </th>
                                <td className="cart-custom-tbody-td cart-product">
                                  <img
                                    src={item.product.image_url}
                                    alt={item.product.name}
                                    className="cart-product-img"
                                  />
                                </td>
                                <td className="cart-custom-tbody-td">
                                  {item.product.name}
                                </td>
                                <td className="cart-custom-tbody-td">
                                  <p className="box-currency m-0">
                                    NTD$ <span>{item.product.price}</span>
                                  </p>
                                </td>
                                <td className="cart-custom-tbody-td">
                                  {/* 增減數量 */}
                                  <div className="order-options">
                                    <div className="order-options-quantity">
                                      <button
                                        type="button"
                                        className="quantity-decrease"
                                        onClick={() => handleDecrease(item)}
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
                                          value={item.quantity}
                                          onChange={(e) =>
                                            handleChange(e, item)
                                          }
                                          min={minValue}
                                        />
                                      </div>
                                      <button
                                        type="button"
                                        className="quantity-increase"
                                        onClick={() => handleIncrease(item)}
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
                                    NTD${' '}
                                    <span>
                                      {item.product.price * item.quantity}
                                    </span>
                                  </p>
                                </td>
                                <td className="cart-custom-tbody-td">
                                  <div
                                    className="del-icon"
                                    onClick={() => removeItem(item.product.id)}
                                  >
                                    <img
                                      src={images.delIcon}
                                      alt="delete icon-detail"
                                    />
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <table className="table cart-custom-table m-0 ">
                    <thead className="cart-custom-style">
                      <tr>
                        <th scope="col" className="cart-custom-style-th">
                          <input type="checkbox" className="checkbox-custom" />
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
                        <td colSpan="7" className="text-center py-5">
                          您的購物車是空的
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* 結算區域 */}
            <div className="cart-total">
              <div className="cart-total-custom">
                <div className="coupon-section">
                  <p className="coupon-title m-0">優惠券</p>
                  <div className="coupon-input">
                    <input
                      type="text"
                      placeholder="請輸入優惠序號"
                      value={couponCode}
                      onChange={(e) => {
                        const value = e.target.value;
                        setCouponCode(value);
                        setCouponError('');
                        setCouponSuccess('');
                        // 清空輸入，就把折扣金額歸 0
                        if (value.trim() === '') {
                          setDiscountAmount(0);
                        }
                      }}
                    />
                    <button
                      type="button"
                      className={`coupon-btn border-0 ${couponCode ? 'active' : ''}`}
                      onClick={applyCoupon}
                    >
                      <p className="m-0">套用</p>
                    </button>
                  </div>

                  {/* 成功訊息 */}
                  {couponSuccess && (
                    <p className="coupon-title text-success mt-1">
                      {couponSuccess}
                    </p>
                  )}

                  {/* 錯誤訊息 */}
                  {couponError && (
                    <p className="coupon-title text-danger mt-1">
                      {couponError}
                    </p>
                  )}
                </div>

                <div className="price-detail">
                  <p className="product-title m-0">商品金額</p>
                  <div className="price-box">
                    <p className="product-price m-0">NTD$</p>
                    <p className="product-price m-0">
                      {total.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="price-detail">
                  <p className="account-title m-0">折扣金額</p>
                  <div className="price-box">
                    <p className="account-price m-0">NTD$</p>
                    <p className="account-price m-0">
                      {discountAmount.toLocaleString()}
                    </p>
                  </div>
                </div>

                <span className="total-line"></span>

                <div className="price-detail">
                  <p className="total-title m-0">金額總計</p>
                  <div className="price-box">
                    <p className="total-price m-0">NTD$</p>
                    <p className="total-price m-0">
                      {Math.max(total - discountAmount, 0).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="coupon-check">
                  <button
                    type="button"
                    className="coupon-check-continue"
                    onClick={() => navigate('/products')}
                  >
                    繼續選購
                  </button>
                  <button
                    type="button"
                    className="coupon-check-proceed border-0"
                    onClick={() => navigate('/create-order')}
                    disabled={cartItems.length === 0}
                    style={{
                      cursor:
                        cartItems.length === 0 ? 'not-allowed' : 'pointer',
                      opacity: cartItems.length === 0 ? 0.5 : 1,
                    }}
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
                {recommendList.map((item) => (
                  <div
                    className="card recommend-card-style m-0 rounded-0 border-0"
                    key={item.id}
                  >
                    <img
                      src={item.image_url}
                      className="card-img-top card-img rounded-0"
                      alt={item.name}
                    />
                    <div className="recommend-card-content">
                      <div className="recommend-card-body">
                        <h5 className="card-title recommend-card-body-title m-0">
                          {item.name}
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
                          {item.feature || item.description || '無商品特色描述'}
                        </p>
                      </div>
                      <div className="recommend-card-bottom">
                        <div className="recommend-price-box">
                          <p className="recommend-price m-0">NTD$</p>
                          <p className="recommend-price m-0">{item.price}</p>
                        </div>
                      </div>
                      <button
                        className="btn recommend-card-btn rounded-0"
                        onClick={() => handleAddToCart(item.id)}
                        disabled={addingId === item.id}
                      >
                        {addingId === item.id ? '加入中...' : '加入購物車'}
                      </button>
                    </div>
                  </div>
                ))}
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
                  onClick={() => {
                    setIsOpen(false);
                    if (modalMsg === '請先登入會員') {
                      navigate('/login');
                    }
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

export default CartList;
