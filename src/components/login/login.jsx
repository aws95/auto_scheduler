import React, { useState } from "react";
import access_account from "../../img/access_account.svg";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { addKey } from "../../actions/postActions";

import "./style.scss";

const Login = (props) => {
  let fbkey;
  const componentClicked = (data) => {
    console.log("data", data);
  };

  const responseFacebook = (response) => {
    //console.log(response.accessToken);
    props.addKey(response.accessToken);
    fbkey = response.accessToken;
    //setAccessToken(response.accessToken);
  };
  return (
    <div className="base-container">
      <div className="content">
        <div className="image">
          <img src={access_account} alt="login_img" />
        </div>
        <div className="form">
          <div className="info login_faceboon">
            <div>
              <FacebookLogin
                appId="2499406553692738"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
                textButton="Continue with Facebook"
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    key: state.posts.key,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addKey: (accessToken) => dispatch(addKey(accessToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
