import React, {useEffect, useState} from 'react';
import Sparkles from '../images/Sparkles';
import Landcape from '../images/Landscape';
import GifBox from '../images/GifBox';
import PollBox from '../images/PollBox';
import SmileyFace from '../images/SileyFace';
import Calendar from '../images/Calendar'
import Tweet from './Tweet';



const CenterPanel = (props)=>{

  const [tweetState, setTweetState] = useState([])

  useEffect( () => {
    fetch('http://localhost:5000/api/tweets/')
    .then(res => res.json())
    .then(data => {
      setTweetState(data)
    })  
  },[])


  const postFunction = async () => {

      const tweetContent = document.getElementsByName("tweet-textarea")[0].innerText
      const tweetData = { content: tweetContent, user_id: 1 }
    
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tweetData),
        redirect: 'follow'
      }
      
      fetch("http://localhost:5000/api/tweets/post", options)
        .then(res => res.text())
        .then(data=> console.log(data))
        .catch(e => console.log('error posting your tweet', e))
      // let list = []
      // for( let x = 0 ; x<=60; x++){

      //   const  res = await fetch('https://loremflickr.com/json/g/640/480/all', {method: "GET", mode: "no-cors"})
      //   const data = await res.json()  
      //   list.push(data.file)

      // }

      // debugger







  }


  // const pageChangeProfilePage = () =>

  return(
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
            <span name="tweet-textarea" className="textarea" role="textbox" resize="none"  contentEditable=""></span>
          </div>
          <div className={"below-nav-section-2"} >
            <Landcape></Landcape>
            <GifBox></GifBox>
            <PollBox></PollBox>
            <SmileyFace></SmileyFace>
            <Calendar></Calendar>
            <div onClick={postFunction}  id={"tweet-button-2"}>
              <span>Tweet</span>
            </div>
          </div>
          <div className="all-tweets-c">
            { tweetState[0] ?
                tweetState.map((tweet) => <Tweet props={tweet} centerPanelTweetPanel={props.centerPanelTweetPanel}/>)           
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