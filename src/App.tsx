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
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies to elevate your brand's online presence and drive measurable results.",
      details: "We create tailored digital marketing campaigns that combine SEO, paid advertising, email marketing, and content strategy to maximize your ROI.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572",
      color: "pink"
    },
    {
      icon: <Search className="w-7 h-7" />,
      title: "SEO",
      description: "Advanced search engine optimization to improve your rankings and increase organic traffic.",
      details: "Our SEO experts optimize your website for search engines using proven techniques to increase visibility and drive qualified organic traffic.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572",
      color: "purple"
    },
    {
      icon: <Share2 className="w-7 h-7" />,
      title: "Social Media Management",
      description: "Expert management of your social channels to engage audiences and build your community.",
      details: "We manage your social presence across all platforms with engaging content, community management, and growth strategies.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572",
      color: "blue"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Influencer Marketing",
      description: "Strategic partnerships with influencers to amplify your brand message and reach.",
      details: "We connect you with relevant influencers and manage campaigns that authentically promote your brand to engaged audiences.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572",
      color: "cyan"
    },
    {
      icon: <PenTool className="w-7 h-7" />,
      title: "Content Creation",
      description: "Compelling content that tells your story and resonates with your target audience.",
      details: "From videos to blog posts, we create engaging content that drives engagement and builds your brand authority.",
      email: "info@lovegraphymedia.in",
      whatsapp: "8275001572",
      color: "pink"
    }
  ];

  const results = [
    {
      icon: <Zap className="w-7 h-7" />,
      stat: "90%",
      label: "More Reach",
      desc: "Within 30 Days",
      color: "pink"
    },
    {
      icon: <Target className="w-7 h-7" />,
      stat: "200+",
      label: "Genuine Followers",
      desc: "Active Engagement",
      color: "purple"
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      stat: "20%",
      label: "Sales Growth",
      desc: "Genuine Conversions",
      color: "blue"
    }
  ];

  const colorMap: Record<string, { icon: string; bg: string; border: string; ring: string }> = {
    pink:   { icon: "text-pink-500",   bg: "bg-pink-50",   border: "border-pink-200",   ring: "ring-pink-400" },
    purple: { icon: "text-purple-500", bg: "bg-purple-50", border: "border-purple-200", ring: "ring-purple-400" },
    blue:   { icon: "text-blue-500",   bg: "bg-blue-50",   border: "border-blue-200",   ring: "ring-blue-400" },
    cyan:   { icon: "text-cyan-500",   bg: "bg-cyan-50",   border: "border-cyan-200",   ring: "ring-cyan-400" },
  };

  const handleGetFreeAnalysis = () => {
    window.location.href = "mailto:info@lovegraphymedia.in?subject=Free%20Brand%20Analysis%20Request&body=Hi%20Lovegraphy%20Media%2C%0A%0AI%20would%20like%20to%20request%20a%20free%20brand%20analysis.%0A%0ABusiness%20Name%3A%20%0AIndustry%3A%20%0ACurrent%20Challenges%3A%20%0A%0AThank%20you!";
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* NAV */}
      <nav className={`fixed w-full z-50 transition-all duration-400 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img
                src="/file_00000000d128720ba4b334cd306b2907.png"
                alt="Lovegraphy Media"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <div className="flex flex-col">
                <span className={`text-sm md:text-base font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  Lovegraphy Media
                </span>
                <span className={`text-[10px] md:text-xs font-medium transition-colors duration-300 ${scrolled ? 'text-pink-500' : 'text-pink-200'}`}>
                  Digital Growth Partner
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {['Home', 'Services', 'Results', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm ${
                    scrolled
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={handleGetFreeAnalysis}
                className="ml-3 px-5 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:opacity-90 transition-all duration-200"
              >
                Get Free Analysis
              </button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={scrolled ? 'text-gray-900' : 'text-white'} size={22} />
              ) : (
                <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={22} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="px-4 py-4 space-y-1">
              {['Home', 'Services', 'Results', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => { handleGetFreeAnalysis(); setIsMenuOpen(false); }}
                className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-center rounded-lg font-semibold text-sm"
              >
                Get Free Analysis
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>

        {/* Blobs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl"></div>

        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-24">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
              <div className="relative bg-white rounded-full p-3 shadow-2xl overflow-hidden">
                <img
                  src="/file_00000000d128720ba4b334cd306b2907.png"
                  alt="Lovegraphy Media Logo"
                  className="h-16 w-16 md:h-20 md:w-20 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-xs md:text-sm font-medium text-white">Trusted by 10+ Happy Clients</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Elevate Your<br />
            <span className="text-yellow-300">Digital Presence</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your brand with data-driven strategies, creative storytelling, and measurable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleGetFreeAnalysis}
              className="group inline-flex items-center justify-center px-7 py-3.5 bg-white text-purple-700 font-semibold rounded-full hover:shadow-2xl transition-all duration-200 hover:scale-105 text-sm md:text-base"
            >
              Get Free Analysis
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-200 text-sm md:text-base"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { num: "10+", label: "Happy Clients" },
              { num: "5+",  label: "Active Projects" },
              { num: "20%", label: "Sales Growth" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1">{s.num}</div>
                <div className="text-xs md:text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-pink-500 uppercase tracking-widest">What We Do</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Services That Drive<br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Real Results</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-500 max-w-xl mx-auto">
              Comprehensive digital solutions tailored to your growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => {
              const c = colorMap[service.color];
              const isOpen = expandedService === index;
              return (
                <div
                  key={index}
                  onClick={() => setExpandedService(isOpen ? null : index)}
                  className={`group bg-white rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-md overflow-hidden ${
                    isOpen ? `${c.border} ring-2 ${c.ring} shadow-md` : 'border-gray-100 hover:border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.bg} ${c.icon}`}>
                        {service.icon}
                      </div>
                      <span className="text-xs font-bold text-gray-300 tabular-nums">0{index + 1}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>

                    {isOpen && (
                      <div className="pt-4 border-t border-gray-100 space-y-4">
                        <p className="text-sm text-gray-600 leading-relaxed">{service.details}</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href={`mailto:${service.email}?subject=Interest%20in%20${service.title}`}
                            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-lg text-xs hover:opacity-90 transition-opacity"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Email Us
                          </a>
                          <a
                            href={`https://wa.me/${service.whatsapp}?text=Hi,%20I'm%20interested%20in%20${service.title}`}
                            className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg text-xs transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    )}

                    {!isOpen && (
                      <div className={`flex items-center text-sm font-semibold ${c.icon} group-hover:gap-2 transition-all`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-purple-500 uppercase tracking-widest">Impact</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Results That<br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Speak Volumes</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-500 max-w-xl mx-auto">
              Real metrics from real campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {results.map((result, index) => {
              const c = colorMap[result.color];
              return (
                <div key={index} className={`bg-white rounded-2xl border ${c.border} p-8 text-center shadow-sm hover:shadow-md transition-shadow`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${c.bg} ${c.icon} mb-5`}>
                    {result.icon}
                  </div>
                  <p className={`text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2`}>
                    {result.stat}
                  </p>
                  <p className="text-base font-bold text-gray-800 mb-1">{result.label}</p>
                  <p className="text-sm text-gray-400">{result.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600"></div>
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px'}}></div>
            <div className="relative p-8 md:p-14 text-white text-center">
              <div className="max-w-2xl mx-auto">
                <Sparkles className="w-10 h-10 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Ready to See Similar Results?</h3>
                <p className="text-base md:text-lg mb-8 text-white/80">
                  Get a free analysis and discover growth opportunities for your brand.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleGetFreeAnalysis}
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-purple-700 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105 text-sm md:text-base"
                  >
                    Get Free Analysis
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/8275001572?text=Hi,%20I%20am%20interested%20in%20your%20services"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors text-sm md:text-base"
                  >
                    Message on WhatsApp
                    <MessageCircle className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-blue-500 uppercase tracking-widest">Contact</span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let's Start Your<br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Growth Journey</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-500 max-w-xl mx-auto">
              Get in touch and discover how we can elevate your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
            {[
              {
                href: "https://maps.google.com/?q=Maharashtra,India",
                icon: <MapPin className="w-6 h-6" />,
                label: "Location",
                value: "Maharashtra, India",
                color: "pink"
              },
              {
                href: "mailto:info@lovegraphymedia.in",
                icon: <Mail className="w-6 h-6" />,
                label: "Email",
                value: "info@lovegraphymedia.in",
                color: "purple"
              },
              {
                href: "https://wa.me/8275001572",
                icon: <MessageCircle className="w-6 h-6" />,
                label: "WhatsApp",
                value: "+91 8275001572",
                color: "blue"
              }
            ].map((card) => {
              const c = colorMap[card.color];
              return (
                <a
                  key={card.label}
                  href={card.href}
                  className={`group bg-white p-6 rounded-2xl border ${c.border} shadow-sm hover:shadow-md transition-all duration-200`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.bg} ${c.icon} mb-4 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">{card.label}</h3>
                  <p className="text-sm text-gray-500 break-all">{card.value}</p>
                </a>
              );
            })}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600"></div>
              <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px'}}></div>
              <div className="relative p-8 md:p-12 text-white text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-5">
                  <Sparkles className="w-7 h-7 text-yellow-300" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Get Your Free Brand Analysis</h3>
                <p className="text-sm md:text-base text-white/80 mb-7 max-w-lg mx-auto">
                  Receive personalized insights and growth strategies tailored to your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleGetFreeAnalysis}
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-purple-700 font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105 text-sm"
                  >
                    Request Free Analysis
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <a
                    href="https://wa.me/8275001572?text=Hi,%20I%20would%20like%20to%20get%20a%20free%20brand%20analysis"
                    className="inline-flex items-center justify-center px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors text-sm"
                  >
                    WhatsApp Us
                    <MessageCircle className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white rounded-full p-1.5">
                  <img
                    src="/file_00000000d128720ba4b334cd306b2907.png"
                    alt="Lovegraphy Media"
                    className="h-9 w-9"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Lovegraphy Media</h3>
                  <p className="text-xs text-gray-400">Digital Growth Partner</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 max-w-md mb-3 leading-relaxed">
                Empowering businesses through innovative digital strategies, creative storytelling, and measurable growth.
              </p>
              <p className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold text-sm italic">
                "Influence. Engage. Grow."
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['Home', 'Services', 'Results', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm text-white">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:info@lovegraphymedia.in" className="text-gray-400 hover:text-white transition-colors break-all">info@lovegraphymedia.in</a></li>
                <li><a href="https://wa.me/8275001572" className="text-gray-400 hover:text-white transition-colors">WhatsApp: +91 8275001572</a></li>
                <li className="text-gray-400">Maharashtra, India</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-500 text-xs md:text-sm">
              © 2024 Lovegraphy Media. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
