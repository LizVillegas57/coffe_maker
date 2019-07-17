import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./NavBar.module.scss";

class NavBar extends Component {
    componentDidMount() {
        let elem = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elem.classList.add("is-sticky");
            } else {
                elem.classList.remove("is-sticky");
            }
        });

        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };

        this.setState({ scrollWithOffset });
    }

    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }
    
    render() {
        return (
            <div className={`navbar-wrapper ${styles.navBarWrapper}`}>
                <Navbar sticky="top" id="navbar" className={`navbar-expand-lg ${styles.navBar}`} collapseOnSelect={true} expand="lg">
                    <Container className={styles.navBarContainer}>
                        <Navbar.Brand className={styles.navBarBrand}>
                            <Link to="home" spy={true} smooth={true} offset={-70} duration={800} className={styles.linkBrand}>
                                <img src={this.props.logo} alt="Coffe Make" className={`logo ${styles.logo}`}/>
                                <img src={this.props.logo_sticky} alt="Coffe Make" className={`logo-sticky ${styles.logo_sticky}`}/>
                            </Link>
                        </Navbar.Brand>
                        <div className={`toggle-button ${styles.toggleButton}`}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" id="collaspe-btn"/>
                        </div>
                        
                        <Navbar.Collapse id="basic-navbar-nav" className={styles.navBarCollapse}>
                            <div className={styles.closeButton}>
                                <button type="button" onClick={this.closeNavbar}><span></span></button>
                            </div>
                            <Nav className={`ml-auto ${styles.nav}`}>
                                <Nav.Item className={styles.navItem}>
                                    <Link to="programs" spy={true}  onClick={this.closeNavbar} smooth={true} offset={-70} duration={800} className={styles.navLink}>
                                        Program
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className={styles.navItem}>
                                    <Link to="gallery" spy={true} onClick={this.closeNavbar} smooth={true} offset={-70} duration={800} className={styles.navLink}>
                                        Gallery
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className={styles.navItem}>
                                    <Link to="reviews" spy={true} onClick={this.closeNavbar} smooth={true} offset={-70} duration={800} className={styles.navLink}>
                                        Reviews
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className={styles.navItem}>
                                    <Link to="partners" spy={true} onClick={this.closeNavbar} smooth={true} offset={-70} duration={800} className={styles.navLink}>
                                        Partners
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className={styles.navItem}>
                                    <Link to="contact" spy={true} onClick={this.closeNavbar} smooth={true} offset={-70} duration={800} className={styles.navLink}>
                                        Contact
                                    </Link>
                                </Nav.Item>
                                <div className={styles.contentPhone}>
                                    <a href="tel:+38 (099) 66-11-730" className={styles.phone}>+38 (099) 66-11-730</a>
                                </div>
                            </Nav> 
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            </div> 
        );
    }
}

NavBar.propTypes = {
    logo: PropTypes.string,
    logo_sticky: PropTypes.string,
}
NavBar.defaultProps ={
    logo: require("resources/images/logo.png"),
    logo_sticky: require("resources/images/logo_sticky.png")
}

export default NavBar;
