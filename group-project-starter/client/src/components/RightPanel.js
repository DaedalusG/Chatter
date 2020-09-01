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


      <div id={"main-c__right__suggestions-c"}>
        <div id={"main-c__right__suggestions-c__top"} ><span>Who to follow</span></div>
        <div className={"main-c__right__suggestions-c__feed"}>
          <div id={"main-c__right__user-pic-bublle-c"}>
            <div className={"profile-bubble-3"} ></div>
          </div>
          <div className={"suggestions-feed"}>
            <p>Shera</p>
            <p>@shera</p>
          </div>
          <div className={"follow-button-suggestions"} > <span>Follow</span> </div>
        </div>
        <div className={"main-c__right__suggestions-c__feed"}>
          <div id={"main-c__right__user-pic-bublle-c"}>
            <div className={"profile-bubble-3"} ></div>
          </div>
          <div className={"suggestions-feed"}>
            <p>Shera</p>
            <p>@shera</p>
          </div>
          <div className={"follow-button-suggestions"} > <span>Follow</span> </div>
        </div>
        <div className={"main-c__right__suggestions-c__feed"}>
          <div id={"main-c__right__user-pic-bublle-c"}>
            <div className={"profile-bubble-3"} ></div>
          </div>
          <div className={"suggestions-feed"}>
            <p>Shera</p>
            <p>@shera</p>
          </div>
          <div className={"follow-button-suggestions"} > <span>Follow</span> </div>
        </div>
        <div id={"main-c__right__suggestions-c__discaimer"} > <span>Terms Privacy policy Cookies Ads info More</span> </div>
      </div>


    </div>
  )
}
export default RightPanel;