import React, {useEffect, useState, useRef} from 'react';
import Demo from "../../Images/Images/demo.png";
import Pre from "../../Images/arrows/prev.png";
import Next from "../../Images/arrows/next.png";

const Home = () => {
  const slider = useRef();
  const arr = [Demo, Demo, Demo, Demo];
  const [disableleft, setDisableleft] = useState(true);
  const [disableright, setDisableright] = useState(false);
  const [x, setX] = useState(0);
  const handleLeft = (e) => {
    setX(x+100)
    if(x===0){
      setDisableleft(false)
    }
  }
  const handleRight = (e) => {
  if(x===303){
    setDisableright(true)
  }

  if(x===-100){
    setX(x-102)
  }
  else{
    setX(x - 100)
  }
  }


  return (
    <div className="home-container">
      <div className="blue-bg-container"/>
      <div className="carousel-container">
        <div className="carousel">
          {/* <div className="slider" style={{transform:`translateX(${x}%)`}}>
            <img src={Demo} alt="..."/>
            <figcaption>Make the world a better<br/>
              place with camera</figcaption>
          </div>
          <div className="slider" style={{transform:`translateX(${x})`}}>
            <img src={Demo} alt="..."/>
            <figcaption>Make the world a better<br/>
              place with camera</figcaption>
          </div>
          <div className="slider" style={{transform:`translateX(${x})`}}>
            <img src={Demo} alt="..."/>
            <figcaption>Make the world a better<br/>
              place with camera</figcaption>
          </div>
          <div className="slider" style={{transform:`translateX(${x})`}}>
            <img src={Demo} alt="..."/>
            <figcaption>Make the world a better<br/>
              place with camera</figcaption>
          </div> */}
          {
            arr.map((src,index)=>(
            <div className="slider" id={index+1} key={index+1} ref={slider} style={{transform:`translateX(${x ? x : 0}%)`}}>
            <img src={src} alt="..."/>
            <figcaption>Make the world a better<br/>
              place with camera</figcaption>
          </div>
            ))
          }
        </div>
        <div className="carousel-functions">
          <button className="button" onClick={handleLeft} disabled={disableleft}><img src={Pre}/></button>
          {/* <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i> */}
          {
            arr.map((data,index)=>(
              <span>{index+1}</span>
            ))
          }
          <button className="button" onClick={handleRight} disabled={disableright}><img src={Next}/></button>
        </div>
      </div>
    </div>
  )
}

export default Home
