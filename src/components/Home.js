import React from 'react'
import web from "../images/undraw_creative_woman_v415(1).svg"
import { NavLink } from 'react-router-dom'
import Cards from '../components/Cards'
import gallery from '../images/Investor.svg'
import portfolio from "../images/Registration.svg"
import user from "../images/User Acquisitions.svg"

function  Home() {
return (
<>
    <section id = "header" className="row d-flex align-item-center">
       <div className="container-fluid nav_bg mb-5">
           
            <div className="row">

                 <div className = "col-10 mx-auto">

                    <div className="row">

                        <div className ="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
           
       
           <h1 className= "mainHeadings">
           Find the perfect Freelancer for your business
           </h1>

            <h2 className="smallHeadings">
            Hire the best freelancers for your work, online. Millions of people use this website to turn their ideas into reality.
            </h2>
    

            <div className = "mt-3">
                <NavLink to = "/explore" className = "btn1 btn-primary btn-lg"> Explore Now </NavLink>
            </div>

                        </div>

            <div className = "col-lg-6 order-1 order-lg-2 header-img">
            <img src={web} className = "img-fluid" alt= "home img"/>
            </div>
            
                    </div>
                           
                </div>
            
                    <div className = "row container-fluid d-flex justify-content-center">
                        <div className="row">
                        <div>
                            <h1 className= "mainHeadings"> Need something done? </h1>
                        </div>
                            <div className = "col-md-4">
                                <Cards 
                                imgsrc = {portfolio}
                                title = "Browse portfolios"
                                para = "Find professionals you can trust by browsing their samples."
                                />
                            </div>

                            <div className = "col-md-4">
                                <Cards
                                imgsrc = {user}
                                title = "Choose freelancers"
                                para = "Whatever your needs, there will be a freelancer to get it done."
                                />
                            </div>

                            <div className = "col-md-4">
                                <Cards
                                imgsrc = {gallery}
                                title = "Hire them"
                                para = "Hire our handpick number of freelancers for your job."
                                />
                            </div>
                            
                            <div className = "col-2 mx-auto">
                            <div className = "row mr-auto">
                            <NavLink to = "/contact" className = "btn1 btn-primary btn-lg"> Contact Now </NavLink>
                            </div>
                            </div>

                        </div>
                        
                        </div>       
                            </div>         
             
</div>

    </section> 
 </>
     )
}

export default Home

