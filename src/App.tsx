import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Search, Share2, Users, PenTool, Mail, Phone, MapPin, ArrowRight, Zap, Target, Sparkles, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies to elevate your brand's online presence and drive measurable results.",
      details: "We create tailored digital marketing campaigns that combine SEO, paid advertising, email marketing, and content strategy to maximize your ROI.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO",
      description: "Advanced search engine optimization to improve your rankings and increase organic traffic.",
      details: "Our SEO experts optimize your website for search engines using proven techniques to increase visibility and drive qualified organic traffic.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      description: "Expert management of your social channels to engage audiences and build your community.",
      details: "We manage your social presence across all platforms with engaging content, community management, and growth strategies.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Influencer Marketing",
      description: "Strategic partnerships with influencers to amplify your brand message and reach.",
      details: "We connect you with relevant influencers and manage campaigns that authentically promote your brand to engaged audiences.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      description: "Compelling content that tells your story and resonates with your target audience.",
      details: "From videos to blog posts, we create engaging content that drives engagement and builds your brand authority.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572"
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

  const handleGetFreeAnalysis = () => {
    window.location.href = "mailto:info@lovegraphymedia.in?subject=Free%20Brand%20Analysis%20Request&body=Hi%20Lovegraphy%20Media%2C%0A%0AI%20would%20like%20to%20request%20a%20free%20brand%20analysis.%0A%0ABusiness%20Name%3A%20%0AIndustry%3A%20%0ACurrent%20Challenges%3A%20%0A%0AThank%20you!";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950">
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
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
                <h1 className={`text-sm md:text-lg font-bold transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>
                  Lovegraphy Media
                </h1>
                <span className={`text-[10px] md:text-xs font-medium transition-colors duration-300 ${scrolled ? 'text-orange-400' : 'text-orange-300'}`}>
                  Digital Growth Partner
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {['Home', 'Services', 'Results', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${
                    scrolled
                      ? 'text-gray-300 hover:bg-orange-500/20 hover:text-orange-400'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={handleGetFreeAnalysis}
                className="ml-2 px-6 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
              >
                Get Free Analysis
              </button>
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
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {['Home', 'Services', 'Results', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:bg-orange-500/20 hover:text-orange-400 font-medium rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => {
                  handleGetFreeAnalysis();
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center rounded-lg font-semibold"
              >
                Get Free Analysis
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-orange-600/30 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
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
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-orange-400/30">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-xs md:text-sm font-medium text-white">Trusted by 10+ Happy Clients</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 animate-slide-up animation-delay-400 leading-tight">
            Elevate Your
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent mt-2">
              Digital Presence
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto animate-slide-up animation-delay-600 leading-relaxed px-4">
            Transform your brand with data-driven strategies, creative storytelling, and measurable growth
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-slide-up animation-delay-600 px-4">
            <button
              onClick={handleGetFreeAnalysis}
              className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Get Free Analysis
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-orange-400/30 hover:bg-orange-500/20 transition-all duration-300 text-sm md:text-base"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto animate-slide-up animation-delay-600 px-4">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">10+</div>
              <div className="text-xs md:text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">5+</div>
              <div className="text-xs md:text-sm text-gray-400">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">20%</div>
              <div className="text-xs md:text-sm text-gray-400">Sales Growth</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 md:py-20 bg-gradient-to-b from-slate-950 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Services That Drive
              <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Real Results</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your growth goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer ${
                  expandedService === index ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-slate-950' : ''
                }`}
                onClick={() => setExpandedService(expandedService === index ? null : index)}
              >
                <div className={`relative bg-gradient-to-br p-6 md:p-8 transition-all duration-300 border ${
                  expandedService === index
                    ? 'from-orange-900/40 to-orange-800/20 border-orange-500/50 shadow-xl shadow-orange-500/20'
                    : 'from-gray-800/40 to-gray-900/40 border-gray-700/50 hover:border-orange-500/50'
                }`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-br transition-all duration-300 ${
                      index === 0 ? 'from-orange-500/20 to-orange-600/20 group-hover:from-orange-500/40 group-hover:to-orange-600/40' :
                      index === 1 ? 'from-yellow-500/20 to-yellow-600/20 group-hover:from-yellow-500/40 group-hover:to-yellow-600/40' :
                      index === 2 ? 'from-red-500/20 to-red-600/20 group-hover:from-red-500/40 group-hover:to-red-600/40' :
                      index === 3 ? 'from-orange-400/20 to-orange-500/20 group-hover:from-orange-400/40 group-hover:to-orange-500/40' :
                      'from-yellow-400/20 to-yellow-500/20 group-hover:from-yellow-400/40 group-hover:to-yellow-500/40'
                    }`}>
                      <div className={`transition-colors duration-300 ${
                        index === 0 ? 'text-orange-400' :
                        index === 1 ? 'text-yellow-400' :
                        index === 2 ? 'text-red-400' :
                        index === 3 ? 'text-orange-300' :
                        'text-yellow-300'
                      }`}>
                        {service.icon}
                      </div>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-gray-500">0{index + 1}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">{service.description}</p>

                  {expandedService === index && (
                    <div className="mt-6 pt-6 border-t border-gray-700/50 space-y-4 animate-slide-up">
                      <div>
                        <p className="text-sm md:text-base text-gray-300 leading-relaxed">{service.details}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`mailto:${service.email}?subject=Interest%20in%20${service.title}`}
                          className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-xs md:text-sm"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email Us
                        </a>
                        <a
                          href={`https://wa.me/${service.whatsapp}?text=Hi,%20I'm%20interested%20in%20${service.title}`}
                          className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 text-xs md:text-sm"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  )}

                  {expandedService !== index && (
                    <div className="flex items-center text-orange-400 font-semibold text-sm group-hover:text-orange-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-12 md:py-20 bg-gradient-to-b from-orange-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Results That
              <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Speak Volumes</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              Real metrics from real campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {results.map((result, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50 hover:border-orange-500/50">
                  <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl mb-4 md:mb-6 ${
                    index === 0 ? 'bg-gradient-to-br from-orange-500/30 to-orange-600/20' :
                    index === 1 ? 'bg-gradient-to-br from-yellow-500/30 to-yellow-600/20' :
                    'bg-gradient-to-br from-red-500/30 to-red-600/20'
                  }`}>
                    <span className={
                      index === 0 ? 'text-orange-400' :
                      index === 1 ? 'text-yellow-400' :
                      'text-red-400'
                    }>
                      {result.icon}
                    </span>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                    {result.stat}
                  </p>
                  <p className="text-lg md:text-xl font-bold text-white mb-1">{result.label}</p>
                  <p className="text-sm md:text-base text-gray-400">{result.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500"></div>
            <div className="relative p-6 md:p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">Ready to See Similar Results?</h3>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-white/90">
                  Get a free analysis and discover growth opportunities for your brand
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <button
                    onClick={handleGetFreeAnalysis}
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                  >
                    Get Free Analysis
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <a
                    href="https://wa.me/8275001572?text=Hi,%20I%20am%20interested%20in%20your%20services"
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 text-sm md:text-base"
                  >
                    Message on WhatsApp
                    <MessageCircle className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="contact" className="py-12 md:py-20 bg-gradient-to-b from-slate-950 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-orange-400 uppercase tracking-wider">Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Start Your
              <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Growth Journey</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              Get in touch and discover how we can elevate your brand
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            <a href="https://maps.google.com/?q=Maharashtra,India" className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700/50 hover:border-orange-500/50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-lg mb-4 text-orange-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Location</h3>
              <p className="text-sm text-gray-400">Maharashtra, India</p>
            </a>

            <a href="mailto:info@lovegraphymedia.in" className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700/50 hover:border-orange-500/50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500/30 to-orange-600/20 rounded-lg mb-4 text-orange-400 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">Email</h3>
              <p className="text-sm text-gray-400 break-all">info@lovegraphymedia.in</p>
            </a>

            <a href="https://wa.me/8275001572" className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-700/50 hover:border-green-500/50">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500/30 to-green-600/20 rounded-lg mb-4 text-green-400 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">WhatsApp</h3>
              <p className="text-sm text-gray-400">+91 8275001572</p>
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500"></div>
              <div className="relative p-6 md:p-12 text-white text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Get Your Free Brand Analysis</h3>
                <p className="text-base md:text-lg mb-6 md:mb-8 text-white/90 max-w-lg mx-auto">
                  Receive personalized insights and growth strategies tailored to your business
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleGetFreeAnalysis}
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                  >
                    Request Free Analysis
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </button>
                  <a
                    href="https://wa.me/8275001572?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20brand%20analysis"
                    className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 text-sm md:text-base"
                  >
                    WhatsApp Us
                    <MessageCircle className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-8 md:py-12 border-t border-gray-800">
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
              <p className="text-orange-400 font-semibold text-sm italic">"Influence. Engage. Grow."</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-gray-400 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#results" className="text-gray-400 hover:text-orange-400 transition-colors">Results</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@lovegraphymedia.in" className="text-gray-400 hover:text-orange-400 transition-colors break-all">info@lovegraphymedia.in</a></li>
                <li><a href="https://wa.me/8275001572" className="text-gray-400 hover:text-orange-400 transition-colors">WhatsApp: +91 8275001572</a></li>
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
