import React from "react";
import ReactRoate from "react-rotating-text";
import Animation from "../animation/AnimationImg"
import "./content.css"

const Content = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-0"></div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <div className="title-edge">
                <div className="title-content">Capturing <span>AI Insights</span> using <span>Alternative Data</span></div>
                <div className="typewriter">
                <ReactRoate items={['#Trend Discovery', '#Industrial Landscapes', '#Predivtive Insights','#Social Feeds','#Unstructured Data']} />
                </div>
                <div className="demo-btn-div">
                    <button className="demo-but">Request Demo</button>
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div>
                <Animation/>
            </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-0"></div>
      </div>
    </div>
  );
};

export default Content;
