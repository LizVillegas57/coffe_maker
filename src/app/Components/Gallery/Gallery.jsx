import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderSections from '../HeaderSections/HeaderSections'
import OwlCarousel from "react-owl-carousel3";
import styles from "./Gallery.module.scss";

export class Gallery extends Component {
    render() {
        const galleryImages = this.props.galleryImages.map((item, index) =>(
            <div className={`${item.class} ${styles.picture}`} key={index}>
                <img src={item.image} alt="client" />
            </div>
        ));
        const icon = <img src={this.props.icon} alt="Coffe Make" className={styles.icon}/>
        return (
            <>
                <section id="gallery" className={styles.gallery}>
                    <img src={this.props.coffe1} alt="Coffe Make" className={styles.coffe1}/>
                    <img src={this.props.coffe2} alt="Coffe Make" className={styles.coffe2}/>
                    <div className={styles.galleryContainer}>
                        <HeaderSections classes={styles.header} icon={icon} title="Gallery" subtitle="You yourself are testing the taste benefits of each method and select the type of cooking yourself" />
                        <OwlCarousel 
                            className={`gallery-slides owl-theme ${styles.galleryCarousel}`}
                            autoplay={false}
                            nav={true}
                            mouseDrag={true}
                            touchDrag={true}
                            responsiveClass={true}
                            dots={false}
                            items={3}
                            navText={[
                                "<i class='icon icon-left'></i>",
                                "<i class='icon icon-right'></i>"
                            ]}
                            responsive={{
                                0:{
                                    items:1
                                },
                                768:{
                                    items:2
                                },
                                992:{
                                    items:3
                                },
                                1240:{
                                    items:3
                                }
                            }}
                        >
                            {galleryImages}
                        </OwlCarousel>
                        
                        <div className={styles.number}>5 <span>of</span> 10</div>
                    </div>
                </section>
            </>
        );
    }
}
Gallery.PropsTypes = {
    icon: PropTypes.string,
    galleryImages: PropTypes.array,
    coffe1: PropTypes.string,
    coffe2: PropTypes.string,
}
Gallery.defaultProps = {
    icon: require("resources/images/icon_title.png"),
    coffe1: require("resources/images/coffe_1.png"),
    coffe2: require("resources/images/coffe_3.png"),
    galleryImages:[
        {image: require("resources/images/gallery2.jpg"), class: "first"},
        {image: require("resources/images/gallery1.jpg"), class: "second"},
        {image: require("resources/images/gallery3.jpg"), class: "third"},
        {image: require("resources/images/gallery2.jpg"), class: "first"},
        {image: require("resources/images/gallery1.jpg"), class: "second"},
        {image: require("resources/images/gallery3.jpg"), class: "third"},
        {image: require("resources/images/gallery2.jpg"), class: "first"},
        {image: require("resources/images/gallery1.jpg"), class: "second"},
        {image: require("resources/images/gallery3.jpg"), class: "third"},
    ]
}
export default Gallery
