import React from "react";
import Tom from "../../images/Tom Hardy.jpg";
import "./chats.scss";

const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img src={Tom} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={Tom} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={Tom} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={Tom} alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    );
};

export default Chats;
