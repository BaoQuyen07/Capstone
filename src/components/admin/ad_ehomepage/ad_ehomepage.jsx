import React from 'react'
import EHeader from '../../e-header/e_header'
import Efooter from '../../e_footer/e_footer'
import Ecategory from '../ad_ecategory/ad_ecategory'
import "./ad_ehomepage.css"

const ad_ehomepage = () => {
  return (    
    <div>
        <div>
            <EHeader></EHeader>
        </div>
        <div className='container'>
        <div>
            <Ecategory></Ecategory>
        </div>
        <div className='main'>
            <div className='statistic_block'>
                <a className='statistic_link'>FEEDBACK</a>
            </div>
            <div className='statistic_block'>
                <a className='statistic_link'>INCOME</a>
            </div>
        </div>
        </div>
        <div>
            <Efooter></Efooter>
        </div>
    </div>
  )
}

export default ad_ehomepage