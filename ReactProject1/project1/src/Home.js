import React from "react";
import axios from "axios";

function Home() {

    getUsersData = () => {
        axios.get('https://akademia108.pl/api/social-app/post/latest',
            { mode: cors }),
            then(res => {
                console.log(res)
            })
    }

    return (
        <div className="main-div">

        </div>
    );

}

export default Home;