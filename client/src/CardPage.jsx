import React from "react";

export const CardPage = () => {
    // const { email, setEmail } = useState('');
    // const { pass, setPass } = useState('');
    // const { name, setName } = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(email);
    // }

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
        </div>
    );
}