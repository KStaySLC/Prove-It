import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";

import { QUERY_POSTS } from "../utils/queries";

import "../static/home.css";
const btnStyle = { width: "60%" };

// import { Link } from 'react-router-dom';

const Home = () => {
  console.log("here");
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  let [yesCount, setYesCount] = useState(0);
  let [noCount, setNoCount] = useState(0);

  const handleYesClick = () => {
    setYesCount((yesCount + 1));
    console.log('Clicked yes');
  };

  const handleNoClick = () => {
    setNoCount((noCount + 1));
    console.log('Clicked no');
  };

  return (
    <main>
      <div className="flex-row justify-center"> 
        <div className="col-12 col-md-10 mb-3 p-3">
          <div class="mapFeedContainer">
            <div class="map">
              <div class="map_router">
                <div class="google_map_canvas">
                  <iframe
                    title="proveItMap"
                    width="1000"
                    height="500"
                    id="google_map_canvas"
                    src="https://maps.google.com/maps?q=salt%20lake%20city&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <a href="https://123movies-to.org"></a>
                  <br />
                  <style>
                    {`.map_router {
                        position: relative;
                        text-align: right;
                        height: 500px;
                        }`}
                  </style>
                  <a href="https://www.embedgooglemap.net">
                    embed google maps in gmail
                  </a>
                  <style>
                    {`.google_map_canvas {
                        overflow: hidden;
                        background: none !important;
                        height: 500px;
                        }`}
                  </style>
                </div>
              </div>
            </div>
            <div class="feed">
              <div class="post">
              {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Here's some bullshit. Or maybe not..."
            />
          )}
                <img src="abe_lincoln.jpg" alt="Just a pic for now" />
                <div class="votes">
                  <button onClick={handleYesClick} className="upVote" type="button" style={btnStyle}>
                    True! {yesCount}
                  </button>
                  <button onClick={handleNoClick} className="downVote" type="button" style={btnStyle}>
                    Bullshit! {noCount}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
