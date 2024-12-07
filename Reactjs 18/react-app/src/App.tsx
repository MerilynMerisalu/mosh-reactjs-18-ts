import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

import ListGroup from "./components/ListGroup";
import Message from "./Message"

const App = () => {
  const [isShowing, setIsShowing] = useState(false)
  return(
    <div>
      {isShowing && <Alert onClose={() => setIsShowing(false)} >My Alert</Alert> }
     <Button children="My button" color="danger"  onClick={() => { setIsShowing(true)}}>
      
     </Button>
    
  </div>
  )
  }
  
  
    
  

export default App;