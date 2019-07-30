import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from "./Hero.module.scss";

class Hero extends Component {
    render() {
        const star = <FontAwesomeIcon icon={faStar} />
        const chevronDown = <FontAwesomeIcon icon={faChevronDown} />
        return (
            <>
                <div id="home" className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.stars}>
                            <span>{star}</span>
                            <span>{star}</span>
                            <span>{star}</span>
                        </div>
                        <div className={styles.subtitle}><p>Intensive program barista training</p></div>
                        <h1 className={styles.title}>Barista Training in <span>amsterdam</span></h1>
                        <div className={styles.thirdTitle}><p>On the basis of the company's largest coffee roasters</p></div>
                        <div className={styles.arrowBottom}><span></span></div>  
                        <Link to="programs" spy={true}  smooth={true} offset={-70} duration={800} className={styles.button}>
                            {chevronDown}
                        </Link>
                    </div>
                    <img src={this.props.coffe} alt="Coffe Make" className={styles.coffe}/>
                </div>
            </>
        )
    }
}


Hero.propTypes = {
    coffe: PropTypes.string,
}
Hero.defaultProps ={
    coffe: require("resources/images/coffe.png")
}

export default Hero;
