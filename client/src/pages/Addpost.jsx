import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_POST } from '../utils/mutations';

import Auth from '../utils/auth';

const PostForm = ({ profileId }) => {
  const [post, setPost] = useState('');

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addPost({
        variables: { profileId, post },
      });

      setPost('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Endorse some more skills below.</h4>

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
              Endorse Skill
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
          You need to be logged in to endorse skills. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;








// import React, { useState } from 'react';

// import '../static/post.css'

// function Addpost() {
//   const [values, setValues] = useState({
//     photoUpload: "",
//     whatActivity: "",
//     whereU: "",
//     whoPosted: "",
//     howLong: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [valid, setValid] = useState(false);

//   const handlePhotoUploadInputChange = (event) => {
//     setValues({...values, photoUpload: event.target.value})   
//   }

//   const handleWhatActivityInputChange = (event) => {
//     setValues({...values, whatActivity: event.target.value})   
//   }

//   const handleWhereUInputChange = (event) => {
//     setValues({...values, whereU: event.target.value})   
//   }

//   const handleWhoPostedInputChange = (event) => {
//     setValues({...values,whoPosted: event.target.value})   
//   }

//   const handleHowLongInputChange = (event) => {
//     setValues({...values, howLong: event.target.value})   
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if(values.photoUpload && values.whatActivity && values.whereU && values.whoPosted && values.howLong) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   }

//   return (
//     <div className="mainDiv">
//       <form className="mainForm" onSubmit={handleSubmit}>
//         {submitted && valid ?<div className="success-message">You Did It! Woo!</div> : null}
//         <p>Upload Photo here</p>
//         <input
//           disabled={submitted}
//           onChange={handlePhotoUploadInputChange}
//           value={values.photoUpload}
//           className="formInput"
//           placeholder="Upload Your Photo Here"
//           name="photoUpload" />
//           {submitted && !values.photoUpload ? <span>Please Upload a Photo</span> : null}
//           <p>Wtf were you doing?</p>
//         <input
//           disabled={submitted}
//           onChange={handleWhatActivityInputChange}
//           value={values.whatActivity} 
//           className="formInput"
//           placeholder="What Were You Doing?"
//           name="whatActivity" />
//           {submitted && !values.photoUpload ? <span>Please Tell Us What You Were Doing</span> : null}
//           <p>Where were you at?</p>
//         <input
//           disabled={submitted}
//           onChange={handleWhereUInputChange}
//           value={values.whereU} 
//           className="formInput"
//           placeholder="Where Were You?"
//           name="whereU" />
//           {submitted && !values.photoUpload ? <span>Please Tell Us Where You Were</span> : null}
//           <p>Tell us your name pls :D </p>
//         <input
//           disabled={submitted}
//           onChange={handleWhoPostedInputChange}
//           value={values.whoPosted} 
//           className="formInput"
//           placeholder="Your Name Here"
//           name="whoPosted" />
//           {submitted && !values.photoUpload ? <span>Please Tell Us Your Name</span> : null}
//           <p>How long can we call you out?</p>
//         <input
//           disabled={submitted}
//           onChange={handleHowLongInputChange}
//           value={values.howLong} 
//           className="formInput"
//           placeholder="How Long to Call Bullshit?"
//           name="howLong" />
//           {submitted && !values.photoUpload ? <span>Please Tell Us How Long We Have To Call Bullshit On This</span> : null}
//           <button 
//             className="formBtn"
//             type="submit">Post!</button>
//       </form>
//     </div>
//   )
// }

// export default Addpost;
