import React, { useState, useEffect } from 'react';
import { API_URL } from '../config'
import CommentBubble from '../images/CommentBubble';
import Retweet from '../images/Retweet';
import Heart from '../images/Heart';
import LinkTweet from '../images/LinkTweet';
import DownCarrot from '../images/DownCarrot';
import ReplyModal from './ReplyModal';
import TrashCan from '../images/TrashCan';
import CenterPanelComment from './CenterPanelComment';

const token = window.localStorage.getItem('auth_token')

const Tweet = (props) => {
  const [hearted, setHearted] = useState("heart");
  const [heartCount, setHeartCount] = useState(0);
  const [retweeted, setRetweeted] = useState("retweet");
  const [replyModal, setReplyModal] = useState(false)
  const [deleteModalState, setDeleteModalState] = useState(false);
  
  
  // const [retweetCount, setRetweetCount] = useState(0);

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
            tweetId: `${props.props.id}`
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
      if (props.props.id === undefined) return
      const response = await fetch(`${API_URL}/likes/${props.props.id}`, {
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

        `${API_URL}/likes/${props.user.id}/${props.props.id}`, {
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

  const handleReplyClick = () => {
    let toggleReply = !replyModal;
    setReplyModal(toggleReply)
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
        tweetId: `${props.props.id}`
      }),
    });
    if (!response.ok) {
      // console.log("destroyTweet response failure");
    } else {
      // console.log("destroyTweet response success");
      window.location.reload()
    }
  }

  function toggleModal() {
    setDeleteModalState(!deleteModalState)
  }
  // -------------------------------------------------------
  const [tweetCommentState, setTweetCommentState] = useState([])

  useEffect(() => {

    const token = window.localStorage.getItem('auth_token')
    const tweetReplies = async () => {
      const response = await fetch(`${API_URL}/tweets/tweet/${props.props.id}`, {
        method: "GET",
        mode: "cors",
        headers: { "Authorization": `Bearer ${token}` },
      })
      if (!response) console.log("response FAIL")
      else {
        const json = await response.json()
        setTweetCommentState(json)
      }
    }
    tweetReplies()
  }, [])



  return (
    <div className={"tweet-c"}>
      <ReplyModal tweet_id={props.props.id} replyModal={replyModal} user={props.user} tweet={props.props} handleReplyClick={handleReplyClick} />
      {/* <span className={"tweet-c__name"}>{props.props.name}</span> */}
      <div className={"tweet-c__top"} >
        <img className={"user__profile-pic"} alt={""} src={props.props.user.profile_pic} onClick={() => props.centerPanelProfile(props.props.user)}></img>
        <div className={"tweet-c__user-name"} >

          <p className={"tweet-c__user-name__names__top"}>{`${props.props.user ? props.props.user.firstname : ""} ${props.props.user ? props.props.user.lastname : ""}`}</p>
          <p className={"tweet-c__user-name__names__bottom"}>@{props.props.user ? props.props.user.username : ""}</p>

          <div className={"down-carrot-c"} onClick={toggleModal}>
            {deleteModalState === true ? <div className={"tweet-tweet-c__modal"} onClick={destroyTweet}>
              <TrashCan />
              <span>delete</span>
            </div>
              : <></>
            }
            <DownCarrot />
          </div>
        </div>
      </div>
      <div className="tweet-c__comment" onClick={() => { props.tweetInfoFunc(props.props.id); props.centerPanelTweetPanel() }}>
        <p className="tweet-text">{props.props.content}</p>
      </div>
      <img className={"tweet-pic"} alt={""} src={props.props.media} onClick={() => { props.tweetInfoFunc(props.props.id); props.centerPanelTweetPanel() }}></img>
      <div className={"tweet-c__svg-c"} >
        <div onClick={handleReplyClick}>
          <CommentBubble />
        </div>
        {/* <div onClick={handleRetweetClick}>
          <Retweet retweeted={retweeted} />
        </div> */}

        <div
          className="tweet-like--container"
          onClick={handleHeartClick}>
          <Heart hearted={hearted} />
          {heartCount > 0 ? <span>{heartCount}</span> : <span></span>}
        </div>
        {/* <LinkTweet /> */}

      </div>
      <div className={"tweet-comment-c"} >
        {tweetCommentState.replies ?
          tweetCommentState.replies.map(replyContent => (<CenterPanelComment user={props.user} reply={replyContent} />))
          : null
        }
      </div>
    </div>
  )
}
export default Tweet;






