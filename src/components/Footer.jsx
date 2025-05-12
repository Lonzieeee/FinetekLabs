import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleUp } from "@fortawesome/free-solid-svg-icons"; 
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { Link } from "react-router-dom"; 
import '../styles/Footer.css';


// Expanding footer function
function expandFooter(id) {
  const item = document.getElementById(`footer-${id}-list`);
  const iconRight = document.getElementById(`footer-${id}-right`);
  const iconUp = document.getElementById(`footer-${id}-up`);
  
  item.classList.toggle('flex');
  item.classList.toggle('hidden');
  iconRight.classList.toggle('hidden');
  iconUp.classList.toggle('hidden');
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-large">
        <div className="footer-content">
          {/* Services Section */}
          <div>
            <h4>SERVICES</h4>
            <div className="footer-list">
              <Link to="/services/software-development">Product Engineering</Link>
              <Link to="/services/dedicated-teams">Dedicated teams</Link>
              <Link to="/services/ux-ui-design">UX/UI design</Link>
              <Link to="/services/qa-testing">QA testing</Link>
              <Link to="/services/cyber-security">Cyber security</Link>
            </div>
          </div>

          {/* Technologies Section */}
          <div>
            <h4>TECHNOLOGIES</h4>
            <div className="footer-list">
              <Link to="/technologies/iot">Internet of Things</Link>
              <Link to="/technologies/ai">Artificial Intelligence</Link>
              <Link to="/technologies/ar">Augmented Reality</Link>
              <Link to="/technologies/cryptography">Cryptography</Link>
            </div>
          </div>

          {/* Platforms Section */}
          <div>
            <h4>PLATFORMS</h4>
            <div className="footer-list">
              <a href="#ios">iOS</a>
              <a href="#android">Android</a>
              <a href="#windows">Windows</a>
              <a href="#hybrid">Hybrid Platform</a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h4>COMPANY</h4>
            <div className="footer-list">
              <Link to="/company/about">About Us</Link>
              <Link to="/company/partners">Partner With Us</Link>
              <Link to="/company/team">Team</Link>
              <Link to="/company/blogs">Blogs</Link>
            </div>
          </div>

          {/* Contacts Section */}
          <div>
            <h4>CONTACTS</h4>
            <div className="footer-list">
              <a href="mailto:info@fineteklabs.com">info@fineteklabs.com</a>
              <a href="tel:+254734341962">+254 734 341 962</a>
              <a href="tel:+254706059906">+254 706 059 906</a>
              <a href="#more-contacts" className="more-contacts">MORE CONTACTS</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>©{new Date().getFullYear()} Fineteklabs</div>
          <div className="social-icons">
            <a href="https://www.facebook.com/Fineteklabs/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/fineteklabs" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/company/finetek-technologies-k-ltd/about/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="footer-mobile">
        {/* Services */}
        <div className="footer-menu-item" id="footer-services-list">
          <h4 onClick={() => expandFooter('services')}>
            SERVICES
            <FontAwesomeIcon id="footer-services-right" icon={faAngleRight} />
            <FontAwesomeIcon id="footer-services-up" icon={faAngleUp} className="hidden" />
          </h4>
        </div>

        {/* Technologies */}
        <div className="footer-menu-item" id="footer-technologies-list">
          <h4 onClick={() => expandFooter('technologies')}>
            TECHNOLOGIES
            <FontAwesomeIcon id="footer-technologies-right" icon={faAngleRight} />
            <FontAwesomeIcon id="footer-technologies-up" icon={faAngleUp} className="hidden" />
          </h4>
        </div>

        {/* Platforms */}
        <div className="footer-menu-item" id="footer-platforms-list">
          <h4 onClick={() => expandFooter('platforms')}>
            PLATFORMS
            <FontAwesomeIcon id="footer-platforms-right" icon={faAngleRight} />
            <FontAwesomeIcon id="footer-platforms-up" icon={faAngleUp} className="hidden" />
          </h4>
        </div>

        {/* Company */}
        <div className="footer-menu-item" id="footer-company-list">
          <h4 onClick={() => expandFooter('company')}>
            COMPANY
            <FontAwesomeIcon id="footer-company-right" icon={faAngleRight} />
            <FontAwesomeIcon id="footer-company-up" icon={faAngleUp} className="hidden" />
          </h4>
        </div>

        {/* Contacts */}
        <div className="footer-contacts">
          <h4>CONTACTS</h4>
          <a href="mailto:info@fineteklabs.com">info@fineteklabs.com</a>
          <a href="tel:+254734341962">+254 734 341 962</a>
          <a href="tel:+254706059906">+254 706 059 906</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
