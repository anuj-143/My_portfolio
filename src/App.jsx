import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaJava, FaDocker, FaGit,
  FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt
} from 'react-icons/fa'
import { 
  SiJavascript, SiMysql, SiHtml5, SiCss3
} from 'react-icons/si'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [hoveredProject, setHoveredProject] = useState(null)

  const personalInfo = {
    name: "Anuj Kumar",
    title: "Full Stack Developer",
    profileImage: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
    about: "Hi! I'm Anuj Kumar a passionate third-year B.Tech student specializing in Computer Science and Engineering at Parul University. I have a keen interest in exploring the dynamic world of technology and innovation. Whether it's coding, problem-solving, or building creative solutions, I'm always eager to learn and grow. My academic journey has equipped me with a strong foundation in programming, data structures, and algorithms, alongside exposure to modern tools and technologies. I'm particularly interested in web development, Full Stack Development, MERN Stack etc. I strive to combine my technical knowledge with creativity to develop impactful projects and solutions.",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Core Java", icon: <FaJava /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Git", icon: <FaGit /> }
    ],
    projects: [
      {
        title: "File comprision using huffman coding",
        description: "The File Compressor is a Python-based application with a graphical user interface (GUI) built using tkinter. It allows users to easily compress files into zip archives and decompress zip files into specified directories.",
        image: "https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7135.jpg",
        technologies: ["Python", "GUI"],
        liveLink: "https://example.com/code-assistan",
        githubLink: "https://github.com/anuj-143/DSA_Project"
      },
      {
        title: "Distributed Database System",
        description: "Implemented a scalable distributed database system with fault tolerance and data replication. Supports high availability and horizontal scaling.",
        image: "https://img.freepik.com/free-vector/server-room-rack-blockchain-technology-token-api-access-data-center_39422-442.jpg",
        technologies: ["Java", "Docker", "Redis", "PostgreSQL"],
        liveLink: "https://example.com/distributed-db",
        githubLink: "https://github.com/username/distributed-db"
      },
      {
        title: "Real-time Analytics Platform",
        description: "Built a real-time data analytics platform processing millions of events per second. Features interactive dashboards and customizable alerts.",
        image: "https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg",
        technologies: ["React", "Node.js", "Kafka", "ElasticSearch"],
        liveLink: "https://example.com/analytics",
        githubLink: "https://github.com/username/analytics"
      }
    ],
    contact: {
      email: "anujkeshri449@gmail.com",
      linkedin: "https://www.linkedin.com/in/anuj-keshri-6346442a7/",
      github: "github.com/anuj-143/",
      leetcode: "https://leetcode.com/anujkeshri449/"
    }
  }

  return (
    <div className="min-h-screen bg-dark-100 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src={personalInfo.profileImage}
              alt="Profile"
              className="w-48 h-48 rounded-full border-4 border-accent-100 shadow-lg shadow-accent-100/20"
            />
            <div>
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-bold text-white mb-2"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-accent-100"
              >
                {personalInfo.title}
              </motion.h2>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {['about', 'skills', 'projects', 'contact'].map((section) => (
              <motion.button
                key={section}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-nav ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </nav>
        </motion.header>

        <main>
          <AnimatePresence mode="wait">
            {activeSection === 'about' && (
              <motion.section
                key="about"
                {...fadeIn}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
                <p className="text-gray-300 leading-relaxed">{personalInfo.about}</p>
              </motion.section>
            )}

            {activeSection === 'skills' && (
              <motion.section
                key="skills"
                {...fadeIn}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {personalInfo.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      whileHover={{ scale: 1.05, backgroundColor: '#414868' }}
                      className="bg-dark-200 p-4 rounded-lg flex flex-col items-center gap-2 transition-colors duration-300"
                    >
                      <span className="text-3xl text-accent-100">{skill.icon}</span>
                      <span className="text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}

            {activeSection === 'projects' && (
              <motion.section
                key="projects"
                {...fadeIn}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Projects</h3>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {personalInfo.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      initial="rest"
                      whileHover="hover"
                      animate={hoveredProject === index ? "hover" : "rest"}
                      onHoverStart={() => setHoveredProject(index)}
                      onHoverEnd={() => setHoveredProject(null)}
                      className="relative bg-dark-200 rounded-xl overflow-hidden group"
                    >
                      <motion.div
                        className="aspect-video w-full overflow-hidden"
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-dark-100/95 to-dark-100/40 p-6 flex flex-col justify-end"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.h4 
                          className="text-xl font-semibold text-white mb-2"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.title}
                        </motion.h4>
                        
                        <motion.p 
                          className="text-gray-300 text-sm mb-4"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <motion.div 
                          className="flex flex-wrap gap-2 mb-4"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i}
                              className="text-xs px-2 py-1 bg-accent-100/20 text-accent-100 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </motion.div>
                        
                        <motion.div 
                          className="flex gap-4"
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                        >
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-white bg-accent-100 hover:bg-accent-200 px-4 py-2 rounded-lg transition-colors duration-300"
                          >
                            <FaExternalLinkAlt />
                            Live Preview
                          </a>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-white bg-dark-300 hover:bg-accent-100/20 px-4 py-2 rounded-lg transition-colors duration-300"
                          >
                            <FaGithub />
                            Code
                          </a>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}

            {activeSection === 'contact' && (
              <motion.section
                key="contact"
                {...fadeIn}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Contact Me</h3>
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="bg-dark-200 p-6 rounded-lg"
                >
                  <motion.a
                    variants={item}
                    href={`mailto:${personalInfo.contact.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-accent-100 mb-4 transition-colors duration-300"
                  >
                    <FaEnvelope className="text-xl" />
                    <span>{personalInfo.contact.email}</span>
                  </motion.a>
                  <motion.a
                    variants={item}
                    href={`https://${personalInfo.contact.linkedin}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-accent-100 mb-4 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                    variants={item}
                    href={`https://${personalInfo.contact.github}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-accent-100 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </motion.a>
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default App