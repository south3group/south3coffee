import Carousel2Img from '../../assets/Images/image5.jpg';

const Carousel2 = () => {
  const brewingTools = [
    {
      title: 'V60',
      subtitle: '(來自日本 Hario)',
      difficulty: 4,
      characteristics: '注水自由度高，風味層次分明，乾淨明亮',
      suitable: '喜歡輕中焙豆，愛研究該不同注水變化，追求滑順韻味的進階人',
    },
    {
      title: 'Chemex',
      subtitle: '(來自美國)',
      difficulty: 3,
      characteristics: '口感輕盈清淡，極致乾淨，風味純粹',
      suitable: '注重口感清淡，喜歡優雅簡潔設計風格的手沖愛好者',
    },
    {
      title: 'Kalita Wave',
      subtitle: '(來自日本 Kalita)',
      difficulty: 3,
      characteristics: '萃取穩定，風味均勻，口感厚實有層次',
      suitable: '喜好穩定，易上手的沖法，喜歡厚實調和穩厚風味的人',
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
        <h2 className="display-4 fw-light text-white mb-4">常見手沖咖啡器具</h2>
      </div>

      <div className="flex-grow-1 d-flex align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-8">
              <div className="overflow-hidden shadow-lg">
                <img
                  src={Carousel2Img}
                  alt="Hand drip coffee tools"
                  className="w-100"
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    maxWidth: '100%',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row g-4">
            {brewingTools.map((tool, index) => (
              <div key={index} className="col-12 col-lg-4">
                <div className="card bg-white bg-opacity-10 border-white border-opacity-25 text-white h-100">
                  <div className="card-body">
                    <div className="d-fiex">
                      <h3 className="card-title text-white mb-1">
                        {tool.title}
                      </h3>
                      <h2 className="text-muted small mb-3 text-white">
                        {tool.subtitle}
                      </h2>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span
                        className="me-2 fw-semibold text-white"
                        style={{ minWidth: '80px' }}
                      >
                        沖煮難度：
                      </span>
                      <div className="d-flex">
                        {renderStars(tool.difficulty)}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="mb-2">
                        <span className="fw-semibold text-white">
                          沖煮風格：
                        </span>
                      </div>
                      <p className="mb-0 small lh-lg">{tool.characteristics}</p>
                    </div>

                    <div>
                      <div className="mb-2">
                        <span className="fw-semibold text-white">
                          適合對象：
                        </span>
                      </div>
                      <p className="mb-0 small lh-lg">{tool.suitable}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
