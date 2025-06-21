import Carousel1Img from '../../assets/Images/image4.jpg';

const Carousel1 = () => {
  const processingMethods = [
    {
      title: '水洗法 Washed',
      acidity: 3,
      sweetness: 3,
      content: '花果香、清新、明亮',
    },
    {
      title: '蜜處理法 Honey',
      acidity: 3,
      sweetness: 3,
      content: '果香、甜韻、酒香',
    },
    {
      title: '日曬法 Natural',
      acidity: 3,
      sweetness: 3,
      content: '果香、酒香、發酵風味',
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="h-100 d-flex flex-column">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-light text-white mb-4 carouselTitle">
          三大咖啡豆處理法
        </h1>
      </div>

      <div className="flex-grow-1 d-flex flex-column align-items-center px-2 px-md-4">
        {/* 圖片 */}
        <div className="mb-4 w-100" style={{ maxWidth: '100%' }}>
          <div className="rounded-3 overflow-hidden shadow-lg">
            <img
              src={Carousel1Img}
              alt="Coffee beans on plant"
              className="w-100"
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* 下面文字 */}
        <div className="row g-4 w-100 justify-content-center">
          {processingMethods.map((method, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card bg-white bg-opacity-10 border-white border-opacity-25 text-white h-100">
                <div className="card-body">
                  <h2 className="card-title text-white mb-3">{method.title}</h2>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <h3
                        className="me-2 fw-semibold"
                        style={{ minWidth: '50px' }}
                      >
                        酸度：
                      </h3>
                      {renderStars(method.acidity)}
                    </div>

                    <div className="d-flex align-items-center">
                      <h3
                        className="me-2 fw-semibold"
                        style={{ minWidth: '50px' }}
                      >
                        甜度：
                      </h3>

                      {renderStars(method.sweetness)}
                    </div>
                    <div>
                      <div className="mb-2 fw-semibold">香氣特色：</div>
                      <div className="d-flex flex-wrap">
                        <h3 className="fw-semibold text-white mb-3 lh-base">
                          {method.content}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
