import React, { useState} from "react";
import "../../App.css";
import { db } from "../../firebase";

const Firstform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const [setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    
    db.collection("Girish")
      .add({
        name: name,
        email: email,
        phone: phone,
        date: date,
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
    setPhone("");
    setDate("");

};

  return (
    <div className = "row">
    <form className="form col-10 mx-auto justify-content-center" onSubmit={handleSubmit}>
      <h1 className="center">Hire Girish M! </h1>

      <label className = "labeltext">Name</label>
      <input
        type="text"
        placeholder="Name"
        pattern = "[A-Za-z]"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />


      <label className = "labeltext">Email</label>
      <input
        type = "email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

      <label className = "labeltext">Phone</label>
      <input
        type = "tel"
        pattern = "[6-9]{10}"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label className = "labeltext">Date</label>
      <input
        type = "date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button className = "btn1 btn-primary btn-lg" type="submit">
        Submit
      </button>
    </form>
    </div>
  );
};


export default Firstform