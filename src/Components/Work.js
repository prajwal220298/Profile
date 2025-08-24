import "./Work.css";

const Work = () => {
  return (
    <div className="historyContainer">
      <h1>Work History </h1>
      <div class="historyLayoutContainer">
        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Telecom and Device Management System</h3>
            <span></span>
            <p>
              Java - Springboot based backend microservice application offering
              RESTful APIs for managing telecom subscriptions, SIM operations,
              and router/modem actions. It processes requests for SIM changes
              including activations, reissuance, and exchanges and also handles
              router operations which includes configuration related changes of
              router by validating user identities and managing device
              inventories in real time.
              <br />
              <strong>Responsibilities </strong>
              <br />
              <strong>Process: </strong>
              Implement new features/RESTful APIs in Application. Working on bug
              fixes and new features added to the website <br />
              <strong>Environment/Tools: </strong> Java8, Springboot, Maven,
              Jira, Agile, GIT, Jenkins, Ansible, Kafka
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-left">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Home Network Management Application</h3>
            <span></span>
            <p>
              React-based customer-facing SPA hosted on AWS, enabling users to
              remotely manage their home networks. Features include WiFi
              configuration, parental controls, booster management, and other
              comprehensive network settings accessible securely from anywhere
              via the Internet.
              <br />
              <strong> Responsibilities </strong>
              <br />
              <strong>Process: </strong>
              Designing and development frontend Application by integrating with
              RESTful APIs <br />
              <strong>Environment/Tools:</strong> React-JS, Redux, Typescript,
              Agile, JIRA, GIT, Stylus, AWS S3 bucket, Jenkins
            </p>
          </div>
        </div>

        <div class="timeline-block timeline-block-right">
          <div class="marker"></div>
          <div class="timeline-content">
            <h3>Weather APP</h3>
            <span></span>
            <p>
              A responsive weather app built with React, Typescript, Redux,
              Stylus. Uses the Google Maps API to search for locations and
              autocompletion, and the OpenWeather API to retrieve weather data.
              It also provides the weather information of the day. <br />
              <strong>Responsibilities </strong>
              <br />
              <strong>Process: </strong> Designing and development frontend
              Application.
              <br />
              <strong>Environment/Tools: </strong> React-JS, Typescript, Redux,
              stylus, Git
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
