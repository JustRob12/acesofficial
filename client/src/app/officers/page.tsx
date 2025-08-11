"use client";

import Image from "next/image";
import { useState } from "react";

export default function Officers() {
  const [selectedYear, setSelectedYear] = useState("2025-2026");

  const officersData = {
    "2023-2024": [
      {
        position: "GOVERNOR",
        name: "Maria Santos",
        image: "/officers/governor.svg",
        description: "Led ACES with exceptional leadership and innovative vision for the 2023-2024 academic year.",
        email: "maria.santos@aces.edu"
      },
      {
        position: "VICE GOVERNOR",
        name: "Carlos Rodriguez",
        image: "/officers/vice-governor.svg",
        description: "Supported the governor in managing ACES operations and student initiatives.",
        email: "carlos.rodriguez@aces.edu"
      },
      {
        position: "SECRETARY",
        name: "Ana Martinez",
        image: "/officers/secretary.svg",
        description: "Maintained records and ensured smooth communication within the organization.",
        email: "ana.martinez@aces.edu"
      },
      {
        position: "TREASURER",
        name: "Luis Garcia",
        image: "/officers/treasurer.svg",
        description: "Managed financial resources and ensured transparent financial operations.",
        email: "luis.garcia@aces.edu"
      },
      {
        position: "AUDITOR",
        name: "Elena Torres",
        image: "/officers/auditor.svg",
        description: "Oversaw financial integrity and ensured proper resource allocation.",
        email: "elena.torres@aces.edu"
      },
      {
        position: "BUSINESS MANAGER",
        name: "Roberto Lopez",
        image: "/officers/business-manager.svg",
        description: "Coordinated business partnerships and managed external relations.",
        email: "roberto.lopez@aces.edu"
      },
      {
        position: "PIO",
        name: "Isabella Cruz",
        image: "/officers/pio.svg",
        description: "Managed public relations and communication with the student body and community.",
        email: "isabella.cruz@aces.edu"
      }
    ],
    "2024-2025": [
      {
        position: "GOVERNOR",
        name: "John Doe",
        image: "/officers/governor.svg",
        description: "Leading ACES with vision and dedication to empower computing and engineering students.",
        email: "governor@aces.edu"
      },
      {
        position: "VICE GOVERNOR",
        name: "Jane Smith",
        image: "/officers/vice-governor.svg",
        description: "Supporting the governor in managing ACES operations and student initiatives.",
        email: "vicegovernor@aces.edu"
      },
      {
        position: "SECRETARY",
        name: "Mike Johnson",
        image: "/officers/secretary.svg",
        description: "Maintaining records and ensuring smooth communication within the organization.",
        email: "secretary@aces.edu"
      },
      {
        position: "TREASURER",
        name: "Sarah Wilson",
        image: "/officers/treasurer.svg",
        description: "Managing financial resources and ensuring transparent financial operations.",
        email: "treasurer@aces.edu"
      },
      {
        position: "AUDITOR",
        name: "David Brown",
        image: "/officers/auditor.svg",
        description: "Overseeing financial integrity and ensuring proper resource allocation.",
        email: "auditor@aces.edu"
      },
      {
        position: "BUSINESS MANAGER",
        name: "Lisa Garcia",
        image: "/officers/business-manager.svg",
        description: "Coordinating business partnerships and managing external relations.",
        email: "businessmanager@aces.edu"
      },
      {
        position: "PIO",
        name: "Alex Chen",
        image: "/officers/pio.svg",
        description: "Managing public relations and communication with the student body and community.",
        email: "pio@aces.edu"
      }
    ],
    "2025-2026": [
      {
        position: "GOVERNOR",
        name: "Emily Davis",
        image: "/officers/governor.svg",
        description: "Leading ACES into the future with innovative approaches and student-centered leadership.",
        email: "emily.davis@aces.edu"
      },
      {
        position: "VICE GOVERNOR",
        name: "Michael Chen",
        image: "/officers/vice-governor.svg",
        description: "Supporting the governor in managing ACES operations and student initiatives.",
        email: "michael.chen@aces.edu"
      },
      {
        position: "SECRETARY",
        name: "Sophia Kim",
        image: "/officers/secretary.svg",
        description: "Maintaining records and ensuring smooth communication within the organization.",
        email: "sophia.kim@aces.edu"
      },
      {
        position: "TREASURER",
        name: "Daniel Park",
        image: "/officers/treasurer.svg",
        description: "Managing financial resources and ensuring transparent financial operations.",
        email: "daniel.park@aces.edu"
      },
      {
        position: "AUDITOR",
        name: "Jessica Lee",
        image: "/officers/auditor.svg",
        description: "Overseeing financial integrity and ensuring proper resource allocation.",
        email: "jessica.lee@aces.edu"
      },
      {
        position: "BUSINESS MANAGER",
        name: "Ryan Thompson",
        image: "/officers/business-manager.svg",
        description: "Coordinating business partnerships and managing external relations.",
        email: "ryan.thompson@aces.edu"
      },
      {
        position: "PIO",
        name: "Amanda White",
        image: "/officers/pio.svg",
        description: "Managing public relations and communication with the student body and community.",
        email: "amanda.white@aces.edu"
      }
    ]
  };

  const officers = officersData[selectedYear as keyof typeof officersData];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass bg-white/90 backdrop-blur-md border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-orange-600 font-bold text-xl hover:text-orange-700 transition-colors">
                ACES
              </a>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
                <a href="/#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</a>
                <a href="/#events" className="text-gray-700 hover:text-orange-600 transition-colors">Events</a>
                <a href="/officers" className="text-orange-600 font-semibold">Officers</a>
                <a href="/#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors animate-pulse-glow">
                Join ACES
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              ACES
              <span className="block text-orange-600">Officers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Meet the dedicated leaders who drive innovation and excellence in the Association of Computing and Engineering Students.
            </p>
            
            {/* Academic Year Selector */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                                 <select
                   value={selectedYear}
                   onChange={(e) => setSelectedYear(e.target.value)}
                   className="appearance-none bg-white border-2 border-orange-300 rounded-lg px-6 py-3 pr-10 text-lg font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-lg hover:border-orange-400 transition-colors"
                 >
                   <option value="2023-2024">Academic Year 2023-2024 (Previous)</option>
                   <option value="2024-2025">Academic Year 2024-2025 (Past)</option>
                   <option value="2025-2026">Academic Year 2025-2026 (Current)</option>
                 </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Officers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.map((officer, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 overflow-hidden">
                {/* Officer Image */}
                <div className="relative h-64 bg-gradient-primary">
                  <Image
                    src={officer.image}
                    alt={`${officer.name} - ${officer.position}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                </div>
                
                {/* Officer Info */}
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-orange-600 mb-1">{officer.position}</h3>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{officer.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{officer.description}</p>
                  </div>
                  

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Our Leadership Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in becoming an ACES officer? We're always looking for passionate students to join our leadership team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all transform hover:scale-105 animate-glow">
              Apply for Position
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all transform hover:scale-105">
              Learn More
            </button>
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
