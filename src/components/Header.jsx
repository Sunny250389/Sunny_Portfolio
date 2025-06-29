import React from 'react';
import { Code, Database, TestTube, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Test Automation',
      description:
        'Expert in creating automation frameworks using Python, Selenium, Robot Framework, and Pytest',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'ML Model Testing',
      description:
        'Specialized in testing Machine Learning algorithms including NLP, Audio Analytics, and Classification models',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'API & Database Testing',
      description:
        'Comprehensive experience in API testing, database validation, and microservices testing',
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Quality Assurance',
      description:
        '12 years of experience in various testing levels including Smoke, Integration, and Regression testing',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Senior Test Engineer with 12 years of comprehensive testing experience, including 5+ years
            specializing in Machine Learning model testing in healthcare and audio domains. Currently
            serving as Test Automation Lead at Tata Consultancy Services, leading automation initiatives
            for Nordea Bank project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 hover:border-teal-200"
            >
              <div className="text-teal-600 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">My Expertise</h3>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            I specialize in creating robust automation frameworks and testing Machine Learning models
            across various domains. My experience spans from traditional UI and API testing to advanced
            ML algorithm validation, including Natural Language Processing, Audio Analytics, and
            Computer Vision applications.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm passionate about leveraging cutting-edge testing methodologies and automation tools to
            ensure software quality and reliability. My approach combines technical expertise with a
            deep understanding of business requirements to deliver comprehensive testing solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
