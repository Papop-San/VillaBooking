import React from 'react'
import Slider from '../script/Slider';

// Banner Image
import Banner1 from '../assets/images/banner-01.jpg';
import Banner2 from '../assets/images/banner-02.jpg';
import Banner3 from '../assets/images/banner-03.jpg';





function Banner() {
  const images = [
    { image: Banner1, header:"Toronto ,Canada" , details: "HURRY! GET THE BEST VILLA FOR YOU" },
    { image: Banner2,  header:"Melbourne, Australia" , details: "Be QUICK! GET THE BEST VILLA IN TOWN" },
    { image: Banner3,  header:"Miami, South Florida" , details: "ACT NOW! GET THE HIGHTEST LEVEL PENTHOUSE"  },
  ]
  return (
    <div>
      <Slider images={images}/>
    </div>
  )
}

export default Banner