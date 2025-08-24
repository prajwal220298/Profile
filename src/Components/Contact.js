import "./Contact.css";
import {
  FaPhoneSquareAlt,
  FaCopyright,
  FaLinkedin,
  FaGithubSquare,
  FaUserFriends,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="contactContainer">
      <div className="contantInfo">
        <h1>Contact</h1>
        <h3>I'd Love To Hear From You</h3>
        <p>
          You can reach out to me by any of the following means of
          communication. Looking forward to get in touch with you.
        </p>
      </div>
      <div className="footerInfo">
        <div>
          <span>
            <ImLocation2 />
          </span>
          <h4>Address</h4>
          <p>Bangalore, Karnataka</p>
        </div>
        <div>
          <span>
            <FaPhoneSquareAlt />
          </span>
          <h4>Call</h4>
          <p>+91 8277107756</p>
        </div>
        <div>
          <span>
            <MdEmail />
          </span>
          <h4>Email</h4>
          <p>prajwalbj1998@gmail.com</p>
        </div>
        <div>
          <span>
            <FaUserFriends />
          </span>
          <h4>Social Networks</h4>
          <div className="socialMediaIconsContact">
            <span>
              <a
                rel="noreferrer"
                href="https://github.com/prajwal220298"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </span>
            <span>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/prajwalbj"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>
          <span style={{ padding: "12px", fontSize: "19px" }}>
            {" "}
            <FaCopyright fontSize="12px" />
          </span>
          Copyright 2025 | Design by Prajwal
        </p>
      </div>
    </div>
  );
};

export default Contact;
