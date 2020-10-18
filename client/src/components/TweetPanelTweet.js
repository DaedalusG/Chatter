import React, { useState, useEffect } from 'react';
import { API_URL } from '../config'
import CommentBubbleTweet from '../images/CommentBubbleTweet';
import RetweetTweet from '../images/RetweetTweet';
import HeartTweet from '../images/HeartTweet';
import Heart from '../images/Heart';
import LinkTweetTweet from '../images/LinkTweetTweet';
import DownCarrot from '../images/DownCarrot';
import TrashCan from '../images/TrashCan';

const token = window.localStorage.getItem('auth_token')

const TweetPanelTweet = (props) => {
  
  const [hearted, setHearted] = useState("heart");
  const [heartCount, setHeartCount] = useState(0);
  const [retweeted, setRetweeted] = useState("retweet");
  const [retweetCount, setRetweetCount] = useState(0);

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
            tweetId: `${props.tweetState.id}`
          }),
        });
        if (!response.ok) {
          // console.log("createLike response failure");
        } else {
          // console.log("createLike response success");
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
            tweetId: `${props.tweetState.id}`
          }),
        });
        if (!response.ok) {
          // console.log("destroyLike response failure");
        } else {
          // console.log("destroyLike response success");
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
      if (props.tweetState.id === undefined) return
      const response = await fetch(`${API_URL}/likes/${props.tweetState.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
      if (!response.ok) {
        // console.log("getHeartedCount response failed")
      } else {
        const json = await response.json();
        setHeartCount(json.count)
      }
    }
    const getUserHearted = async () => {
      if (props.props.id === undefined) return
      const response = await fetch(

        `${API_URL}/likes/${props.user.id}/${props.tweetState.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
      )
      if (!response.ok) {
        // console.log("getUserHearted response failed")
      } else {
        const json = await response.json();
        // console.log("Here's Jason --> ", json)
        if (json.like !== null) {
          // console.log("JASON! --> ", json.like)
          setHearted("heartOn")
        }
      }
    }
    getHeartedCount();
    // getUserHearted(); -- commented out for dev
  }, [])

  const [deleteModalState, setDeleteModalState] = useState(false);

  function toggleModal(){
    setDeleteModalState(!deleteModalState)
  }

  const destroyTweet = async () => {
    const response = await fetch(`${API_URL}/tweets/delete`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        userId: `${props.user.id}`,
        tweetId: `${props.tweetState.id}`
      }),
    });
    if (!response.ok) {
      console.log("destroyTweet response failure");
    } else {
      console.log("destroyTweet response success");
      props.centerPanelHome();
    }
  }


  return (
    <div className={"tweet-c"}>

      {deleteModalState === true ?  <div className={"tweet-c__modal"} onClick={destroyTweet}>
        <TrashCan/>
        <span>delete</span>
      </div>
      : <></>
      }
      {/* <span className={"tweet-c__name"}>{props}</span> */}
      <div className={"tweet-c__top"}>
        <img className={"user__profile-pic"} alt={""} src={props.tweetState.user ? props.tweetState.user.profile_pic : ""} ></img>
        <div className={"tweet-c__user-name"} >
          <div className={"tweet-p-t-c__user-name__names"} >
            <p className={"tweet-p-t-c__user-name__names__top"}>{`${props.tweetState.user ? props.tweetState.user.firstname : ""} ${props.tweetState.user ? props.tweetState.user.lastname : ""}`}</p>
            <p className={"tweet-p-t-c__user-name__names__bottom"}>@{props.tweetState.user ? props.tweetState.user.username : ""}</p>
          </div>
          <div className={"down-carrot-c"} onClick={toggleModal}>
            <DownCarrot />
          </div>
        </div>
      </div>
      <div className="tweet-c__comment" onClick={() => {
        // props.tweetInfoFunc(props.props.id)
        // props.centerPanelTweetPanel()
      }}
      >
        <p className={"tweet-p-t__comment"}>{props.tweetState.content}</p>
      </div>
      <img className={"tweet-pic"} alt={""} src={props.tweetState.media} ></img>
      <div className={"tweet-c__svg-c"} >
        <CommentBubbleTweet />
        {props.tweetState.replies ? <span className={"tweet-panel-tweet-comment-count"}>{props.tweetState.replies.length}</span> : <span></span>}
        {/* {commentCount > 0 ? <span className={"comment-count"}>{commentCount}</span> : <span></span>} */}
        {/* <div onClick={handleRetweetClick}>
          <RetweetTweet retweeted={retweeted} />
        </div> */}
        <div
          className="tweet-panel-tweet-like--container"
          onClick={handleHeartClick}>
          <HeartTweet hearted={hearted} />
          {heartCount > 0 ? <span>{heartCount}</span> : <span></span>}
        </div>
          {/* <LinkTweetTweet /> */}
      </div>
    </div>
  )
}
export default TweetPanelTweet;
