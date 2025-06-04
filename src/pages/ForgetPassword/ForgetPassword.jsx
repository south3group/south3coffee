import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { images } from '../../constants/image';

const ForgetPassword = () => {
  const [account, setAccount] = useState('');

  const [isOpen, setIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL;
  const route = `${apiUrl}/api/v1/users/Signup`;

  const emailHandler = () => {
    const accountRegex =
      /^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (account.trim() === '') {
      setModalMsg('欄位未填寫正確');
      setIsOpen(true);
      return;
    } else if (!accountRegex.test(account) || account.length > 100) {
      setModalMsg('信箱格式錯誤');
      setIsOpen(true);
      return;
    }
    // (待做) 查無此信箱也加進去格式錯誤裡

    axios
      .patch(route, {
        email: account,
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
            <h4 className="auth-title text-center">忘記密碼</h4>
          </div>
          <form className="form-custom">
            <div className="form-input-custom">
              <label
                htmlFor="memberEmail"
                className="form-label form-label-custom text-coffee-primary-900"
              >
                會員電子信箱 *
              </label>
              <input
                type="email"
                className="form-control form-control-custom rounded-0"
                id="memberEmail"
                placeholder="請輸入會員帳號/Email"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                maxLength={100}
              />
            </div>
          </form>

          <button
            type="button"
            className="btn btn-coffee-primary-700 btn-style w-100 rounded-0 border-0"
            onClick={emailHandler}
          >
            送出信件
          </button>

          <div className="text-center">
            <span className="text-coffee-grey-600 btn-cta-text">
              將寄發重新設定密碼連結至電子信箱
            </span>
          </div>
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

export default ForgetPassword;
