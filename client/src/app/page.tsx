import Image from "next/image";

export default function Home() {
  // News and Events Data
  const newsEvents = [
    {
      id: 1,
      title: "Looking for Passionated and committed Members on Our ACES Committees",
      description: "Join our dynamic ACES committees and be part of a passionate team dedicated to innovation and excellence in computing and engineering.",
      backgroundImage: "/events/aces-committees.jpg",
      facebookLink: "https://www.facebook.com/share/p/1CFoFG7J4n/"
    },
    {
      id: 2,
      title: "Buwan ng Wika, Buwan ng Kaalaman",
      description: "Celebrating Filipino language and knowledge month with cultural activities and educational programs that showcase our rich heritage.",
      backgroundImage: "/events/buwan-ng-wika.jpg",
      facebookLink: "https://www.facebook.com/share/p/1BxFB274bJ/"
    },
    {
      id: 3,
      title: "Ever wondered why our ACES fam chose FaCET?",
      description: "Discover the reasons behind why ACES members chose the Faculty of Computing and Engineering Technology and what makes it special.",
      backgroundImage: "/events/aces-facet.jpg",
      facebookLink: "https://www.facebook.com/share/p/14K8VqLswrj/"
    },
    {
      id: 4,
      title: "Paglinang sa Filipino at Katutubong Wika: Makasaysayan sa Pagkakaisa ng Bansa",
      description: "Exploring Filipino and indigenous languages as historical foundations for national unity and cultural preservation.",
      backgroundImage: "/events/filipino-wika.jpg",
      facebookLink: "https://www.facebook.com/share/p/1FD41fADNP/"
    },

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
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.backgroundImage}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
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
          <p className="text-gray-300 mb-4">
            © 2024 ACES - Association of Computing and Engineering Students. All rights reserved.
          </p>
          
          {/* Developer Credit */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-gray-400 text-sm">Developed by Roberto Jr M. Prisoris using</span>
            <div className="flex items-center space-x-3">
              {/* Next.js Logo */}
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 128 128">
                  <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="#000"/>
                </svg>
              </div>
              
              {/* Tailwind CSS Logo */}
              <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                </svg>
              </div>
              
              {/* React Logo */}
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14.23,12.004a2.236,2.236,0,0,1-2.235,2.236,2.236,2.236,0,0,1-2.236-2.236,2.236,2.236,0,0,1,2.235-2.236A2.236,2.236,0,0,1,14.23,12.004ZM11.995,24a11.975,11.975,0,0,1-2.4-.244l.691-.24a10.261,10.261,0,0,0,4.691,0l.691.24A11.975,11.975,0,0,1,11.995,24ZM3.52,18.644l.472-.274a10.276,10.276,0,0,0,2.028-2.764l-.753-.438a11.267,11.267,0,0,1-2.187,3.054ZM2.332,7.06l.753-.438a10.276,10.276,0,0,0,2.028-2.764L5.04,3.024a11.267,11.267,0,0,1-2.187,3.054ZM16.956,3.024l-.472-.274a10.276,10.276,0,0,0-2.028-2.764l.753-.438a11.267,11.267,0,0,1,2.187,3.054ZM20.468,18.644a11.267,11.267,0,0,1-2.187-3.054l-.753.438a10.276,10.276,0,0,0,2.028,2.764ZM22.668,7.06a11.267,11.267,0,0,1-2.187-3.054l-.753.438a10.276,10.276,0,0,0,2.028,2.764ZM8.306,20.863l-.691.24a11.975,11.975,0,0,1-2.4.244,11.975,11.975,0,0,1-2.4-.244l-.691-.24a10.261,10.261,0,0,0,4.691,0ZM2.592,14.058a11.267,11.267,0,0,1-2.187-3.054L.652,10.73a10.276,10.276,0,0,0,2.028,2.764ZM21.408,14.058a10.276,10.276,0,0,0,2.028-2.764l-.753-.438a11.267,11.267,0,0,1-2.187,3.054ZM23.348,10.73l-.753.438a11.267,11.267,0,0,1-2.187,3.054l.753.438a10.276,10.276,0,0,0,2.028-2.764ZM.652,13.27l.753.438a11.267,11.267,0,0,1,2.187-3.054L2.68,10.23A10.276,10.276,0,0,0,.652,13.27Z"/>
                </svg>
              </div>
              
              {/* TypeScript Logo */}
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.41.47.197.892.423 1.266.676.374.253.68.551.918.893.237.343.356.748.356 1.216 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
