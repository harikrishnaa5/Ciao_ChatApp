import React from 'react'
import Tom from "../../images/Tom Hardy.jpg"
import "./message.scss"

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Tom} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>helloooo</p>
        <img src='' alt="" />
      </div>
    </div>
  )
}

export default Message