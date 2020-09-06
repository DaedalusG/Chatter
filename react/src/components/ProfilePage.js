import React, { useEffect, useState } from 'react';
import Tweet from './Tweet';
import LeftArrow from '../images/LeftArrow';
import ProfileFullScreen from './ProfileFullScreen';
import {apiUrl} from '../config';

const token = window.localStorage.getItem("auth_token");

const ProfilePage = (props) => {


  const [tweetState, setTweetState] = useState([])
  const user = 1;
  const [profileUser, setProfileUser] = useState(1);
  useEffect(() => {
    if (props.user.id === profileUser){
      const getUserTweets = async()=>{
        const response = await fetch(`${apiUrl}/tweets/user/${profileUser}`,{
          method: "GET", 
          mode: "cors",
          headers: {"Authorizaion": `Bearer ${token}`}
        })
        if (!response.ok) {console.log("error in getUserTweets")}
        else{
          const json = await response.json();
          setTweetState(json);
          console.log('json',json)
        }
        
      }
    
      getUserTweets();
    }
    setProfileUser(props.user.id);


    // fetch(`http://localhost:5000/api/tweets/user/`)
    // fetch(`http://localhost:5000/api/tweets/user/1`)
    //   .then(res => res.json())
    //   .then(data => {
    //     setTweetState(data)
    //   })
  }, [props])

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
              {tweetState[0] ?
                tweetState.map((tweet) => <Tweet centerPanelProfile={props.centerPanelProfile} props={tweet} />)
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