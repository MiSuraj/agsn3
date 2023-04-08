import React from 'react';
import './Brands.css';
import i1 from '../img/99Ghar.jpeg'
import $ from 'jquery';

import Carousel from 'react-elastic-carousel';

const items= [
  {id: 1, title: 'item #1'},
  {id: 2, title: 'item #2'},
  {id: 3, title: 'item #3'},
  {id: 4, title: 'item #4'},
  {id: 5, title: 'item #5'}
]
export const Brands = () => {
  return (
    <div>
 <h1 className='aboutUs'><span id='About'>Our </span><span id='us'>Brands</span></h1>
        <p className='who'><span id='us'>what we serve</span></p>


        <div className='apar'>
          <div className="aleft"></div>
          <div className="aright"></div>
        </div>


        <div className="bpar">
        <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3>Hello what is Up</h3>
                </div>
                <div class="flip-card-back">
                  <h3>Nothing Much</h3>
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3></h3>
                </div>
                <div class="flip-card-back">
                  <h3></h3>
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3></h3>
                </div>
                <div class="flip-card-back">
                  <h3></h3>
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3></h3>
                </div>
                <div class="flip-card-back">
                  <h3></h3>
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3></h3>
                </div>
                <div class="flip-card-back">
                  <h3></h3>
                </div>
              </div>
            </div>
            <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3></h3>
                </div>
                <div class="flip-card-back">
                  <h3></h3>
                </div>
              </div>
            </div>

          
        </div>


        <div className="testmo">

        <Carousel>
        <div>
                <div className='rvcard'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis autem impedit, delectus voluptatem ducimus sed aliquam molestiae, ut facilis magni explicabo maiores beatae nihil doloribus, nulla pariatur provident atque. Consectetur!</p>
                </div>
       </div>
        <div>  
                <div className='rvcard'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis autem impedit, delectus voluptatem ducimus sed aliquam molestiae, ut facilis magni explicabo maiores beatae nihil doloribus, nulla pariatur provident atque. Consectetur!</p>
                </div>
        </div>
        <div>    
                 <div className='rvcard'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis autem impedit, delectus voluptatem ducimus sed aliquam molestiae, ut facilis magni explicabo maiores beatae nihil doloribus, nulla pariatur provident atque. Consectetur!</p>
                </div>
        </div>
        
        
        <div>
          
                <div className='rvcard'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis autem impedit, delectus voluptatem ducimus sed aliquam molestiae, ut facilis magni explicabo maiores beatae nihil doloribus, nulla pariatur provident atque. Consectetur!</p>
                </div>
        </div>
        <div>
               <div className='rvcard'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis autem impedit, delectus voluptatem ducimus sed aliquam molestiae, ut facilis magni explicabo maiores beatae nihil doloribus, nulla pariatur provident atque. Consectetur!</p>
                </div>
        </div>
      </Carousel>


        </div>



    </div>
  )
}
