import MemberSidebar from '../../components/MemberSidebar/MemberSidebar';
import Footer from '../../components/Footer/Footer';

const OrderList = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <MemberSidebar>
            <div className="container sidebar-container-custom w-100">
              <h4 className="content-title m-0">訂單總覽</h4>
              <div className="orders-custom">
                <table className="table orders-custom-table m-0 ">
                  <thead className="orders-custom-style">
                    <tr>
                      <th scope="col" className="orders-custom-style-th">
                        購買時間
                      </th>
                      <th scope="col" className="orders-custom-style-th">
                        訂單編號
                      </th>
                      <th scope="col" className="orders-custom-style-th">
                        購買品項
                      </th>
                      <th scope="col" className="orders-custom-style-th">
                        總金額
                      </th>
                      <th scope="col" className="orders-custom-style-th">
                        付款狀態
                      </th>
                      <th scope="col" className="orders-custom-style-th">
                        出貨狀態
                      </th>
                      <th scope="col" className="orders-custom-style-th">
                        {' '}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="orders-custom-tbody">
                    {/* 已付款、已出貨、重新訂購 */}
                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          <p className='check-order-text m-0'>嘉義阿里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆(500g)</p>
                          
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td">已付款</td>
                      <td className="orders-custom-tbody-td">已出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-reorder border-0"
                          >
                            重新訂購
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* 未付款、未出貨、去付款 */}
                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          嘉義阿里山咖啡豆(500g)
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td-unpaid">未付款</td>
                      <td className="orders-custom-tbody-td-unshipped">未出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-checkout border-0"
                          >
                            點我去付款
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* 已付款、未出貨、重新訂購 */}
                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          <p className='check-order-text m-0'>嘉義阿里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆(500g)</p>
                          
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td">已付款</td>
                      <td className="orders-custom-tbody-td-unshipped">未出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-reorder border-0"
                          >
                            重新訂購
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          <p className='check-order-text m-0'>嘉義阿里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆(500g)</p>
                          
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td">已付款</td>
                      <td className="orders-custom-tbody-td">已出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-reorder border-0"
                          >
                            重新訂購
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          <p className='check-order-text m-0'>嘉義阿里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆(500g)</p>
                          
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td">已付款</td>
                      <td className="orders-custom-tbody-td">已出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-reorder border-0"
                          >
                            重新訂購
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          <p className='check-order-text m-0'>嘉義阿里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆(500g)</p>
                          
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td">已付款</td>
                      <td className="orders-custom-tbody-td">已出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-reorder border-0"
                          >
                            重新訂購
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          <p className='check-order-text m-0'>嘉義阿里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆(500g)</p>
                          
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td">已付款</td>
                      <td className="orders-custom-tbody-td">已出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-reorder border-0"
                          >
                            重新訂購
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          <p className='check-order-text m-0'>嘉義阿里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆(500g)</p>
                          
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td">已付款</td>
                      <td className="orders-custom-tbody-td">已出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-reorder border-0"
                          >
                            重新訂購
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          <p className='check-order-text m-0'>嘉義阿里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆(500g)</p>
                          
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td">已付款</td>
                      <td className="orders-custom-tbody-td">已出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-reorder border-0"
                          >
                            重新訂購
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row" className="orders-custom-tbody-th">
                        20250229
                      </th>
                      <td className="orders-custom-tbody-td">2384896540045</td>
                      <td className="orders-custom-tbody-td">
                        <div className="check-order">
                          <button
                            type="button"
                            className="check-order-btn-view border-0"
                          >
                            查看完整訂單
                          </button>
                          <p className='check-order-text m-0'>嘉義阿里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆里山咖啡豆(500g)</p>
                          
                        </div>
                      </td>
                      <td className="orders-custom-tbody-td">NTD$ 1,000</td>
                      <td className="orders-custom-tbody-td">已付款</td>
                      <td className="orders-custom-tbody-td">已出貨</td>
                      <td className="orders-custom-tbody-td">
                        <div className='check-order-btn'>
                          <button
                            type="button"
                            className="check-order-btn-reorder border-0"
                          >
                            重新訂購
                          </button>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>


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
          </MemberSidebar>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default OrderList;
