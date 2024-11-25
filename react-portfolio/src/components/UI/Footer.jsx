import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center py-3">
      <div className="container">
        <p>Connect with me:</p>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="GitHub"
          >
            <i className="bi-github fs-4"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="LinkedIn"
          >
            <i className="bi-linkedin fs-4"></i>
          </a>
          <a
            href="https://dev.to/yourdevto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="Dev.to"
          >
            <i className="bi-file-code fs-4"></i>
          </a>
        </div>
        <p className="mt-3 mb-0">© 2024 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;