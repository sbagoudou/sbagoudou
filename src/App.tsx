import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, BookOpen, Code2, Brain, Trophy, ExternalLink, Star, GitBranch } from 'lucide-react';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const techLogos = {
    'Java': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    'Spring': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg',
    'Angular': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg',
    'Docker': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
    'PostgreSQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
    'Kubernetes': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.header
        className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text"
            whileHover={{ scale: 1.02 }}
          >
            Samir BAGOUDOU
          </motion.h1>
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/sbagoudou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sbagoudou-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:samir.bagoudou@gmail.com"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </motion.header>

      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-24 relative"
          {...fadeIn}
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-indigo-100/50 to-purple-100/50 rounded-3xl blur-xl"></div>
          </div>
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
            <motion.div
              className="relative w-40 h-40 mx-auto mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-white"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0"
                whileHover={{ opacity: 0.2 }}
              />
            </motion.div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Fullstack Software Engineer</h2>
            <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">Software engineer since 2018 in Java and its related framework, I love crafting elegant solutions to complex problems with a passion for clean code and innovative technologies.</p>
            <motion.a
              href="/SAMIR_BAGOUDOU_RESUME.pdf"
              download
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-6 h-6 mr-3" />
              Download Resume
            </motion.a>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="mb-24"
          {...fadeIn}
        >
          <h3 className="text-3xl font-bold mb-12 flex items-center">
            <Code2 className="w-8 h-8 mr-3 text-indigo-600" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Technical Expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techLogos).map(([skill, logo], index) => (
              <motion.div
                key={skill}
                className="group relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-4">
                  <img src={logo} alt={skill} className="w-12 h-12" />
                  <h4 className="text-xl font-semibold text-gray-900">{skill}</h4>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Additional Skills Section */}
        <motion.section
          className="mb-24"
          {...fadeIn}
        >
          <h3 className="text-3xl font-bold mb-12 flex items-center">
            <Brain className="w-8 h-8 mr-3 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Education & Skills</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Column */}
            <motion.div
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Education</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-lg font-semibold text-indigo-600">Engineering Degree in Computer Science</h5>
                  <p className="text-gray-700">Université de Technologie de Belfort-Montbéliard</p>
                  <p className="text-sm text-gray-500">2015 - 2018 • Belfort, 90</p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-indigo-600">Bachelor's Degree in Computer Science</h5>
                  <p className="text-gray-700">Ecole Supérieure des Télécommunications du Bénin</p>
                  <p className="text-sm text-gray-500">2012 - 2014 • Cotonou</p>
                </div>
              </div>
            </motion.div>

            {/* Skills & Languages Column */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {/* Professional Skills */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Professional Skills</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Strong team spirit and collaboration</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Quick integration into new teams and projects</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Easily adapts to new environments</span>
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Languages</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-gray-700">French</span>
                      <span className="text-indigo-600">Native</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-indigo-600 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-gray-700">English</span>
                      <span className="text-indigo-600">Fluent</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-indigo-600 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-24"
          {...fadeIn}
        >
          <h3 className="text-3xl font-bold mb-12 flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-purple-600" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Professional Journey</span>
          </h3>
          <div className="space-y-12">
            {[
              {
                title: 'R&D Engineer',
                company: 'VIALINK',
                period: '2021 - Present',
                description: 'Contributing to design and development of new features while maintaining high code quality standards.',
                achievements: [
                  'Contribute to the design and development of new features',
                  'Analyze and resolve production issues and bugs',
                  'Write unit tests, integration tests, and end-to-end tests',
                  'CI/CD pipeline setup and maintenance',
                  'Facilitate SCRUM ceremonies as Scrum Master'
                ]
              },
              {
                title: 'Software Engineer',
                company: 'Sopra Steria',
                period: '2018 - 2021',
                description: 'Full-time software engineer position focusing on client requirements and production stability.',
                achievements: [
                  'Analyzed client requirements and wrote specifications',
                  'Developed requested features including test documentation',
                  'Diagnosed and resolved production issues and bugs',
                  'Managed CI/CD with Jenkins and Ansible scripts'
                ]
              },
              {
                title: 'Fullstack Developer Intern',
                company: 'Sopra Steria',
                period: '2018',
                description: 'Internship position focusing on full-stack development.',
                achievements: [
                  'Analyzed client requirements and wrote specifications',
                  'Developed requested features with documentation',
                  'Diagnosed and resolved production issues'
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={job.title}
                className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-l-2xl"></div>
                <div className="ml-2">
                  <h4 className="text-2xl font-bold text-gray-900">{job.title}</h4>
                  <p className="text-lg font-semibold text-indigo-600 mb-2">{job.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{job.period}</p>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <Star className="w-5 h-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          {...fadeIn}
        >
          <h3 className="text-3xl font-bold mb-12 flex items-center">
            <Trophy className="w-8 h-8 mr-3 text-blue-600" />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Technical Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Java Microservices Architecture',
                description: 'Designed and implemented scalable microservices using Spring Boot and Spring Cloud',
                tech: ['Spring Boot', 'Spring Cloud', 'Docker'],
                metrics: ['High Availability', 'Scalable Architecture', 'Microservices'],
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'CI/CD Pipeline Optimization',
                description: 'Implemented and optimized automated deployment pipelines with comprehensive testing',
                tech: ['Jenkins', 'Docker', 'Ansible'],
                metrics: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code'],
                image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'API Development & Integration',
                description: 'Developed RESTful APIs and integrated third-party services with high performance',
                tech: ['Spring REST', 'PostgreSQL', 'Hibernate'],
                metrics: ['REST Architecture', 'API Security', 'Performance Optimization'],
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'Frontend Development',
                description: 'Built responsive and interactive web applications using modern frameworks',
                tech: ['Angular', 'TypeScript', 'RxJS'],
                metrics: ['Responsive Design', 'Component Architecture', 'State Management'],
                image: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 mix-blend-multiply" />
                </div>
                <div className="relative p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">{achievement.title}</h4>
                  <p className="text-gray-100 mb-6">{achievement.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {achievement.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {achievement.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center text-white">
                        <Star className="w-4 h-4 mr-2" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm mt-24 py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-gray-600"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 Samir BAGOUDOU • Paris, France
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;