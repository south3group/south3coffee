const Footer = ()=>{
    return(
      <footer className="bg-coffee text-light p-5 mt-0" >
        <div className='container w-100' style={{ maxWidth: '1000px' }}>
          
          <div className='d-flex flex-column flex-md-row justify-content-between text-center'>
            <div className='mb-4'>
              <div>
                <i className="bi bi-cup-hot-fill pe-2"></i>
                <span className="align-middle">築豆咖啡</span>
              </div>
            </div>
            <div className='d-flex flex-column flex-md-row justify-content-evenly mb-4 gap-3' style={{ fontSize: '0.8rem' }}>
              <div className='px-mb-5'>
                <a href="#" className='link-light text-decoration-none'>商品資訊</a>
              </div>
              <div>
                <a href="#" className='link-light text-decoration-none'>聯絡我們</a>
              </div>
            </div>  
          </div>
  
          <div className='d-flex flex-column flex-md-row justify-content-between mt-0 align-items-center align-items-md-start mb-4'>
            <div className='mb-md-0'>
              <ul className='list-unstyled' style={{ fontSize: '0.8rem' }}>
                <li className='mb-1'><i className="bi bi-bag-heart-fill me-3"></i>營業時間：10:00 ~ 10:00</li>
                <li className='mb-1'><i className="bi bi-bicycle me-3"></i>客服專線：09XX-XXXXXX</li>
                <li className='mb-1'><i className="bi bi-binoculars-fill me-3"></i>客服信箱：textext@gmail.com</li>
                <li className='mb-1'><i className="bi bi-bookmark-heart-fill me-3"></i>聯絡地址：地球村愛心街漂亮村XXX號</li>
              </ul>
            </div>
  
            <div className="d-flex">
              {["instagram", "threads", "facebook"].map((platform) => (
                <a key={platform} href="#" className="text-white px-3">
                  <i className={`bi bi-${platform} fs-4`}></i>
                </a>
              ))}
            </div>
          </div>
  
            <div className="text-center mt-lg-3" style={{ fontSize: '0.8rem' }}>
              <span className="d-inline d-md-none">
                &copy;2025 築豆咖啡 All Rights Reserved.
              </span>
              <span className="d-none d-md-inline">
                &copy;2025 築豆咖啡 All Rights Reserved. 僅供個人學習，無任何商業用途
              </span>
            </div>
  
        </div>
      </footer>
    )
  }

  export default Footer;