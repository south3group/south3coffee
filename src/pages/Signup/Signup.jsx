import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Signup() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [memberName, setMemberName] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;
  const route = `${apiUrl}/api/v1/users/Signup`;

  function accountHandler(e) {
    setAccount(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function checkPasswordHandler(e) {
    setCheckPassword(e.target.value);
  }

  function memberNameHandler(e) {
    setMemberName(e.target.value);
  }

  function signupHandler() {
    if (
      account.trim() === '' ||
      password.trim() === '' ||
      checkPassword.trim() === '' ||
      memberName.trim() === ''
    ) {
      setModalMsg('註冊欄位不可為空');
      setIsOpen(true);
    } else if (password !== checkPassword) {
      setModalMsg('密碼與確認密碼內容需一致');
      setIsOpen(true);
    } else {
      axios
        .post(route, {
          email: account,
          password: password,
          name: memberName,
        })
        .then((res) => {
          navigate('/member/profile');
        })
        .catch((err) => {
          const msg = err.response?.data?.message || '發生錯誤';
          setModalMsg(msg);
          setIsOpen(true);
        });
    }
  }

  return (
    <>
      <Navbar />
      <div
        className="login-bg d-flex justify-content-center align-items-center py-5 "
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
            <h4 className="display-6 text-center mb-5">註冊會員</h4>
          </div>
          <form>
            <div className="mb-5">
              <div className="mb-2">
                <label
                  htmlFor="memberEmail"
                  className="form-label text-secondary small mb-1"
                >
                  電子信箱(將會成為會員帳號) *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="memberEmail"
                  placeholder="請輸入Email"
                  value={account}
                  onChange={accountHandler}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="memberPassword"
                  className="form-label text-secondary small mb-1"
                >
                  密碼 *
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="memberPassword"
                  placeholder="請輸入X-X字元的英數，不含中文及特殊符號"
                  value={password}
                  onChange={passwordHandler}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="checkMemberPassword"
                  className="form-label text-secondary small mb-1"
                >
                  再次輸入密碼 *
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="checkMemberPassword"
                  placeholder="請輸入與上方相同的密碼"
                  value={checkPassword}
                  onChange={checkPasswordHandler}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="memberName"
                  className="form-label text-secondary small mb-1"
                >
                  會員名稱 *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="memberName"
                  placeholder="請輸入會員名稱，可以是中英數，不含特殊符號"
                  value={memberName}
                  onChange={memberNameHandler}
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-coffee w-100 mb-3"
                onClick={signupHandler}
              >
                註冊會員
              </button>

              <button
                type="button"
                className="btn btn-outline-coffee w-100 mb-3 "
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="google logo"
                  className="me-2"
                />
                透過 Google 註冊
              </button>
            </div>
          </form>
          <div className="text-center mb-3">
            <Link
              to="/login"
              className="text-coffee-bright text-decoration-none small"
            >
              已經是會員？
              <span className="fw-bolder text-decoration-underline">
                馬上登入
              </span>
            </Link>
          </div>
        </div>
      </div>

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
                <h5 className="modal-title" id="SignupModalLabel">
                  註冊失敗
                </h5>
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
                  Close
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

export default Signup;
