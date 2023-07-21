import React from "react";

export const CardPage = () => {
    return (
        <div class="cardpage">
            <div class="top-bar">
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
                <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" class="menu-icon" />
            </div>
            <div class="cardview">
                <div class="card">
                    Vocabulary
                </div>
                <div class="arrows-container">
                    <button><i class="arrow left"></i></button>
                    <button class="shuffle-button">Shuffle</button>
                    <button><i class="arrow right"></i></button>  
                </div>
            </div>
            <div class="bottom-bar">
                <button class="share-button"> 
                    <img src="https://w7.pngwing.com/pngs/176/664/png-transparent-share-icon-computer-icons-button-button-angle-text-monochrome.png" class="share-icon"></img>
                </button>
            </div>
        </div>
        
    );
}