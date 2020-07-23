import React from 'react'
import OmamaImage from '../images/Omama Zainab.jpeg'
import Right from '../images/rightarrow.png'
import Left from '../images/leftarrow.png'

import AOS from 'aos';

const AboutMe = () => {

    
    AOS.init();
   
    

    return (
        <div className="container mx-auto my-5" id="aboutme">
            <div className="row" >
                <div className="col-md-6 my-5" data-aos="fade-down" >
                    <h2 className="my-5 heading ">
                        About Me
                    </h2>
                        <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse a necessitatibus suscipit alias.
                    Labore mollitia sapiente accusamus natus eligendi sequi possimus ipsa veniam, commodi molestias
                    esse doloribus magnam quisquam error ex quam pariatur nobis soluta iusto?
                    Iste laborum magnam, doloremque alias omnis, dicta quo consectetur corporis veritatis odit non.
                    Odio quis nostrum sunt nesciunt impedit optio quidem delectus possimus vero nisi quia, suscipit
                    minima recusandae ex, doloribus accusamus, fugit libero ratione. Expedita ea dolore soluta id
                   
                    
                        </p>
                    
                    
                </div>
                <div className="col-md-6 my-5 " style={{ textAlign: 'center' }} data-aos="flip-left">
                    <img src={OmamaImage} alt="me" className="img-thumbnail"  />
                </div>
            </div>
            <div className="row">
                <a href="#header" className="mx-auto">
                    <img src={Left} alt="back"  />
                </a>
                <a href="#proects" className="mx-auto">
                    <img src={Right} alt="forward" />
                </a>
            </div>
        </div>
    )
}

export default AboutMe
