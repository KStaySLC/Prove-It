import React from 'react';
import '../static/home.css'
import { Link } from 'react-router-dom';
const btnStyle = {width: '60%'}
// import { useQuery } from '@apollo/client';

// import Feed from '../components/Feed';
// import PostForm from '../components/PostForm';

// import { QUERY_POSTS } from '../utils/queries';

const Home = () => {
    console.log("here")
  
//   const { loading, data } = useQuery(QUERY_POSTS);
//   const posts = data?.posts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
           <div class="mapFeedContainer">
        <div class="map">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe
                        width="1000"
                        height="500"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=salt%20lake%20city&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                    >
                    </iframe>
                    <a href="https://123movies-to.org"></a><br /><style>
                        {
                        `.mapouter {
                        position: relative;
                        text-align: right;
                        height: 500px;
                        }`
                        
                        }</style
                    ><a href="https://www.embedgooglemap.net"
                        >embed google maps in gmail</a
                    ><style>
                        {
                        `.gmap_canvas {
                        overflow: hidden;
                        background: none !important;
                        height: 500px;
                        }`                    
                        }
                    </style>
                </div>
            </div>
        </div>
        <div class="feed">
        <div class="post">
            <img src="cod quiz img.jpg" alt="Just a pic for now" />
            <div class="votes">
                <button class="upVote" type="button" style={btnStyle}>True!</button>
                <button class="downVote" type="button" style={btnStyle}>Bullshit!</button>
            </div>
        </div>
        </div>
    </div>
          {/* <PostForm /> */}
        </div>
        {/* <div className="col-12 col-md-8 mb-3">
        <Link to={{ pathname: `/login` }}>
                Login
                  </Link>
          {loading ? (
            <div>I've Made it this far!</div>
           ) : (
             <Feed
              posts={posts}
              title="You Ready to Prove IT?!"
           />)}
        </div> */}
      </div>
    </main>
  );
};

export default Home;