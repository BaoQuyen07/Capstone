import React from 'react'
import EHeader from '../../e-header/e_header'
import Efooter from '../../e_footer/e_footer'
import Adecategory from '../ad_ecategory/ad_ecategory'
import Adepagnination from '../ad_epagnination/ad_epagnination'
import Product from './Product';
import './Ad_eproduct.css'
import Test from "./test.json"
import { getAllProducts } from '../../../API'
import {useEffect} from 'react'
function Ad_eproduct(props) {
     const listProducts = Test;
        // console.log(listProducts);
        // console.log("--")
        // console.log(Test)

        useEffect(()=>{
            const fetchAPI = async() =>{
                const response = await fetch(getAllProducts(),{method:"get"})
                console.log("respone", response)

            }
            fetchAPI()
        },[]) 
    return (
    <div>
        <div>
            <EHeader></EHeader>
        </div>
        <div className='main'>
            <div><Adecategory></Adecategory></div>
            <div className='wrapper'>
                <div className='products_tasks'>
                    <a className='products_tasks_link'><i className="fa-solid fa-plus products_tasks_icon"></i></a>
                    <a className='products_tasks_link'><i className="fa-solid fa-arrow-down-to-line"></i></a>
                </div>
                <div className='products_list'>
                <table>
                    <tr>
                        <th className='table_header'>STT</th>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Loại hàng</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>ĐVT</th>
                        <th>Ảnh</th>
                        <th>Thao tác</th>
                    </tr>
                    {
                        listProducts ? listProducts.map((item, index) => (<Product product={item} key={item.id} update={item.id} number={index}></Product>)) : ''
                    }  
                </table>
                </div>
                
                <div><Adepagnination></Adepagnination> </div>
            </div>
        </div>
        <div>
            <Efooter></Efooter>
        </div>
    </div>
    
  )
}

export default Ad_eproduct