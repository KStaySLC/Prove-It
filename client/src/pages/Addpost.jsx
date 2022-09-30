import React, { useState } from 'react'
//import '../static/addPost.css'

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
    <div className="form-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        {submitted && valid ?<div className="success-message">You Did It! Woo!</div> : null}
        <input
          disabled={submitted}
          onChange={handlePhotoUploadInputChange}
          value={values.photoUpload}
          className="form-field"
          placeholder="Upload Your Photo Here"
          name="photoUpload" />
          {submitted && !values.photoUpload ? <span>Please Upload a Photo</span> : null}
        <input
          disabled={submitted}
          onChange={handleWhatActivityInputChange}
          value={values.whatActivity} 
          className="form-field"
          placeholder="What Were You Doing?"
          name="whatActivity" />
          {submitted && !values.photoUpload ? <span>Please Tell Us What You Were Doing</span> : null}
        <input
          disabled={submitted}
          onChange={handleWhereUInputChange}
          value={values.whereU} 
          className="form-field"
          placeholder="Where Were You?"
          name="whereU" />
          {submitted && !values.photoUpload ? <span>Please Tell Us Where You Were</span> : null}
        <input
          disabled={submitted}
          onChange={handleWhoPostedInputChange}
          value={values.whoPosted} 
          className="form-field"
          placeholder="Your Name Here"
          name="whoPosted" />
          {submitted && !values.photoUpload ? <span>Please Tell Us Your Name</span> : null}
        <input
          disabled={submitted}
          onChange={handleHowLongInputChange}
          value={values.howLong} 
          className="form-field"
          placeholder="How Long to Call Bullshit?"
          name="howLong" />
          {submitted && !values.photoUpload ? <span>Please Tell Us How Long We Have To Call Bullshit On This</span> : null}
          <button 
            className="form-field"
            type="submit">Post!</button>
      </form>
    </div>
  )
}

export default Addpost
