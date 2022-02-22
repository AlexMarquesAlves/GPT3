import React from "react";
import "./styles.scss";

export type FeatureType = {
  title: string;
  text: string;
};

const Feature = ({ title, text }: FeatureType) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
