import React from 'react';

const ProfileFullScreen = (props)=>{
  return(
    <div className={`profile-full-screen-c ${props.profileFullScreenState ? "visible" : "hidden"}`}>
      <div className={"profile-full-screen"} ></div>
      <div className={"profile-full-screen-background"} onClick={props.fullscreenPic}></div>
    </div>
  )
}
export default ProfileFullScreen;