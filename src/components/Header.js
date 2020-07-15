import React from 'react'
import Particles from 'react-particles-js';
import useWebAnimations, { backInDown } from "@wellyshen/use-web-animations";
import Typist from 'react-typist';
import './../App.css'


const Header = () => {

    const { ref, playState } = useWebAnimations({ ...backInDown });

    return (
        <>
             <Particles
                params={{
                    "particles": { "number": { "value": 95, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "edge", "stroke": { "width": 1, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.2966312312601217, "random": false, "anim": { "enable": false, "speed": 0, "opacity_min": 0.1, "sync": false } }, "size": { "value": 0, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 320.6824121731046, "color": "#000000", "opacity": 0.3687847739990702, "width": 0.5 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 328.8912709820448, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": false
                }}
            />

            <h1 className="myName noselect" ref={ref} ><span>Omama</span><span> Zainab.</span></h1>
            <Typist count={2} className="about noselect">
                <i>  Software developer, </i>
            </Typist>
        </>
    )
}

export default Header
