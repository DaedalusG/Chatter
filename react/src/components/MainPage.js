import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import CenterPanelSwitch from './CenterPanelSwitch';

const MainPage = () => {

    return (
      <div id={"main-c"}>
        <LeftPanel></LeftPanel>
        <CenterPanelSwitch/>
        <RightPanel></RightPanel>
      </div>
    )

}

export default MainPage;