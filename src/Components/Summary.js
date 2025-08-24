import "./Summary.css";
import ProfilePhoto from "../assets/Prajwal.jpg";
// import { FaGithubSquare, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import Resume from "../assets/Prajwal_BJ_new.pdf";

const Summary = () => {
  return (
    <div id="summary" className="summaryContainer">
      <div className="summaryHeading">
        <h1>Profile Summary</h1>
      </div>
      <div className="summaryContent">
        <div className="summaryProfileImage">
          <img src={ProfilePhoto} alt="profile-pic" width={150} height={150} />
        </div>
        <div className="summaryDescription">
          <p>
            As a result-driven Full Stack Developer with 4+ years of experience
            in software development, I've provided high impact enterprise-grade
            web applications for various projects and clients. My expertise lies
            in developing and implementing new soultions using Java, Spring
            Boot, React, TypeScript, and cloud solutions. I'm skilled in
            building scalable microservices, leading cross-functional teams, and
            ensuring high-quality delivery under agile environments. Adept at
            performance tuning, system design, and mentoring engineers to
            achieve business goals. My responsibilities have included designing
            and developing the frontend and backend systems, debugging and
            testing new features, and collaborating with team members to
            brainstorm innovative ideas.
          </p>
        </div>
      </div>
      <div className="summaryInfo">
        <div className="cardContainer">
          <div className="card">
            <h4 className="card__header">
              <GiAchievement color="#083508" fontSize="32px" />{" "}
              <span>Achievements</span>
            </h4>
            <ul className="card__body">
              <li>
                Promoted to Tech Lead within 4 years for outstanding technical
                performance, consistent delivery and leadership.
              </li>
              <li>
                Recipient of INSTA Award for exceptional project execution.
              </li>
              <li>Certifications: AWS Cloud Practitioner, AZ-900, DP-900.</li>
            </ul>
          </div>
        </div>
        {/* <div className="summaryIcon">
          <FaUserCircle color="#083508" fontSize="36px" />
        </div>
        <div className="summaryInfoColoumn">
          <div className="leftInfo">
            <p>Name</p>
            <p>Date of Birth</p>
            <p>Nationality</p>
          </div>
          <div className="rightInfo">
            <p>Prajwal B Jayachandra</p>
            <p>22nd February, 1998</p>
            <p>Indian</p>
          </div>
        </div> */}
        <div className="summaryButton">
          <a href="#contact">
            {" "}
            <button className="btn-1">Get In Touch ?</button>
          </a>

          <a href={Resume} download>
            {" "}
            <button className="btn-2">Get My CV ?</button>
          </a>
        </div>
        {/* <div className="socialMediaIcons">
          <div>
            <a
              rel="noreferrer"
              href="https://github.com/prajwal220298"
              target="_blank"
            >
              <FaGithubSquare color="#083508" fontSize="25px" />
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/prajwalbj"
              target="_blank"
            >
              <FaLinkedin color="#083508" fontSize="25px" />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Summary;
