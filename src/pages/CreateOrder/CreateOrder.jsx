import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { images } from '../../constants/image';

// 需要做強制登入驗證

const CreateOrder = () => {
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
                    <div className="order-card">
                      <h4 className="check-title m-0">確認訂單內容</h4>
                      <div className="order-card-content">
                        <div className="text-group">
                          <p className="m-0 text-group-title">購買品項</p>
                          <p className="m-0 text-group-text">
                            哥倫比亞咖啡豆(300g)
                          </p>
                        </div>
                        <div className="text-group">
                          <p className="m-0 text-group-title">單價</p>
                          <p className="m-0 text-group-text">
                            NTD$ <span className="text-group-text">600</span>
                          </p>
                        </div>
                        <div className="text-group">
                          <p className="m-0 text-group-title">數量</p>
                          <p className="m-0 text-group-text">3</p>
                        </div>
                        <div className="text-group">
                          <p className="m-0 text-group-title">總金額</p>
                          <p className="m-0 text-group-text">
                            NTD$ <span className="text-group-text">1,800</span>
                          </p>
                        </div>
                      </div>
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
                <div className="bottom-style">
                  {/* 確認收貨資訊 */}
                  <div className="check-receiver">
                    <h4 className="check-title m-0">確認收貨資訊</h4>
                    <div className="text-style">
                      <div className="check-receiver-content">
                        <p className="check-receiver-content-title">收件人</p>
                        <p className="check-receiver-content-text">
                          喃喃喃喃喃
                        </p>
                      </div>
                      <div className="check-receiver-content">
                        <p className="check-receiver-content-title">連絡電話</p>
                        <p className="check-receiver-content-text">
                          0912345678
                        </p>
                      </div>
                      <div className="check-receiver-content">
                        <p className="check-receiver-content-title">郵遞區號</p>
                        <p className="check-receiver-content-text">123456</p>
                      </div>
                      <div className="check-receiver-content">
                        <p className="check-receiver-content-title">詳細地址</p>
                        <p className="check-receiver-content-text">
                          高雄市前金區中正四路211號25樓地址超常會以這種方式換行讓我看一下怎麼換
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
                          <p className="product-price m-0">3,550</p>
                        </div>
                      </div>
                      <div className="price-detail">
                        <p className="account-title m-0">運費</p>
                        <div className="price-box">
                          <p className="account-price m-0">NTD$</p>
                          <p className="account-price m-0">0</p>
                        </div>
                      </div>
                      <div className="price-detail">
                        <p className="account-title m-0">小計</p>
                        <div className="price-box">
                          <p className="account-price m-0">NTD$</p>
                          <p className="account-price m-0">0</p>
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

                      <div className="total-check">
                        <button type="button" className="total-check-continue">
                          繼續選購
                        </button>
                        <button
                          type="button"
                          className="total-check-proceed border-0"
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
      <Footer />
    </>
  );
};

export default CreateOrder;
