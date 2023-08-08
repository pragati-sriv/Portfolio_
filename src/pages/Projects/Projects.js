import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Explore my recent projects that showcase creativity and expertise in
          web development.
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={require("../../assets/Gym.jpeg")} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">React-Router</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Gym Website</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/pragati-sriv/Gym-Website"
                  >
                    Source
                  </a>
                  <a
                    className="ad-btn"
                    href="https://64a2be5aac33f70527fd48e8--benevolent-blancmange-768173.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={require("../../assets/Twiiter-img.png")} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Material-UI</span>
                  <span className="card-detail-badge">Redux</span>
                  <span className="card-detail-badge">React-Router</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Twitter-Clone</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/pragati-sriv/function-up-tiwtter-clone"
                  >
                    Source
                  </a>
                  <a
                    className="ad-btn"
                    href="https://legendary-crisp-0923a2.netlify.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img src={require("../../assets/hotel.png")} alt="project3" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">React-Router</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Hotel_Booking</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/pragati-sriv/Hotel_Booking"
                  >
                    Source
                  </a>
                  <a
                    className="ad-btn"
                    href="https://hotel-booking-ld4z.onrender.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
