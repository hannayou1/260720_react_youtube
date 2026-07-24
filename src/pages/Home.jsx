import React from "react";
import Main from "../components/section/Main";
import Developer from "../components/contents/Developer";
import Today from "../components/contents/Today";
import Webd from "../components/contents/Webd";
import Gsap from "../components/contents/Gsap";
import Portfolio from "../components/contents/Portfolio";
import Youtube from "../components/contents/Youtube";
import Website from "../components/contents/Website";
import VideoSlider02 from "../components/video/VideoSlider02";
import { webdText } from "../data/webd";
import { websiteText } from "../data/website";
import { gsapText } from "../data/gsap";
import { portfolioText } from "../data/portfolio";
import { youtubeText } from "../data/youtube";


const Home = () => {
  return (
    <Main title="Hanna 유튜브" description="한나 유튜브에 오신 것을 환영합니다♥">
      <Today/>
      <Developer/>
      <VideoSlider02 videos={webdText} title="웹디자인 준비는 이걸로" id="webd" />
      <VideoSlider02 videos={websiteText} title="웹사이트" id="website" />
      <VideoSlider02 videos={gsapText} title="gsap" id="gsap" />
      <VideoSlider02 videos={portfolioText} title="포트폴리오 " id="website"  />
      <VideoSlider02 videos={youtubeText} title="유튜브" id="website"  />
    </Main>
  );
};

export default Home;
