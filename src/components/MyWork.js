import React from 'react'
import Right from '../images/nclab.png'
import Left from '../images/leftarrow.png'

const MyWork = () => {

    // document.getElementById("card1").addEventListener("mouseover", function (event) {
    //     console.log('called on hover'); //just to make sure the function is getting called   


    // }, false);

    return (
        <div className="container mx-auto my-5 py-5" id="myWork" >
            <div className="row my-5">

                <div className="col-md-3 mx-auto" id="" data-aos="zoom-in-right">

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={Right} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="https://nclab.neduet.edu.pk/" style={{ color: 'black' }}>view website</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-md-3  mx-auto" id="" data-aos="zoom-in">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={Right} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="https://nclab.neduet.edu.pk/" style={{ color: 'black' }}>view website</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mx-auto " id="" data-aos="zoom-in-left">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={Right} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="https://nclab.neduet.edu.pk/" style={{ color: 'black' }}>view website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <a href="#aboutme" className="mx-auto">
                    <img src={Left} alt="back" />
                </a>
                {/* <a href="#" className="mx-auto">
                    <img src={Right} alt="forward" />
                </a> */}
            </div>
        </div>
    )
}

export default MyWork
