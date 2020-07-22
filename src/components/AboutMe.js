import React, {useRef, useLayoutEffect} from 'react'
import Image from '../images/Omama Zainab.jpeg'
// import useWebAnimations, { slideInUp } from "@wellyshen/use-web-animations";
import AOS from 'aos';

const AboutMe = () => {

    
    AOS.init();
   
    

    return (
        <div className="container mx-auto my-5" id="aboutme">
            <div className="row" >
                <div className="col-lg-6 my-5" data-aos="fade-down" >
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
                    unde quod distinctio, temporibus natus beatae, ullam, magnam maxime. Voluptates quibusdam odit
                    ducimus ex, temporibus quidem enim reprehenderit itaque reiciendis, sapiente perspiciatis
                    accusamus. Hic impedit laboriosam autem eos libero. Magni, animi. Aut iste, architecto cupiditate
                    culpa voluptates eligendi? Vel accusamus corrupti debitis totam autem ex odio ab perferendis?
                    
                        </p>
                    
                    
                </div>
                <div className="col-lg-6 my-5" style={{ textAlign: 'center' }} data-aos="flip-left">
                    <img src={Image} alt="me" className="img-fluid"  />
                </div>
            </div>
        </div>
    )
}

export default AboutMe
