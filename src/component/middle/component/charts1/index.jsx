import React from 'react'
import img1 from './1.png'

export default function index() {
  // 自适应屏幕
  window.onresize = function(){
    index()
  }
  return (
    <div>
      <img src={img1} alt="" />
    </div>
  )
}
