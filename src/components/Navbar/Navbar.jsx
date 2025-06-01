import { Link, useNavigate } from 'react-router-dom';
import { images } from '../../constants/image';
import { useEffect, useState } from 'react';

import '../../constants/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(localStorage.getItem('role'));
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item.dropdown')) {
        setAboutDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem('token'));
      setRole(localStorage.getItem('role'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setToken(null);
    setRole(null);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-coffee-primary-700 sticky-top shadow">
      <div className="container-fluid container-width">
        <Link to="/" className="navbar-brand nav-logo">
          <img src={images.logoIcon} alt="coffee logo" className="logo-icon" />
          <span className="logo-text text-coffee-secondary-300">築豆咖啡</span>
        </Link>

        {/* 漢堡選單按鈕 */}
        <button
          className={`hamburger-btn d-md-none ${menuOpen ? 'd-none' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* 手機版 */}
        {menuOpen && (
          <>
            <div
              className="mobile-menu-overlay"
              onClick={() => setMenuOpen(false)}
            ></div>
            <div className="mobile-menu d-md-none">
              <ul className="px-0">
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    首頁
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    商品資訊
                  </Link>
                </li>

                <li>
                  <button onClick={() => setSubMenuOpen(!subMenuOpen)}>
                    關於我們
                    <img
                      src={images.keyboardArrow}
                      alt="arrow"
                      style={{
                        transform: subMenuOpen
                          ? 'rotate(180deg)'
                          : 'rotate(0deg)',
                        transition: '0.3s',
                      }}
                    />{' '}
                  </button>
                  {subMenuOpen && (
                    <div className="submenu">
                      <Link to="/" onClick={() => setMenuOpen(false)}>
                        關於築豆的咖啡故事
                      </Link>
                      <Link to="/" onClick={() => setMenuOpen(false)}>
                        關於咖啡的那些小事
                      </Link>
                    </div>
                  )}
                </li>

                <li>
                  <Link to="/" onClick={() => setMenuOpen(false)}>
                    購物車
                  </Link>
                </li>

                {!token ? (
                  <li>
                    <Link to="/login" onClick={() => setMenuOpen(false)}>
                      登入/註冊
                    </Link>
                  </li>
                ) : (
                  <>
                    {role === 'admin' ? (
                      <li>
                        <Link to="/" onClick={() => setMenuOpen(false)}>
                          後台管理中心
                        </Link>
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/member/profile"
                            onClick={() => setMenuOpen(false)}
                          >
                            會員中心
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={() => setMenuOpen(false)}>
                            訂單資訊
                          </Link>
                        </li>
                        <li>
                          <Link to="/" onClick={() => setMenuOpen(false)}>
                            願望清單
                          </Link>
                        </li>
                      </>
                    )}
                    <li>
                      <button
                        onClick={() => {
                          handleLogout();
                          setMenuOpen(false);
                        }}
                      >
                        登出
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </>
        )}

        {/* 桌電版 */}
        <ul className="navbar-nav ms-auto d-none d-md-flex align-items-center navbar-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              首頁
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              商品資訊
            </Link>
          </li>
          <li
            className="nav-item dropdown hover-dropdown"
            onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
          >
            <button type="button" className="nav-link dropdown-toggle">
              關於我們
            </button>
            <ul
              className={`dropdown-menu dropdown-menu-about rounded-0 ${aboutDropdownOpen ? 'show' : ''}`}
            >
              <li>
                <Link to="/" className="dropdown-item">
                  關於築豆的咖啡故事
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown-item">
                  關於咖啡的那些小事
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="bi bi-cart2"></i>
            </Link>
          </li>

          {/* 未登入，還沒寫驗證 */}
          <li className="nav-item dropdown hover-dropdown">
            <Link to="/login" className="nav-link">
              登入/註冊
            </Link>
          </li>

          {/* 已登入 還沒綁登入狀態*/}
          <li className="nav-item dropdown hover-dropdown">
            <button
              to="/member/profile"
              className="nav-link dropdown-toggle nav-user-toggle"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            >
              <img
                src={images.profile}
                alt="user"
                className="rounded-circle nav-profile"
              />
              name
            </button>
            <ul
              className={`dropdown-menu rounded-0 ${userDropdownOpen ? 'show' : ''}`}
            >
              <li>
                <Link to="/member/profile" className="dropdown-item">
                  個人資訊
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown-item">
                  訂單訊息
                </Link>
              </li>
              <li>
                <Link to="/" className="dropdown-item">
                  願望清單
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="dropdown-item">
                  登出
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
