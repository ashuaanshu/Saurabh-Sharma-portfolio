import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Globe, TrendingUp, Search, BarChart3, Target, Award, Zap, Rocket, Star, ArrowRight, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "Technical SEO Mastery",
      description: "Advanced technical optimization including Core Web Vitals, schema markup, and crawlability enhancements.",
      features: ["Site Speed Optimization", "Mobile-First Indexing", "Structured Data"],
      color: "from-emerald-400 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "On Page SEO",
      description: "Complete on-page optimization to maximize your content's search engine visibility and user engagement.",
      features: ["Content Optimization", "Meta Tags & Headers", "Internal Linking"],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Off Page SEO",
      description: "Strategic link building and authority development to boost your domain's credibility and rankings.",
      features: ["Quality Link Building", "Brand Mentions", "Authority Outreach"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Performance Analytics",
      description: "Comprehensive tracking and reporting with actionable insights for continuous growth.",
      features: ["Custom Dashboards", "ROI Tracking", "Growth Forecasting"],
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Local SEO Domination",
      description: "Complete local search optimization to capture nearby customers and drive foot traffic.",
      features: ["Google Business Profile", "Local Citations", "Review Management"],
      color: "from-teal-400 to-green-500"
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to amplify your brand presence and drive engagement across platforms.",
      features: ["Content Strategy", "Community Management", "Paid Social Campaigns"],
      color: "from-pink-400 to-rose-500"
    }
  ];

  const skills = [
    { name: "Technical SEO", level: 95, color: "bg-emerald-500" },
    { name: "On Page SEO", level: 92, color: "bg-purple-500" },
    { name: "Off Page SEO", level: 88, color: "bg-blue-500" },
    { name: "Analytics & Reporting", level: 94, color: "bg-orange-500" },
    { name: "Local SEO", level: 90, color: "bg-teal-500" },
    { name: "Social Media Marketing", level: 85, color: "bg-pink-500" }
  ];

  const achievements = [
    { number: "100+", label: "Projects Completed", icon: <Rocket className="w-8 h-8" /> },
    { number: "180%", label: "Avg Traffic Boost", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> },
    { number: "65+", label: "Top 3 Rankings", icon: <Award className="w-8 h-8" /> }
  ];


  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease'
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-xl border-b border-gray-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Saurabh<span className="text-white">.</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800/50 bg-gray-900/95 backdrop-blur-xl">
              {['Home', 'About', 'Services', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg mx-2 mb-2 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 pt-20 pb-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">

            <div className="mb-8">

              <div className="relative w-40 h-40 mx-auto mb-8">

                <img
    src="/123.jpg"  // <-- Replace with actual path or URL
    alt="Saurabh Sharma"
    className="w-full r h-full object-cover rounded-full"
  />
</div>

                {/* <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500/40 shadow-lg shadow-purple-500/20">
  
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full animate-spin-slow"></div>
                {/* <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SS</span>
                </div>  */}

              {/* </div> */}
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Saurabh
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Sharma
                </span>
              </h1>
              
              <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl text-gray-300">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
                <span className="font-light">SENIOR SEO EXECUTIVE</span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Transforming businesses through strategic SEO mastery and data-driven digital growth
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full font-bold text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-2 transition-all duration-300"
              >
                <span className="flex items-center">
                  Let's Collaborate 
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 border-2 border-purple-500 rounded-full font-bold text-lg hover:bg-purple-500/10 backdrop-blur-sm transition-all duration-300"
              >
                Explore Services
              </button>
            </div>
            
            <div className="mt-20 animate-bounce">
              <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              As a results-focused SEO specialist, I’ve helped brands scale their organic presence by building comprehensive SEO strategies rooted in data and performance. From audits to execution, I bring a blend of creativity and analytics that drives long-term search success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-2xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    SEO Excellence & Innovation
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    I don't just optimize websites—I architect digital success stories. With cutting-edge SEO strategies 
                    and an obsession for measurable results, I transform businesses into search engine powerhouses.
                  </p>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                    My approach combines technical mastery with creative problem-solving, ensuring your brand dominates 
                    search results while delivering exceptional user experiences.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"></div>
                      <span className="text-gray-300">Award Winner</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                      <span className="text-gray-300">3+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                      <span className="text-gray-300">100+ Projects</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {/* <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
                      <span className="text-gray-300">Award Winner</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                    <div className="text-purple-400 mb-4 flex justify-center">{achievement.icon}</div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive SEO solutions designed to skyrocket your online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300`}></div>
                <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Zap className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mastery across all dimensions of modern SEO
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl rounded-3xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-lg">{skill.name}</span>
                      <span className="text-gray-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} rounded-full transform transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Let's Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to dominate search results? Let's create something extraordinary together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-2xl"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                  <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-14 h-14 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Email</div>
                        <a href="mailto:saurabh.sharma@kpitexperts.com" className="text-white hover:text-purple-400 transition-colors text-lg">
                          saurabh.sharma@kpitexperts.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Phone</div>
                        <a href="tel:+919805926882" className="text-white hover:text-purple-400 transition-colors text-lg">
                          +91 98059 26882
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-14 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Location</div>
                        <div className="text-white text-lg">Chandigarh, India</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                    <select className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white">
                      <option>SEO Audit</option>
                      <option>Technical SEO</option>
                      <option>Content Strategy</option>
                      <option>Local SEO</option>
                      <option>Full SEO Campaign</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder-gray-400"
                      placeholder="Tell me about your SEO goals..."
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-xl font-bold text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-1 transition-all duration-300"
                    onClick={() => alert('Thank you for your interest! I\'ll get back to you soon.')}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Saurabh Sharma</span>
            </div>
            <p className="text-gray-400 mb-8 text-lg">SEO Wizard & Digital Growth Strategist</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="mailto:saurabh.sharma@kpitexperts.com" className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </a>
              <a href="tel:+919805926882" className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-white" />
              </a>
            </div>
            <div className="border-t border-gray-800/50 pt-8">
              <p className="text-gray-500 text-sm">
                © 2025 @ashuaanshu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}