import React from "react";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { personalInfo } from "../../data";

import "./contact.css";

function Contact() {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <br />
                <h4 className="info__desc">{personalInfo[7].description}</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <br />
                <h4 className="info__desc">{personalInfo[6].description}</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              target="_blank"
              href="https://www.instagram.com/sivar_amir2/"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sivar-amir-728842242/"
              className="contact__social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/sevar.mantk.7/"
              className="contact__social-link"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://github.com/SivarAmir"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
