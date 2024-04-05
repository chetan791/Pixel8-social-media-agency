import React from "react";
import "../css/home.css";
import heroimage from "../assets/hero_image.png";
import logo from "../assets/logo.png";
import { TextGenerateEffect } from "../components/text-generate-effect";

export const Home = () => {
  let word =
    "Experience the power of expert branding and social media mastery. Our team crafts tailored strategies to make your business shine in today's competitive landscape. From captivating content to targeted campaigns, we drive results that exceed expectations. Let us illuminate your brand's potential and achieve remarkable success together.";
  return (
    <div id="home">
      <hero id="hero">
        <h4>Welcome to the Future</h4>
        <img src={logo} alt="" />
        <br />
        <span>Social Media Agency</span>
        <TextGenerateEffect words={word} />
      </hero>
      <imgdiv id="hero_image">
        <img src={heroimage} alt="heroimage" />
      </imgdiv>
    </div>
  );
};
