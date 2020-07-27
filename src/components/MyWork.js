import React from 'react'
import NCLAB from '../images/nclab.png'
import ShoeShop from '../images/shoeshop101.png'
import STYLEEE from '../images/styleee.png'
import ExpenseTracker from '../images/expensetracker.png'
import TraCOVID from '../images/TraCOVID.png'
import FlexPanel from '../images/flexpanel.png'
import muscicKit from '../images/music kit.png'
import RedQueen from '../images/redQueen.png'
// import Left from '../images/leftarrow.png'

const MyWork = () => {

    // document.getElementById("card1").addEventListener("mouseover", function (event) {
    //     console.log('called on hover'); //just to make sure the function is getting called   


    // }, false);

    return (
        <div className="container mx-auto my-5 py-5" id="myWork" >
            <div className="row ">

                <div className="col-lg-3 mx-auto" id="" data-aos="zoom-in-right">

                    <div className="flip-card mx-auto my-5">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={NCLAB} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <div>
                                    <a href="https://nclab.neduet.edu.pk/" style={{ color: 'white', fontSize: '20px', display: 'inline-block', marginTop: '100px' }}> <i className="material-icons" style={{ color: 'white' }}>laptop</i> visit website</a>
                                </div>
                                {/* <div>
                                    <a href="" style={{ color: 'white', fontSize: '20px', display: 'inline-block' }}> <i className="fa fa-github" ></i> view code</a>
                                </div> */}

                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3  mx-auto" id="" data-aos="zoom-in">
                    <div className="flip-card mx-auto my-5">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={ShoeShop} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <div>
                                    <a href="http://shoeshop101.surge.sh/" style={{ color: 'white', fontSize: '20px', display: 'inline-block', marginTop: '100px' }}> <i className="material-icons" style={{ color: 'white' }}>laptop</i> visit website</a>
                                </div>
                                <div>
                                    <a href="https://github.com/omamazainab/shoe-shop101" style={{ color: 'white', fontSize: '20px', display: 'inline-block' }}> <i className="fa fa-github" ></i> view code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 mx-auto " id="" data-aos="zoom-in-left">
                    <div className="flip-card mx-auto my-5">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={STYLEEE} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <div>
                                    <a href="https://styleee-style-forward.web.app/" style={{ color: 'white', fontSize: '20px', display: 'inline-block', marginTop: '100px' }}> <i className="material-icons" style={{ color: 'white' }}>laptop</i> visit website</a>
                                </div>
                                <div>
                                    <a href="https://github.com/omamazainab/STYLEE-website" style={{ color: 'white', fontSize: '20px', display: 'inline-block' }}> <i className="fa fa-github" ></i> view code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ">

                <div className="col-lg-3 mx-auto" id="" data-aos="zoom-in-right">

                    <div className="flip-card mx-auto my-5">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={ExpenseTracker} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <div>
                                    <a href="http://expense-tracker-app-omama.surge.sh/" style={{ color: 'white', fontSize: '20px', display: 'inline-block', marginTop: '100px' }}> <i className="material-icons" style={{ color: 'white' }}>laptop</i> visit website</a>
                                </div>
                                <div>
                                    <a href="https://github.com/omamazainab/Expense-Tracker-react-app" style={{ color: 'white', fontSize: '20px', display: 'inline-block' }}> <i className="fa fa-github" ></i> view code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-3  mx-auto" id="" data-aos="zoom-in">
                    <div className="flip-card mx-auto my-5">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={TraCOVID} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <div>
                                    <a href="http://tracovid.surge.sh/" style={{ color: 'white', fontSize: '20px', display: 'inline-block', marginTop: '100px' }}> <i className="material-icons" style={{ color: 'white' }}>laptop</i> visit website</a>
                                </div>
                                <div>
                                    <a href="https://github.com/omamazainab/covid-19-tracker" style={{ color: 'white', fontSize: '20px', display: 'inline-block' }}> <i className="fa fa-github" ></i> view code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 mx-auto " id="" data-aos="zoom-in-left">
                    <div className="flip-card mx-auto my-5">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={muscicKit} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <div>
                                    <a href="https://js-and-css-music-kit.web.app/" style={{ color: 'white', fontSize: '20px', display: 'inline-block', marginTop: '100px' }}> <i className="material-icons" style={{ color: 'white' }}>laptop</i> visit website</a>
                                </div>
                                <div>
                                    <a href="https://github.com/omamazainab/JS-and-CSS-music-kit" style={{ color: 'white', fontSize: '20px', display: 'inline-block' }}> <i className="fa fa-github" ></i> view code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ">

                <div className="col-lg-3 mx-auto" id="" data-aos="zoom-in-right">

                    <div className="flip-card mx-auto my-5">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={RedQueen} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <div>
                                    <a href="http://red-queen_race-omamazainab.surge.sh/" style={{ color: 'white', fontSize: '20px', display: 'inline-block', marginTop: '100px' }}> <i className="material-icons" style={{ color: 'white' }}>laptop</i> visit website</a>
                                </div>
                                <div>
                                    <a href="https://github.com/omamazainab/Red-Queen-s-Race-react-hooks" style={{ color: 'white', fontSize: '20px', display: 'inline-block' }}> <i className="fa fa-github" ></i> view code</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="col-lg-3 mx-auto " id="" data-aos="zoom-in-left">
                    <div className="flip-card mx-auto my-5">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={FlexPanel} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                            </div>
                            <div className="flip-card-back">
                                <div>
                                    <a href="https://flex-panels-image-galler-58b1c.web.app" style={{ color: 'white', fontSize: '20px', display: 'inline-block', marginTop: '100px' }}> <i className="material-icons" style={{ color: 'white' }}>laptop</i> visit website</a>
                                </div>
                                <div>
                                    <a href="https://github.com/omamazainab/Flex-panels-image-gallery" style={{ color: 'white', fontSize: '20px', display: 'inline-block' }}> <i className="fa fa-github" ></i> view code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MyWork
