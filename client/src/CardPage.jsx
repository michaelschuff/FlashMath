import React from "react";

export const CardPage = () => {
    return (
        <div className="top-bar">
            <div class="site-logo">
                <img src="favicon.ico" class="logo-img" />
                <text>FlashMath</text>
            </div>
            <div class="wrap">
                <div class="search-bar">
                    <input type="text" class="searchTerm" placeholder="Search set"></input>
                    <button type="submit" class="searchButton">
                        <img src="https://cdn-icons-png.flaticon.com/512/10905/10905219.png" class="search-img" border="0" />
                    </button>
                </div>
            </div>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" class="hamburger" />
        </div>
    );
}