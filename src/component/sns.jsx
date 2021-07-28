import React, { useEffect, useState } from 'react';
import './sns.css'
import Sns_slide from './sns_slide'
const Sns = ()=>{
  const [snsSlide,setSnsSlide] = useState(["webpage/img/sns1.jpg","webpage/img/sns2.jpg","webpage/img/sns3.jpg","webpage/img/sns4.jpg","webpage/img/sns5.jpg","webpage/img/sns6.jpg","webpage/img/sns7.jpg","webpage/img/sns8.jpg","webpage/img/sns9.jpg",])
  let s_interval;
  let s_check = true;
  useEffect(()=>{
    const s_slide_outer = document.querySelector('.s_slide_outer')
    let s_slide_left = 0;
    const s_slide = document.querySelector('.s_slide')
    s_interval = setInterval(()=>{
      if(s_check){
        s_slide_outer.style.left = s_slide_left + "px"
        if(s_slide_left >= -(Number(s_slide.style.marginRight.split("px")[0]) + s_slide.clientWidth) * (snsSlide.length - 4)){
          s_slide_left -= Number(s_slide.style.marginRight.split("px")[0])+ s_slide.clientWidth
        }
        else{
          s_slide_left =0
        }
      }
    },2000)
  },[])
const onMouseEnterBox= ()=>{
  s_check = false
}
const onMouseLeaveBox =()=>{
  s_check = true
}
  return (
    <div className="sns">
        <div className="w_1440">
          <div className="s_title">
            <h1>경기생활문화센터 SNS</h1>
            <div>경기생활문화센터와 친구를 맺고</div>
            <div>다양한 소식을 만나보세요.</div>
          </div>
          <div className="more">MORE</div>
          <div className="s_slide_box" onMouseEnter={onMouseEnterBox} onMouseLeave={onMouseLeaveBox}>
            <div className="s_slide_outer">
              {snsSlide.map((v,i)=><Sns_slide key={i+v} index ={i} backgroud={snsSlide[i]}/>)}
            </div>
          </div>
        </div>
      </div>
  )
}
export default Sns