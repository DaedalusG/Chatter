import React from 'react';
import CommentBubble from '../images/CommentBubble';
import Retweet from '../images/Retweet';
import Heart from '../images/Heart';
import LinkTweet from '../images/LinkTweet';
import DownCarrot from '../images/DownCarrot';

const Tweet = (props)=>{

  const tweetContent = document.getElementsByName("tweet-textarea")[0].innerText



  return(
    <div className={"tweet-c"}>
      {/* <span className={"tweet-c__name"}>{props.props.name}</span> */}
      <div className={"tweet-c__top"}>
          <img className={"user__profile-pic"} alt={""} src={props.props.user.profile_pic} ></img>
          <div className={"tweet-c__user-name"} >
            <p>{`${props.props.user.firstname} ${props.props.user.lastname}`}</p>
            <p>{props.props.user.username}</p>
            <div className={"down-carrot-c"}>
              <DownCarrot></DownCarrot>
            </div>
          </div>
      </div>
      <div className = "tweet-c__comment" onClick={props.centerPanelTweetPanel}  >
        <p>{props.props.content}</p>
      </div>
      <img className={"tweet-pic"} alt={""} src={props.props.media} ></img>
      <div className={"tweet-c__svg-c"} >
        <CommentBubble></CommentBubble>
        <Retweet></Retweet>
        <Heart></Heart>
        <LinkTweet></LinkTweet>


      </div>
    </div>
  )
}
export default Tweet;