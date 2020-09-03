import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import LeftArrow from '../images/LeftArrow';
import ProfileFullScreen from './ProfileFullScreen';


const ProfilePage = (props) => {

  const [tweetState, setTweetState] = useState([])
  const user = 1; 
  useEffect(() => {
    fetch(`http://localhost:5000/api/tweets/user`)
      .then(res => res.json())
      .then(data => {
        setTweetState(data)
      })
  }, [])

  const [profileFullScreenState, setProfileFullScreenState] = useState(false);
  const fullscreenPic =()=>{
    let toggleFullScreen = !profileFullScreenState
    setProfileFullScreenState(toggleFullScreen)
  }

  return (
    <>
      <ProfileFullScreen fullscreenPic={fullscreenPic}  profileFullScreenState={profileFullScreenState} />
      <div id={"center-panel"}>
        <div id={"center-panel-tweet__nav"}>
          <div onClick={props.centerPanelHome} > 
            <LeftArrow></LeftArrow>
          </div>
          <span>ProfilePage</span>
        </div>
        <div id={"center-panel__below-nav"} >
          <div className="center-panel__below-nav__scroll" >
            <div className={"below-nav-section"} >
              <div id={"profile-banner"} ></div>
              <div id={"profile-panel__below-nav__profile-bublle-c"} onClick={fullscreenPic}>
                <div className={"profile-bubble-4"} ></div>
              </div>
              <span name="tweet-textarea" className="textarea-hide" role="textbox" resize="none" contentEditable=""></span>
            </div>
            <div className={"below-tweet-nav-section-2"} >
              <div id={"edit-profile-button"}>
                <span>Edit Profile</span>
              </div>
              <span className={"profile-user-name"} >Skeletor</span>
              <span className={"profile-chatter-name"} >@skeletor7</span>
              <span className={"profile-bio"} >Rightfull king of Eternia. Owner of Panthor. Laughs like no ones watching.</span>
            </div>
            
            <div className="all-tweets-c">
              {tweetState[0] ?
                tweetState.map((tweet) => <Tweet props={tweet} />)
                : null
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default ProfilePage;