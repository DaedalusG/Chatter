import React from 'react';
import S3FileUpload from 'react-s3';

const UploadingProfile = () => {
  console.log("env", process.env.REACT_APP_BUCKETNAME)

  const config = {
    bucketName: process.env.REACT_APP_BUCKETNAME,
    region: process.env.REACT_APP_REGION,
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
      <input className={"uploading-profile"} type="file" onChange={upload} />
    </>

  )
}
export default UploadingProfile;