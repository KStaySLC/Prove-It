import React, { useState } from 'react';

import '../static/post.css'

function Addpost() {
  const [values, setValues] = useState({
    photoUpload: "",
    whatActivity: "",
    whereU: "",
    whoPosted: "",
    howLong: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handlePhotoUploadInputChange = (event) => {
    setValues({...values, photoUpload: event.target.value})   
  }

  const handleWhatActivityInputChange = (event) => {
    setValues({...values, whatActivity: event.target.value})   
  }

  const handleWhereUInputChange = (event) => {
    setValues({...values, whereU: event.target.value})   
  }

  const handleWhoPostedInputChange = (event) => {
    setValues({...values,whoPosted: event.target.value})   
  }

  const handleHowLongInputChange = (event) => {
    setValues({...values, howLong: event.target.value})   
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.photoUpload && values.whatActivity && values.whereU && values.whoPosted && values.howLong) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="mainDiv">
      <form className="mainForm" onSubmit={handleSubmit}>
        {submitted && valid ?<div className="success-message">You Did It! Woo!</div> : null}
        <p>Upload Photo here</p>
        <input
          disabled={submitted}
          onChange={handlePhotoUploadInputChange}
          value={values.photoUpload}
          className="formInput"
          placeholder="Upload Your Photo Here"
          name="photoUpload" />
          {submitted && !values.photoUpload ? <span>Please Upload a Photo</span> : null}
          <p>Wtf were you doing?</p>
        <input
          disabled={submitted}
          onChange={handleWhatActivityInputChange}
          value={values.whatActivity} 
          className="formInput"
          placeholder="What Were You Doing?"
          name="whatActivity" />
          {submitted && !values.photoUpload ? <span>Please Tell Us What You Were Doing</span> : null}
          <p>Where were you at?</p>
        <input
          disabled={submitted}
          onChange={handleWhereUInputChange}
          value={values.whereU} 
          className="formInput"
          placeholder="Where Were You?"
          name="whereU" />
          {submitted && !values.photoUpload ? <span>Please Tell Us Where You Were</span> : null}
          <p>Tell us your name pls :D </p>
        <input
          disabled={submitted}
          onChange={handleWhoPostedInputChange}
          value={values.whoPosted} 
          className="formInput"
          placeholder="Your Name Here"
          name="whoPosted" />
          {submitted && !values.photoUpload ? <span>Please Tell Us Your Name</span> : null}
          <p>How long can we call you out?</p>
        <input
          disabled={submitted}
          onChange={handleHowLongInputChange}
          value={values.howLong} 
          className="formInput"
          placeholder="How Long to Call Bullshit?"
          name="howLong" />
          {submitted && !values.photoUpload ? <span>Please Tell Us How Long We Have To Call Bullshit On This</span> : null}
          <button 
            className="formBtn"
            type="submit">Post!</button>
      </form>
    </div>
  )
}

export default Addpost;
