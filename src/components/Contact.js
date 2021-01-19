import React, { useState} from "react";
import "../App.css";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted!");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className = "row">
    <form className="form col-10 mx-auto justify-content-center" onSubmit={handleSubmit}>
      <h1 className="center">Contact Us </h1>

      <label className="labeltext">Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label className="labeltext">Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="labeltext">Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

<div className ="row gy-5">
      <button className = "btn1 btn-primary btn-lg"
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
      </div>
    
    </form>
    
    </div>
  );
};

export default Contact;