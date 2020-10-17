import React, { useState, useEffect } from 'react';
import CenterPanel from './CenterPanel';
import ProfilePage from './ProfilePage';
import TweetPanel from './TweetPanel'


const CenterPanelSwitch = (props) => {

  const [targetUser, setTargetUser] = useState({});

  const  [tweetIdsState, setTweetIdState] = useState();
  const tweetInfoFunc = (id)=>{
    setTweetIdState(id);
  }
  useEffect(()=>{
    setTargetUser(props.targetUser)
  },[props])

  // const [tweerUserState, setTweetUserState] = useState();
  // const getTweetUser =()=>{
  //   setTweetUserState()
  // }

  
  return (
    <>

      {(() => {

        switch (props.centerPanelState) {
          case 'Home':
            return <CenterPanel tweetIdsState={tweetIdsState} user={props.user} targetUser={targetUser} tweetInfoFunc={tweetInfoFunc} centerPanelProfile={props.centerPanelProfile} centerPanelTweetPanel={props.centerPanelTweetPanel} />
          case 'Profile':
            return <ProfilePage centerPanelHome={props.centerPanelHome} editProfileState={props.editProfileState} user={props.user} targetUser={targetUser} tweetInfoFunc={tweetInfoFunc} centerPanelProfile={props.centerPanelProfile} centerPanelTweetPanel={props.centerPanelTweetPanel} />
          case 'TweetPanel':
            return <TweetPanel user={props.user} tweetInfoFunc={tweetInfoFunc}  centerPanelHome={props.centerPanelHome} centerPanelProfile={props.centerPanelProfile} tweetIdsState={tweetIdsState} />
          default:
            return <CenterPanel tweetIdsState={tweetIdsState} user={props.user} targetUser={targetUser} tweetInfoFunc={tweetInfoFunc} centerPanelProfile={props.centerPanelProfile} centerPanelTweetPanel={props.centerPanelTweetPanel} />
        }

      })()}
    </>
  );


}

export default CenterPanelSwitch;