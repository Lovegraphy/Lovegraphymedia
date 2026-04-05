import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Search, Share2, Users, PenTool, Mail, Phone, MapPin, ChevronRight, ArrowRight, Zap, Target } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <img src="/file_00000000d128720ba4b334cd306b2907.png" alt="Lovegraphy Media" className="h-12 w-12" />
              <h1 className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent' : 'text-white'}`}>
                Lovegraphy Media
              </h1>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className={`transition-colors duration-300 font-medium ${scrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-yellow-300'}`}>Home</a>
              <a href="#services" className={`transition-colors duration-300 font-medium ${scrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-yellow-300'}`}>Services</a>
              <a href="#results" className={`transition-colors duration-300 font-medium ${scrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-yellow-300'}`}>Results</a>
              <a href="#team" className={`transition-colors duration-300 font-medium ${scrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-yellow-300'}`}>Team</a>
              <a href="#contact" className={`transition-colors duration-300 font-medium ${scrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-yellow-300'}`}>Contact</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className={scrolled ? 'text-gray-900' : 'text-white'} size={28} />
              ) : (
                <Menu className={scrolled ? 'text-gray-900' : 'text-white'} size={28} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-4 border-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">Services</a>
              <a href="#results" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">Results</a>
              <a href="#team" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative text-center px-4 animate-fade-in max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center animate-slide-up">
            <img src="/file_00000000d128720ba4b334cd306b2907.png" alt="Lovegraphy Media Logo" className="h-32 w-32 md:h-40 md:w-40 drop-shadow-lg" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-slide-up animation-delay-200">
            Elevate Your Brand
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-yellow-200 mb-8 animate-slide-up animation-delay-400">
            Your Growth Partner in the Digital World.
          </p>
          <p className="text-lg md:text-xl text-gray-100 mb-12 animate-slide-up animation-delay-600">
            Strategic Digital Marketing Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-purple-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Lookup
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:info@lovegraphymedia.in"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Send Enquiry
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions to grow your digital presence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100 group-hover:border-transparent">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 group-hover:shadow-lg transition-all duration-300">
                        <img src="/file_00000000d128720ba4b334cd306b2907.png" alt="Logo" className="w-12 h-12 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-transparent bg-clip-text group-hover:bg-white group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 text-base">{service.description}</p>

                  <div className="mt-8 flex items-center text-pink-600 group-hover:text-yellow-300 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Learn More
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 p-0.5 rounded-2xl">
              <div className="bg-white rounded-2xl px-8 md:px-12 py-6">
                <p className="text-gray-700 text-lg font-semibold mb-4">Ready to get started?</p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Our Results</h2>
            <p className="text-xl text-gray-600">What we've achieved for our clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {results.map((result, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 group border-b-4 border-transparent hover:border-gradient-to-r"
                style={{
                  borderBottomColor: index === 0 ? '#ec4899' : index === 1 ? '#a855f7' : '#2563eb'
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, #fce7f3, #fbcfe8)' : index === 1 ? 'linear-gradient(135deg, #f3e8ff, #e9d5ff)' : 'linear-gradient(135deg, #dbeafe, #bfdbfe)'
                  }}
                >
                  <span style={{
                    color: index === 0 ? '#be185d' : index === 1 ? '#6b21a8' : '#1e40af'
                  }}>
                    {result.icon}
                  </span>
                </div>
                <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {result.stat}
                </p>
                <p className="text-xl font-bold text-gray-900 mb-1">{result.label}</p>
                <p className="text-gray-600">{result.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-8 text-gray-100">Get a free lookup today and discover how we can boost your growth</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Lookup
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="mailto:info@lovegraphymedia.in"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-purple-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Send Enquiry
                <Mail className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">Passionate professionals driving your success</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 relative flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-4">
                    <Users className="w-12 h-12 text-gradient-to-r from-pink-600 via-purple-600 to-blue-600" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Lavkumar Prajapati</h3>
                <p className="text-xl font-semibold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">CEO & Founder</p>
                <div className="space-y-3 mb-8 text-left md:text-center">
                  <div className="inline-block">
                    <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-semibold mr-2 mb-2">
                      Engineer
                    </span>
                    <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold mr-2 mb-2">
                      Marketing Professional
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mr-2 mb-2">
                      Cinematographer
                    </span>
                    <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold mr-2 mb-2">
                      Influencer
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  With expertise spanning engineering, marketing, cinematography, and influencer relations, Lavkumar brings a unique multidisciplinary approach to digital marketing. His vision is to empower businesses through innovative strategies and authentic storytelling.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a href="mailto:lav@lovegraphymedia.in" className="text-pink-600 hover:text-pink-700 font-semibold flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    lav@lovegraphymedia.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss how we can help grow your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-3 transition-all duration-300 border-b-4 border-pink-500 hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full mb-6 text-pink-600 hover:scale-110 transition-all duration-300">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 font-medium">Maharashtra, India</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-3 transition-all duration-300 border-b-4 border-purple-500 hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mb-6 text-purple-600 hover:scale-110 transition-all duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:info@lovegraphymedia.in" className="text-gray-600 hover:text-purple-600 font-medium break-all">
                info@lovegraphymedia.in
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-3 transition-all duration-300 border-b-4 border-blue-500 hover:shadow-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-6 text-blue-600 hover:scale-110 transition-all duration-300">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Website</h3>
              <a href="https://lovegraphymedia.in" className="text-gray-600 hover:text-blue-600 font-medium">
                lovegraphymedia.in
              </a>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Request a Free Lookup</h3>
              <p className="text-lg mb-8 text-gray-100">Send us an enquiry and get personalized recommendations for your business growth</p>
              <a
                href="mailto:info@lovegraphymedia.in?subject=Free%20Lookup%20Request&body=Hi%20Lovegraphy%20Media%2C%0A%0AI%20would%20like%20to%20get%20a%20free%20lookup%20for%20my%20business.%0A%0APlease%20share%20more%20details%20about%20your%20services.%0A%0AThank%20you!"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-purple-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Send Enquiry Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img src="/file_00000000d128720ba4b334cd306b2907.png" alt="Lovegraphy Media" className="h-12 w-12" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">Lovegraphy Media</h3>
            <p className="text-gray-300 mb-4 font-semibold">Your Growth Partner in the Digital World.</p>
            <p className="text-gray-300 mb-6 italic">"Influence. Engage. Grow."</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 Lovegraphy Media. All rights reserved. | Crafted with passion for your growth.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;