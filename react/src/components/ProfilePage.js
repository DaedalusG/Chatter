import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import LeftArrow from '../images/LeftArrow';
import ProfileFullScreen from './ProfileFullScreen';


const ProfilePage = (props) => {

  const [tweetState, setTweetState] = useState([])

  const [profileFullScreenState, setProfileFullScreenState] = useState(false);
  const fullscreenPic = () => {
    let toggleFullScreen = !profileFullScreenState
    setProfileFullScreenState(toggleFullScreen)
  }

  return (
    <>
      <ProfileFullScreen user={props.user} fullscreenPic={fullscreenPic} profileFullScreenState={profileFullScreenState} />
      <div id={"center-panel"}>
        <div id={"center-panel-tweet__nav"}>
          <div onClick={props.centerPanelHome} >
            <LeftArrow></LeftArrow>
          </div>
          <span>{props.user.firstname}</span><span>{props.user.lastname}</span>
        </div>
        <div id={"center-panel__below-nav"} >
          <div className="center-panel__below-nav__scroll" >
            <div className={"below-nav-section"} >
              <img id={"profile-banner"} alt={""} src={props.user.banner_pic} ></img>
              {/* <div id={"profile-banner"} ></div> */}
              <div id={"profile-panel__below-nav__profile-bublle-c"} onClick={fullscreenPic}>
                <img className={"profile-bubble-4"} alt={""} src={props.user.profile_pic} ></img>
                {/* <div className={"profile-bubble-4"} ></div> */}
              </div>
              <span name="tweet-textarea" className="textarea-hide" role="textbox" resize="none" contentEditable=""></span>
            </div>
            <div className={"below-tweet-nav-section-2"} >
              <div id={"edit-profile-button"}>
                <span>Edit Profile</span>
              </div>
              <span className={"profile-user-name"} >{props.user.firstname}</span><span className={"profile-user-name"}>{props.user.lastname}</span>
              <span className={"profile-chatter-name"} >@</span><span className={"profile-chatter-name"} > {props.user.username}</span>
              <span className={"profile-bio"} >{props.user.about}</span>
            </div>

            <div className="all-tweets-c">
              {tweetState ?
                tweetState.map((tweet) => <Tweet props={tweet} user={props.user} />)
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