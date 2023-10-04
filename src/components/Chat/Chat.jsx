import React from 'react'
import "./chat.scss"
import Cam from "../../images/cam.png"
import Add from "../../images/addPerson.png"
import More from "../../images/more.png"
import Messages from '../Messages/Messages'
import Input from '../Input/Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img id='camIcon' src={Cam} alt="" />
          <img id='addIcon' src={Add} alt="" />
          <img id='moreIcon' src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat