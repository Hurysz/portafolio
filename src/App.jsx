import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Linkedin, Github, ExternalLink, X, Play, Send, Paperclip } from 'lucide-react';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    email: '',
    subject: '',
    message: '',
    attachment: null
  });
  const containerRef = useRef(null);
  
  const sections = ['Inicio', 'Sobre mí', 'Proyectos', 'Habilidades', 'Contacto'];
  
  const skills = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' }
  ];

const projects = [
    {
      id: 1,
      title: 'MasterOfTime - Sistema de Control de Asistencia QR',
      description: 'Sistema de escritorio innovador que automatiza completamente el registro de asistencia docente mediante códigos QR. Al escanear el código, el sistema captura automáticamente nombre, carrera, facultad, fecha y hora, enviando confirmación instantánea por email institucional. Desarrollado con arquitectura cliente-servidor robusta.',
      technologies: ['Java', 'MySQL', 'JavaFX', 'SMTP', 'QR Code API'],
      image: '/MasterOfTime.png',
      video: '/MasterOfTime.mp4',
      achievements: 'Proyecto oficialmente avalado por RENACYT 2023 para implementación en instituciones educativas. Reduce 80% el tiempo de registro manual y elimina errores humanos.',
      details: {
        features: ['Generación automática de códigos QR personalizados', 'Base de datos centralizada con MySQL', 'Notificaciones email automáticas', 'Interfaz intuitiva con JavaFX', 'Reportes estadísticos en tiempo real'],
        impact: 'Implementado exitosamente reduciendo colas de registro de 15 minutos a menos de 30 segundos'
      }
    },
    {
      id: 2,
      title: 'Traductor de Lenguaje de Señas Multilingüe con IA',
      description: 'Aplicación móvil revolucionaria que utiliza inteligencia artificial para la traducción bidireccional en tiempo real entre lenguaje de señas y texto/audio en múltiples idiomas. Incluye reconocimiento de gestos por cámara, síntesis de voz y generación de señas visuales animadas.',
      technologies: ['Python', 'Google Cloud Vision API', 'TensorFlow', 'OpenCV', 'Text-to-Speech API', 'MediaPipe'],
      image: '/Traductor de Lenguaje de Señas.png',
      video: '/Traductor de Lenguaje de Señas.mp4',
      achievements: 'Prototipo funcional con 92% de precisión en reconocimiento. Proyecto destacado por su impacto social en inclusión de personas con discapacidad auditiva.',
      details: {
        features: ['Reconocimiento de gestos en tiempo real', 'Soporte para 5 idiomas diferentes', 'Generación de avatares 3D para señas', 'Modo offline con diccionario local', 'Interfaz adaptativa para usuarios con discapacidad visual'],
        impact: 'Potencial de beneficiar a más de 70 millones de personas sordas mundialmente'
      }
    },
    {
      id: 3,
      title: 'Sistema Inteligente de Gestión TI para Clínicas',
      description: 'Aplicación móvil empresarial con algoritmos de priorización inteligente para optimizar la gestión de solicitudes de soporte técnico en redes de clínicas distribuidas. Incluye geolocalización, categorización automática de incidencias y dashboard analítico para toma de decisiones.',
      technologies: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'Firebase Analytics', 'Google Maps API'],
      image: '/Gestor de Solicitudes TI.png',
      video: '/Gestor de Solicitudes TI.mp4',
      achievements: 'Incremento del 65% en eficiencia operativa y 40% de mejora en satisfacción del cliente. Sistema escalable para múltiples organizaciones de salud.',
      details: {
        features: ['Algoritmo de priorización por criticidad médica', 'Geolocalización de incidencias', 'Chat en tiempo real con técnicos', 'Dashboard con métricas KPI', 'Integración con sistemas hospitalarios existentes'],
        impact: 'Reducción de tiempo promedio de resolución de 4 horas a 45 minutos'
      }
    }
  ];

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:larssonfhm@gmail.com',
      color: 'text-red-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Hurysz',
      color: 'text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/larsson-fernandez-8125b7375',
      color: 'text-blue-400'
    }
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [currentSection, sections.length]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías integrar con un servicio de email
    console.log('Formulario enviado:', contactForm);
    alert('Mensaje enviado correctamente!');
    setShowContactForm(false);
    setContactForm({ email: '', subject: '', message: '', attachment: null });
  };

  const handleFileChange = (e) => {
    setContactForm(prev => ({ ...prev, attachment: e.target.files[0] }));
  };

  // Ticket de disponibilidad
  const AvailabilityBadge = () => (
    <div className="fixed top-4 left-4 z-50 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-pulse">
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <span className="text-sm font-medium">Disponible</span>
    </div>
  );

  const NavigationWheel = () => {
    const radius = 80;
    const centerX = 100;
    const centerY = 100;
    
    return (
      <div className="fixed top-8 right-8 z-40">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <circle
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              className="transition-all duration-500"
              style={{
                transform: `rotate(${currentSection * 72}deg)`,
                transformOrigin: '100px 100px'
              }}
            />
            {sections.map((section, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              
              return (
                <g key={section}>
                  <circle
                    cx={x}
                    cy={y}
                    r="20"
                    fill={currentSection === index ? "rgba(59, 130, 246, 0.8)" : "rgba(15, 23, 42, 0.8)"}
                    stroke="rgba(59, 130, 246, 0.5)"
                    strokeWidth="2"
                    className="cursor-pointer transition-all duration-300 hover:fill-blue-500"
                    onClick={() => setCurrentSection(index)}
                  />
                  <text
                    x={x}
                    y={y + 35}
                    textAnchor="middle"
                    className="text-xs fill-blue-300 pointer-events-none"
                    style={{ fontSize: '10px' }}
                  >
                    {section}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    );
  };

  const SkillsCarousel = () => {
    return (
      <div className="relative overflow-hidden py-8">
        <div className="flex animate-spin-slow space-x-12" style={{
          animation: 'scrollHorizontal 20s linear infinite'
        }}>
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex flex-col items-center min-w-[120px]">
              <div className="w-16 h-16 mb-4 bg-slate-800/50 p-3 rounded-full backdrop-blur-sm border border-blue-500/30 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="text-2xl hidden">💻</div>
              </div>
              <span className="text-blue-300 text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ContactForm = () => {
    if (!showContactForm) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={() => setShowContactForm(false)} />
        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 max-w-md w-full mx-4">
          <button
            onClick={() => setShowContactForm(false)}
            className="absolute top-4 right-4 text-blue-300 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <h3 className="text-2xl font-bold text-white mb-6">Enviar Mensaje</h3>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <label className="block text-blue-300 text-sm font-medium mb-2">Tu Email</label>
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:border-blue-400 focus:outline-none"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label className="block text-blue-300 text-sm font-medium mb-2">Asunto</label>
              <input
                type="text"
                required
                value={contactForm.subject}
                onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:border-blue-400 focus:outline-none"
                placeholder="Asunto del mensaje"
              />
            </div>
            
            <div>
              <label className="block text-blue-300 text-sm font-medium mb-2">Mensaje</label>
              <textarea
                required
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-2 text-white focus:border-blue-400 focus:outline-none resize-none"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>
            
            <div>
              <label className="block text-blue-300 text-sm font-medium mb-2">Archivo (opcional)</label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-2 text-gray-400 cursor-pointer hover:border-blue-400 transition-colors flex items-center space-x-2"
                >
                  <Paperclip size={16} />
                  <span>{contactForm.attachment ? contactForm.attachment.name : 'Seleccionar archivo'}</span>
                </label>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <Send size={16} />
              <span>Enviar Mensaje</span>
            </button>
          </form>
        </div>
      </div>
    );
  };

const ProjectModal = ({ project, onClose }) => {
    const [showVideo, setShowVideo] = useState(false);
    
    if (!project) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={onClose} />
        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-300 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          
          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          
          <div className="aspect-video bg-slate-800 rounded-lg mb-6 overflow-hidden relative">
            {!showVideo ? (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-slate-800 rounded-lg hidden items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🖼️</div>
                    <p className="text-gray-400 text-sm">Imagen no disponible</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors group"
                >
                  <div className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 transition-colors">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                </button>
              </>
            ) : (
              <video
                controls
                autoPlay
                className="w-full h-full object-cover"
                onError={() => {
                  alert('Error al cargar el video. Verifica que el archivo existe y es accesible.');
                  setShowVideo(false);
                }}
              >
                <source src={project.video} type="video/mp4" />
                Tu navegador no soporta el elemento video.
              </video>
            )}
          </div>
          
          <p className="text-gray-300 mb-4">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="text-blue-300 font-semibold mb-2">Tecnologías:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-2">Logros:</h4>
            <p className="text-gray-300">{project.achievements}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Inicio
        return (
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                Larsson Makaay
                <span className="block text-blue-400">Fernández Huaringa</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-6">
                Ingeniero de Sistemas en formación
              </p>
              <p className="text-gray-400 mb-8 max-w-lg">
                Especializado en ciberseguridad, desarrollo de software y análisis de datos. 
                Apasionado por crear soluciones tecnológicas innovadoras.
              </p>
              
              {/* Botones principales */}
              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                <button 
                  onClick={() => setCurrentSection(4)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors flex items-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Contactar</span>
                </button>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-colors flex items-center space-x-2"
                >
                  <Send size={20} />
                  <span>Enviar Mensaje</span>
                </button>
              </div>

              {/* Redes sociales */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800/50`}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-8xl animate-pulse">
                👨‍💻
              </div>
            </div>
          </div>
        );

      case 1: // Sobre mí
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Sobre mí</h2>
            
            {/* Descripción personal */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                Soy un estudiante apasionado de Ingeniería de Sistemas con enfoque en <span className="text-blue-400 font-semibold">ciberseguridad</span>, 
                <span className="text-blue-400 font-semibold"> desarrollo de software</span> y <span className="text-blue-400 font-semibold">análisis de datos</span>. 
                Me caracterizo por mi capacidad de aprendizaje rápido, pensamiento analítico y compromiso con la excelencia técnica. 
                Mi objetivo es contribuir al desarrollo de soluciones tecnológicas innovadoras que generen un impacto positivo en la sociedad.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                  🎓 Formación Académica
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-medium">Ingeniería de Sistemas</p>
                    <p className="text-gray-400">Universidad César Vallejo</p>
                    <p className="text-gray-300 text-sm">8º ciclo (2022 - 2027)</p>
                  </div>
                  <div className="border-t border-gray-600 pt-3">
                    <p className="text-green-400 font-medium">Estado Académico</p>
                    <p className="text-gray-300 text-sm">Promedio destacado con especialización en desarrollo de software</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                  💼 Experiencia Profesional
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-medium">Atención al Cliente y Soporte Técnico</p>
                    <p className="text-gray-400 text-sm">Múltiples empresas del sector telecomunicaciones</p>
                  </div>
                  <div className="border-t border-gray-600 pt-3">
                    <p className="text-gray-300 text-sm">
                      • Resolución de problemas técnicos complejos<br/>
                      • Gestión de sistemas de telefonía móvil e internet<br/>
                      • Atención personalizada y orientación al cliente
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">🌐 Idiomas</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">🇪🇸 Español</span>
                    <span className="text-green-400 text-sm">Nativo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">🇺🇸 Inglés</span>
                    <span className="text-yellow-400 text-sm">Intermedio</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">🏆 Reconocimientos</h3>
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-medium">RENACYT 2023</p>
                  <p className="text-gray-300 text-sm">Proyecto MasterOfTime aprobado para implementación institucional</p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">📍 Información</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300"><span className="text-blue-400">Ubicación:</span> Lima, Perú</p>
                  <p className="text-gray-300"><span className="text-blue-400">Disponibilidad:</span> Inmediata</p>
                  <p className="text-gray-300"><span className="text-blue-400">Modalidad:</span> Presencial/Remoto</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">💡 Habilidades Blandas</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Trabajo en equipo', 'Comunicación efectiva', 'Resolución de problemas', 
                  'Liderazgo', 'Toma de decisiones', 'Pensamiento analítico',
                  'Adaptabilidad', 'Gestión del tiempo'
                ].map((skill, index) => (
                  <span key={index} className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm hover:bg-blue-600/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 2: // Proyectos
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Proyectos</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-blue-500/30 overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:border-blue-400/50"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video bg-slate-700 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-slate-700 hidden items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🖼️</div>
                        <p className="text-gray-400 text-sm">{project.image}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-400 text-sm">
                      <ExternalLink size={16} className="mr-2" />
                      Ver detalles
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3: // Habilidades
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Habilidades Técnicas</h2>
            <SkillsCarousel />
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Nivel intermedio en todas las tecnologías</p>
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 max-w-2xl mx-auto">
                <h3 className="text-blue-400 font-semibold mb-3">Áreas de Especialización</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-white font-medium">Backend</p>
                    <p className="text-gray-400">Java, Python, PHP</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Frontend</p>
                    <p className="text-gray-400">HTML, CSS, JavaScript</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">Móvil</p>
                    <p className="text-gray-400">Flutter, Dart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4: // Contacto
        return (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Contacto</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <a 
                  href="mailto:larssonfhm@gmail.com"
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 block"
                >
                  <div className="flex items-center space-x-4">
                    <Mail className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-gray-300">larssonfhm@gmail.com</p>
                    </div>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/larsson-fernandez-8125b7375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 block"
                >
                  <div className="flex items-center space-x-4">
                    <Linkedin className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-white font-semibold">LinkedIn</h3>
                      <p className="text-gray-300">larsson-fernandez-8125b7375</p>
                    </div>
                  </div>
                </a>
                
                <a
                  href="https://github.com/Hurysz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 block"
                >
                  <div className="flex items-center space-x-4">
                    <Github className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-white font-semibold">GitHub</h3>
                      <p className="text-gray-300">github.com/Hurysz</p>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-white mb-6">Información adicional</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-blue-400 font-medium">Disponibilidad</h4>
                      <p className="text-gray-300">Inmediata (horarios matutinos)</p>
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-medium">Ubicación</h4>
                      <p className="text-gray-300">Lima, Perú</p>
                    </div>
                    <div>
                      <h4 className="text-blue-400 font-medium">Teléfono</h4>
                      <p className="text-gray-300">+51 947 288 810</p>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl transition-colors flex items-center justify-center space-x-2 font-semibold"
                >
                  <Send size={20} />
                  <span>Enviar Mensaje Directo</span>
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Availability Badge */}
      <AvailabilityBadge />
      
      {/* Navigation Wheel */}
      <NavigationWheel />
      
      {/* Main Content */}
      <div 
        className="transition-all duration-700 ease-in-out"
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
        }}
      >
        {sections.map((_, index) => (
          <div key={index} className="min-h-screen flex items-center justify-center">
            {index === currentSection && renderSection()}
          </div>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      {currentSection < sections.length - 1 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-400" size={32} />
        </div>
      )}
      
      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      
      {/* Contact Form */}
      <ContactForm />

      {/* CSS personalizado para la animación horizontal */}
      <style jsx>{`
        @keyframes scrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;