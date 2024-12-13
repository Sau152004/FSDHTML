import React, { useEffect, useState } from 'react' // for teplete rfce

function UseEffectWork(){
    const[count,setCount]=useState(10);
    const[ pointer ,setPointer]=useState(100)

    function doIncrement(){
        setCount(count+20)
    }

    function doPointer(){
        setPointer(pointer-10)
    }
    useEffect(()=>{
        console.log("Component is render using count" +count);
        console.log("Component is render using pointer"+pointer)
    },[count,pointer])  //blank array dependencies
    return(
        // <div>UseEffectWork</div>
        <div>
            <div>
                count values:{count}
                <br /><br/>
                pointer values:{pointer}
            </div>
            <div>
                <button onClick={doIncrement}>Increment</button>
                <button onClick={doPointer}>Pointer</button>
            </div>
        </div>
    )
}
export default UseEffectWork