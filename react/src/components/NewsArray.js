import React from 'react';
import pic1 from '../images/newsImages/1.jpg'
import pic2 from '../images/newsImages/2.jpg'
import pic3 from '../images/newsImages/3.jpg'
import pic4 from '../images/newsImages/4.jpg'
import pic5 from '../images/newsImages/5.jpg'
import pic6 from '../images/newsImages/6.jpg'
import pic7 from '../images/newsImages/7.jpg'
import pic8 from '../images/newsImages/8.jpg'
import pic9 from '../images/newsImages/9.jpg'
import pic10 from '../images/newsImages/10.jpg'
import pic11 from '../images/newsImages/11.jpg'
import pic12 from '../images/newsImages/12.jpg'
import pic13 from '../images/newsImages/13.jpg'
import pic14 from '../images/newsImages/14.jpg'
import pic15 from '../images/newsImages/15.jpg'
import pic16 from '../images/newsImages/16.jpg'
import pic17 from '../images/newsImages/17.jpg'
import pic18 from '../images/newsImages/18.jpg'
import pic19 from '../images/newsImages/19.jpg'
import pic20 from '../images/newsImages/20.jpg'
import pic21 from '../images/newsImages/21.jpg'
import pic22 from '../images/newsImages/22.jpg'
import pic23 from '../images/newsImages/23.jpg'
import pic24 from '../images/newsImages/24.jpg'
import pic25 from '../images/newsImages/25.jpg'

const NewsArray =()=>{
    const picArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25,];
    function getRandomInt(max) {
      return picArray[(Math.floor(Math.random() * Math.floor(max)))];
    }
    let randomPic = getRandomInt(25);
  return(
    <img className={"news-pic"} alt={""} src={`${randomPic}`}></img> 
  )

}
export default NewsArray;