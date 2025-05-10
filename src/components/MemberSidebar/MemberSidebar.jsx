import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function MemberSidebar({ children }){
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const sidebarItems = [
      {title: "會員中心", path: "/member"},
      {title: "個人資訊", path: "/member/profile"},
      {title: "收件資料", path: "/member/address"},
      {title: "訂單資訊", path: "/member/orders"},
      {title: "願望清單", path: "/member/wishlist"},
    ]

  // 控制登出>刪掉token&轉跳Login
    const handleLogout = ()=>{
      localStorage.removeItem('token');
      navigate('/Login');
    }
    
  // 控制收合
    const handleToggle = (e) => {
      e.preventDefault();
      setSidebarOpen(!sidebarOpen);
    };
  
  // 控制 body 加 sidebar-toggle
    useEffect(() => {
      if (sidebarOpen) {
        document.body.classList.add("sidebar-toggle");
      } else {
        document.body.classList.remove("sidebar-toggle");
      }
    }, [sidebarOpen]);
  
    return (
      <>
        <div className="d-flex min-vh-100">
          <aside
            className={`sidebar ${sidebarOpen ? "open" : ""}  bg-coffee-light d-flex flex-column py-4 px-3`}
          >
            {/* 標題+打招呼 */}
            <div className="px-2">
              <strong>
                <div className="d-flex flex-column d-md-block align-bottom align-items-center pb-2">
                  <i className="bi bi-cup-hot-fill fs-4 pe-md-2"></i>
                  <span className="fs-md-5">築豆咖啡</span>
                </div>
              </strong>
              <div className="d-flex flex-column flex-md-row align-items-center py-3">
                <i className="bi bi-person-circle fs-4 me-md-2"></i>
                <p className="m-0 ">Hi! 南三!</p>
              </div>
            </div>
  
            {/* 選單 */}
            <div className="overflow-auto">
              { sidebarItems.map((item, i) => (
                <div key={i}>
                  <a
                    href="#"
                    onClick={()=> navigate(item.path)}
                    className={`sidebar-link ${location.pathname === item.path  ? "active" : ""}`}
                  >
                    <div className="px-2 px-md-4">{item.title}</div>
                  </a>
                </div>
              ))}
            </div>
  
            {/* 登出 */}
            <div className="mt-auto">
              <a href="#" className="sidebar-logout-link text-decoration-none mb-5" onClick={handleLogout}>
                <div className="d-flex justify-content-center align-items-center">
                  登出
                </div>
              </a>
            </div>
          </aside>
              
          {/* 內容 */}
          <main className="main flex-grow-1">
            <div className="bg-white border-bottom border-coffee-light w-100">
              <div>
                <a
                  href="#"
                  onClick={ handleToggle }
                  className="d-inline-block border-end py-3 px-4"
                >
                  <i className="bi bi-arrows-angle-expand text-coffee"></i>
                </a>
              </div>
            </div>
            <div className="p-5">
              { children }
            </div>
          </main>
        </div>
      </>
    );
}

export default MemberSidebar;