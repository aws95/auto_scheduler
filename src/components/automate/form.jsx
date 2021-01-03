import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ErrorMessage } from "@hookform/error-message";
import Posts from "./posts";
import { connect } from "react-redux";
import { addPosts } from "../../actions/postActions";
import "react-datepicker/dist/react-datepicker.css";
import "./errorMessage.scss";

function Form(props) {
  let file;
  const { handleSubmit, register, errors, setValue } = useForm();
  const [startDate, setStartDate] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    register({ name: "date" }, { required: true });
  }, [register]);

  const fileSelectedHandler = (event) => {
    file = event.target.files[0];
  };
  const token = props.posts.key || "there is no token";

  const onSearch = (event) => {
    props.addPosts(event);
    const data = new FormData();
    data.append("file", file);
    data.append("description", event.description);
    data.append("date", event.date);
    data.append("token", token);
    axios
      .post("http://localhost:5000/upload", data)
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setResult(event);
  };

  return (
    <div>
      <div className="facebook row">
        <div className="col-xl-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Create Post</h6>
            </div>
            <div className="card-body">
              <div className="layout">
                <form id="post-form" onSubmit={handleSubmit(onSearch)}>
                  <div className="form-section">
                    <label for="exampleFormControlTextarea1">
                      Post Description
                    </label>
                    <br />
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      id="description"
                      name="description"
                      ref={register({
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      as="p"
                      name="description"
                      message="Post Description is required"
                    />
                  </div>
                  <div className="form-section">
                    <label htmlFor="startDate" className="form-label">
                      Post Date pp
                    </label>
                    <br />
                    <DatePicker
                      isClearable
                      innerRef={register({ required: true })}
                      name="datetime1"
                      className={"form-section"}
                      selected={startDate}
                      onChange={(val) => {
                        setStartDate(val);
                        setValue("date", val);
                      }}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="dd-MM-yyyy h:mm"
                    />
                  </div>
                  <br />
                  <div className="form-section">
                    <label for="exampleFormControlFile1">Upload an image</label>
                    <br />
                    <input type="file" onChange={fileSelectedHandler} />
                  </div>
                  <br />
                  <button class="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <div>Submitted data:</div>
              <pre>{JSON.stringify(result)}</pre>
            </div>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    key: state.posts.key,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPosts: (event) => dispatch(addPosts(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
