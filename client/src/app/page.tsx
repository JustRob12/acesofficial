import Image from "next/image";

export default function Home() {
  // News and Events Data
  const newsEvents = [
    {
      id: 1,
      title: "ACES Tech Summit 2024",
      description: "Join us for the biggest technology conference of the year featuring industry experts, workshops, and networking opportunities.",
      backgroundImage: "/news/tech-summit-2024.jpg",
      facebookLink: "https://www.facebook.com/dorsu.aces/posts/tech-summit-2024"
    },
    {
      id: 2,
      title: "Coding Bootcamp Workshop",
      description: "Learn the fundamentals of web development with hands-on projects and expert guidance from our senior members.",
      backgroundImage: "/news/coding-bootcamp.jpg",
      facebookLink: "https://www.facebook.com/dorsu.aces/posts/coding-bootcamp"
    },
    {
      id: 3,
      title: "Engineering Career Fair",
      description: "Connect with top companies in the engineering and technology sector. Perfect opportunity for internships and job placements.",
      backgroundImage: "/news/career-fair.jpg",
      facebookLink: "https://www.facebook.com/dorsu.aces/posts/career-fair"
    },
    {
      id: 4,
      title: "Hackathon 2024",
      description: "24-hour coding challenge where teams compete to create innovative solutions for real-world problems.",
      backgroundImage: "/news/hackathon-2024.jpg",
      facebookLink: "https://www.facebook.com/dorsu.aces/posts/hackathon-2024"
    },
    {
      id: 5,
      title: "Alumni Networking Night",
      description: "Meet successful ACES alumni and build valuable connections for your future career in technology and engineering.",
      backgroundImage: "/news/alumni-night.jpg",
      facebookLink: "https://www.facebook.com/dorsu.aces/posts/alumni-night"
    },
    {
      id: 6,
      title: "Research Symposium",
      description: "Showcase your research projects and learn about cutting-edge developments in computing and engineering fields.",
      backgroundImage: "/news/research-symposium.jpg",
      facebookLink: "https://www.facebook.com/dorsu.aces/posts/research-symposium"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass bg-white/90 backdrop-blur-md border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-orange-600 font-bold text-xl hover:text-orange-700 transition-colors">
                ACES
              </a>
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
                <a href="#organizations" className="text-gray-700 hover:text-orange-600 transition-colors">
                  Organizations
                </a>
                <a href="#news" className="text-gray-700 hover:text-orange-600 transition-colors">News</a>
                <a href="/officers" className="text-gray-700 hover:text-orange-600 transition-colors">Officers</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/join" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors animate-pulse-glow">
                Join ACES
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-50 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Logo Section */}
          <div className="mb-9">
            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl mb-9 p-6">
              <Image
                src="/logos/aces-logo.png"
                alt="ACES Logo"
                width={144}
                height={144}
                className="object-contain"
              />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="block">Association of <span className="text-orange-600">Computing & Engineering Students</span></span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Empowering future tech leaders through innovation, collaboration, and excellence. 
            Join us in shaping the future of technology and engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join" className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 animate-glow inline-block">
              Join ACES
            </a>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About ACES</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">Fostering creativity and cutting-edge solutions in computing and engineering fields.</p>
            </div>
            
            <div className="glass bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-600">Building strong networks and partnerships within the tech community.</p>
            </div>
            
            <div className="glass bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in education and professional development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section id="organizations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Organizations</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Discover the diverse range of student organizations under ACES, each dedicated to fostering excellence in their respective fields of computing and engineering.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {(() => {
              const organizations = [
                {
                  name: "JPICE",
                  fullName: "Junior Philippine Institute of Civil Engineers",
                  description: "The premier organization for Civil Engineering students, fostering leadership and professional development in the field of civil engineering.",
                  course: "BSCE - Bachelor of Science in Civil Engineering",
                  color: "from-violet-500 to-violet-600",
                  logo: "/logos/jpice.png",
                  features: ["Professional Development", "Technical Skills", "Leadership Training", "Industry Connections"]
                },
                {
                  name: "CODEYTERES",
                  fullName: "Computer Engineering Society",
                  description: "Empowering Computer Engineering students through technology innovation, hands-on projects, and industry collaboration.",
                  course: "BSIT - Bachelor of Science in Information Technology",
                  color: "from-cyan-500 to-cyan-600",
                  logo: "/logos/codebyters.png",
                  features: ["Programming Workshops", "Hardware Projects", "Tech Innovation", "Industry Partnerships"]
                },
                {
                  name: "ASSITI",
                  fullName: "Association of Industrial Technology Innovators",
                  description: "Advancing industrial technology education and fostering a community of future technology innovators through practical learning and innovation.",
                  course: "BITM - Bachelor of Information Technology Management",
                  color: "from-gray-500 to-gray-600",
                  logo: "/logos/assiti.png",
                  features: ["Industrial Technology", "Digital Solutions", "Business Technology", "Project Management"]
                },
                {
                  name: "SMM",
                  fullName: "Society of Mathematics Major",
                  description: "Building the future through mathematical innovation, analytical excellence, and mathematical leadership development.",
                  course: "BSM/BSMRS - Bachelor of Science in Mathematics",
                  color: "from-green-500 to-green-600",
                  logo: "/logos/smm.png",
                  features: ["Mathematical Analysis", "Statistical Modeling", "Research Projects", "Academic Excellence"]
                }
              ];

              return organizations.map((org, index) => (
                <div key={org.name} id={org.name.toLowerCase()} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-visible relative border border-gray-100">
                  {/* Logo overlapping the container */}
                  <div className="absolute -top-12 left-8 z-10">
                    <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Image
                        src={org.logo}
                        alt={`${org.name} Logo`}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-r ${org.color} p-8 text-white pt-20`}>
                    <div className="flex items-center justify-end mb-4">
                      <div className="text-right">
                        <h3 className="text-4xl font-bold">{org.name}</h3>
                        <p className="text-lg opacity-90">{org.fullName}</p>
                      </div>
                    </div>
                    <p className="text-sm opacity-90 mb-4">{org.course}</p>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">{org.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {org.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <button className={`w-full bg-gradient-to-r ${org.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                        Learn More About {org.name}
                      </button>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* News and Events Section */}
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">News & Events</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Stay updated with the latest events, workshops, and opportunities from ACES
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {newsEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden group">
                {/* Background Image */}
                <div className="relative h-48 bg-gradient-to-br from-orange-400 to-orange-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  {/* Facebook Link */}
                  <a 
                    href={event.facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    View on Facebook
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* See More Button */}
          <div className="text-center">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 animate-glow">
              See More Events
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Facebook</p>
                    <p className="text-gray-600">https://www.facebook.com/dorsu.aces</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Engineering Building, Room 301</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors animate-glow">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h3 className="text-2xl font-bold">ACES</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Association of Computing and Engineering Students - Empowering future tech leaders through innovation, collaboration, and excellence.
          </p>
          <p className="text-gray-300">
            © 2024 ACES - Association of Computing and Engineering Students. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
