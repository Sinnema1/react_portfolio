import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center py-3">
      <div className="container">
        <p>Connect with me:</p>
        <div className="d-flex justify-content-center">
          <a
            href="https://github.com/Sinnema1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="GitHub"
          >
            <i className="bi-github fs-4"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/justin-manning-3ab44932/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="LinkedIn"
          >
            <i className="bi-linkedin fs-4"></i>
          </a>
          <a
            href="https://dev.to/justin_01ba15bf6f"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
            aria-label="Dev.to"
          >
            <i className="bi-file-code fs-4"></i>
          </a>
        </div>
        <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} Justin Manning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;