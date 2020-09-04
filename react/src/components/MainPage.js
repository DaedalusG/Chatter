import React, { useState, useEffect } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import CenterPanelSwitch from './CenterPanelSwitch';
import { apiUrl } from '../config.js'

const MainPage = () => {

  const [user, setUser] = useState({})

  useEffect(() => {
    const getCurrentUser = async () => {
      const token = window.localStorage.getItem('auth_token')
      const response = await fetch(apiUrl, {
        method: "GET",
        mode: "cors",
        headers: { "Authorization": `Bearer ${token}` },
      })
      if (!response.ok) {
        console.log("this will never happen. you can quote me")
      } else {
        const json = await response.json();
        console.log(json)
        setUser(json);
      }
    }
    getCurrentUser();
  }, [])

  return (
    <div id={"main-c"}>
      <LeftPanel user={user} />
      <CenterPanelSwitch user={user} />
      <RightPanel user={user} />
    </div>
  )

}

export default MainPage;