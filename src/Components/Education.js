import "./Education.css";
import { FaUserGraduate, FaUniversity } from "react-icons/fa";

const Education = () => {
  return (
    <div className="educationContainer">
      <h1>Education</h1>
      <div className="eduCardContainer">
        <div class="eduCard" data-label="2016- 2020">
          <div class="eduCard__container">
            <h4 class="eduCard__header">
              <span>
                <FaUserGraduate />
              </span>
              Bachelor of Engineering
            </h4>
            <h4 class="eduCard__header">
              <span>
                <FaUniversity />
              </span>
              Dr.Ambedkar Institue of Technology, Bangalore
            </h4>

            <p class="eduCard__body">
              I pursued my engineering in Electronics and Communication from
              Dr.Ambedkar Institue of Technology, Bangalore. I have overall CGPA
              of 9.06 in my bachelor's degree.
            </p>
          </div>
        </div>
        <div class="eduCard" data-label="2014-2016">
          <div class="eduCard__container">
            <h4 class="eduCard__header">
              <span>
                <FaUserGraduate />
              </span>
              Pre-University
            </h4>
            <h4 class="eduCard__header">
              <span>
                <FaUniversity />
              </span>
              Vijaya Composite College, Bangalore
            </h4>

            <p class="eduCard__body">
              I completed class XI and XII in science stream(PCME) from Vijaya
              Composite Pre-university College, Banaglore(PU Board) with 89.5%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
