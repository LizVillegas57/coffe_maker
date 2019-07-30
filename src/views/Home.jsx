import React from 'react';

//Components List
import NavBar from "../app/Components/NavBar/NavBar";
import Hero from "../app/Components/Hero/Hero";
import Programs from "../app/Components/Programs/Programs";
import Gallery from "../app/Components/Gallery/Gallery";
import Testimonials from "../app/Components/Testimonials/Testimonials";
import Partners from "../app/Components/Partners/Partners";
import Contact from "../app/Components/Contact/Contact";
import Footer from "../app/Components/Footer/Footer";

const Home = () => {
    return(
        <>
            {/* NavBar: app/Components/NavBar */}
            <NavBar />
            {/* Hero: app/Components/Hero/Hero */}
            <Hero />
            {/* Programs: app/Components/Programs/Programs */}
            <Programs />
            {/* Gallery: app/Components/Gallery/Gallery */}
            <Gallery />
            {/* Testimonials: app/Components/Testimonials/Testimonials */}
            <Testimonials />
            {/* Partners: app/Components/Partners/Partners */}
            <Partners />
            {/* Contact: app/Components/Contact/Contact */}
            <Contact />
            {/* Footer: app/Components/Footer/Footer */}
            <Footer />
        </>
    )
}
export default Home;


