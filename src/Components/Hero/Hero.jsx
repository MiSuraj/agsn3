import React from 'react'
import './Hero.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typewriter from 'typewriter-effect';
import i1 from '../img/bg1.jpg';
import i2 from '../img/bg2.jpg';
import i3 from '../img/bg3.jpg';


function Hero() {

  return (
    <div>

    
      <Carousel transitionTime="1500" showStatus={false} infiniteLoop={true} showThumbs={true} autoPlay={true} swipeable={true} showIndicators={false} dynamicHeight={true}>
                <div>
                    <img src={i1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={i2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={i3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={i1} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={i2} />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={i3} />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>

<div className='postion'>
           <div className='formCard'>
           <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Quick Contact</h3>
    <h4>Contact us today, and get reply with in 24 hours!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
           </div>
<div className='textTypewriter'>


<span> We Are</span>

           <Typewriter
  options={{
    strings: ['Agrasarana','I am Company 1', 'I am Company 2','I am Company 3', 'I am Company 4', 'I am Company 5'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
</div>

    </div>
  )
}

export default Hero
