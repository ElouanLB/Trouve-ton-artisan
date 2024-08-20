import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/img/Logo_footer.webp";

function Footer() {
  return (
    <footer>
      <div className="container mb-4 mt-5">
        <div className="row center-footer">
          {/* Bloc 1 */}
          <div className="col-md-4 col-sm-12 margin_footer">
            <img
              src={logo}
              className="logo-img"
              alt="Logo trouve ton artisan"
            />
            <p className="footer_color_link">
              Votre plateforme pour trouver des artisans qualifiés près de chez
              vous.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="col-md-4 col-sm-12 margin_footer">
            <h2 className="footer_color_link">
              <strong>Lyon</strong>
            </h2>
            <address className="footer_color_link">
              <p>101 cours Charlemagne</p>
              <p>CS 20033</p>
              <p>69269 LYON CEDEX 02</p>
              <p>France</p>
              <p>+33 (0)4 26 73 40 00</p>
            </address>
          </div>

          <span className="border"></span>

          {/* Bloc 3 */}
          <div className="container_link_footer">
            <ul className="link_footer">
              <li>
                <Link to="#" className="footer_color_link">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="#" className="footer_color_link">
                  Données Personnelles
                </Link>
              </li>
              <li>
                <Link to="#" className="footer_color_link">
                  Accessibilité
                </Link>
              </li>
              <li>
                <Link to="#" className="footer_color_link">
                  Gestion des cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bloc 4: Icons */}
      <div className="col-md-12 text-center">
        <div className="social-footer_container">
          <ul className="social_footer_ul mb-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;