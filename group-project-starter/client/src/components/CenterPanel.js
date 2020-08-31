import React from 'react';
import Sparkles from '../images/Sparkles';

const CenterPanel = ()=>{
  return(
    <>
    <div id={"center-panel"}>
      <div id={"center-panel__nav"}>
        <span>Home</span>
        <Sparkles></Sparkles>
      </div>
      <div id={"center-panel__below-nav"} >
        <div id={"center-panel__below-nav__profile-bublle-c"}>
          <div className={"profile-bubble-2"} ></div>
        </div>
          <div id={"center-panel__below-nav__content-c"}>
            <div className={"below-nav-section"} >
              {/* <textarea id={"tweet-textarea"} name={"tweet-textarea"} rows={1} cols={33} wrap={"soft"} resize={"none"} placeholder={"What's happening?"} ></textarea> */}
              <span class="textarea" role="textbox" contenteditable=""></span>
              
            </div>
            <div className={"below-nav-section"} ></div>
          </div>
      </div>
    </div>
    
    </>
  )
}
export default CenterPanel;