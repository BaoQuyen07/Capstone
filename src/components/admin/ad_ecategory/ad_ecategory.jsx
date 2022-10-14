import React from 'react'
import "./ad_ecategory.css"
const ad_ecategory = () => {
  return (
    <div>
        <div className='category'>
            <ul className='category_list'>
                <li className='category_list_item '>
                    <a className='category_item__link category_item_active'>
                    THỐNG KÊ
                    </a>
                </li>
                <li className='category_list_item'>
                    <a className='category_item__link'>SẢN PHẨM</a>
                </li>
                <li className='category_list_item'>
                    <a className='category_item__link'>SẢN PHẨM</a>
                </li>
                <li className='category_list_item'>
                    <a className='category_item__link'>ĐƠN HÀNG</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ad_ecategory