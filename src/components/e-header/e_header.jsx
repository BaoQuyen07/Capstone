import React from 'react'
import Logo from '../../assets/image/logonetfarm.png';
import "./e_header.css"
const e_header = () => {
  return (
    <div>
        <div className='header'>
        <nav className="navbar">
            <a href="#"><img className="logo" src={Logo} alt="logo"></img></a>
            <ul className="navbarTask">
               <li><a href="#">Trang chủ</a></li>
               <li><a href="#">Tin tức</a></li>
               <li><a href="#">Sản phẩm</a></li>
               <li><a href="#">Người dùng</a></li>
               <li className="header__navbar-item header__navbar-user">
                    <img src="https://bloganh.net/wp-content/uploads/2021/03/chup-anh-dep-anh-sang-min.jpg" alt="" class="header__navbar-user-img"></img>
                    <span className="header__navbar-user-name">Bảo Quyên</span>         
                  </li>
            </ul>
                       
         </nav>
      </div>
    </div>
  )
}

export default e_header