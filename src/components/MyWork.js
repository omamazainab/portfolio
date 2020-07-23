import React from 'react'
// import Right from '../images/rightarrow.png'
import Left from '../images/leftarrow.png'

const MyWork = () => {
    return (
        <div className="container mx-auto my-5 py-5" id="myWork" >
            <div className="row my-5">
                <div className="col-md-3 mx-auto my-5 project-card" id="card1" data-aos="zoom-in-right">
                    
                </div>
                <div className="col-md-3  mx-auto my-5 project-card" id="card2" data-aos="zoom-in">
                    
                </div>
                <div className="col-md-3  mx-auto my-5 project-card" id="card3" data-aos="zoom-in-left">
                    
                </div>
            </div>
            <div className="row">
                <a href="#aboutme" className="mx-auto">
                    <img src={Left} alt="back"  />
                </a>
                {/* <a href="#" className="mx-auto">
                    <img src={Right} alt="forward" />
                </a> */}
            </div>
        </div>
    )
}

export default MyWork
