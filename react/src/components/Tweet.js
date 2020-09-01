import React from 'react';

const Tweet = (props)=>{



  return(
    <div className={"tweet-c"}>
      {/* <span className={"tweet-c__name"}>{props.props.name}</span> */}
      <div className={"tweet-c__top"}>
          <img className={"user__profile-pic"} alt={""} src={props.props.user.profile_pic} ></img>
          <div className={"tweet-c__user-name"} >
            <p>{`${props.props.user.firstname} ${props.props.user.lastname}`}</p>
            <p>{props.props.user.username}</p>
        </div>
      </div>
      <div className = "tweet-c__comment" >
        <p>{props.props.content}</p>
      </div>
      

      <img className={"tweet-pic"} alt={""} src={props.props.media} ></img>
    </div>
  )
}
export default Tweet;