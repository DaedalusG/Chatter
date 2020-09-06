import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';
import Sparkles from '../images/Sparkles';
import Landcape from '../images/Landscape';
import GifBox from '../images/GifBox';
import PollBox from '../images/PollBox';
import SmileyFace from '../images/SileyFace';
import Calendar from '../images/Calendar'
import Tweet from './Tweet';
import LeftArrow from '../images/LeftArrow';
import TweetPanelTweet from './TweetPanelTweet';
import TweetPanelComment from './TweetPanelComment';


const TweetPanel = (props) => {
  // console.log("tp",props)
  const [tweetState, setTweetState] = useState([])

  useEffect(() => {


    const token = window.localStorage.getItem('auth_token')
    const response =  fetch(`${API_URL}/tweets/tweet/${props.tweetIdsState}`, {
      method: "GET",
      mode: "cors",
      headers: { "Authorization": `Bearer ${token}` },
    })
        .then(res => res.json())
        .then(data =>  setTweetState(data))
        .catch( e => console.log(e) )

  }, [])

  return (
    <>
      <div id={"center-panel"}>
        <div id={"center-panel__nav"}>
          <div className={"tweet-left-arrow-c"} onClick={props.centerPanelProfile} >
            <LeftArrow ></LeftArrow>
            <span>Tweet</span>
          </div>
        </div>
        <div id={"tweet-panel__below-nav"} >
          <div className="tweet-panel__below-nav__scroll" >
          
            <div className="all-tweets-c">
          
              <TweetPanelTweet props={tweetState} centerPanelHome={props.centerPanelHome} ></TweetPanelTweet>
    
              {tweetState.replies ?
                // tweetState.replies.map( reply => (<p>{reply.content}</p>) )
                tweetState.replies.map( reply => ( <TweetPanelComment props={reply} /> ) )
                : null
              }
  
              {/* <p>{props.tweetIdsState}</p> */}
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
export default TweetPanel;
