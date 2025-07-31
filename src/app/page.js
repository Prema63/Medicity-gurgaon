import ChatPopup from "./global/chatPopUp/ChatPopUP";
import Scroll from "./global/scroll/Scroll";

import Section1 from './components/Home/Section1/page';
import Section2 from './components/Home/Section2/page';
import Section3 from './components/Home/Section3/page';
import Section4 from './components/Home/Section4/page';
import Section5 from './components/Home/Section5/page';


export default function Layout (){
  return(
    <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>

      <ChatPopup />
      <Scroll />
    </div>
  )
}