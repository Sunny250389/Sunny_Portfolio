import React from 'react';
import { ExternalLink, Github, Building2, Headphones, FileText, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Nordea Bank Automation Framework",
      description: "Comprehensive automation framework using Robot Framework and Python for Pega application testing and API validation.",
      technologies: ["Robot Framework", "Python", "Pega", "qTest", "Jenkins", "BitBucket"],
      icon: <Building2 className="w-8 h-8" />,
      features: [
        "Automation framework for Pega application flows",
        "API testing for connected applications",
        "Integration with qTest for reporting",
        "CI/CD pipeline implementation"
      ],
      impact: "Streamlined testing processes for banking workflows and improved deployment efficiency",
      period: "Nov 2022 - Current"
    },
    {
      title: "Conduct Intelligence - Audio Analytics",
      description: "Audio communication to text conversion system for audit purposes with multi-language support and transcript validation.",
      technologies: ["Python", "Audio Analytics", "Pytest", "Robot Framework", "Kafka"],
      icon: <Headphones className="w-8 h-8" />,
      features: [
        "Multi-language audio file validation",
        "Transcript accuracy testing using Pytest",
        "Kafka message validation for microservices",
        "Automated transcription quality assurance"
      ],
      impact: "Enhanced audit capabilities through automated audio analysis and validation",
      period: "Feb 2022 - July 2022"
    },
    {
      title: "Protocol Digitalization System",
      description: "NLP-based system for digitizing PDF and Word protocol documents with comprehensive validation frameworks.",
      technologies: ["NLP", "Python", "Pytest", "Selenium", "eTMF Services"],
      icon: <FileText className="w-8 h-8" />,
      features: [
        "PDF and Word document digitization",
        "Intermediate file validation using Pytest",
        "API response validation with Postman",
        "UI automation using Selenium WebDriver"
      ],
      impact: "Automated document processing workflows and improved data extraction accuracy",
      period: "Nov 2020 - Feb 2022"
    },
    {
      title: "ML-Based Defect Prediction",
      description: "Machine learning models for predicting defects and identifying relevant modules from user story descriptions.",
      technologies: ["Python", "Scikit-learn", "NLP", "Classification", "Rally"],
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Multi-label classification for module identification",
        "Defect prediction using historical data",
        "User story analysis and processing",
        "Automated regression test case selection"
      ],
      impact: "Reduced testing effort by 40% through intelligent test case selection and early defect detection",
      period: "Jan 2017 - Feb 2020"
    }
  ];

  const additionalProjects = [
    "POC on sanity test automation using Computer Vision (OpenCV)",
    "Store sales prediction using Time Series analysis",
    "Shipment delivery prediction using Classification algorithms",
    "Sentiment Analysis on Twitter data for e-commerce platforms",
    "Optical Equipment Failure Prediction (75% accuracy achieved)"
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my most impactful testing and automation projects, demonstrating expertise 
            in test automation, ML model validation, and comprehensive quality assurance across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="text-teal-600 mr-4">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500">{project.period}</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-slate-600 flex items-start">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Impact:
                  </h4>
                  <p className="text-slate-600">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Additional Projects & POCs</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {additionalProjects.map((project, index) => (
              <div key={index} className="flex items-start">
                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-slate-600">{project}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Interested in learning more about my projects or discussing potential collaborations?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-all duration-200 transform hover:scale-105"
          >
            Get In Touch
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;