import React from 'react'
import Logo from '../../assets/image/logonetfarm.png'
import "./e_footer.css"
const e_footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer_item'>
                <h4 className='footer_item_title'>VỀ NETFARM</h4>
                <a className='footer_item_link'>Giới thiệu về NetFarm</a>
                <a className='footer_item_link'>Điều khoản</a>
                <a className='footer_item_link'>Bảo Mật</a>
            </div >
            <div className='footer_item footer_item_logo'>
                <a href="#"><img className="logo" src={Logo} alt="logo"></img></a>
                <span className='footer_item_title'>NETFARM WEB SERVICE</span>
            </div>
            <div className='footer_item'>
                <h4 className='footer_item_title'>THEO GIỎI CHÚNG TÔI TRÊN</h4>
                <a className='footer_item_link'>
                <i class="fa-brands fa-square-facebook footer_item_icon"></i>Facebook</a>
                <a className='footer_item_link'><i class="fa-brands fa-square-instagram footer_item_icon"></i>Instagram</a>
                
            </div>
        </div>
    </div>
  )
}

export default e_footer