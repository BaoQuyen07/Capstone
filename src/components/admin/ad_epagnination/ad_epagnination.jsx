import React from 'react'
import './ad_epagnination.css'
const ad_epagnination = () => {
  return (
    <div>
        <div className='pagnination'>
                <ul className="pagnination home-product__pagnination">
                    <li className="pagnination-item">
                        <a href="" className="pagnination-item__link">
                            <i className="pagnination-item__icon fa-solid fa-angle-left"></i>
                        </a>
                    </li>
                    <li className="pagnination-item pagnination-item--active">
                        <a href="" className="pagnination-item__link ">1</a>
                    </li>
                    <li className="pagnination-item">
                        <a href="" className="pagnination-item__link">2</a>
                    </li>
                    <li className="pagnination-item">
                        <a href="" className="pagnination-item__link">3</a>
                    </li>
                    <li className="pagnination-item">
                        <a href="" className="pagnination-item__link">4</a>
                    </li>
                    <li className="pagnination-item">
                        <a href="" className="pagnination-item__link">5</a>
                    </li>
                    <li className="pagnination-item">
                        <a href="" className="pagnination-item__link">...</a>
                    </li>
                    <li className="pagnination-item">
                        <a href="" className="pagnination-item__link">14</a>
                    </li>
                    <li className="pagnination-item">
                        <a href="" className="pagnination-item__link">
                            <i className="pagnination-item__icon fa-solid fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
                </div>
    </div>
  )
}

export default ad_epagnination