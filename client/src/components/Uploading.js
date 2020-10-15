import React from 'react';
import S3FileUpload from 'react-s3';

const Uploading = () => {

  const config = {
    bucketName: 'chatter-bucket-2',
    // dirName: '',
    region: 'us-west-2',
    accessKeyId: 'AKIAIGJFVKHRRGFI5NIQ',
    secretAccessKey: '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'
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
      <h3>Upload your own Images</h3>
      <input type="file" onChange={upload} />
    </>

  )
}
export default Uploading;
