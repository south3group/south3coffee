// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import './HomeCard.scss';
import defultImg from '../../assets/Images/image12.jpg';
import errorImg from '../../assets/Images/image13.jpg';

const HomeCardDefault = ({ product, clickable = false }) => {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  // const [modalMsg, setModalMsg] = useState('');
  const { addToCart, addingId } = useCart();

  const {
    id,
    name = '未命名商品',
    price = 0,
    image = defultImg,
    description = '',
    isFavorite = false,
    origin = [],
    feature = '',
  } = product || {};

  const handleClick1 = () => {
    if (clickable) {
      navigate(`/product/${id}`);
    }
  };

  const handleClick2 = (e) => {
    e.stopPropagation();
    e.target.blur();
    addToCart(product.id);
    // addToCart(product.id, 1, () => {
    //   setModalMsg('尚未登入，請先登入會員');
    //   setIsOpen(true);
    // });
  };

  return (
    <div
      className={`card h-100 shadow-sm home-card`}
      style={{ cursor: clickable ? 'pointer' : 'default' }}
      onClick={handleClick1}
    >
      <div className="position-relative">
        {/* 正常卡片排版 */}
        <div className="card-img-top overflow-hidden">
          <img
            src={image}
            alt={name}
            className="img-fluid homecardImage"
            onError={(e) => (e.target.src = errorImg)}
          />
          <button
            className="btn btn-link position-absolute end-0 m-2 p-1 homecard-favorite-btn"
            onClick={(e) => {
              e.stopPropagation();
              console.log('切換收藏:', product);
            }}
          >
            <i
              className={`material-symbols-outlined ${isFavorite ? 'heart-filled' : 'heart-outlined'}`}
            >
              favorite
            </i>
          </button>
        </div>

        <div className="card-body d-flex flex-column p-3">
          <h5 className="card-title mb-2 homecardTitle">{name}</h5>

          {origin.length > 0 && (
            <div className="mb-2">
              {origin.map((origin, index) => (
                <span
                  key={index}
                  className="d-block mb-1 d-inline-flex align-items-center"
                >
                  <i className="material-symbols-outlined me-1 text-coffee-primary-800 fw-bolder">
                    location_on
                  </i>
                  <small className="fs-3 text-coffee-primary-800 fw-bolder">
                    產地 -{' '}
                  </small>
                  <small className="fs-4 text-coffee-primary-800">
                    {origin}
                  </small>
                </span>
              ))}
            </div>
          )}

          {feature && (
            <div className="mb-2 d-inline-flex align-items-center">
              <i className="material-symbols-outlined me-1 text-coffee-primary-800 fw-bolder">
                spa
              </i>
              <small className="fs-3 text-coffee-primary-800 fw-bolder">
                風味 -{' '}
              </small>
              <small className="fs-4 text-coffee-primary-800"> {feature}</small>
            </div>
          )}

          {description && (
            <p className="card-text homecardText flex-grow-1 mb-3 text-coffee-grey-600">
              {description.length > 56
                ? `${description.substring(0, 56)}...`
                : description}
            </p>
          )}

          <div className="mt-auto">
            <div className="mb-3 ">
              <span className="h5 mb-0 homecardPrice">
                NT$
                {typeof price === 'number' ? price.toLocaleString() : price}
              </span>
            </div>

            <button
              className="btn w-100 py-2 homecardBtn"
              onClick={handleClick2}
              disabled={addingId === product.id}
            >
              {addingId === product.id ? '加入中…' : '加入購物車'}
            </button>

            {/* 登入提醒 Modal */}
            {/* {isOpen && (
              <div
                className="modal show fade d-block custom-modal"
                tabIndex="-1"
                role="dialog"
              >
                <div className="modal-dialog custom-modal-dialog">
                  <div className="modal-content custom-modal-content">
                    <div className="modal-header custom-modal-header">
                      <h5 className="custom-modal-title">系統通知</h5>
                      <button
                        type="button"
                        className="custom-modal-close"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                    <div className="modal-body custom-modal-body">
                      {modalMsg}
                    </div>
                    <div className="modal-footer custom-modal-footer">
                      <button
                        type="button"
                        className="custom-modal-btn"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        關閉
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardDefault;
