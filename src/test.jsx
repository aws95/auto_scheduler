import React, { Component } from "react";
import PopupExample from "./components/automate/popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

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
          </nav>

          <div className="wrapper container-fluid">
            <PopupExample />
            {/*<Form />*/}
          </div>
        </div>
      </div>
    );
  }
}
