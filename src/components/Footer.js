import React from "react";
import { SubscribeForm } from "./Form";
import { SpoonIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "./Icons";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <SubscribeForm />
        <section className="home-footer">
          <div>
            <h5>Contact Us</h5>
            <ul>
              <li className="mb-2">9 W 53rd St, New York, NY 10019, USA</li>
              <li>
                <a href="tel:+12123441230">+1 212-344-1230</a>
              </li>
              <li>
                <a href="tel:+12125551230">+1 212-555-1230</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Gerícht</h2>
            <div>
              <p>
                "The best way to find yourself is to lose yourself in the <br />
                service of others.”
              </p>
              <SpoonIcon />
            </div>
            <div>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
          <div>
            <h5>Working Hours</h5>
            <ul>
              <li>
                Monday-Friday: <br /> 08:00 am -12:00 am
              </li>
              <li>
                Saturday-Sunday: <br /> 07:00am -11:00 pm
              </li>
            </ul>
          </div>
        </section>
        <p className="py-5 text-center">2021 Gerícht. All Rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
