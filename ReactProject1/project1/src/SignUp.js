import { useState } from "react";
import "./SignUp.css";

export default function SignUp() {

    const [fields, errors ] = useState("")
    


    return (
        <div className="signup">
            <form className="signup-form">
                <input type="text" name="username" placeholder="User Name" />
                <input type="e-mail" name="email" placeholder="E-mail" />
                <input type="password" name="password" placeholder="Password" />
                <input type="password" name="repeat-password" placeholder="Repeat Password"/>
                <button className="signupBtn">Sign Up</button>
            </form>
        </div>
    );
}