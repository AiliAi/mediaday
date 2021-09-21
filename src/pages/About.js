import React from 'react';
import Hello from '../components/Hello/Hello';

const About = ({ name }) => (
    <div>
        <h2>About sivu, name propsina {name}</h2>
        <Hello />
    </div>
);


export default About;


/*
const About = (props) => {
    return <h2>About sivu, propsina {props.name}</h2>;
}*/



//export { About }; import { About } from '../pages/About';
//import About from '../pages/About';