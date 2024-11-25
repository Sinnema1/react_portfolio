import React from 'react';
import photo from '../assets/profilePic.jpeg'; // Update with the correct path to your photo

const AboutMe = () => {
  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">About Me</h1>

      {/* Photo and Introduction */}
      <div className="row align-items-center mb-5">
        <div className="col-md-4 text-center mb-3">
          <img
            src={photo}
            alt="Your Name"
            className="rounded-circle img-fluid shadow"
            style={{ maxWidth: '200px' }}
          />
        </div>
        <div className="col-md-8">
          <p style={{ color: 'var(--text)' }}>
            Hi there! I'm a passionate developer with experience in building
            modern, responsive, and accessible web applications. I enjoy
            creating solutions that make life easier and believe in continuous
            learning to refine my craft.
          </p>
          <p style={{ color: 'var(--text)' }}>
            My journey in software development began with a curiosity for how
            applications work under the hood. Over the years, I've built
            projects that showcase my ability to adapt, learn, and deliver
            quality code. When I'm not coding, I enjoy exploring new
            technologies, reading, and spending time outdoors.
          </p>
        </div>
      </div>

      {/* Featured Highlights */}
      <section className="features-icons bg-light text-center p-4 rounded shadow-sm">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0">
              <div
                className="features-icons-icon d-flex justify-content-center align-items-center bg-primary text-white rounded-circle mb-3"
                style={{ width: '80px', height: '80px' }}
              >
                <i className="bi-people-fill fs-3"></i>
              </div>
              <h3 style={{ color: 'var(--primary)' }}>Collaborative</h3>
              <p className="lead mb-0" style={{ color: 'var(--text)' }}>
                Thrives in team environments and values effective communication.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0">
              <div
                className="features-icons-icon d-flex justify-content-center align-items-center bg-primary text-white rounded-circle mb-3"
                style={{ width: '80px', height: '80px' }}
              >
                <i className="bi-code-slash fs-3"></i>
              </div>
              <h3 style={{ color: 'var(--primary)' }}>Technical Expertise</h3>
              <p className="lead mb-0" style={{ color: 'var(--text)' }}>
                Skilled in React, JavaScript, TypeScript, and modern web frameworks.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-0">
              <div
                className="features-icons-icon d-flex justify-content-center align-items-center bg-primary text-white rounded-circle mb-3"
                style={{ width: '80px', height: '80px' }}
              >
                <i className="bi-brush fs-3"></i>
              </div>
              <h3 style={{ color: 'var(--primary)' }}>Design-Driven</h3>
              <p className="lead mb-0" style={{ color: 'var(--text)' }}>
                Focused on creating visually appealing and user-friendly interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;