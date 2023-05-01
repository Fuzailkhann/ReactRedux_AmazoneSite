import React from 'react'

function banner() {
  return (
    <div>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full  h-[300px]">
    <img src="https://m.media-amazon.com/images/I/71G8OEMFW0L._SX3000_.jpg" alt='image1' className="w-full h-[300px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full  h-[300px]">
    <img src="https://m.media-amazon.com/images/I/615Hmq2WGEL._SX3000_.jpg" alt='image2' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full  h-[300px]">
    <img src="https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg " alt='image3'  className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[300px]">
    <img src="https://m.media-amazon.com/images/I/51O45Sl0WLL._SX3000_.jpg" alt='image4' className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default banner
