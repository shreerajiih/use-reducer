import React from 'react'
import { useLocation ,useHistory} from 'react-router-dom'

const UseLocationCompo = () => {
    const location = useLocation();
    const history = useHistory();
    console.log("Location is",location);
  
    console.log("Path is ",location.pathname);
    console.log("qUERY sTRING IS ",location.search);
  
    console.log("Count is ", count)

    // history.goBack();  ----> used to go back path
    // history.push("/");  ----> used to go to home page
  
  return (
    <div>
      <button onClick={()=>history.goBack()}>Go Back</button>
    </div>
  )
}

export default UseLocationCompo
