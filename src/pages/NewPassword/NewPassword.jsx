import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { images } from '../../constants/image';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  // const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;
  const route = `${apiUrl}/api/v1/users/Signup`;

  const signupHandler = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;

    if (password.trim() === '' || checkPassword.trim() === '') {
      setModalMsg('欄位未填寫正確');
      setIsOpen(true);
      return;
    } else if (!passwordRegex.test(password)) {
      setModalMsg(
        '密碼不符合規則，需要包含英文數字大小寫，最短8個字，最長16個字，且不能包含特殊符號',
      );
      setIsOpen(true);
      return;
    } else if (password !== checkPassword) {
      setModalMsg('密碼與確認密碼內容需一致');
      setIsOpen(true);
      return;
    }
    axios
      .patch(route, {
        newPassword: password,
        checkNewPassword: checkPassword,
      })
      .then((res) => {
        // navigate('/member/profile');
      })
      .catch((err) => {
        const msg = err.response?.data?.message || '發生錯誤';
        setModalMsg(msg);
        setIsOpen(true);
      });
  };

  return (
    <>
      <Navbar />
      <div className="auth-bg d-flex justify-content-center align-items-center ">
        <div className="shadow auth-custom">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={images.logoDark}
              alt="dark logo"
              className="logo-custom"
            />
            <h4 className="auth-title text-center">設定新密碼</h4>
          </div>
          <form className="form-custom">
            <div className="form-input-custom">
              <label
                htmlFor="memberPassword"
                className="form-label form-label-custom text-coffee-primary-900"
              >
                密碼 *
              </label>
              <input
                type="password"
                className="form-control form-control-custom rounded-0"
                id="memberPassword"
                placeholder="需要包含英文數字大小寫，最短8個字，最長16個字"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-input-custom">
              <label
                htmlFor="checkMemberPassword"
                className="form-label form-label-custom text-coffee-primary-900"
              >
                再次輸入密碼 *
              </label>
              <input
                type="password"
                className="form-control form-control-custom rounded-0"
                id="checkMemberPassword"
                placeholder="請輸入與上方相同的密碼"
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
              />
            </div>
          </form>

          <button
            type="button"
            className="btn btn-coffee-primary-700 btn-style w-100 rounded-0 border-0"
            onClick={signupHandler}
          >
            送出
          </button>
          <div className='empty-div-style'></div>
        </div>
      </div>

      {isOpen && (
        <div className="modal show fade d-block" tabIndex="-1" role="dialog">
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
};

export default NewPassword;
