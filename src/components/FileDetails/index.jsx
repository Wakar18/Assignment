import React from "react";
const FileDetails = (props) => {
  return (
    <div className="file-container">
      <div className="logo">{props.Logo}</div>
      <div className="content">
        <div className="details-of-file"> {props.content}</div>
        <div className="file-size">{props.fileSize}</div>
        <div className="button"> {props.inputType}</div>
        <div className="loader"> {props.loader}</div>
        <div className="progress-bar"> {props.progress}</div>
        <div className="progress-percentile"> {props.progressPercentile}</div>
      </div>
    </div>
  );
};

export default FileDetails;
