import "./about.scss";
import collegeLogo from "../../assets/jainCollegeLogo.jpg";
import rahulImage from "../../assets/rahul-img.jpeg";
import Lottie from "lottie-react";
import animationLaptop from '../../assets/ani-laptop.json'

const About = () => {
  return (
    <div className="about-container">
      <h2>ABOUT ME</h2>
      <div className="about-me">
        <div>
          <img className="rd-image" src={rahulImage} alt="" />
        </div>
        <div>
          <h2 className="rd-name">Rahul A Dharwadkar</h2>
          <p className="rd-role">Front End Developer</p>
          <p className="rd-info">
            Hey, A passionate Front-end React Developer, My expertise spans
            frontend technologies, allowing me to create comprehensive and
            seamlessly integrated web solutions. I am committed to developing
            and optimizing interactive, user-friendly, and feature-rich web
            applications. I'm proficient in troubleshooting complex issues and
            implementing new features. Whether you're a company in need of a
            strong online presence or an employer seeking a skilled developer, 
             feel free to reach out.
          </p>
          <p className="rd-desc">
            Expertise: <span>Web Development</span>
          </p>
          <p className="rd-desc">
            Experience: <span>1 Year</span>
          </p>
          <p className="rd-desc">
            E-mail: <span>rahuldharwadkar5@gmail.com</span>
          </p>
          <button className="cv-button">Download CV</button>
        </div>
      </div>
      <div className="about-education">
        <h3>EDUCATION</h3>
        <div className="college-flex">
          <img className="college-logo" src={collegeLogo} alt="" />
          <div className="college-info">
            <p>Jain College of BBA BCA and Commerce</p>
            <p>Bachelor of Computer Application, BELGAUM, KARNATAKA</p>
            <p>2019 - 2022</p>
          </div>
        </div>
        {/* <div className="animation-laptop">
          <Lottie animationData={animationLaptop} />
        </div> */}
      </div>
      <p></p>
    </div>
  );
};

export default About;
