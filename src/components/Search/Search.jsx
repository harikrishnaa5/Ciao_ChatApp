import React from "react";
import "../Sidebar/sidebar.scss";
import Tom from "../../images/Tom Hardy.jpg";

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="find a user" />
            </div>
            <div className="userChat">
                <img src={Tom} alt="" />
                <div className="userInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
};

export default Search;
