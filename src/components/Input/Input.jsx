import React from 'react'
import "./input.scss"
import Attach from "../../images/attach.png"

const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something' />
        <div className="send">
            {/* <img src="" alt="" /> */}
            <input type="file" name="" id="file" style={{display:"none"}} />
            <label htmlFor="file">
                <img id='attach' src={Attach} alt="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input