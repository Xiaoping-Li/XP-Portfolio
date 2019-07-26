import React from 'react';
import '../CSS/about.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';


function About() {
  return (  
    <div className="about">
      <ScrollToTopOnMount />

      <div className="about-desc">
        <p className="p-left">The moment when I realized that if I could join such a great engineering team like the one that I worked with, I would be able to make a bigger impact for users who want to get things done and experience an amazing UI. I left the clinical job and dive head deeply into software engineering study. Having several months of intensive training behind me, now I am a full stack web developer.</p>
        <div className="about-desc-img img-even">
          <img src={require('../images/developer.jpg')} alt="images of web developer"/>
        </div>
      </div>

      <div className="about-paper-plane plane-right">
        <img src={require('../images/paper_plane_right.png')} alt="paper-plane-right" />
      </div>

      <div className="about-desc">
        <div className="about-desc-img img-odd">
          <img src={require('../images/paperwork 1.jpg')} alt="images of a pile of files" />
        </div>
        <p className="p-right">After moving to United States, I found a job in the Clinical Department of a Bio-medical Device Company, and worked as Clinical Trial Coordinator for three years. In that position we processed tons of paperwork everyday and tracked everything in excel. As the company grew, we started to use Bio-medical platforms to automate tracking, and I got a chance to work closely with an engineering team to configure a platform for Clinical Trials. I was shocked by the high efficiency of the system and the user friendly interface. At that moment I wanted to become a web developer!</p>
      </div>

      <div className="about-paper-plane plane-left">
        <img src={require('../images/paper_plane_left.png')} alt="paper-plane-left" />
      </div>

      <div className="about-desc">
        <p className="p-left">After graduation from Fudan University, my love for Neuroscience brought me to University of Birmingham, UK from where I got my second Masters degree in Neuropsychology. I came to United States after my graduation and live in Bay Area since then.</p>
        <div className="about-desc-img img-even">
          <img src={require('../images/brain.jpg')} alt="images of brain" />
        </div>
      </div>

      <div className="about-paper-plane plane-right">
        <img src={require('../images/paper_plane_right.png')} alt="paper-plane-right" />
      </div>

      <div className="about-desc">
        <div className="about-desc-img img-odd">
          <img src={require('../images/DNA1.jpg')} alt="images of DNA" />
        </div>
        <p className="p-right">I have a Masters degree in Biochemistry and Melocular Biology from Fudan University of China, and almost 10 years' experience in this field.</p>
      </div>
    </div>
  );
}

export default About;