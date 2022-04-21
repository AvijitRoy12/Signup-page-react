import React, {useState} from "react";

function Form() {

    const [fName, setFname] = useState("");
    const [email, setEmail] = useState("");

    function updateFname(event) {
        const firstName = event.target.value;
        setFname(firstName)
    }

    function updateEmail(event1) {
        const eMail = event1.target.value;
        setFname(eMail)
    }

    return (
        <form className="form">
            <h1>Hello {fName}</h1>
            <p>{email}</p>
            <input type="text" onChange={updateFname} placeholder="Username" value={fName}/>
            <input type="text" onChange={updateEmail} placeholder="Email" value={email}/>
            <input type="text" placeholder="Password"/>
            <input type="text" placeholder="Confirm Password"/>
            <button type="submit">Register</button>
        </form>
    );
}

export default Form;