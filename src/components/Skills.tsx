import React from 'react';
import { Code, Database, TestTube, Brain, Wrench, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Automation",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "Selenium WebDriver", level: 90 },
        { name: "Robot Framework", level: 90 },
        { name: "Pytest", level: 85 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Natural Language Processing", level: 85 },
        { name: "Audio Analytics", level: 80 },
        { name: "Classification Models", level: 85 },
        { name: "Scikit-learn", level: 80 }
      ]
    },
    {
      title: "Testing Frameworks",
      icon: <TestTube className="w-6 h-6" />,
      skills: [
        { name: "API Testing", level: 90 },
        { name: "UI Testing", level: 85 },
        { name: "Database Testing", level: 80 },
        { name: "ML Model Testing", level: 85 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "SQL", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Jenkins", level: 80 },
        { name: "Git/GitHub", level: 85 }
      ]
    },
    {
      title: "Python Libraries",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Pandas & NumPy", level: 85 },
        { name: "NLTK & Gensim", level: 80 },
        { name: "Matplotlib", level: 75 },
        { name: "OpenCV", level: 70 }
      ]
    },
    {
      title: "Domain Expertise",
      icon: <Award className="w-6 h-6" />,
      skills: [
        { name: "Healthcare Testing", level: 85 },
        { name: "Finance Domain", level: 80 },
        { name: "Telecom Testing", level: 85 },
        { name: "Audio Processing", level: 80 }
      ]
    }
  ];

  const certifications = [
    "AiU Certified Tester in Artificial Intelligence",
    "Neural Networking Model using JULIA (Workshop)",
    "NLP and Computer Vision Training Provider",
    "PG Diploma in Data Science (Grade A)",
    "B.E Electronics & Communication (76.30%)"
  ];

  const tools = [
    "Jupyter Notebook", "PyCharm", "Postman", "HP UFT", "GitLab", "GitHub", 
    "TestRail", "BitBucket", "Jenkins", "qTest", "Rally", "JIRA", "ALM"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills & Expertise</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technical skills developed through 12 years of hands-on experience in 
            test automation, machine learning model testing, and quality assurance across multiple domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-teal-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Certifications & Education
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-slate-50 rounded-lg"
                >
                  <div className="w-3 h-3 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-slate-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium hover:bg-teal-200 transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Specialized Expertise
          </h3>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            With over 5 years of specialized experience in Machine Learning model testing, I bring unique 
            expertise in validating ML algorithms, NLP models, and audio analytics systems. My background 
            combines traditional software testing with cutting-edge AI/ML validation techniques, making me 
            well-equipped to handle complex testing challenges in modern software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;