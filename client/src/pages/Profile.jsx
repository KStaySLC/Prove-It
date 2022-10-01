import React from "react";

// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

// import QUERY_USER from '../utils/queries';

// import Auth from '../utils/auth';

import "../static/profile.css";
import imgRT from "../images/imgRT.jpg";

const wide = { width: "25%" };

function Profile() {
  return (
    <div>
      <div className="profileContainer">
        <img src={imgRT} className="maxWide" alt="Hey Everybody!" /> 
        <p className="postNumber">Total Posts:</p>
        <p className="amount"> 55</p>
      </div>
      <div class="posts">
        <button className="addPost" type="button" style={wide}>
          Add Post
        </button>
        <button className="seePosts" type="button" style={wide}>
          See My Posts
        </button>
      </div>
      <div className="postHistory">
        <div className="postHistoryHeader">
          <PostForm/>
          <h1>Post History or Maybe Feed</h1>
          <p>My Last Post</p>
          <p>My Last Post Before My Last Post</p>
          <p>My Penultimate Post Before My Penultimate Post</p>
          <p>My Last Post Before My Penultimate Penultimate Post</p>
          <p>
            My Penultimate Post Before My Last Post Before My Penultimate
            Penultimate Post
          </p>
          <p>
            My Penultimate Penultimate Post Before My Last Post Before My
            Penultimate Penultimate Post. Say Penultimate Again. I Dare You.
          </p>
      </div>
      </div>
    </div>
  );
}

export default Profile;
