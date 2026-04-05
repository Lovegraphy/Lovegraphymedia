import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Search, Share2, Users, PenTool, Mail, Phone, MapPin, ArrowRight, Zap, Target, Sparkles, BarChart3, Megaphone } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies to elevate your brand's online presence and drive measurable results."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO",
      description: "Advanced search engine optimization to improve your rankings and increase organic traffic."
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Expert management of your social channels to engage audiences and build your community."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Marketing",
      description: "Strategic partnerships with influencers to amplify your brand message and reach."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      description: "Compelling content that tells your story and resonates with your target audience."
    }
  ];

  const results = [
    {
      icon: <Zap className="w-8 h-8" />,
      stat: "90%",
      label: "More Reach",
      desc: "Within 30 Days"
    },
    {
      icon: <Target className="w-8 h-8" />,
      stat: "200+",
      label: "Genuine Followers",
      desc: "Active Engagement"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      stat: "20%",
      label: "Sales Growth",
      desc: "Genuine Conversions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/file_00000000d128720ba4b334cd306b2907.png"
                  alt="Lovegraphy Media"
                  className="h-10 w-10 md:h-12 md:w-12 drop-shadow-lg mix-blend-normal"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                />
              </div>
              <div className="flex flex-col">
                <h1 className={`text-sm md:text-lg font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  Lovegraphy Media
                </h1>
                <span className={`text-[10px] md:text-xs font-medium transition-colors duration-300 ${scrolled ? 'text-pink-600' : 'text-yellow-300'}`}>
                  Digital Growth Partner
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {['Home', 'Services', 'Results', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                    scrolled
                      ? 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 px-6 py-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
              >
                Get Started
              </a>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={scrolled ? 'text-gray-900' : 'text-white'} size={24} />
              ) : (
                <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={24} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {['Home', 'Services', 'Results', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-2 px-4 py-3 bg-gradient-to-r from-pink-600 to-orange-500 text-white text-center rounded-lg font-semibold"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
        </div>

        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20">
          <div className="mb-6 md:mb-8 flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <img
                src="/file_00000000d128720ba4b334cd306b2907.png"
                alt="Lovegraphy Media Logo"
                className="relative h-20 w-20 md:h-28 md:w-28 drop-shadow-2xl mix-blend-normal"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))' }}
              />
            </div>
          </div>

          <div className="inline-block mb-4 md:mb-6 animate-slide-up animation-delay-200">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-xs md:text-sm font-medium text-white">Trusted by 200+ Brands</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 animate-slide-up animation-delay-400 leading-tight">
            Elevate Your
            <span className="block bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent mt-2">
              Digital Presence
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-600 leading-relaxed px-4">
            Transform your brand with data-driven strategies, creative storytelling, and measurable growth
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-slide-up animation-delay-600 px-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Get Free Analysis
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto animate-slide-up animation-delay-600 px-4">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">200+</div>
              <div className="text-xs md:text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">90%</div>
              <div className="text-xs md:text-sm text-gray-400">More Reach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">20%</div>
              <div className="text-xs md:text-sm text-gray-400">Sales Growth</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Services That Drive
              <span className="block bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Real Results</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your growth goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  activeService === index ? 'ring-2 ring-pink-500 ring-offset-2' : ''
                }`}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-br transition-all duration-300 ${
                      index === 0 ? 'from-pink-100 to-pink-50 group-hover:from-pink-500 group-hover:to-pink-400' :
                      index === 1 ? 'from-orange-100 to-orange-50 group-hover:from-orange-500 group-hover:to-orange-400' :
                      index === 2 ? 'from-blue-100 to-blue-50 group-hover:from-blue-500 group-hover:to-blue-400' :
                      index === 3 ? 'from-cyan-100 to-cyan-50 group-hover:from-cyan-500 group-hover:to-cyan-400' :
                      'from-yellow-100 to-yellow-50 group-hover:from-yellow-500 group-hover:to-yellow-400'
                    }`}>
                      <div className={`transition-colors duration-300 ${
                        index === 0 ? 'text-pink-600 group-hover:text-white' :
                        index === 1 ? 'text-orange-600 group-hover:text-white' :
                        index === 2 ? 'text-blue-600 group-hover:text-white' :
                        index === 3 ? 'text-cyan-600 group-hover:text-white' :
                        'text-yellow-600 group-hover:text-white'
                      }`}>
                        {service.icon}
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-gray-300">0{index + 1}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">{service.description}</p>

                  <div className="flex items-center text-pink-600 font-semibold text-sm group-hover:text-pink-700 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 md:gap-4 px-6 md:px-8 py-6 bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl border border-pink-100">
              <div className="text-center sm:text-left">
                <p className="text-base md:text-lg font-semibold text-gray-900 mb-1">Need a custom solution?</p>
                <p className="text-sm text-gray-600">Let's discuss your unique requirements</p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-gradient-to-r from-pink-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base whitespace-nowrap"
              >
                Get in Touch
                <Mail className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Results That
              <span className="block bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Speak Volumes</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Real metrics from real campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {results.map((result, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4 md:mb-6 ${
                    index === 0 ? 'bg-gradient-to-br from-pink-100 to-pink-50' :
                    index === 1 ? 'bg-gradient-to-br from-orange-100 to-orange-50' :
                    'bg-gradient-to-br from-blue-100 to-blue-50'
                  }`}>
                    <span className={
                      index === 0 ? 'text-pink-600' :
                      index === 1 ? 'text-orange-600' :
                      'text-blue-600'
                    }>
                      {result.icon}
                    </span>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    {result.stat}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-900 mb-1">{result.label}</p>
                  <p className="text-sm md:text-base text-gray-600">{result.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-orange-500 to-yellow-500"></div>
            <div className="relative p-6 md:p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <Megaphone className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Ready to See Similar Results?</h3>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-white/90">
                  Get a free analysis and discover growth opportunities for your brand
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-pink-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                  >
                    Get Free Analysis
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a
                    href="mailto:info@lovegraphymedia.in"
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 transition-all duration-300 text-sm md:text-base"
                  >
                    Send Enquiry
                    <Mail className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet The Visionary
              <span className="block bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Behind The Brand</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 p-8 md:p-12 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-xl">
                      <BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-pink-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Lavkumar Prajapati</h3>
                    <p className="text-base md:text-lg font-semibold text-white/90 mb-4 md:mb-6">CEO & Founder</p>
                    <a
                      href="mailto:lav@lovegraphymedia.in"
                      className="inline-flex items-center text-white/90 hover:text-white text-sm md:text-base transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </a>
                  </div>

                  <div className="md:col-span-3 p-6 md:p-8 lg:p-10">
                    <div className="space-y-4 md:space-y-6">
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {['Engineer', 'Marketer', 'Cinematographer', 'Influencer'].map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 bg-gradient-to-r from-pink-50 to-orange-50 text-pink-700 text-xs md:text-sm font-semibold rounded-full border border-pink-100"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">Vision</h4>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          With a unique multidisciplinary background spanning engineering, marketing, cinematography, and influencer relations, Lavkumar brings innovative strategies and authentic storytelling to empower businesses in the digital landscape.
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <p className="text-xl md:text-2xl font-bold text-pink-600">200+</p>
                            <p className="text-xs md:text-sm text-gray-600">Clients</p>
                          </div>
                          <div>
                            <p className="text-xl md:text-2xl font-bold text-orange-600">5+</p>
                            <p className="text-xs md:text-sm text-gray-600">Years</p>
                          </div>
                          <div>
                            <p className="text-xl md:text-2xl font-bold text-yellow-600">90%</p>
                            <p className="text-xs md:text-sm text-gray-600">Growth</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-pink-600 uppercase tracking-wider">Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Start Your
              <span className="block bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Growth Journey</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch and discover how we can elevate your brand
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            <a href="#" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-pink-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg mb-4 text-pink-600 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Location</h3>
              <p className="text-sm text-gray-600">Maharashtra, India</p>
            </a>

            <a href="mailto:info@lovegraphymedia.in" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg mb-4 text-orange-600 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-sm text-gray-600 break-all">info@lovegraphymedia.in</p>
            </a>

            <a href="https://lovegraphymedia.in" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Website</h3>
              <p className="text-sm text-gray-600">lovegraphymedia.in</p>
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-orange-500 to-yellow-500"></div>
              <div className="relative p-6 md:p-12 text-white text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Get Your Free Brand Analysis</h3>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-white/90 max-w-lg mx-auto">
                  Receive personalized insights and growth strategies tailored to your business
                </p>
                <a
                  href="mailto:info@lovegraphymedia.in?subject=Free%20Brand%20Analysis%20Request&body=Hi%20Lovegraphy%20Media%2C%0A%0AI%20would%20like%20to%20request%20a%20free%20brand%20analysis.%0A%0ABusiness%20Name%3A%20%0AIndustry%3A%20%0ACurrent%20Challenges%3A%20%0A%0AThank%20you!"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-pink-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                >
                  Request Free Analysis
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/file_00000000d128720ba4b334cd306b2907.png"
                  alt="Lovegraphy Media"
                  className="h-10 w-10 drop-shadow-lg mix-blend-normal"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))' }}
                />
                <div>
                  <h3 className="text-xl font-bold">Lovegraphy Media</h3>
                  <p className="text-sm text-gray-400">Digital Growth Partner</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm max-w-md mb-4">
                Empowering businesses through innovative digital strategies, creative storytelling, and measurable growth.
              </p>
              <p className="text-pink-500 font-semibold text-sm italic">"Influence. Engage. Grow."</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-pink-500 transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-pink-500 transition-colors">Services</a></li>
                <li><a href="#results" className="text-gray-400 hover:text-pink-500 transition-colors">Results</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-pink-500 transition-colors">Team</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@lovegraphymedia.in" className="text-gray-400 hover:text-pink-500 transition-colors break-all">info@lovegraphymedia.in</a></li>
                <li><a href="https://lovegraphymedia.in" className="text-gray-400 hover:text-pink-500 transition-colors">lovegraphymedia.in</a></li>
                <li className="text-gray-400">Maharashtra, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2024 Lovegraphy Media. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
