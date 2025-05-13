import { Link } from "react-router-dom";

const Navbar = ()=>{
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-coffee px-lg-5 sticky-top shadow ">
      <div className="container-fluid" style={{ maxWidth: '1000px' }}>
      <Link to="/" className="navbar-brand">
        <i className="bi bi-cup-hot-fill pe-3 fs-5"></i>
        <span className="text-sm align-middle">築豆咖啡</span>
      </Link>

        {/* 漢堡選單按鈕 */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 展開選單區塊 */}
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link px-4" href="#">首頁</a></li>
            <li className="nav-item"><a className="nav-link px-4" href="#">商品資訊</a></li>
            <li className="nav-item"><a className="nav-link px-4" href="#">關於我們</a></li>
            <li className="nav-item"><a className="nav-link px-4" href="#"><i className="bi bi-cart4"></i></a></li>
            <li className="nav-item"><a className="nav-link px-4" href="#">登入/註冊</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
  
export default Navbar;