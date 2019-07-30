import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderSections from '../HeaderSections/HeaderSections'
import OwlCarousel from "react-owl-carousel3";
import styles from "./Testimonials.module.scss";

export class Testimonials extends Component {
    render() {
        const testimonialsData = this.props.testimonialsData.map((testimonial, index ) =>(
            <div className={styles.item} key={index}>
                <div className={styles.picture}>
                    <img src={testimonial.img} alt="Coffe Maker" className={styles.img}/>
                    <button type="button" className={styles.socialicon}>
                        <img src={testimonial.socialicon} alt="Coffe Maker" />
                    </button>
                </div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.description}</p>
            </div>
        ));
        return (
            <>
                <section id="reviews" className={styles.testimonials}>
                    <div className={styles.content}>
                        <HeaderSections classes={styles.header} title="testimonials" subtitle="We have enough patience to teach you the art of coffee" />
                        <OwlCarousel 
                            className="testimonial-slides owl-theme"
                            loop={true}
                            autoplay={true}
                            nav={true}
                            mouseDrag={true}
                            autoplayHoverPause={true}
                            responsiveClass={true}
                            dots={true}
                            items={1}
                            navText={[
                                "<i class='icon icon-left'></i>",
                                "<i class='icon icon-right'></i>"
                            ]}
                        >
                            {testimonialsData}
                        </OwlCarousel>
                    </div>
                </section>
            </>
        );
  }
}
Testimonials.PropsTypes = {
    testimonialData: PropTypes.array,
}
Testimonials.defaultProps = {
    testimonialsData: [
        {
            img: require("resources/images/testimonial1.png"),
            name: "Alex Nikandrovt",
            description: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
            socialicon: require("resources/images/icon_fb.png"),
        },
        {
            img: require("resources/images/testimonial1.png"),
            name: "Alex Nikandrovt",
            description: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
            socialicon: require("resources/images/icon_fb.png"),
        },
        {
            img: require("resources/images/testimonial1.png"),
            name: "Alex Nikandrovt",
            description: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
            socialicon: require("resources/images/icon_fb.png"),
        },
        {
            img: require("resources/images/testimonial1.png"),
            name: "Alex Nikandrovt",
            description: "Our company is grateful for the delicious and freshly roasted coffee in our office every day! Our staff of more than 300 people, appreciate quality and flavor of the coffee, because that would be important for our office staff were every morning refreshed and in a good mood! Recommended!",
            socialicon: require("resources/images/icon_fb.png"),
        },
    ]

}
export default Testimonials
