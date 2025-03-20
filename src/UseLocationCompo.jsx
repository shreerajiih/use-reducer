import React from 'react'
import { useLocation } from 'react-router-dom'

const UseLocationCompo = () => {
    const location = useLocation();
    console.log("Location is",location);
  
    console.log("Path is ",location.pathname);
    console.log("qUERY sTRING IS ",location.search);
  
    console.log("Count is ", count)
  
  return (
    <div>
      
    </div>
  )
}

export default UseLocationCompo
