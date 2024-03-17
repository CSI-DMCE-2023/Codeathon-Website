import React from "react";
import "./Domaincard.css";
import styled from "styled-components";
function Domaincards(props) {
  return (
    <div className="card">
      <div className="top-section">
        <img src={props.imglogo} style={{zIndex:-1}}/>
        <div className="border"></div>
        <div className="icons">
          <div className="logo">
            <p className="text-sm text-white font-bold">
                DMCE
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <span className="title mt-3">{props.title}</span>
        <div className="row row1">
          <p className="text-md text-left    text-white">
            {props.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}


export default Domaincards;
