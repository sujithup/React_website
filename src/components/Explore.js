import React, { useState} from "react";
import ProfileCard from './ProfileCard';
import javadev from '../images/java.jpg'

const Explore = () => {

  const [input, setInput] = useState("");
  let profile = [
    { name: "Sujith UP", profession: "Designer", NavLink: "/first" },
    { name: "Satish NS", profession: "Python Developer",NavLink: "/second" },
    { name: "Nagraj K", profession: "Java Developer", NavLink: "/third" },
    { name: "Girish M", profession: "Game Developer", NavLink: "/fourth" },
    { name: "Shashank N", profession: "Marketing Executive", NavLink: "/fifth" },
    { name: "Krishna R", profession: "Digital Artist", NavLink: "/sixth" },
    { name: "Arjun SN", profession: "Flutter App Developer", NavLink: "/seventh" },
    { name: "Harish Gowda", profession: "Ebiz", NavLink: "/eight" },
    { name: "Rahul V", profession: "Frontend Developer", NavLink: "/ninth" },
    { name: "Manoj MU", profession: "Youtuber", NavLink: "/tenth" },
    { name: "Ruthvik Bhat", profession: "Database Administrator", NavLink: "/eleventh" },
    { name: "Gagan Raj", profession: "Backend Developer", NavLink: "/twelth" },
  ];

  const handleChange = (e) =>
  {
      e.preventDefault();
      setInput(e.target.value);
      
  };

    if(input.length > 0){
      profile = profile.filter((i) => {
          return i.profession.toLowerCase().match(input);
      });

    }

    return(
            <div className= "row ">
                <div class="column ">
                
                <input type="text" className = "form-control col-md-3 mx-auto"
                placeholder = "Search"
                onChange = {handleChange}
                value = {input} />
                
                
                {
                    profile.map((player, index) =>
                    {
                        return(
                        //    <div className="container-fluid d-flex justify-content-center">
                                <div className="container-fluid column col-md-4" key={index}>
                                    {/* <ul> <li> */}
                                    <ProfileCard
                                    imgsrc = {javadev}
                                    name = {player.name}
                                    profession = {player.profession}
                                    NavLink = {player.NavLink}
                                />
                                     - 
                                     {/* </li> </ul> */}
                                </div>
                               
                             );
                     }) }
             </div>
             </div>
             
            );

  
};

export default Explore;
