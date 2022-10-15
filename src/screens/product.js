import React from "react";
import { Route, Routes, Link} from "react-router-dom"
// import Feedback from "./dashboard screens/feedback"
// import Messages from "./dashboard screens/messages"
// import Notification from "./dashboard screens/notification"

function product(){
    return(
        <>
  <h1>product</h1>


            <Link to='/dashboard/messages'>Messages</Link>
            <Link to='/dashboard/feedback'>Feedback</Link>
            <Link to='/dashboard/notification'>Notification</Link>
    
        {/* <Routes>
            <Route path='messages' element={<Messages />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='notification' element={<Notification />} />
        </Routes> */}
    
       


        </>

    )
}

export default product

