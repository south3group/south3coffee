import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth, logout } from '../../store/authSlice';
import { images } from '../../constants/image';

const MemberSidebar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch();
  const { token, username, isAuthChecked } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthChecked && !token) {
      dispatch(logout());
      navigate('/login');
    }
  }, [isAuthChecked, token, dispatch, navigate]);

  const sidebarItems = [
    { title: '會員中心', path: '/member' },
    { title: '個人資訊', path: '/member/profile' },
    { title: '收件資料', path: '/member/address' },
    { title: '訂單資訊', path: '/member/orders' },
    { title: '願望清單', path: '/member/wishlist' },
  ];

  // 登出
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
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
      {/* 手機版 */}
      <nav className="navbar d-md-none bg-coffee-primary-700 sticky-top shadow nav-brand">
        <div className="container-fluid container-width">
          <Link to="/" className="navbar-brand nav-logo">
            <img
              src={images.logoIcon}
              alt="coffee logo"
              className="logo-icon"
            />
            <span className="logo-text text-coffee-secondary-300">
              築豆咖啡
            </span>
          </Link>
          
          {/* 使用者大頭貼 */}
          <div className="user-dropdown-wrapper">
            <button
              className="border-0 bg-transparent profile-btn"
              onClick={() => {
                setUserDropdownOpen(!userDropdownOpen);
                setMenuOpen(false);
              }}
            >
              <img
                src={images.profile}
                alt="user"
                className="d-md-none rounded-circle mobile-profile"
              />
            </button>

            {userDropdownOpen && (
              <>
                {/* 遮罩，還沒做完 */}
                <div
                  className="mobile-menu-overlay"
                  onClick={() => setUserDropdownOpen(false)}
                ></div>

                {/* 使用者選單 */}
                <div className="mobile-menu d-md-none">
                  <ul className="px-0">
                    {sidebarItems.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.path}
                          className="dropdown-item"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={() => {
                          handleLogout();
                          setUserDropdownOpen(false);
                        }}
                        className="dropdown-item"
                      >
                        登出
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* 桌電版 */}
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
                  <span className="m-0 text-white">
                    Hi ! {username || '使用者'} !
                  </span>
                </div>
              </div>

              {/* 選單 */}
              <div className="overflow-auto">
                {sidebarItems.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
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
