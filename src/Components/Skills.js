import "./Skills.css";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="skillsHeading">
        <h1>Professional Skills</h1>
        <p>
          My Primary skills are Java8, SpringBoot, ReactJS, Typescript and
          Redux.
        </p>
      </div>
      <div className="skills">
        <div class="skill">
          <div class="skill-name">Java8</div>
          <div
            class="skill-percentage"
            per="75%"
            style={{ maxWidth: "75%" }}
          ></div>
          <div class="stripesLoader" style={{ backgroundSize: "185%" }}></div>
        </div>
        <div class="skill">
          <div class="skill-name">SpringBoot</div>
          <div
            class="skill-percentage"
            per="70%"
            style={{ maxWidth: "70%" }}
          ></div>
          <div class="stripesLoader" style={{ backgroundSize: "168%" }}></div>
        </div>
        <div class="skill">
          <div class="skill-name">ReactJS</div>
          <div
            class="skill-percentage"
            per="65%"
            style={{ maxWidth: "65%" }}
          ></div>
          <div class="stripesLoader" style={{ backgroundSize: "151%" }}></div>
        </div>
        <div class="skill">
          <div class="skill-name">Typescript</div>
          <div
            class="skill-percentage"
            per="60%"
            style={{ maxWidth: "60%" }}
          ></div>
          <div class="stripesLoader" style={{ backgroundSize: "134%" }}></div>
        </div>
        <div class="skill">
          <div class="skill-name">Redux</div>
          <div
            class="skill-percentage"
            per="60%"
            style={{ maxWidth: "60%" }}
          ></div>
          <div class="stripesLoader" style={{ backgroundSize: "134%" }}></div>
        </div>
      </div>
      <div className="otherSkills">
        <p>My Other skills are as follows...</p>
        <div className="otherSkillsColumn">
          <div className="leftInfo">
            <p>Backend:</p>
            <p>Frontend:</p>
            <p>Database:</p>
            <p>Testing:</p>
            <p>Tools:</p>
            <p>DevOps:</p>
            <p>Domain:</p>
          </div>
          <div className="rightInfo">
            <p>Microservices, REST APIs</p>
            <p>HTML5, CSS3</p>
            <p>Redis, PostgreSQL</p>
            <p>JUnit, Jest</p>
            <p>Kafka, GIT, Maven, Jira, SonarQube, Agile SDLC</p>
            <p>Jenkins, Docker, CI/CD, AWS</p>
            <p>Telecommunication, Cable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
