import React, { Component } from 'react';
import './index.css'

export default class JrlComponent extends Component {
    componentDidMount = () => {
    let btn = document.getElementById('button')
    btn.onclick = () => {
    //任务栏
//     window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_f7854ba61ddc48de824e21c552474da8","_self");
    // window.open("https://www.baidu.com/?tn=02003390_19_hao_pg","_self");
    window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_3be6231f176e456bb3eb291fb36f27b0","_self");
    }
    let btn1 = document.getElementById('button1')
    btn1.onclick = () => {
    //数控机床运行状况
    window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_ef4656e18cfe4022b697f84510313200","_self");
    }
    let btn2 = document.getElementById('button2')
    btn2.onclick = () => {
    //机器人运行状况
    window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_fce647083b48429bba1ae9319ae14c6a","_self");
    }
    let btn3 = document.getElementById('button3')
    btn3.onclick = () => {
      // window.open("http://www.baidu.com");
    //零件卡爪运行状况
     window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_4bd1d83a6b8849168207bb423a2636c9","_self");
    }
    let btn4 = document.getElementById('button4')
    btn4.onclick = () => {
    //退出系统
     window.open("http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_96221f50c3dc40eb9c31c314f65ee271","_self");
    }
  }
  render() {
    return (
      <div className='left' style={{backgroundColor:'rgb(15, 32, 62)'}}>
                <span style={{fontSize:'30px',color:'white'}}>共建生态 引领未来</span>
                <button id='button' style={{fontSize:'25px',width:'250px', height:'65px',color:'white',backgroundColor:'rgb(108, 116, 141)'}}>
                    <span>设备属性明细</span>
                </button>
                <button id='button' style={{fontSize:'25px',width:'250px', height:'65px',color:'white',backgroundColor:'rgb(108, 116, 141)'}}>
                     <span id='button1' >数控机床运行状况</span>
                </button>
                <button id='button' style={{fontSize:'25px',width:'250px', height:'65px',color:'white',backgroundColor:'rgb(108, 116, 141)'}}>
                     <span id='button2'>机器人运行状况</span>
                </button>
                <button id='button' style={{fontSize:'25px',width:'250px', height:'65px',color:'white',backgroundColor:'rgb(108, 116, 141)'}}>
                     <span id='button3'>零件卡爪运行状况</span>
                </button>
                <button id='button' style={{fontSize:'25px',width:'250px', height:'65px',color:'white',backgroundColor:'rgb(108, 116, 141)'}}>
                     <span id='button4'>设备运行维修记录</span>
                </button>
      </div>
    )
  }
}