import React from "react";
import "../static/profile.css";
// import imgKA from "../images/imgKA";
const width = { width: "15%" };

function Profile() {
  return (
    <div>
      <div class="profileContainer">
        {/* <img src={imgKA} alt="Hey Everybody!" />  */}
        <p class="postNumber">Total Posts</p>
        <p class="amount">55</p>
      </div>
      <div class="posts"></div>
      <button class="addPost" type="button" style={width}>
        Add Post
      </button>
      <button className="seePosts" type="button" style={width}>
        See My Posts
      </button>
      <div class="postHistory">
        <div className="postHistoryHeader"></div>
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
  );
}

export default Profile;
