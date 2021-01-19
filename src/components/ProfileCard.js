import React from 'react'
import {NavLink} from 'react-router-dom'

function ProfileCard(props) {
    return (
<>
<div className= "custom">
                 <div className = "card text-center"> 
                <div className ="overflow"> 
                                <img src={props.imgsrc} className="photo" alt={props.imgsrc}  />
                                
                                    <div className="card-body">
                                    <h1 class="card-title">{props.name}</h1>
                                        <h2 className="card-text">{props.profession}</h2>
                                        <NavLink to = {props.NavLink} className = "btn1 btn-primary btn-lg"> Hire Now </NavLink>
                                    </div>
                          </div> 
                      </div>                                                   
                      </div>               
            
</>
    )
}

export default ProfileCard