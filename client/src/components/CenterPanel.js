import React, { useEffect, useState } from 'react';
import Sparkles from '../images/Sparkles';
import Landcape from '../images/Landscape';
import GifBox from '../images/GifBox';
import PollBox from '../images/PollBox';
import SmileyFace from '../images/SileyFace';
import Calendar from '../images/Calendar'
import Tweet from './Tweet';
import skelator from '../images/skelator.png';
import { API_URL } from '../config';
import S3FileUpload from 'react-s3';






const CenterPanel = (props) => {

  const [tweetImgState, setTweetImgState] = useState();

  const [tweetState, setTweetState] = useState([]);

  useEffect(() => {

    //TODO fix backend route to get tweets from following

    fetch(`${API_URL}/tweets/`)
      .then(res => res.json())
      .then(data => {
        setTweetState(data.reverse())
      }
      )
  }, [])


  const postFunction = async () => {
    const tweetContent = document.getElementsByName("tweet-textarea")[0].innerText
    const tweetData = { content: tweetContent, user_id: 1, media: `${tweetImgState ? tweetImgState : "not making it" }` }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tweetData),
      redirect: 'follow'
    }

    fetch(`${API_URL}/tweets/post`, options)
      .then(res => res.text())
      .then(data => {
        document.getElementsByName("tweet-textarea")[0].innerHTML = ""
        console.log(data)
      })
      .catch(e => console.log('error posting your tweet', e))
      .then(window.location.reload())


  }
  const profileBubbleAlt = skelator;

  // ----------------upload-tweet-image--------------
  const config = {
    bucketName: process.env.REACT_APP_BUCKETNAME,
    region: 'us-west-2',
    accessKeyId: process.env.REACT_APP_ACCESSKEYID,
    secretAccessKey: process.env.REACT_APP_SECRETACCESSKEY
  }

  const uploadTweetImage = (e) => {

    S3FileUpload.uploadFile(e.target.files[0], config)
      .then((data) => {
        const tweetSpan = document.getElementsByName('tweet-textarea') 
        tweetSpan[0].innerHTML = `${data.location}`;
        setTweetImgState(data.location);
        console.log("tweetSpan", tweetSpan)
      })
      .catch((err) => {
        alert(err)
      })

  }
  // ------------------------------------------------

  

  return (
    <>
      <div id={"center-panel"}>
        <div id={"center-panel__nav"}>
          <span>Home</span>
          <Sparkles></Sparkles>
        </div>
        <div id={"center-panel__below-nav"} >
          <div className="center-panel__below-nav__scroll" >
            <div className={"below-nav-section"} >
              <img id={"profile-bubble-2"} alt={""} src={props.user.profile_pic} onClick={() => props.centerPanelProfile(props.user)}></img>
              <div className={"profile-bubble-2"} ></div>
              {/* </div> */}
              <span name="tweet-textarea" className="textarea" role="textbox" resize="none" contentEditable=""></span>
            </div>
            <div className={"below-nav-section-2"} >
              <Landcape></Landcape>
              <input className={"uploadingTweet"} type="file" onChange={uploadTweetImage} />
              <GifBox></GifBox>
              <PollBox></PollBox>
              <SmileyFace></SmileyFace>
              <Calendar></Calendar>
              <div onClick={postFunction} id={"tweet-button-2"}>
                <span>Tweet</span>
              </div>
            </div>
            <div className="all-tweets-c">
              

              {tweetState ?
                tweetState.map((tweet) => (
                  <Tweet
                    props={tweet}
                    centerPanelProfile={props.centerPanelProfile}
                    tweetInfoFunc={props.tweetInfoFunc}
                    user={props.user}
                    setTweetIdsState={props.setTweetIdsState}
                    centerPanelTweetPanel={props.centerPanelTweetPanel}
                  />)
                )

                : null
              }
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default CenterPanel;
