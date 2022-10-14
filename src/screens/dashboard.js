import React from "react";
import { Route, Routes } from "react-router-dom"
import Feedback from "./dashboard screens/feedback"
import Messages from "./dashboard screens/messages"
import Notification from "./dashboard screens/notification"

function Dashboard(){

    return(
        <>
        <h1>Dashboard</h1>
        <Routes>
            <Route path='messages' element={<Messages />} />
            <Route path='feedback' element={<Feedback />} />
            <Route path='notification' element={<Notification />} />
        </Routes>
        </>
    )
}
export default Dashboard