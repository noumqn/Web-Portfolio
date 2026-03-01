import React from "react";
import Connection from "../../assets/images/connections.svg";
import Facebook from "../../assets/images/socials/facebook.png";
import Instagram from "../../assets/images/socials/instagram.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Let's Connect
          </p>
          <h2>Open to Opportunities</h2>
          <p>
            Whether you're looking to collaborate, have a project in mind, or
            just want to say hi — reach out. I'm always open to meaningful
            conversations.
          </p>
          <ul className="app__contact-container_contacts-links">
            <a href="https://web.facebook.com/erys.mozo/" target="blank">
              <img src={Facebook} alt="" />
              Syed Nouman
            </a>
            <a href="https://www.instagram.com/_erysmozo/" target="blank">
              <img src={Instagram} alt="" />
              @syed.nouman
            </a>
            <a
              href="https://www.linkedin.com/in/noumqn/"
              target="blank"
            >
              <img src={LinkedIn} alt="" />
              Syed Nouman
            </a>
          </ul>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Cennections" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
