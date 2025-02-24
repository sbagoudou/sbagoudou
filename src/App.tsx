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
    'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    'TypeScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    'Node.js': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    'AWS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg',
    'Docker': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg'
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
            John Doe
          </motion.h1>
          <div className="flex space-x-6">
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="mailto:john@example.com" 
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
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80"
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-2xl ring-4 ring-white"
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0"
                whileHover={{ opacity: 0.2 }}
              />
            </motion.div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Senior Software Developer</h2>
            <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">Crafting elegant solutions to complex problems with a passion for clean code and innovative technologies</p>
            <motion.button
              className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-6 h-6 mr-3" />
              Download Resume
            </motion.button>
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
                title: 'Senior Software Engineer',
                company: 'Tech Corp',
                period: '2020 - Present',
                description: 'Led development of microservices architecture, improving system scalability by 300%',
                achievements: [
                  'Architected and implemented cloud-native solutions',
                  'Mentored junior developers and led technical interviews',
                  'Introduced automated testing, achieving 90% coverage'
                ]
              },
              {
                title: 'Software Engineer',
                company: 'StartUp Inc',
                period: '2018 - 2020',
                description: 'Developed and maintained multiple React applications with TypeScript',
                achievements: [
                  'Reduced application bundle size by 45%',
                  'Implemented CI/CD pipelines',
                  'Led migration from JavaScript to TypeScript'
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
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Featured Projects</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-commerce Platform',
                description: 'Built a full-stack e-commerce platform using Next.js and Node.js',
                tech: ['Next.js', 'Node.js', 'MongoDB'],
                metrics: ['50K+ Monthly Users', '99.9% Uptime', '2s Avg Load Time'],
                image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              },
              {
                title: 'AI Chat Application',
                description: 'Developed a real-time chat application with AI integration',
                tech: ['React', 'Python', 'TensorFlow'],
                metrics: ['1M+ Messages', '98% Accuracy', '10ms Response Time'],
                image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-indigo-600/90 to-purple-600/90 mix-blend-multiply" />
                </div>
                <div className="relative p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-100 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center text-white">
                        <GitBranch className="w-4 h-4 mr-2" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    className="mt-6 inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </motion.button>
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
            © 2024 John Doe. Crafted with passion and precision.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;