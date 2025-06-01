import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { images } from '../../constants/image';

const MemberSidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { title: '會員中心', path: '/member' },
    { title: '個人資訊', path: '/member/profile' },
    { title: '收件資料', path: '/member/address' },
    { title: '訂單資訊', path: '/member/orders' },
    { title: '願望清單', path: '/member/wishlist' },
  ];

  // 控制登出>刪掉token&轉跳Login
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/Login');
  };

  // 控制收合
  const handleToggle = (e) => {
    e.preventDefault();
    setSidebarOpen(!sidebarOpen);
  };

  // 控制 body 加 sidebar-toggle
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('sidebar-toggle');
    } else {
      document.body.classList.remove('sidebar-toggle');
    }
  }, [sidebarOpen]);

  return (
    <>
      <div className=" d-flex min-vh-100">
        <aside
          className={`sidebar ${sidebarOpen ? 'open' : ''}  bg-coffee d-none d-md-flex flex-column`}
        >
          <div className="d-flex flex-row-reverse">
            {/* scale */}
            <div className="d-flex flex-row-reverse align-items-start">
              <button
                type="button"
                onClick={handleToggle}
                className={`p-2 bg-coffee border-0 ${sidebarOpen ? 'position-fixed' : ''}`}
                style={{ top: 0, left: 0 }}
              >
                <img src={images.scale} alt="scale button" />
              </button>
            </div>
            <div>
              {/* 標題 + profile */}
              <div>
                <strong>
                  <div className="d-flex flex-column d-md-block align-bottom align-items-center pt-5 pb-3 pe-5">
                    <Link
                      to="/"
                      className="navbar-brand d-flex align-items-center"
                    >
                      <img
                        src={images.logoIcon}
                        alt="coffee logo"
                        className="px-2"
                        style={{ width: '50px', heigh: 'auto' }}
                      />
                      <span className="text-coffee-light fs-3">築豆咖啡</span>
                    </Link>
                  </div>
                </strong>
                <div className="d-flex flex-column flex-md-row align-items-center py-2 ">
                  <img
                    src={images.profile}
                    alt="profile photo"
                    className="mx-3"
                  />
                  <span className="m-0 text-white">Hi ! Jenny !</span>
                </div>
              </div>

              {/* 選單 */}
              <div className="overflow-auto">
                {sidebarItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => navigate(item.path)}
                    className={`sidebar-link ${location.pathname === item.path ? 'active' : ''} `}
                  >
                    <span className="ms-4">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 登出 */}
          <button
            type="button"
            className="sidebar-logout mt-auto mx-auto border border-primary-300 text-center text-decoration-none py-3 mb-4"
            style={{ width: '210px' }}
            onClick={handleLogout}
          >
            <span className="text-white">登出</span>
          </button>
        </aside>

        {/* 內容 */}
        <main className="main flex-grow-1 bg-coffee-bg">
          <div className="border-bottom border-coffee-light w-100"></div>
          <div className="p-5">{children}</div>
        </main>
      </div>
    </>
  );
};

export default MemberSidebar;
