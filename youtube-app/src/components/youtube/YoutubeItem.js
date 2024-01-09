import React from "react";

const YoutubeItem = (props) => {
  return (
   
      <div className={`youtubeItem ${props.className}`}>
        <div className="youtubeItem-image">
          <img className="youtube-image-block" alt="" src={props.image} />
        </div>
        <div className="youtubeItem-infor">
          <div className="youtubeItem-avatar">
            <img src={props.avatar} alt=""/>
          </div>

          <div className="youtubeItem-title">
            <p className="title">{props.title}</p>
            <p>{props.author}</p>
          </div>
        </div>
      </div>
  );
};

export default YoutubeItem;