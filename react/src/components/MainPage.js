import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import CenterPanel from './CenterPanel';

const MainPage = () => {

    return (
      <div id={"main-c"}>
        <LeftPanel></LeftPanel>
        <CenterPanel></CenterPanel>
        <RightPanel></RightPanel>
      </div>
    )

}

export default MainPage;