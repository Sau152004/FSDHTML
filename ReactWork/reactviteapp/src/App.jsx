import React from 'react'
import Student from './Student'
                                       //part of businees logic
function App() {
  return (
    <div>
      <div>
        <h2 style={{color:'blue'}}>Hello React JS</h2>
        <div>
           <Student name="Saurabh"  roll="145"  college="ABESEC"/>          {/* way to use component */}
        </div>
      </div>
    </div>
  )
}

export default App

