import Carousel3Img from '../../assets/Images/image6.jpg';

const Carousel3 = () => {
  const coffeeKnowledge = [
    {
      title: '最佳賞味期限',
      content: '建議於烘焙後14～30天內飲用，風味最佳。',
      detail:
        '咖啡豆在烘焙後會釋出二氧化碳與香氣成分，風味會隨時間轉變。最理想的賞味期是烘焙後一週（除非是淺焙豆需要更長的養豆期）。若是豆袋開封時也請留意避免香氣。',
    },
    {
      title: '保存新鮮的方法',
      content: '避免受潮與氧化，是保存風味的關鍵。',
      detail:
        '建議將咖啡豆放在存放於陰涼處或避光，避免受潮與過熱，開封後請儘快使用完畢。並依將使用量裝袋放適量存放於室溫效果。',
    },
    {
      title: '遠離危險地帶',
      content: '防潮、防曬、防高溫，咖啡豆才能保持好狀態。',
      detail:
        '請避免將咖啡豆存放於陽光直射處、高溫高濕的環境、冷凍或冷藏環境。最理想的保存方式：密封、乾燥內部環境不超過華氏75度（攝氏24度），並置於避光處儲存。',
    },
  ];

  return (
    <div className="h-100 d-flex flex-column">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-light text-white mb-4">咖啡豆小知識</h1>
      </div>

      <div className="flex-grow-1 d-flex align-items-center">
        <div className="container-fluid">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-8">
              <div className="overflow-hidden shadow-lg">
                <img
                  src={Carousel3Img}
                  alt="Coffee beans closeup"
                  className="w-100"
                  style={{
                    height: '400px',
                    objectFit: 'cover',
                    maxWidth: '100%',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row g-4">
            {coffeeKnowledge.map((knowledge, index) => (
              <div key={index} className="col-12 col-lg-4">
                <div className="card bg-white bg-opacity-10 border-white border-opacity-25 text-white h-100">
                  <div className="card-body">
                    <h2 className="card-title text-white mb-3">
                      {knowledge.title}
                    </h2>
                    <h3 className="text-white mb-3 lh-base">
                      {knowledge.content}
                    </h3>
                    <h5 className="mb-0 small lh-lg text-light">
                      {knowledge.detail}
                    </h5>
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

export default Carousel3;
