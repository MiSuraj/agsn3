import React from 'react'
import './Slid.css'
import i1 from'../img/759.jpg';
import i2 from'../img/h1.jpg';
import i3 from'../img/build.jpg';
import i4 from'../img/vec2.jpg';



var imgArr={i1,i2,i3,i4};
let t1=i1;
function imgSlide(){
    console.log("imgSLlide")
    let i=0;
    for(i=0;i<4;i++){
        
    }
}




function Slid() {
  return (
    <div >

        <div className='container'>
            <div id='imag'>
                <div>   <img src={i2} height="100%" width="100%" /></div>
             
               <div><img src={i1} height="100%" width="100%" /></div> 
               <div><img src={i3} height="100%" width="100%" /></div> 
                <div><img src={i4} height="100%" width="100%" /></div>
            </div>
              <button onClick={imgSlide}>Slide</button>
        </div>


    </div>
  )
}

export default Slid