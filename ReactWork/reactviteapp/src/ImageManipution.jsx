import React, { useState }  from "react";
import saurabh from './saurabh.jpg';
import './imgman.css';
function ImageManipulation(){
    const[height,setHeight]=useState(100);
    const[width,setWidth]=useState(100);
    const[angle,setAngle]=useState(30);
    const[red,setRed]=useState();
    const[green,setGreen]=useState();
    const[blue,setBlue]=useState();

    function enhanceHeight(){
        setHeight(height+20);
    }

    function enhanceWidth(){
        setWidth(width+20);
    }

    function dorotate(){
        setAngle(angle+30);

    }

    function changeColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);

    }
    return(
        <div className="container">
            <div  style={{ backgroundColor:`RGB(${red},${green},${blue})`,marginTop:'100px',marginLeft:'200px',height:'200px',width:'200px',border:'2px solid red'}}>
            <div>
                <img src={saurabh} height={height} width={width} style={{transform:`rotate(${angle}deg)`}} alt='saurabh image'/>
                            
                            
            </div></div>

            <div style={{border: '2px solid red', margin:'100px',paddingLeft:'60px'}} >

                <button onClick={enhanceHeight} style={{color:'white',backgroundColor:'green',border:'none',borderRadius:'2px'}}>Enhance Height</button>
                &nbsp; &nbsp; &nbsp; &nbsp; 
                <button onClick={enhanceWidth} style={{color:'white',backgroundColor:'green',border:'none',borderRadius:'2px'}}>Enhance Width</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={changeColor} style={{color:'white',backgroundColor:'green',border:'none',borderRadius:'2px'}}> ColorChange</button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <button onClick={dorotate}style={{color:'white',backgroundColor:'green',border:'none',borderRadius: '2px'}}>Rotate</button>
            </div>

        </div>
    )
}
export default ImageManipulation