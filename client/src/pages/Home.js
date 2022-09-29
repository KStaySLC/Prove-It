import React from 'react';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import Feed from '../components/Feed';
import PostForm from '../components/PostForm';

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
          <PostForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
        <Link to={{ pathname: `/login` }}>
                Login
                  </Link>
          {/* {loading ? ( */}
            <div>I've Made it this far!</div>
        {/* //   ) : (
        //     <Feed
        //       posts={posts}
        //       title="You Ready to Prove IT?!"
        //     /
        //   ) */}
        </div>
      </div>
    </main>
  );
};

export default Home;