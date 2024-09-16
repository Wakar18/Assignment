import React, { useState } from "react";
import "./index.css";
import { FiUploadCloud } from "react-icons/fi";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setUploadMessage(`File "${file.name}" has been uploaded successfully.`);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      setUploadMessage(`File "${file.name}" has been uploaded successfully.`);
    }
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="wrapper"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button className="file-upload-button">
        <FiUploadCloud />
        <input
          className="upload-files"
          type="file"
          onChange={handleFileChange}
          onClick={handleInputClick}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
          }}
        />
      </button>
      <div className="file-upload-content">
        <p>
          <span className="highlighted-text">Click to Upload</span> or drag and
          drop SVG, PNG, JPG, GIF (max. 800*400px)
        </p>
        {<p>{uploadMessage}</p>}
      </div>
    </div>
  );
};

export default FileUpload;
