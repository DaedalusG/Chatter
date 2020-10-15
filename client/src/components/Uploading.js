import React from 'react';
import S3FileUpload from 'react-s3';
// import { REACT_APP_BUCKETNAME } from '../config'

const Uploading = () => {
  console.log("env", process.env.REACT_APP_BUCKETNAME)

  const config = {
    // bucketName: 'chatter-bucket-2',
    bucketName: process.env.REACT_APP_BUCKETNAME,
    region: 'us-west-2',
    accessKeyId: process.env.REACT_APP_ACCESSKEYID,
    secretAccessKey: process.env.REACT_APP_SECRETACCESSKEY
  }

  const upload = (e) => {
    S3FileUpload.uploadFile(e.target.files[0], config)
    .then((data) => {
      console.log(data.location)
    })
    .catch((err) => {
      alert(err)
    })
  }

  return (
    <> 
      <input className={"uploading"} type="file" onChange={upload} />
    </>

  )
}
export default Uploading;
