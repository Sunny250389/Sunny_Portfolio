import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Test Automation Lead",
      company: "Tata Consultancy Services",
      location: "Bangalore, Karnataka",
      period: "Nov 2022 - Current",
      description: "Leading test automation initiatives for Nordea Bank project, creating comprehensive automation frameworks using Robot Framework and Python.",
      achievements: [
        "Created automation framework using Robot Framework for Finance Project",
        "Developed API tests for connected applications and Pega workflows",
        "Integrated qTest for reporting and used BitBucket for version control",
        "Implemented CI/CD pipelines using Jenkins for automated testing"
      ]
    },
    {
      title: "Test Lead",
      company: "Smarsh",
      location: "Remote",
      period: "Feb 2022 - July 2022",
      description: "Led testing efforts for Conduct Intelligence project focusing on audio analytics and transcription services.",
      achievements: [
        "Validated audio files for different languages using Pytest framework",
        "Created Robot Framework for microservices validation related to Audio Analytics",
        "Implemented Kafka message validation for transcription microservices",
        "Used Github for version control and Concourse for deployment automation"
      ]
    },
    {
      title: "Senior Test Engineer",
      company: "IQVIA",
      location: "Bangalore, Karnataka",
      period: "Feb 2020 - Feb 2022",
      description: "Specialized in NLP and document digitization testing for healthcare domain applications.",
      achievements: [
        "Validated PDF and Word protocol document digitization using NLP",
        "Created Pytest frameworks for intermediate file validation",
        "Performed API testing using Postman and Python for eTMF services",
        "Implemented UI automation using Selenium WebDriver and Python"
      ]
    },
    {
      title: "Senior Test Engineer",
      company: "CenturyLink (Lumen)",
      location: "Bangalore, Karnataka",
      period: "Jan 2017 - Feb 2020",
      description: "Developed ML-based testing solutions and automation frameworks for telecom domain applications.",
      achievements: [
        "Built ML models for defect prediction and module identification from user stories",
        "Achieved 75% accuracy in optical equipment failure prediction using sensor data",
        "Created automation scripts using UFT for WFMT, Salesforce, and ARMOR applications",
        "Implemented multi-label classification for regression test case selection"
      ]
    },
    {
      title: "Test Analyst",
      company: "IBM",
      location: "Bangalore, Karnataka",
      period: "March 2012 - June 2016",
      description: "Performed comprehensive testing across multiple domains including telecom, insurance, and data management.",
      achievements: [
        "Tested ETL job runs on DataStage and validated results using SQL queries",
        "Created and maintained automation scripts using QTP",
        "Used IBM OPTIM for data retrieval and environment cloning",
        "Successfully deployed ATA for regression testing automation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            12 years of comprehensive testing experience across various domains including healthcare, 
            finance, telecom, and audio analytics with expertise in both traditional and ML-based testing approaches.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {exp.title}
                    </h3>
                    <h4 className="text-xl text-teal-600 font-semibold mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:text-right">
                    <div className="flex items-center text-slate-600 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h5 className="text-lg font-semibold text-slate-800 mb-3">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;