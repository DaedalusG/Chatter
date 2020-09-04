import React, { useState } from 'react';
import CenterPanel from './CenterPanel';
import ProfilePage from './ProfilePage';
import TweetPanel from './TweetPanel'


const CenterPanelSwitch = (props) => {


  const  [tweetIdsState, setTweetIdState] = useState();
  const tweetInfoFunc = (id)=>{
    setTweetIdState(id);
  }



  

  return (
    <>

      {(() => {

        switch (props.centerPanelState) {
          case 'Home':
            return <CenterPanel user={props.user} tweetInfoFunc={tweetInfoFunc} centerPanelProfile={props.centerPanelProfile} centerPanelTweetPanel={props.centerPanelTweetPanel} />
          case 'Profile':
            return <ProfilePage user={props.user} centerPanelProfile={props.centerPanelProfile} centerPanelTweetPanel={props.centerPanelTweetPanel} centerPanelHome={props.centerPanelHome} />
          case 'TweetPanel':
            return <TweetPanel tweetIdsState={tweetIdsState} />
          default:
            return <CenterPanel centerPanelProfile={props.centerPanelProfile} />
        }

      })()}
    </>
  );


}

export default CenterPanelSwitch;