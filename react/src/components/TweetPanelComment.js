import React, { useState, useEffect } from 'react';
import { API_URL } from '../config'
import CommentBubble from '../images/CommentBubble';
import Retweet from '../images/Retweet';
import Heart from '../images/Heart';
import LinkTweet from '../images/LinkTweet';
import DownCarrot from '../images/DownCarrot';

const token = window.localStorage.getItem('auth_token')

const TweetPanelComment = (props) => {
  const [hearted, setHearted] = useState("heart");
  const [heartCount, setHeartCount] = useState(0);
  const [retweeted, setRetweeted] = useState("retweet");
  const [retweetCount, setRetweetCount] = useState(0);

  console.log('tpcomment', props)
  const handleHeartClick = () => {
    if (hearted === "heart") {
      const createLike = async () => {
        const response = await fetch(`${API_URL}/likes/`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            userId: `${props.user.id}`,
            tweetId: `${props.props.id}`
          }),
        });
        if (!response.ok) {
          console.log("createLike response failure");
        } else {
          console.log("createLike response success");
        }
      }
      createLike();
      setHearted("heartOn");
      setHeartCount(heartCount + 1);
    }
    else {
      const destroyLike = async () => {
        const response = await fetch(`${API_URL}/likes/`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            userId: `${props.user.id}`,
            tweetId: `${props.props.id}`
          }),
        });
        if (!response.ok) {
          console.log("destroyLike response failure");
        } else {
          console.log("destroyLike response success");
        }
      }
      destroyLike();
      setHearted("heart");
      setHeartCount(heartCount - 1);
    };
  };

  const handleRetweetClick = () => {
    retweeted === "retweet" ? setRetweeted("retweetOn") : setRetweeted("retweet")
  }


  useEffect(() => {
    const getHeartedCount = async () => {
      if (props.props.id === undefined) return
      const response = await fetch(`${API_URL}/likes/${props.props.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        console.log("getHeartedCount response failed")
      } else {
        const json = await response.json();
        setHeartCount(json.count)
      }
    }
    const getUserHearted = async () => {
      if (props.props.id === undefined) return
      const response = await fetch(
        `${API_URL}/likes/${props.user.id}/${props.props.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
      )
      if (!response.ok) {
        console.log("getUserHearted response failed")
      } else {
        const json = await response.json();
        console.log("Here's Jason --> ", json)
        if (json.like !== null) {
          console.log("JASON! --> ", json.like)
          setHearted("heartOn")
        }
      }
    }
    getHeartedCount();
    // getUserHearted(); -- commented out for dev
  }, [])


  return (
    <div className={"tweet-c"}>
      <div className={"tweet-c__top"}>
        {/* <img className={"user__profile-pic"} alt={""} src={props.props.user.profile_pic} ></img> */}
        <div className={"tweet-c__user-name"} >
          {/* <p>{`${props.props.user.firstname} ${props.props.user.lastname}`}</p>
          <p>{props.props.user.username}</p> */}
          <div className={"down-carrot-c"}>
            <DownCarrot />
          </div>
        </div>
      </div>
      <div className="tweet-c__comment" onClick={() => {
        // props.tweetInfoFunc(props.props.id)
        // props.centerPanelTweetPanel()
      }}
      >
        <p>{props.props.content}</p>
      </div>
      {/* <img className={"tweet-pic"} alt={""} src={props.props.media} ></img> */}
      <div className={"tweet-c__svg-c"} >
        <CommentBubble />
        <div onClick={handleRetweetClick}>
          <Retweet retweeted={retweeted} />
        </div>
        <div
          onClick={handleHeartClick}
          className="tweet-like--container">
          <Heart hearted={hearted} />
          <div>
            {heartCount > 0 ? <span>{heartCount}</span> : <span></span>}
          </div>
        </div>
        <LinkTweet />


      </div>
    </div>
  )
}
export default TweetPanelComment;
