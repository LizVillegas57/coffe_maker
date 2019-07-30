import React, { Component } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import MaskWithValidation from './PhoneInput'
import HeaderSections from '../HeaderSections/HeaderSections'
import styles from "./Contact.module.scss";

export class ContactUs extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            successMsg: ""
        };
    }
    handleForm = e => {
        let that = this;
        axios
            .post("https://formcarry.com/s/FVhRHU3ydUv", this.state, {
                headers: { Accept: "application/json" }
            })
            .then(function(response) {
                that.setState({
                    successMsg: "We received your submission!"
                });
                setTimeout(function(){
                    window.location.reload(true);
                }, 1000);
                
            })
            .catch(function(error) {});
    };

    handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.content}>
                <img src={this.props.img} alt="Coffe Make" className={styles.coffe}/>
                <div className={styles.block}>
                    <HeaderSections classes={styles.header}  title="have questions?" subtitle="Leave a request and we will contact you shortly" /> 
                    <ValidationForm id="contactForm" onSubmit={(e, formData) => {e.preventDefault(); this.handleForm(formData); }}>
                        <div className="form-group">
                            <TextInput
                                name="name"
                                id="name"
                                required
                                successMessage=""
                                errorMessage="Please enter your name"
                                className="form-control"
                                placeholder="your name"
                                autoComplete="off"
                                onChange={
                                    this.handleFields
                                }
                            />
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <MaskWithValidation 
                                name="phone" 
                                id="phone"
                                className="form-control" 
                                required 
                                validator={(value) => value}
                                value={this.state.phone}
                                onChange={this.handleFields}
                                successMessage=""
                                placeholder="contact number"
                                autoComplete="off"
                                errorMessage={{validator: "Please enter contact number"}}
                                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className={styles.button}>Send</button>
                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                            <div className="clearfix"></div>
                        </div> 
                    </ValidationForm>
                    {this.state.successMsg !== "" ? (
                        <p className={styles.contactMsg}>
                            {this.state.successMsg}
                        </p>
                    ) : null}
                </div>
            </div>
        </section>
    );
  }
}

ContactUs.propTypes = {
    img: PropTypes.string,
}
ContactUs.defaultProps ={
    img: require("resources/images/coffe_4.png"),
}

export default ContactUs
