import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation />
            <Logo />
            <h1>A propos</h1>
            <br />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in nunc pretium, auctor velit vitae, efficitur mi.
                Quisque commodo justo elit. Nam in ligula eget dolor fringilla eleifend ut ut arcu.
                Nam molestie malesuada nisi. Donec fringilla metus ac elit iaculis, non sollicitudin elit elementum.
                Ut vestibulum quam sit amet enim euismod malesuada. Aliquam erat volutpat. Integer sollicitudin suscipit dui quis accumsan.
                Aenean vehicula lectus nisl, in scelerisque ante fringilla in. Suspendisse tempus eros id nulla rhoncus, in hendrerit justo viverra.
            </p>
            <br />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in nunc pretium, auctor velit vitae, efficitur mi.
                Quisque commodo justo elit. Nam in ligula eget dolor fringilla eleifend ut ut arcu. Nam molestie malesuada nisi.
                Donec fringilla metus ac elit iaculis, non sollicitudin elit elementum. Ut vestibulum quam sit amet enim euismod malesuada.
                Aliquam erat volutpat. Integer sollicitudin suscipit dui quis accumsan. Aenean vehicula lectus nisl, in scelerisque ante fringilla in.
                Suspendisse tempus eros id nulla rhoncus, in hendrerit justo viverra.
            </p>
        </div>
    );
};

export default About;