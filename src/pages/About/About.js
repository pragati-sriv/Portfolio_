import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQFYoRDvuvZGiw/profile-displayphoto-shrink_800_800/0/1683630076025?e=2147483647&v=beta&t=XEyi3i1ktYi7Gk5JLHQzPfVnyN_dgJbMZ62a4Zh5wyY"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Greetings! It's a pleasure to connect with you. I'm <strong>Pragati Srivastava</strong>, a spirited individual of 22 years from the enchanting city of Gorakhpur in Uttar Pradesh. With a <strong>Bachelor's degree in Engineering</strong> as part of my achievements, I stand at the cusp of an exciting journey. Fueled by ambition and unwavering optimism, I'm set to make my mark.

My aspiration to excel in the IT industry is unwavering. Proficient in fundamental tools such as <strong>HTML, CSS, JavaScript,</strong> and the dynamic realm of <strong>React</strong>, I have a solid foundation. This empowers me to conceptualize and craft remarkable creations.

Upon completing my Bachelor's degree, my insatiable thirst for solving intricate problems led me to the captivating world of technology. Amidst countless skill-enhancement platforms and tutorial videos, I felt lost. However, the FunctionUp bootcamp emerged as a guiding light, providing clarity amidst the confusion.

The FunctionUp bootcamp has proven to be transformative, already shaping my growth and understanding. I'm excited to share this journey with you, filled with enthusiasm, purpose, and the potential for a bright future.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
