import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;
  const route = `${apiUrl}/api/v1/users/login`;

  function loginHandler() {
    const accountRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    if (account.trim() === '' || password.trim() === '') {
      setModalMsg('帳號密碼不可為空');
      setIsOpen(true);
      return;
    } else if (!accountRegex.test(account)) {
      setModalMsg('使用者不存在或密碼輸入錯誤');
      setIsOpen(true);
      return;
    } else if (!passwordRegex.test(password)) {
      setModalMsg('使用者不存在或密碼輸入錯誤');
      setIsOpen(true);
      return;
    }
    axios
      .post(route, {
        email: account,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.data.token);
        navigate('/member/profile');
      })
      .catch((err) => {
        const msg = err.response?.data?.message || '發生錯誤';
        setModalMsg(msg);
        setIsOpen(true);
      });
  }

  return (
    <>
      <Navbar />
      <div
        className="login-bg d-flex justify-content-center align-items-center py-5"
        style={{ minHeight: '100vh' }}
      >
        <div
          className="bg-white p-5 opacity-90 shadow"
          style={{ width: '450px' }}
        >
          <div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-cup-hot-fill fs-3"></i>
              <span>築豆咖啡</span>
            </div>
            <h4 className="display-6 text-center mb-5">登入</h4>
          </div>

          <form>
            <div className="mt-4">
              <label
                htmlFor="memberEmail"
                className="form-label text-secondary small mb-1"
              >
                帳號
              </label>
              <input
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                type="email"
                className="form-control"
                id="memberEmail"
                placeholder="請輸入會員帳號"
                required
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="memberPassword"
                className="form-label text-secondary small mb-1"
              >
                密碼
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="memberPassword"
                placeholder="請輸入密碼"
                required
              />
            </div>

            <div className="text-end mt-2 mb-5">
              <a
                href="#"
                className="text-coffee-bright text-decoration-none small"
              >
                忘記密碼?
              </a>
            </div>
          </form>

          <div>
            <button
              type="button"
              className="btn btn-coffee w-100 mb-3"
              onClick={loginHandler}
            >
              登入
            </button>

            <button type="button" className="btn btn-outline-coffee w-100 mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="google logo"
                className="me-2"
              />
              Google 帳號登入
            </button>
          </div>

          <div className="text-center mb-3">
            <Link
              to="/signup"
              className="text-coffee-bright text-decoration-none small"
            >
              還不是會員？
              <span className="fw-bolder text-decoration-underline">
                馬上註冊加入
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="modal show fade d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">登入失敗</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsOpen(false)}
                ></button>
              </div>
              <div className="modal-body">{modalMsg}</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
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
}

export default Login;
