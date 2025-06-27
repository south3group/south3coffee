import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import './HomeCard.scss';
import defultImg from '../../assets/Images/image12.jpg';
import errorImg from '../../assets/Images/image13.jpg';

const HomeCardLarge = ({ product, clickable = false }) => {
  const navigate = useNavigate();
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

  const handleClick = () => {
    if (clickable) {
      navigate(`/products/${id}`);
    }
  };

  const handleClick2 = (e) => {
    e.stopPropagation();
    e.target.blur();
    addToCart(product.id);
  };

  return (
    <div
      className={`card h-100 shadow-sm home-card home-card--large`}
      style={{ cursor: clickable ? 'pointer' : 'default' }}
      onClick={handleClick}
    >
      <div className="row g-0 position-relative">
        {/* 圖片在左 */}
        <div className="col-md-5 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="img-fluid homecardImage"
            onError={(e) => (e.target.src = errorImg)}
          />
          <button
            className="btn btn-link position-absolute top-0 end-0 m-2 p-1 homecard-favorite-btn"
            onClick={(e) => {
              e.stopPropagation(); // 避免點到觸發整張卡片的跳轉
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

        {/* 文字在右 */}
        <div className="col-md-7 d-flex flex-column p-3 home-card">
          <h5 className="card-title mb-2 homecardTitle">{name}</h5>

          {origin.length > 0 && (
            <div className="mb-2 ">
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
              <i className="material-symbols-outlined me-1 fw-bolder text-coffee-primary-800">
                spa
              </i>
              <small className="fs-3 text-coffee-primary-800 fw-bolder">
                風味 -{' '}
              </small>
              <small className="fs-4 text-coffee-primary-800">{feature}</small>
            </div>
          )}

          {description && (
            <p
              className="card-text  homecardText flex-grow-1 mb-3 text-coffee-grey-600"
              style={{ lineHeight: '1.4' }}
            >
              {description.length > 56
                ? `${description.substring(0, 56)}...`
                : description}
            </p>
          )}

          <div className="mt-auto">
            <div className="mb-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardLarge;
