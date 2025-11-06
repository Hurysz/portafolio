import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  X,
  Play,
  Send,
  Paperclip,
  Menu,
} from "lucide-react";

// COMPONENTE PRINCIPAL
const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // estado menú lateral móvil
  const [contactForm, setContactForm] = useState({
    email: "",
    subject: "",
    message: "",
    attachment: null,
  });

  const containerRef = useRef(null);
  const isMobile = window.innerWidth < 768; // detectar móvil

  // SECCIONES
  const sections = [
    "Inicio",
    "Sobre mí",
    "Proyectos",
    "Habilidades",
    "Contacto",
    "Certificados",
  ];

  // SKILLS
  const skills = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  ];

  // PROYECTOS (resumido para mantener claridad)
  const projects = [
    {
      id: 1,
      title: "MasterOfTime - Sistema de Control de Asistencia QR",
      description:
        "Sistema de escritorio que automatiza el registro de asistencia mediante códigos QR...",
      technologies: ["Java", "MySQL", "JavaFX", "SMTP", "QR Code API"],
      image: "/MasterOfTime.png",
      video: "/MasterOfTime.mp4",
      achievements: "Avalado por RENACYT 2023, reduce 80 % del tiempo manual.",
    },
    {
      id: 2,
      title: "Traductor de Lenguaje de Señas con IA",
      description:
        "App móvil que traduce lenguaje de señas a texto/audio en tiempo real.",
      technologies: ["Python", "TensorFlow", "OpenCV", "MediaPipe"],
      image: "/Traductor de Lenguaje de Señas.png",
      video: "/Traductor de Lenguaje de Señas.mp4",
      achievements:
        "92 % de precisión en reconocimiento, destacada por inclusión social.",
    },
    {
      id: 3,
      title: "Sistema Inteligente de Gestión TI para Clínicas",
      description:
        "App Flutter con priorización inteligente para soporte técnico.",
      technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
      image: "/Gestor de Solicitudes TI.png",
      video: "/Gestor de Solicitudes TI.mp4",
      achievements:
        "Mejora 65 % eficiencia operativa y reduce tiempos de atención.",
    },
    {
      id: 4,
      title: "UCV Bienestar - Plataforma Integral de Apoyo Estudiantil",
      description:
        "Plataforma web para apoyo emocional, citas y chatbot IA.",
      technologies: ["Next.js", "Firebase", "Genkit", "Tailwind"],
      image: "/UCVBienestar.png",
      video: "/UCVBienestar.mp4",
      achievements: "Enfoque en bienestar estudiantil con IA integrada.",
    },
  ];

  // CERTIFICADOS
  const certificates = [
    { id: 1, image: "/certi1.jpg", title: "Certificado 1" },
    { id: 2, image: "/certi2.jpg", title: "Certificado 2" },
    { id: 3, image: "/certi3.jpg", title: "Certificado 3" },
    { id: 4, image: "/certi4.jpg", title: "Certificado 4" },
    { id: 5, image: "/certi5.jpg", title: "Certificado 5" },
  ];

  // REDES SOCIALES
  const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:larssonfhm@gmail.com", color: "text-red-400" },
    { name: "GitHub", icon: Github, url: "https://github.com/Hurysz", color: "text-gray-400" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/larsson-fernandez-8125b7375", color: "text-blue-400" },
  ];

  // SCROLL POR SECCIONES SOLO EN ESCRITORIO
  useEffect(() => {
    if (isMobile) return;
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0 && currentSection < sections.length - 1)
        setCurrentSection((p) => p + 1);
      else if (e.deltaY < 0 && currentSection > 0)
        setCurrentSection((p) => p - 1);
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [currentSection, sections.length]);

  // FORMULARIO DE CONTACTO
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente!");
    setShowContactForm(false);
    setContactForm({ email: "", subject: "", message: "", attachment: null });
  };
  const handleFileChange = (e) =>
    setContactForm((p) => ({ ...p, attachment: e.target.files[0] }));

  // BADGE DE DISPONIBILIDAD
  const AvailabilityBadge = () => (
    <div className="fixed top-4 left-4 z-50 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-pulse">
      <div className="w-2 h-2 bg-white rounded-full"></div>
      <span className="text-sm font-medium">Disponible</span>
    </div>
  );

  // RUEDA DE NAVEGACIÓN (solo PC)
  const NavigationWheel = () => (
    <div className="fixed top-8 right-8 z-40 hidden md:block">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full" viewBox="0 0 200 210">
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="2" />
          {sections.map((section, i) => {
            const angle = (i * (360 / sections.length) - 90) * (Math.PI / 180);
            const x = 100 + 80 * Math.cos(angle);
            const y = 100 + 80 * Math.sin(angle);
            return (
              <g key={section}>
                <circle
                  cx={x}
                  cy={y}
                  r="20"
                  fill={currentSection === i ? "rgba(59,130,246,0.8)" : "rgba(15,23,42,0.8)"}
                  stroke="rgba(59,130,246,0.5)"
                  strokeWidth="2"
                  className="cursor-pointer hover:fill-blue-500 transition-all duration-300"
                  onClick={() => setCurrentSection(i)}
                />
                <text x={x} y={y + 35} textAnchor="middle" className="fill-blue-300 text-xs pointer-events-none select-none">
                  {section}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );

  // MENÚ HAMBURGUESA MÓVIL (slide-in desde la derecha)
  const MobileMenu = () => (
    <>
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg"
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay oscuro */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Panel lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900/95 border-l border-blue-500/30 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b border-blue-500/20">
          <h3 className="text-lg font-semibold text-white">Menú</h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-blue-300 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSection(index);
                setIsMenuOpen(false);
              }}
              className={`text-left text-gray-300 hover:text-white transition ${
                currentSection === index ? "text-blue-400 font-semibold" : ""
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
  // CARRUSEL DE HABILIDADES
  const SkillsCarousel = () => (
    <div className="relative overflow-hidden py-8">
      <div
        className="flex animate-spin-slow space-x-12"
        style={{ animation: "scrollHorizontal 20s linear infinite" }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[100px] sm:min-w-[120px]"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 bg-slate-800/50 p-3 rounded-full border border-blue-500/30 flex items-center justify-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-blue-300 text-xs sm:text-sm font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  // FORMULARIO DE CONTACTO MODAL
  const ContactForm = () =>
    showContactForm && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          onClick={() => setShowContactForm(false)}
        />
        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto sm:max-h-[85vh]">
          <button
            onClick={() => setShowContactForm(false)}
            className="absolute top-4 right-4 text-blue-300 hover:text-white"
          >
            <X size={24} />
          </button>
          <h3 className="text-2xl font-bold text-white mb-6">
            Enviar Mensaje
          </h3>
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="tu@email.com"
              value={contactForm.email}
              onChange={(e) =>
                setContactForm((p) => ({ ...p, email: e.target.value }))
              }
              className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-2 text-white"
            />
            <input
              type="text"
              required
              placeholder="Asunto"
              value={contactForm.subject}
              onChange={(e) =>
                setContactForm((p) => ({ ...p, subject: e.target.value }))
              }
              className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-2 text-white"
            />
            <textarea
              required
              rows={4}
              placeholder="Escribe tu mensaje..."
              value={contactForm.message}
              onChange={(e) =>
                setContactForm((p) => ({ ...p, message: e.target.value }))
              }
              className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-2 text-white resize-none"
            />
            <label className="block bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-2 text-gray-400 cursor-pointer flex items-center space-x-2">
              <Paperclip size={16} />
              <span>
                {contactForm.attachment
                  ? contactForm.attachment.name
                  : "Seleccionar archivo"}
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
            >
              <Send size={16} />
              <span>Enviar Mensaje</span>
            </button>
          </form>
        </div>
      </div>
    );

  // MODAL DE PROYECTOS
  const ProjectModal = ({ project, onClose }) => {
    const [showVideo, setShowVideo] = useState(false);
    if (!project) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          onClick={onClose}
        />
        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6 sm:p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-300 hover:text-white"
          >
            <X size={24} />
          </button>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            {project.title}
          </h3>
          <div className="aspect-video bg-slate-800 rounded-lg mb-6 overflow-hidden relative">
            {!showVideo ? (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70"
                >
                  <div className="bg-blue-600 rounded-full p-4">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                </button>
              </>
            ) : (
              <video controls autoPlay className="w-full h-full">
                <source src={project.video} type="video/mp4" />
              </video>
            )}
          </div>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            {project.description}
          </p>
          <div className="mb-4">
            <h4 className="text-blue-300 font-semibold mb-2">Tecnologías:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-2">Logros:</h4>
            <p className="text-gray-300 text-sm">{project.achievements}</p>
          </div>
        </div>
      </div>
    );
  };

  // MODAL DE CERTIFICADOS
  const CertificateModal = ({ cert, onClose }) =>
    !cert ? null : (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-lg"
          onClick={onClose}
        />
        <div className="relative bg-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-4 sm:p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-blue-300 hover:text-white"
          >
            <X size={24} />
          </button>
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    );

  // SECCIONES PRINCIPALES
  const renderSection = (index = currentSection) => {
    switch (currentSection) {
      case 0: // INICIO
        return (
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                Larsson Makaay{" "}
                <span className="block text-blue-400">Fernández Huaringa</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6">
                Ingeniero de Sistemas en formación
              </p>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Especializado en ciberseguridad y desarrollo de software.
              </p>

              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                <button
                  onClick={() => setCurrentSection(4)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full flex items-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Contactar</span>
                </button>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full flex items-center space-x-2"
                >
                  <Send size={20} />
                  <span>Enviar</span>
                </button>
              </div>
              <div className="flex justify-center lg:justify-start space-x-6">
                {socialLinks.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${s.color} hover:text-white p-2 rounded-full hover:bg-slate-800/50`}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-6xl sm:text-8xl animate-pulse">
                👨‍💻
              </div>
            </div>
          </div>
        );

      case 1: // SOBRE MÍ
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Sobre mí
            </h2>
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                Soy un estudiante apasionado de Ingeniería de Sistemas con
                enfoque en{" "}
                <span className="text-blue-400 font-semibold">
                  ciberseguridad
                </span>
                ,{" "}
                <span className="text-blue-400 font-semibold">
                  desarrollo de software
                </span>{" "}
                y{" "}
                <span className="text-blue-400 font-semibold">
                  análisis de datos
                </span>
                . Me caracterizo por mi aprendizaje rápido y compromiso técnico.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  🎓 Formación Académica
                </h3>
                <p className="text-white font-medium">
                  Ingeniería de Sistemas
                </p>
                <p className="text-gray-400">Universidad César Vallejo</p>
                <p className="text-gray-300 text-sm">
                  8º ciclo (2022 - 2027)
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  💼 Experiencia Profesional
                </h3>
                <p className="text-gray-300 text-sm">
                  Atención al cliente y soporte técnico en telecomunicaciones.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  🌐 Idiomas
                </h3>
                <p className="text-gray-300">🇪🇸 Español — Nativo</p>
                <p className="text-gray-300">🇺🇸 Inglés — Intermedio</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  🏆 Reconocimientos
                </h3>
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
                  <p className="text-green-400 font-medium">RENACYT 2023</p>
                  <p className="text-gray-300 text-sm">
                    Proyecto MasterOfTime aprobado institucionalmente
                  </p>
                </div>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  📍 Información
                </h3>
                <p className="text-gray-300">Ubicación: Lima, Perú</p>
                <p className="text-gray-300">Disponibilidad: Inmediata</p>
                <p className="text-gray-300">Modalidad: Presencial / Remoto</p>
              </div>
            </div>
          </div>
        );

      case 2: // PROYECTOS
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Proyectos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-800/50 rounded-2xl border border-blue-500/30 overflow-hidden cursor-pointer transform hover:scale-105 transition-all"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video bg-slate-700 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
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

      case 3: // HABILIDADES
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Habilidades Técnicas
            </h2>
            <SkillsCarousel />
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">
                Nivel intermedio en todas las tecnologías
              </p>
            </div>
          </div>
        );

      case 4: // CONTACTO
        return (
          <div className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Contacto
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <a
                  href="mailto:larssonfhm@gmail.com"
                  className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30 block"
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
                  className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30 block"
                >
                  <div className="flex items-center space-x-4">
                    <Linkedin className="text-blue-400" size={24} />
                    <div>
                      <h3 className="text-white font-semibold">LinkedIn</h3>
                      <p className="text-gray-300">
                        larsson-fernandez-8125b7375
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/Hurysz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30 block"
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
                <div className="bg-slate-800/50 p-6 rounded-2xl border border-blue-500/30">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Información adicional
                  </h3>
                  <p className="text-gray-300">📍 Lima, Perú</p>
                  <p className="text-gray-300">📞 +51 947 288 810</p>
                  <p className="text-gray-300">
                    🕐 Disponibilidad: Inmediata
                  </p>
                </div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-2xl flex items-center justify-center space-x-2 font-semibold"
                >
                  <Send size={20} />
                  <span>Enviar Mensaje Directo</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 5: // CERTIFICADOS
        return (
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Certificados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-slate-800/50 rounded-2xl border border-blue-500/30 overflow-hidden cursor-pointer transform hover:scale-105 transition-all"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <div className="aspect-[4/3] bg-slate-700 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-4 text-center text-blue-300">
                    {cert.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // RENDER FINAL
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <AvailabilityBadge />
      <NavigationWheel />
      <MobileMenu />

      {/* Renderizado adaptable: scroll libre en móviles, secciones animadas en escritorio */}
      {isMobile ? (
        <div className="flex flex-col">
          {sections.map((_, index) => (
            <div
              key={index}
              className="min-h-screen flex items-center justify-center px-4"
            >
              {/* Forzamos que se muestre cada sección */}
              {(() => {
                switch (index) {
                  case 0: return renderSection(0);
                  case 1: return renderSection(1);
                  case 2: return renderSection(2);
                  case 3: return renderSection(3);
                  case 4: return renderSection(4);
                  case 5: return renderSection(5);
                  default: return null;
                }
              })()}
            </div>
          ))}
        </div>
      ) : (
        <div
          className="transition-all duration-700 ease-in-out"
          style={{
            transform: `translateY(-${currentSection * 100}vh)`,
          }}
        >
          {sections.map((_, index) => (
            <div
              key={index}
              className="min-h-screen flex items-center justify-center"
            >
              {index === currentSection && renderSection()}
            </div>
          ))}
        </div>
      )}


      {currentSection < sections.length - 1 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-400" size={32} />
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <CertificateModal
        cert={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
      <ContactForm />

      {/* Animación extra */}
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
