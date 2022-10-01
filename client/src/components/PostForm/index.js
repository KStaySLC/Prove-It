import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";

import Auth from "../../utils/auth";

const PostForm = ({ profileId }) => {
  const [post, setPost] = useState("");

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addPost({
        variables: { profileId, post },
      });

      setPost("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>I Post Now?</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Endorse some skills..."
              value={post}
              className="form-input w-100"
              onChange={(event) => setPost(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
              Prost!
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to post shit <Link to="/login">Login</Link>{" "}
        </p>
      )}
    </div>
  );
};

export default PostForm;
