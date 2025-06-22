import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { images } from '../../constants/image';

const CreateOrder = () => {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true); // 先設定 loading 狀態

  const [showTopBtn, setShowTopBtn] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;
  const getRoute = `${apiUrl}/api/v1/users/orderReview`;
  const postRoute = `${apiUrl}/api/v1/users/membership/order`;

  // top 按鈕
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 取得訂單
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get(getRoute, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data.data;

        if (!data.orderItems || data.orderItems.length === 0) {
          setModalMsg('購物車內沒有商品，請先加入商品');
          navigate('/products');
          setIsOpen(true);
        } else if (
          !data.receiver ||
          !data.receiver.name ||
          !data.receiver.phone ||
          !data.receiver.address
        ) {
          setModalMsg('收件資料不完整，請先填寫收件資料');
          setIsOpen(true);
          navigate('/member/receiver');
        } else {
          setOrderData(data);
        }
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/');
          }else if (err.response?.status === 400){
            // const msg = err.response?.data?.message || '收件資訊或購物車為空';
            navigate('/member/receiver');
        } else {
          const msg = err.response?.data?.message || '發生錯誤';
          setModalMsg(msg);
          setIsOpen(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  //建立訂單
  const handleCreateOrder = () => {
    const token = localStorage.getItem('token');

    axios
      .post(
        postRoute,
        {
          name: orderData.receiver.name,
          phone: orderData.receiver.phone,
          post_code: orderData.receiver.post_code || '000000',
          address: orderData.receiver.address,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        // const orderId = res.data.data.display_id;
        // navigate(`/checkout/${orderId}`);
        navigate(`/checkout`);
      })
      .catch((err) => {
        if (err.response?.status === 401) {
          const msg = err.response?.data?.message || '';
          if (msg.includes('JWT') || msg.includes('token')) {
            localStorage.removeItem('token');
            navigate('/login');
          }
          navigate('/');
          return;
        }

        const msg = err.response?.data?.message || '發生錯誤';
        setModalMsg(msg);
        setIsOpen(true);
      });
  };

  if (loading) return <div>Loading...</div>;

  if (!orderData) {
    return (
      <>
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
                    onClick={() => navigate('/products')}
                  >
                    關閉
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="bg-coffee-bg-light create-custom">
        <div className="create-banner-container">
          <img
            src={images.hotCoffeeBanner}
            alt="create banner"
            className="narrow-banner"
          />
        </div>
        <div className="container create-container ">
          {/* 頁面標題 */}
          <div className="create-title">
            <p className="create-title-chinese m-0">建立訂單</p>
            <span className="create-title-line"></span>
            <p className="create-title-english m-0">Order Review</p>
          </div>

          <div className="content-style m-0">
            <div className="content-style-create p-0">
              <div className="create-custom">
                <div className="orders-custom">
                  {/* 訂單詳情 */}
                  {/* 手機版 */}
                  <div className="d-block d-md-none orders-custom-mobile">
                    {orderData.orderItems.map((item, idx) => (
                      <div className="order-card" key={idx}>
                        <div className="order-card-content">
                          <div className="text-group">
                            <p className="text-group-title m-0">購買品項</p>
                            <p className="text-group-text m-0">{item.name}</p>
                          </div>
                          <div className="text-group">
                            <p className="text-group-title m-0">單價</p>
                            <p className="text-group-text m-0">
                              NTD$ {item.price}
                            </p>
                          </div>
                          <div className="text-group">
                            <p className="text-group-title m-0">數量</p>
                            <p className="text-group-text m-0">
                              {item.quantity}
                            </p>
                          </div>
                          <div className="text-group">
                            <p className="text-group-title m-0">總金額</p>
                            <p className="text-group-text m-0">
                              NTD$ {item.subtotal}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* 桌電版 */}
                    <table className="d-none d-md-table table orders-custom-table m-0 ">
                      <thead className="orders-custom-style">
                        <tr>
                          <th scope="col" className="orders-custom-style-th">
                            商品名稱
                          </th>
                          <th scope="col" className="orders-custom-style-th">
                            單價
                          </th>
                          <th scope="col" className="orders-custom-style-th">
                            數量
                          </th>
                          <th scope="col" className="orders-custom-style-th">
                            小計
                          </th>
                        </tr>
                      </thead>
                      <tbody className="orders-custom-tbody">
                        <tr>
                          <th scope="row" className="orders-custom-tbody-th">
                            嘉義阿里山咖啡豆(500g)
                          </th>
                          <td className="orders-custom-tbody-td price-box">
                            <p className="box-currency m-0">NTD$</p>
                            <p className="box-price m-0">500</p>
                          </td>
                          <td className="orders-custom-tbody-td">2</td>
                          <td className="orders-custom-tbody-td price-box">
                            <p className="box-currency m-0">NTD$</p>
                            <p className="box-price m-0">1,000</p>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="orders-custom-tbody-th">
                            哥倫比亞咖啡豆(300g)
                          </th>
                          <td className="orders-custom-tbody-td price-box">
                            <p className="box-currency m-0">NTD$</p>
                            <p className="box-price m-0">600</p>
                          </td>
                          <td className="orders-custom-tbody-td">3</td>
                          <td className="orders-custom-tbody-td price-box">
                            <p className="box-currency m-0">NTD$</p>
                            <p className="box-price m-0">1,800</p>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" className="orders-custom-tbody-th">
                            雛型咖啡濾紙100張
                          </th>
                          <td className="orders-custom-tbody-td price-box">
                            <p className="box-currency m-0">NTD$</p>
                            <p className="box-price m-0">150</p>
                          </td>
                          <td className="orders-custom-tbody-td">5</td>
                          <td className="orders-custom-tbody-td price-box">
                            <p className="box-currency m-0">NTD$</p>
                            <p className="box-price m-0">750</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* 桌電版 */}
                  <table className="d-none d-md-table table orders-custom-table m-0 ">
                    <thead className="orders-custom-style">
                      <tr>
                        <th scope="col" className="orders-custom-style-th">
                          商品名稱
                        </th>
                        <th scope="col" className="orders-custom-style-th">
                          單價
                        </th>
                        <th scope="col" className="orders-custom-style-th">
                          數量
                        </th>
                        <th scope="col" className="orders-custom-style-th">
                          小計
                        </th>
                      </tr>
                    </thead>
                    <tbody className="orders-custom-tbody">
                      {orderData.orderItems.map((item, idx) => (
                        <tr key={idx}>
                          <td className="orders-custom-tbody-td">
                            {item.name}
                          </td>
                          <td className="orders-custom-tbody-td price-box">
                            <p className="box-currency m-0">NTD$</p>
                            <p className="box-price m-0">{item.price}</p>
                          </td>
                          <td className="orders-custom-tbody-td">
                            {item.quantity}
                          </td>
                          <td className="orders-custom-tbody-td price-box">
                            <p className="box-currency m-0">NTD$</p>
                            <p className="box-price m-0">{item.subtotal}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bottom-style">
                  {/* 確認收貨資訊 */}
                  <div className="check-receiver">
                    <h4 className="check-title m-0">確認收貨資訊</h4>
                    <div className="text-style">
                      <div className="check-receiver-content">
                        <p className="check-receiver-content-title">收件人</p>
                        <p className="check-receiver-content-text">
                          {orderData.receiver.name}
                        </p>
                      </div>
                      <div className="check-receiver-content">
                        <p className="check-receiver-content-title">連絡電話</p>
                        <p className="check-receiver-content-text">
                          {orderData.receiver.phone}
                        </p>
                      </div>
                      <div className="check-receiver-content">
                        <p className="check-receiver-content-title">郵遞區號</p>
                        <p className="check-receiver-content-text">
                          {orderData.receiver.post_code}
                        </p>
                      </div>
                      <div className="check-receiver-content">
                        <p className="check-receiver-content-title">詳細地址</p>
                        <p className="check-receiver-content-text">
                          {orderData.receiver.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 結算區域 */}
                  <div className="cart-total">
                    <div className="cart-total-custom">
                      <div className="price-detail">
                        <p className="product-title m-0">商品金額</p>
                        <div className="price-box">
                          <p className="product-price m-0">NTD$</p>
                          <p className="product-price m-0">
                            {orderData.cost_summary.totalPrice}
                          </p>
                        </div>
                      </div>
                      <div className="price-detail">
                        <p className="account-title m-0">運費</p>
                        <div className="price-box">
                          <p className="account-price m-0">NTD$</p>
                          <p className="account-price m-0">
                            {orderData.cost_summary.shipping_fee}
                          </p>
                        </div>
                      </div>
                      <div className="price-detail">
                        <p className="account-title m-0">小計</p>
                        <div className="price-box">
                          <p className="account-price m-0">NTD$</p>
                          <p className="account-price m-0">
                            {orderData.cost_summary.grand_total}
                          </p>
                        </div>
                      </div>
                      <div className="price-detail">
                        <p className="account-title m-0">折扣金額</p>
                        <div className="price-box">
                          <p className="account-price m-0">NTD$</p>
                          <p className="account-price m-0">
                            {orderData.cost_summary.discount_amount}
                          </p>
                        </div>
                      </div>

                      <span className="total-line"></span>

                      <div className="price-detail">
                        <p className="total-title m-0">金額總計</p>
                        <div className="price-box">
                          <p className="total-price m-0">NTD$</p>
                          <p className="total-price m-0">
                            {orderData.cost_summary.grand_total}
                          </p>
                        </div>
                      </div>

                      <div className="total-check">
                        <button
                          type="button"
                          className="total-check-continue"
                          onClick={() => navigate('/products')}
                        >
                          繼續選購
                        </button>
                        <button
                          type="button"
                          className="total-check-proceed border-0"
                          onClick={handleCreateOrder}
                        >
                          前往付款
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
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

      <Footer />
    </>
  );
};

export default CreateOrder;
