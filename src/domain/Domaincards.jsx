import React from "react";
import "./Domaincard.css";
import styled from "styled-components";
function Domaincards(props) {
  return (
    <div class="card">
      <div class="top-section">
        <img src={props.imglogo} style={{zIndex:-1}}/>
        <div class="border"></div>
        <div class="icons">
          <div class="logo">
            <p className="text-sm text-white font-bold">
                DMCE
            </p>
          </div>
        </div>
      </div>
      <div class="bottom-section">
        <span class="title mt-3">{props.title}</span>
        <div class="row row1">
          <p className="text-md text-left    text-white">
            {props.paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}


export default Domaincards;
