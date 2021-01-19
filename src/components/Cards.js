import React from 'react'

function Cards(props) {
    return (
<>
                 <div className = "card text-center"> 
                <div className ="overflow"> 
                                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}  />
                                
                                    <div className="card-body">
                                    <h2 class="card-title">{props.title}</h2>
                                        <p className="card-text">{props.para}</p>
                                    </div>
                          </div> 
                      </div>                                                   
                                 
            
</>
    )
}

export default Cards
