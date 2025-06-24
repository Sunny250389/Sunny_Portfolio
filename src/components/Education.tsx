import React from 'react';
import { GraduationCap, Award, Book } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "PG Diploma in Data Science",
      school: "IMS ProSchool",
      university: "Maharashtra University",
      location: "Mumbai, Maharashtra",
      period: "2018",
      grade: "Grade A",
      details: "Comprehensive program covering Machine Learning, Data Analytics, and Statistical Modeling",
      achievements: [
        "Completed capstone projects on Time Series forecasting and Classification",
        "Developed POC on Computer Vision using OpenCV",
        "Specialized in NLP and Sentiment Analysis techniques"
      ]
    },
    {
      degree: "B.E (Electronics & Communication)",
      school: "Annamalai University",
      university: "Annamalai University",
      location: "Tamil Nadu",
      period: "2011",
      grade: "76.30%",
      details: "Strong foundation in Electronics, Communication Systems, and Signal Processing",
      achievements: [
        "Solid understanding of signal processing fundamentals",
        "Knowledge of communication protocols and systems",
        "Foundation for later specialization in audio analytics"
      ]
    }
  ];

  const certifications = [
    {
      title: "AiU Certified Tester in Artificial Intelligence",
      provider: "Artificial Intelligence University",
      year: "2023",
      description: "Specialized certification in AI/ML model testing and validation"
    },
    {
      title: "Neural Networking Model using JULIA",
      provider: "Technical Workshop",
      year: "2022",
      description: "Advanced workshop on neural network implementation and optimization"
    }
  ];

  const capstoneProjects = [
    "POC on sanity test automation using Computer Vision (OpenCV)",
    "Store sales prediction using Time Series analysis on 1-year historical data",
    "Shipment delivery prediction using Classification algorithms and Python",
    "Sentiment Analysis on Twitter data for Amazon, Flipkart, and Snapdeal"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Strong educational foundation in Electronics & Communication Engineering complemented by 
            specialized training in Data Science and AI/ML testing methodologies.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 text-teal-600 mr-3" />
            Academic Credentials
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">
                      {edu.degree}
                    </h4>
                    <h5 className="text-xl text-teal-600 font-semibold mb-2">
                      {edu.school}
                    </h5>
                    <p className="text-slate-600 mb-2">{edu.details}</p>
                  </div>
                  <div className="lg:text-right">
                    <div className="text-slate-600 mb-1">{edu.period}</div>
                    <div className="text-slate-600 mb-1">{edu.location}</div>
                    <div className="text-slate-800 font-semibold">{edu.grade}</div>
                  </div>
                </div>

                <div>
                  <h6 className="text-lg font-semibold text-slate-800 mb-3">
                    Key Highlights:
                  </h6>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <Award className="w-5 h-5 text-teal-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-slate-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Award className="w-8 h-8 text-teal-600 mr-3" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-slate-800 mb-2">
                  {cert.title}
                </h4>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-teal-600 font-semibold">
                    {cert.provider}
                  </span>
                  <span className="text-slate-600">
                    {cert.year}
                  </span>
                </div>
                <p className="text-slate-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Book className="w-8 h-8 text-teal-600 mr-3" />
            Capstone Projects (PG Diploma Curriculum)
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {capstoneProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700 font-medium">{project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Continuous Learning & Training
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Beyond formal education, I actively engage in continuous learning and knowledge sharing. 
            I have provided training sessions on NLP and Computer Vision to testing teams, staying 
            current with the latest developments in AI/ML testing methodologies.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My commitment to professional development ensures I remain at the forefront of testing 
            technologies and best practices in the rapidly evolving field of software quality assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;