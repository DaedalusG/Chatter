import React from 'react';

import Bird from '../images/Bird';
import BirdHouse from '../images/BirdHouse';
import Hash from '../images/Hash';
import Bell from '../images/Bell';
import Envelope from '../images/Envelope';
import Bookmark from '../images/Bookmark';
import Paper from '../images/Paper';
import Person from '../images/Person';
import CirclesMore from '../images/CirclesMore';
import DownCarrot from '../images/DownCarrot'

const LeftPanel = ()=>{
  return(
    <div id={"main-c__left"} >
      <div>
        <div className={"main-c__left__bird"}>
          <Bird></Bird>
        </div>
      </div>
      <div>
        <div className={"main-c__left__link"}>
          <BirdHouse></BirdHouse>
          <span>HOME</span>
        </div>
      </div>
      <div className={"main-c__left-c"} >
        <div id={"hash-c"} className={"main-c__left-c__link-black"}>
          <Hash></Hash>
          <span>Explore</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"bell-c"} className={"main-c__left-c__link-black"}>
          <Bell></Bell>
          <span>Notifications</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"envelope-c"} className={"main-c__left-c__link-black"}>
          <Envelope></Envelope>
          <span>Messages</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"bookmark-c"} className={"main-c__left-c__link-black"}>
          <Bookmark></Bookmark>
          <span>Bookmarks</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"bookmark-c"} className={"main-c__left-c__link-black"}>
          <Bookmark></Bookmark>
          <span>Bookmarks</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"paper-c"} className={"main-c__left-c__link-black"}>
          <Paper></Paper>
          <span>Lists</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"person-c"} className={"main-c__left-c__link-black"}>
          <Person></Person>
          <span>Profile</span>
        </div>
      </div>
      <div className={"main-c__left-c"}>
        <div id={"circles-more-c"} className={"main-c__left-c__link-black"}>
          <CirclesMore></CirclesMore>
          <span>More</span>
        </div>
      </div>
      <div id={"main-c__left__bottom-c"} >
        <div id={"tweet-button"}>
          <span>Tweet</span>
        </div>
        <div id={"main-c__left__login"}>
          <div className={"profile-bubble"} ></div>
          <div className={"user-names"} >
            <span className={"user-names__span1"}>Skeletor</span>
            <span className={"user-names__span2"} >@Skeletor1</span>
          </div>
          <DownCarrot></DownCarrot>
        </div>
      </div>
    </div>
  )
}
export default LeftPanel;