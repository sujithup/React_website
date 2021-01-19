import React from 'react'
import web from "../images/friendship.svg"
import gallery from '../images/Investor.svg'


function  About() {
return (
<>
    <section id = "header" className="row d-flex align-item-center">
       <div className="container-fluid nav_bg mb-5">
           
            <div className="row">

                 <div className = "col-10 mx-auto">

                    <div className="row">

                        <div className ="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
           
       
           <h1 className= "mainHeadings">
           Welcome to the <br/> About Page
           </h1>

            <h2 className="smallHeadings">
            We are the team of talented developers <br/> for designing interesting websites.
            </h2>
    

                        </div>

            <div className = "col-lg-6 order-1 order-lg-2 header-img">
            <img src={web} className = "img-fluid" alt= "home img"/>
            </div>
            
                    </div>
                           
                </div>
            
                    <div className = "row container-fluid d-flex justify-content-center">
                        <div className="row">
                        
                            

                            

                            
                            
                            

                        </div>
                        
                        </div>       
                            </div>         
             
</div>

    </section> 
 </>
     )
}

export default About
