import React, { Component } from "react";
import Form from "../automate/form";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
export default class Content extends Component {
  render() {
    return (
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown no-arrow mx-1">
                <a>
                  Automate Your{" "}
                  <FontAwesomeIcon icon={faFacebook} color="blue" /> Posts
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              {/*
                <li class="nav-item dropdown no-arrow mx-1">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faBell} />

                    <span class="badge badge-danger badge-counter">3+</span>
                  </a>
                </li>

                <li class="nav-item dropdown no-arrow mx-1">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="messagesDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />

                    <span class="badge badge-danger badge-counter">7</span>
                  </a>
                </li> */}

              <div class="topbar-divider d-none d-sm-block"></div>

              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                    User Name
                  </span>
                  <img
                    class="img-profile rounded-circle"
                    src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
                  />
                </a>
              </li>
            </ul>
          </nav>

          <div className="wrapper container-fluid">
            <Form />
            {/**/}
          </div>
        </div>
        <footer class="sticky-footer bg-white">
          <Footer />
        </footer>
      </div>
    );
  }
}
