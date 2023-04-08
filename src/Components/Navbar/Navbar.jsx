import React,{useState} from 'react';
import './Navbar.css';
import Sidebar from './Sidebar';





function Navbar() {
  const [navbar,setNavbar]=useState(false);
  const [clicked,setClicked]=useState(false);


  const changeBackground=()=>{
    if(window.scrollY>=80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll',changeBackground);


  //menu
 
function myNav() {
  setClicked(!clicked);

  

}



  return (

    <div className={navbar ? 'active':'navbar'}>

             <div className="left">Agrasarana</div>
             
             <div className="right" >
            
                <ul className={navbar ? 'uls':'ul'} >
                  <li>Home</li>
                  <li>Brands</li>
                  <li>About</li>
                  <li>Connect</li>
                  <li>Companies</li>
                
                 
                  
                </ul>
                
              
              </div>
            
            <div className="mright" >
            <ul className={clicked ? 'muls':'mul'} >
              <li>Home</li>
              <li>About</li>
              <li>Stories</li>
              <li>Investment</li>
              <li>Portfolio</li>
              <li>Brands</li>
              
            </ul>
          </div>
               
               <div id="mob"   onClick={myNav} >
               <i  className={clicked ? "fa fa-close":"fa fa-bars"}></i>
               </div>
              
               




               
            
              
           
      
                


        




            
             
    </div>


  )
}

export default Navbar