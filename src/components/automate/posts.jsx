import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts, removePosts } from "../../actions/postActions";

class Posts extends React.Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  postRandomQuote(img, post) {
    let photo_link = `https://localhost:5000/image/${img}`;
    axios
      .post("https://graph.facebook.com/103791674899163/photos?", {
        url: photo_link,
        message: post,
        access_token:
          "EAAjhMmZCIOkIBABVzWOgfBAi3vMkK2fHsoHab9AK8zJPuBZAoKaam0qAYfwqeNdIQ4fi5JTVLicZAptpMhl5wPMWzN9fYmQWvGa3HO6H55uqnGzKxrFCT1MXk0uj4fUIjzNcw3vn80ZCnk9p5tvUUaAkpMfENubVz4d1zrzohOE4yPwQ5y6oV5U3gGYGWeR7EvfEnLsoZAwZDZD",
      })
      .then(
        (res) => {
          const result = res.data;
          console.log(result);
          alert("Success!");
        },
        (error) => {
          console.log(error);
        }
      );
    //console.log(photo_link);
  }
  handleClick(data) {
    this.props.removePosts(data);
    axios
      .delete(`http://localhost:5000/posts/${data}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let catalogue = this.props.posts.posts.map((post) => {
      return (
        <tr>
          <td>
            <img
              style={{ width: 50, height: "auto" }}
              key={post._id}
              src={`http://localhost:5000/image/${post.img}`}
              alt="OOPS !"
              class="img-thumbnail"
            />
          </td>
          <td>
            <h6 key={post._id}>{post.description}</h6>
          </td>
          <td>
            <h6 key={post._id}>{post.date.toString()}</h6>
          </td>
          <td>
            <a
              class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm"
              key={post._id}
              onClick={() => this.handleClick(post._id)}
              style={{ color: "white" }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </td>
          <td>
            <a
              class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              key={post._id}
              onClick={() => this.postRandomQuote(post.img, post.description)}
              style={{ color: "white" }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </td>
        </tr>
      );
    });
    return (
      <div class="col-xl-6 mb-4">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Schedueled Posts</h6>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Post Image</th>
                  <th scope="col">Post Description</th>
                  <th scope="col">Date</th>
                  <th scope="col">Delete Post</th>
                  <th scope="col">Post Now</th>
                </tr>
              </thead>
              <tbody>{catalogue}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts, removePosts })(Posts);
