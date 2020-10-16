import React, {useEffect, useState} from 'react';
import S3FileUpload from 'react-s3';
import { API_URL } from '../config'


const Uploading = () => {

  const config = {
    bucketName: process.env.REACT_APP_BUCKETNAME,
    region: 'us-west-2',
    accessKeyId: process.env.REACT_APP_ACCESSKEYID,
    secretAccessKey: process.env.REACT_APP_SECRETACCESSKEY
  }

  const [bannerHrefState, setBannerHrefState] = useState();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getCurrentUser = async () => {
      const token = window.localStorage.getItem('auth_token')
      const response = await fetch(`${API_URL}/users/token`, {
        method: "GET",
        mode: "cors",
        headers: { "Authorization": `Bearer ${token}` },
      })
      if (!response.ok) {
        console.log("this will never happen. you can quote me");
      } else {
        const json = await response.json();
        setUser(json);
        console.log("user is", json)
      }
    }
    getCurrentUser();
  }, [])

  const upload = (e) => {
    const changeBanner = async (uploadLocation) => {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }
      fetch(`${API_URL}/users/banner?user_id=${user.id}&href=${uploadLocation}`, options)
    }


    S3FileUpload.uploadFile(e.target.files[0], config)
    .then((data) => {
      console.log(data.location)
      setBannerHrefState(data.location)
      changeBanner(data.location)
    })
    .catch((err) => {
      alert(err)
    })
    
  }

  // const changeBanner = async () => {
  //   const options = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json'},
  //   }
  //   fetch(`https://chatter-bucket-2.s3.amazonaws.com/${bannerHrefState}`, options)
  // }


  return (
    <> 
      <input className={"uploading"} type="file" onChange={upload} />
    </>

  )
}
export default Uploading;
