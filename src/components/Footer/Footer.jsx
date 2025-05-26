import { images } from "../../constants/image";

const Footer = ()=>{
    return(
      <footer className="bg-coffee text-light p-5 mt-0" >
        <div className='container w-100' style={{ maxWidth: '1000px' }}>
        
          <div className='d-flex flex-column flex-md-row justify-content-between align-items-center text-center mb-4'>
            <img src={images.logo} alt="coffee logo" className="mx-auto mx-md-0 d-block mb-3 mb-md-0" style={{ width: '120px', heigh:'auto' }} />
            <div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-3' style={{ fontSize: '0.8rem' }}>
              <a href="#" className='px-mb-5 link-light text-decoration-none'>商品資訊</a>
              <a href="#" className='link-light text-decoration-none'>聯絡我們</a>
            </div>  
          </div>
  
          <div className='d-flex flex-column flex-md-row justify-content-between mt-0 align-items-center align-items-md-start mb-4'>
            <div className='mb-md-0'>
              <ul className='list-unstyled' style={{ fontSize: '0.8rem' }}>
                <li className='mb-2'><i className="bi bi-clock me-3"></i>營業時間：平日9:00 ~ 10:00</li>
                <li className='mb-2'><i className="bi bi-telephone me-3"></i>客服專線：09XX-XXXXXX</li>
                <li className='mb-2'><i className="bi bi-envelope me-3"></i>客服信箱：Service@travel.com</li>
                <li className='mb-2'><i className="bi bi-geo-alt me-3"></i>聯絡地址：新北市板橋區仁愛路XXX號</li>
              </ul>
            </div>
  
            <div className="d-flex">
              {["facebook", "instagram", "line"].map((platform) => (
                <a key={platform} href="#" className="text-white px-3 flex">
                  <i className={`bi bi-${platform} fs-5`}></i>
                </a>
              ))}
            </div>
          </div>
  
              <span className="d-block text-center text-md-start mt-lg-3" style={{ fontSize: '0.8rem' }}>
                &copy;2025 築豆咖啡 All Rights Reserved.
              </span>
  
        </div>
      </footer>
    )
  }

  export default Footer;