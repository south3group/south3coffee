import MemberSidebar from '../../components/MemberSidebar/MemberSidebar';
import Footer from '../../components/Footer/Footer';

const OrderDetail = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <MemberSidebar>
            <div className="container sidebar-container-custom w-100">
              <h4 className="content-title m-0">訂單詳細資訊</h4>

              <div className="order-summary-header">
                <div className="order-summary-header-info-status">
                  <div className="status-success">已付款</div>
                  <div className="status-failed">未出貨</div>
                </div>
                <div className="order-summary-header-info">
                  <p className="m-0 order-summary-header-title">訂單編號</p>
                  <p className="m-0 order-summary-header-number">
                    2384896540045
                  </p>
                  <p className="m-0 order-summary-header-number">20250229</p>
                </div>
              </div>
              <div className="orders-custom">
                {/* 訂單詳情 */}
                {/* 手機版 */}
                <div className="d-block d-md-none orders-custom-mobile">
                  <div className="order-card">
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
                <div className="d-block d-md-none orders-custom-mobile">
                  <div className="order-card">
                    <div className="text-group">
                      <p className="m-0 text-group-title">購買品項</p>
                      <p className="m-0 text-group-text">
                        嘉義阿里山咖啡豆(500g)
                      </p>
                    </div>
                    <div className="text-group">
                      <p className="m-0 text-group-title">單價</p>
                      <p className="m-0 text-group-text">
                        NTD$ <span className="text-group-text">500</span>
                      </p>
                    </div>
                    <div className="text-group">
                      <p className="m-0 text-group-title">數量</p>
                      <p className="m-0 text-group-text">2</p>
                    </div>
                    <div className="text-group">
                      <p className="m-0 text-group-title">總金額</p>
                      <p className="m-0 text-group-text">
                        NTD$ <span className="text-group-text">1,000</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-block d-md-none orders-custom-mobile">
                  <div className="order-card">
                    <div className="text-group">
                      <p className="m-0 text-group-title">購買品項</p>
                      <p className="m-0 text-group-text">
                        錐形咖啡濾紙100張
                      </p>
                    </div>
                    <div className="text-group">
                      <p className="m-0 text-group-title">單價</p>
                      <p className="m-0 text-group-text">
                        NTD$ <span className="text-group-text">150</span>
                      </p>
                    </div>
                    <div className="text-group">
                      <p className="m-0 text-group-title">數量</p>
                      <p className="m-0 text-group-text">5</p>
                    </div>
                    <div className="text-group">
                      <p className="m-0 text-group-title">總金額</p>
                      <p className="m-0 text-group-text">
                        NTD$ <span className="text-group-text">750</span>
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

              {/* 收件資訊&合計 */}
              <div className="orders-info">
                {/* 收件資料 */}
                <div className="orders-info-receiver">
                  <p className="orders-info-title">收件資料</p>

                  <div className="orders-info-receiver-content">
                    <p className="receiver-title m-0">收件人姓名</p>
                    <p className="receiver-text m-0">咖啡上癮的臭豆腐</p>
                  </div>
                  <div className="orders-info-receiver-content">
                    <p className="receiver-title m-0">連絡電話</p>
                    <p className="receiver-text m-0">0912345678</p>
                  </div>
                  <div className="orders-info-receiver-content">
                    <p className="receiver-title m-0">郵遞區號</p>
                    <p className="receiver-text m-0">123456</p>
                  </div>
                  <div className="orders-info-receiver-content">
                    <p className="receiver-title m-0">收件地址</p>
                    <p className="receiver-text m-0">
                      高雄市苓雅區中正一路123號8樓南三辦公處一路123號8樓南三辦公處
                    </p>
                  </div>
                </div>

                {/* 合計 */}
                <div className="orders-info-total">
                  <div className="orders-info-total-content">
                    <p className="total-title m-0">優惠碼</p>
                    <p className="total-text m-0">niceHexschool</p>
                  </div>
                  <div className="orders-info-total-content">
                    <p className="total-title m-0">商品金額</p>
                    <div className="price-box m-0">
                      <p className="box-currency m-0">NTD$</p>
                      <p className="box-price m-0">3,550</p>
                    </div>
                  </div>
                  <div className="orders-info-total-content">
                    <p className="total-title m-0">運費</p>
                    <div className="price-box m-0">
                      <p className="box-currency m-0">NTD$</p>
                      <p className="box-price m-0">1,800</p>
                    </div>
                  </div>
                  <div className="orders-info-total-content">
                    <p className="total-title m-0">小計</p>
                    <div className="price-box m-0">
                      <p className="box-currency m-0">NTD$</p>
                      <p className="box-price m-0">3,500</p>
                    </div>
                  </div>
                  <div className="orders-info-total-content">
                    <p className="total-title m-0">優惠折扣</p>
                    <div className="price-box-discount m-0">
                      <p className="box-currency m-0">NTD$</p>
                      <p className="box-price m-0">-50</p>
                    </div>
                  </div>

                  <div className="orders-info-total-amount">
                    <p className="amount-title m-0">合計</p>
                    <div className="price-box m-0">
                      <p className="amount-currency m-0">NTD$</p>
                      <p className="amount-price m-0">3,500</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 返回 */}
              <div className="back-btn">
                <button className="border-0 rounded-0 back-btn-custom">
                  返回訂單總覽
                </button>
              </div>
            </div>
          </MemberSidebar>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OrderDetail;
