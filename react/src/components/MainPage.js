import React, {useState, useEffect} from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import CenterPanelSwitch from './CenterPanelSwitch';

const MainPage = () => {
  const [centerPanelState, setPanelState] = useState("Home");
  const [userState, setUserState] = useState({})

  useEffect(() => {

    //TODO get user from localStorage
    fetch(`http://localhost:5000/api/users/2`)
      .then(res => res.json())
      .then(data => {
        setUserState(data)
      })
      .catch( e => console.log("NO GOOD---->", e) )

  }, [])

  const centerPanelHome = () => {
    setPanelState("Home")
  }
  const centerPanelProfile = () => {
    setPanelState("Profile");
  }
  const centerPanelTweetPanel = () => {
    setPanelState("TweetPanel");
  }


    return (
      <div id={"main-c"}>
        <LeftPanel centerPanelHome={centerPanelHome} user={userState} ></LeftPanel>
        <CenterPanelSwitch centerPanelState={centerPanelState} setPanelState={setPanelState} centerPanelHome={centerPanelHome} centerPanelProfile={centerPanelProfile} centerPanelTweetPanel={centerPanelTweetPanel} user={userState}/>
        <RightPanel></RightPanel>
      </div>
    )

}

export default MainPage;