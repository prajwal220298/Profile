import "./Cover.css";
import { FaPrayingHands } from "react-icons/fa";

const Cover = () => {
  return (
    <div className="coverContainer">
      <div className="overlay"></div>
      <div className="coverContent">
        <h1>Prajwal B J</h1>
        <p>
          FullStack Developer <span>|</span> Java
          <span> |</span> React
        </p>
        <h2>
          Hi! Welcome{" "}
          <span>
            <FaPrayingHands />
          </span>{" "}
          ... scroll down to explore my profile
        </h2>
      </div>
      <div className="scrollDown">
        <a href="#summary">
          <span className="scrollArrow"></span>
          <span className="scrollArrow"></span>
          <span className="scrollArrow"></span>
        </a>
      </div>
    </div>
  );
};

export default Cover;
