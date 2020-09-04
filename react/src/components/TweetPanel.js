import React, { useEffect, useState } from 'react';
import { apiUrl } from '../config';
import Sparkles from '../images/Sparkles';
import Landcape from '../images/Landscape';
import GifBox from '../images/GifBox';
import PollBox from '../images/PollBox';
import SmileyFace from '../images/SileyFace';
import Calendar from '../images/Calendar'
import Tweet from './Tweet';


const TweetPanel = (props) => {
  // console.log(props)
  const [tweetState, setTweetState] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/api/tweet/${props.tweetIdsState}`)
      .then(res => res.json())
      .then(data => {
        setTweetState(data)
      })
  }, [])


  return (
    <>
      <div id={"center-panel"}>
        <div id={"center-panel__nav"}>
          <span>Home</span>
          <Sparkles></Sparkles>
        </div>
        <div id={"center-panel__below-nav"} >
          <div className="center-panel__below-nav__scroll" >
            {/* <div id={"center-panel__below-nav__content-c"}> */}
            <div className={"below-nav-section"} >
              {/* <textarea id={"tweet-textarea"} name={"tweet-textarea"} rows={1} cols={33} wrap={"soft"} resize={"none"} placeholder={"What's happening?"} ></textarea> */}
              <div id={"center-panel__below-nav__profile-bublle-c"}
                onClick={props.centerPanelProfile}
              >
                <div className={"profile-bubble-2"} ></div>
              </div>
              <span name="tweet-textarea" className="textarea" role="textbox" resize="none" contentEditable=""></span>
            </div>
            <div className={"below-nav-section-2"} >
              <Landcape></Landcape>
              <GifBox></GifBox>
              <PollBox></PollBox>
              <SmileyFace></SmileyFace>
              <Calendar></Calendar>
              <div >
                <span>Tweet</span>
              </div>
            </div>
            <div className="all-tweets-c">
              {/* <Tweet
              // props={tweetState[0]}
              /> */}
              <p>{props.tweetIdsState}</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default TweetPanel;
