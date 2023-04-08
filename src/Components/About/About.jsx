import React from 'react'
import './About.css'
import i1 from '../img/abt.jpg';
import i2 from '../img/pm.jpg';
import fb from '../img/facebook.png';
import ig from '../img/instagram.png';
import li from '../img/linkedin.png';
import gm from '../img/gmail.png';

function chgtx1(){
  document.getElementById('p1tx').style.display="block"
  document.getElementById('p2tx').style.display="none"
  document.getElementById('p3tx').style.display="none"
  document.getElementById('bc1').style.color="red"
  document.getElementById('bc2').style.color="black"
  document.getElementById('bc3').style.color="black"
  
}
function chgtx2(){
  document.getElementById('p1tx').style.display="none"
  document.getElementById('p2tx').style.display="block"
  document.getElementById('p3tx').style.display="none"
  document.getElementById('bc1').style.color="black"
  document.getElementById('bc2').style.color="red"
  document.getElementById('bc3').style.color="black"
 
}
function chgtx3(){
  document.getElementById('p1tx').style.display="none"
  document.getElementById('p2tx').style.display="none"
  document.getElementById('p3tx').style.display="block"
  document.getElementById('bc1').style.color="black"
  document.getElementById('bc2').style.color="black"
  document.getElementById('bc3').style.color="red"
}
function About() {
  return (
    <div>
        <h1 className='aboutUs'><span id='About'>About </span><span id='us'>Us</span></h1>
        <p className='who'><span id='us'>Who are we</span></p>
        <div className='apar'>
          <div className="aleft"></div>
          <div className="aright"></div>
        </div>

        <div className='acpar'>
          <div className="acleft">
              <h4>WE ARE <span>AGRASARANA</span></h4>
               <hr/>
               <p>We are Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eius tempore laudantium facilis consectetur. Pariatur at et dolore fugiat, in optio, similique, voluptatum quisquam qui adipisci ducimus doloribus voluptates dicta!</p>
             <div className='pgrp'>
              <button id='bc1' className='b1' onClick={chgtx1}>OUR MISSION</button>
              <button id='bc2' className='b2' onClick={chgtx2}>OUR VISION</button>
              <button id='bc3' className='b3' onClick={chgtx3}>OUR MOTO</button>
             </div>
             <div className='pgrptx'>
              <div id='p1tx'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nobis autem ex fugiat veniam aut iusto? Suscipit officia eos nostrum fugiat, earum debitis in nisi facilis a laudantium error facere.</div>
              <div id='p2tx'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias veniam aliquid tempora, quisquam culpa atque iusto quae recusandae accusamus maiores doloremque nisi ipsam molestiae perferendis! Culpa officia sunt dolor in.</div>
              <div id='p3tx'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate reiciendis voluptas harum corrupti aperiam delectus possimus, nam ex laboriosam pariatur eligendi at fuga error non eveniet? Rem pariatur obcaecati distinctio?</div>
             </div>
          
          
          </div>
          <div className="acright">
            <img src={i1} width="100%" height="100%"/>
          </div>
        </div>

        <div className='aceopar'>
        <div className="aceoright">
               <img src={i2} />
        </div>
          <div className="aceoleft">
                <h1>Business Owner</h1>
                <h3>Name Title</h3>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut error pariatur recusandae nisi repellat quo fuga, numquam asperiores labore temporibus aliquam magnam suscipit dignissimos eveniet corrupti voluptas. Soluta, excepturi ab!</p>
                <div className='socialmd'>
                  <img src={fb} width='50px' height='50px'/>
                  <img src={ig} width='50px' height='50px'/>
                  <img src={gm} width='50px' height='50px'/>
                  <img src={li} width='50px' height='50px'/>
                </div>
          </div>
         
        </div>

       




    </div>
  )
}

export default About