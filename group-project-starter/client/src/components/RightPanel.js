import React from 'react';
import MagnifyingGlass from '../images/MagnifyingGlass';


const RightPanel = ()=>{
  return(
    <div id={"main-c__right"} >
      <div id={"main-c__right__search-bar"} >
        <MagnifyingGlass></MagnifyingGlass>
        <input id={"search-input"} name={"search-input"} placeholder="Search Chatter" ></input>
      </div>
      <div id={"main-c__right__event-c"} >
        <div id={"main-c__right__event-c__top"} ><span>What's happening</span></div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <p>Heman Again</p>
            <p>And battle cat!</p>
          </div>
          <div className={"news-pic"} ></div>
        </div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <p>Heman Again</p>
            <p>And battle cat!</p>
          </div>
          <div className={"news-pic"} ></div>
        </div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <p>Heman Again</p>
            <p>And battle cat!</p>
          </div>
          <div className={"news-pic"} ></div>
        </div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <p>Heman Again</p>
            <p>And battle cat!</p>
          </div>
          <div className={"news-pic"} ></div>
        </div>
        <div className={"main-c__right__event-c__news"}>
          <div className={"news-feed"}>
            <p>Heman Again</p>
            <p>And battle cat!</p>
          </div>
          <div className={"news-pic"} ></div>
        </div>
      </div>
    </div>
  )
}
export default RightPanel;