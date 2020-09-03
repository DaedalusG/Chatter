import React, {useState} from 'react';
import CenterPanel from './CenterPanel';
import ProfilePage from './ProfilePage';
import TweetPanel from './TweetPanel'


const CenterPanelSwitch = ()=>{

  const [centerPanelState, setPanelState] = useState("Home");

  const centerPanelHome = ()=>{
    setPanelState("Home")
  }
  const centerPanelProfile = ()=>{
    setPanelState("Profile");
  }
  const centerPanelTweetPanel = ()=>{
    setPanelState("TweetPanel");
  }

  return (
    <>
        
        {(() => {
  
           switch (centerPanelState) {
              case 'Home': 
               return <CenterPanel centerPanelProfile={centerPanelProfile} centerPanelTweetPanel={centerPanelTweetPanel} />
              case 'Profile':
               return <ProfilePage centerPanelProfile={centerPanelProfile} centerPanelTweetPanel={centerPanelTweetPanel} centerPanelHome={centerPanelHome} />
              case 'TweetPanel':
               return <TweetPanel />    
              default:
               return <CenterPanel centerPanelProfile={centerPanelProfile} />  
           }
  
        })()}  
    </>
  );


}

export default CenterPanelSwitch;