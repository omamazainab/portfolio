import React from 'react'
import NCLAB from '../images/nclab.png'
import ShoeShop from '../images/shoeshop101.png'
import STYLEEE from '../images/styleee.png'
import ExpenseTracker from '../images/expensetracker.png'
import TraCOVID from '../images/TraCOVID.png'
import FlexPanel from '../images/flexpanel.png'
import muscicKit from '../images/music kit.png'
import RedQueen from '../images/redQueen.png'
import Left from '../images/leftarrow.png'

const MyWork = () => {

    // document.getElementById("card1").addEventListener("mouseover", function (event) {
    //     console.log('called on hover'); //just to make sure the function is getting called   


    // }, false);

    return (
        <div className="container mx-auto my-5 py-5" id="myWork" >
            <div className="row my-5">

                <div className="col-lg-3 mx-auto" id="" data-aos="zoom-in-right">

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={NCLAB} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="https://nclab.neduet.edu.pk/" style={{ color: 'white' }}>view website</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3  mx-auto" id="" data-aos="zoom-in">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={ShoeShop} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="http://shoeshop101.surge.sh/" style={{ color: 'white' }}>view website</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 mx-auto " id="" data-aos="zoom-in-left">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={STYLEEE} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="https://styleee-style-forward.web.app/" style={{ color: 'white' }}>view website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5">

                <div className="col-lg-3 mx-auto" id="" data-aos="zoom-in-right">

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={ExpenseTracker} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="http://expense-tracker-app-omama.surge.sh/" style={{ color: 'white' }}>view website</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3  mx-auto" id="" data-aos="zoom-in">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={TraCOVID} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="http://shoeshop101.surge.sh/" style={{ color: 'white' }}>view website</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 mx-auto " id="" data-aos="zoom-in-left">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={muscicKit} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="https://js-and-css-music-kit.web.app/" style={{ color: 'white' }}>view website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5">

                <div className="col-lg-3 mx-auto" id="" data-aos="zoom-in-right">

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={RedQueen} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="http://red-queen_race-omamazainab.surge.sh/" style={{ color: 'white' }}>view website</a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <div className="col-lg-3  mx-auto" id="" data-aos="zoom-in">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={TraCOVID} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="http://shoeshop101.surge.sh/" style={{ color: 'white' }}>view website</a>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="col-lg-3 mx-auto " id="" data-aos="zoom-in-left">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={FlexPanel} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div class="flip-card-back">
                                <a href="https://flex-panels-image-galler-58b1c.web.app" style={{ color: 'white' }}>view website</a>
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
