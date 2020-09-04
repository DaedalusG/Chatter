import React, { useEffect, useState } from 'react';
import { apiUrl } from '../config';
import Sparkles from '../images/Sparkles';
import Landcape from '../images/Landscape';
import GifBox from '../images/GifBox';
import PollBox from '../images/PollBox';
import SmileyFace from '../images/SileyFace';
import Calendar from '../images/Calendar'
import Tweet from './Tweet';
import LeftArrow from '../images/LeftArrow';


const TweetPanel = (props) => {
  // console.log(props)
  const [tweetState, setTweetState] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/api/tweets/tweet/${props.tweetIdsState}`)
      .then(res => res.json())
      .then(data =>  setTweetState(data))
      .catch( e => console.log(e) )
  }, [])

  return (
    <>
      <div id={"center-panel"}>
        <div id={"center-panel__nav"}>
          <div className={"tweet-left-arrow-c"} onClick={props.centerPanelHome} >
            <LeftArrow></LeftArrow>
            <span>Tweet</span>
          </div>
        </div>
        <div id={"center-panel__below-nav"} >
          <div className="center-panel__below-nav__scroll" >
            <div className="all-tweets-c">
              {/* <Tweet props={tweetState}/> */}
              <p>{tweetState.content}</p>

              {tweetState.replies ?
                tweetState.replies.map( reply => (<p>{reply.content}</p>) )
                : null
              }

              <p>{props.tweetIdsState}</p>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default TweetPanel;
