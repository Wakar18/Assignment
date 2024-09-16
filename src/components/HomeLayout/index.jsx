import React from "react";
import "./index.css";
import FileUpload from "../FileUpload";
import Loader from "../Loader";
import { RiDeleteBin6Line } from "react-icons/ri";

const HomeLayout = () => {
  const data1 = "Tech design reqirements.pdf";
  const data2 = "Dashboard recording.mp4";
  const data3 = "Dashboard prototype FINAL.fig";
  const checkbox = <input type="checkbox" />;
  const progressBar = <progress value={1} />;
  const progressBar2 = <progress value={0.4} />;
  const progressBar3 = <progress value={0.8} />;
  const progressPercentile = "100%";
  const progressPercentile2 = "40%";
  const progressPercentile3 = "80%";
  const deleteButton = <RiDeleteBin6Line />;
  const loader = <Loader />;

  return (
    <div className="wrapper">
      <div className="container">
        <div className="left-part-of-assignment">
          <div className="box">
            <FileUpload />
          </div>
          <div className="box">
            <FileUpload />
          </div>
          <div className="box">
            <FileUpload />
          </div>
          <div className="box">
            <FileUpload />
          </div>
        </div>
        <div className="right-part-of-assignment">
          <div className="box">
            <FileUpload />
          </div>
          <div className="box">
            <FileUpload />
          </div>
          <div className="box">
            <FileUpload />
          </div>
          <div className="box">
            <FileUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
