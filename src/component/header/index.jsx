import React from 'react'
import './index.css'

export default function index() {
  return (
    <div className='records-title'>
      <div className='img' style={{backgroundImage:"url("+require("./titleImg.png")+")",backgroundRepeat:'no-repeat'}}>
        <span className='text' style={{color:'white',fontSize:'2rem'}}>设备运行维修记录</span>
      </div>
    </div>
  )
}
