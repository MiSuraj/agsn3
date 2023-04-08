import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import { Brands } from './Components/Brands/Brands';
import { Footer } from './Components/Footer/Footer';
import Slid from './Components/Slid/Slid';


let num=0;
const myLight = { 
     '--dlbg':'white',
     '--dlbg2':'whitesmoke',
     '--dltx':'black',
     '--dltx2':' #222',
     '--dred':'darkred',
     '--red':'red',
     '--lightred': '#fb2f2f',

};
const myDark = {
  '--dlbg':'black',
  '--dlbg2':' #222',
  '--dltx':'white',
  '--dltx2':'#6e6e6e',
  '--dred':'darkred',
  '--red':'red',
  '--lightred': '#fb2f2f'
};
const root = document.querySelector(':root');  
const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
function mode(){
   num++;
   if(num%2===0){
    num=0;
    setVariables(myLight);
  }
   else{
    setVariables(myDark);
  }


}
function App() {
  return (
    <div className="h1">
     <Navbar/>
    <Hero/>
    
     <Brands/>
     <About/>
   
     <Footer/>
     <button className="button dlbutton" onClick={mode}>Light/Dark</button>
    </div>
  );
}

export default App;
