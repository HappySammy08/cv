import logo from './logo.svg';
import './App.css';

import { FaSquareFacebook, FaItchIo, FaSquareGithub, FaLinkedin, FaAddressBook, FaMessage} from "react-icons/fa6";
import pfp from "./img/Summer.png";


import cover_gg from "./img/1.jpg";
import ss_1 from "./img/2.jpg";
import ss_2 from "./img/3.jpg";
import ss_3 from "./img/4.jpg";

import header from "./img/Space Adventure/header.png";
import thumbnail from "./img/Space Adventure/thumbnail.png";
import sa_1 from "./img/Space Adventure/1.png";
import sa_2 from "./img/Space Adventure/2.png";
import sa_3 from "./img/Space Adventure/3.png";



function App() {
  return (
    <div className="App">
     <div className="main">
      <div className="left">
      <div className="left-box">
      <h1>Hi!</h1><p> <div>I'm Summer Kate Nadela</div> <div className='status'>Aspring Game Developer</div> 
      <div className='contacts'> <FaMessage className='icon'/> summerkate.nadela@gmail.com  <br/> <FaAddressBook className='icon'/> 09203237534/09925507014 </div>
      <div className='icons'>
        <a href='https://www.facebook.com/kate.nadela.8/'><FaSquareFacebook className='icon'/></a>
        <a href='https://github.com/HappySammy08'><FaSquareGithub className='icon'/></a>
        <a href='https://www.linkedin.com/in/summerkatenadela/'><FaLinkedin  className='icon'/></a>
        <a href="https://elizabeth08.itch.io/"><FaItchIo className='icon'/></a>
        </div></p>
        <hr size="1"/>

        <div className='motto'> <i >'The only regret I have is not documenting everything'</i></div>


      
     </div>

      
      </div>
      <div className="right">
    
          <img src={pfp}></img>
        
      </div>
     </div>

     <div className='photo-lib'>

{/* Gourmet Go */}
<img src={cover_gg} alt="gg-cover"  width="25%"/>
<img src={ss_1} alt="ss_1"  width="25%"/>
<img src={ss_2} alt="ss_2"  width="25%"/>
<img src={ss_3} alt="ss_3"  width="25%"/>

{/* Space Adventure */}

<img src={header} alt="sa-header" width="100%"/>
<img src={thumbnail} alt="sa-cover"  width="25%"/>
<img src={sa_1} alt="ss_1"  width="25%"/>
<img src={sa_2} alt="ss_2"  width="25%"/>
<img src={sa_3} alt="ss_3"  width="25%"/>

</div>
    </div>
  );
}

export default App;
