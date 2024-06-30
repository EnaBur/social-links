import React from "react";

const Frame = () => {
  return (
    <div className="frame-body">
      <div className="profile-image"></div>
      <div className="frame-title">
        <h1>Jessica Randall</h1>
        <h3>London, United Kingdom</h3>
      </div>
      <p>"Front-end developer and avid reader."</p>
      <div className="frame-buttons">
        <button>GitHub</button>
        <button>Frontend Mentor</button>
        <button>Linkedin</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </div>
  );
};
export default Frame;
