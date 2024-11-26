import React from 'react';

const Resume = () => {
  const technicalProficiencies = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'TypeScript',
    'HTML5 & CSS3',
    'Bootstrap',
    'SQL & PostgreSQL',
    'MongoDB',
    'Git & GitHub',
    'RESTful APIs',
    'Agile Development',
    'Conversational AI (NLU/NLP)',
  ];

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Resume</h1>

      {/* Technical Proficiencies Section */}
      <section className="mb-5">
        <h2 className="mb-3" style={{ color: 'var(--primary)' }}>
          Technical Proficiencies
        </h2>
        <ul className="list-group">
          {technicalProficiencies.map((skill, index) => (
            <li
              key={index}
              className="list-group-item"
              style={{
                color: 'var(--text)',
                backgroundColor: 'var(--background)',
                borderLeft: `4px solid var(--secondary)`,
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Download Resume Link */}
      <section className="text-center">
        <a
          href="https://docs.google.com/document/d/16asbIVwAdExMqMe3PX2QQ8ttmSY3K0f8/edit?usp=share_link&ouid=112981711694799420081&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4"
        >
          Download Resume
        </a>
      </section>
    </div>
  );
};

export default Resume;