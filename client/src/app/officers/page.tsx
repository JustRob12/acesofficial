"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Officers() {
  const [selectedYear, setSelectedYear] = useState("2025-2026");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const officersData = {
    "2023-2024": [
      {
        position: "ADVISER",
        name: "Jerd Mutia Dela Gente",
        image: "/officers/2023-2024/adviser.jpg",
        description: "Providing guidance and mentorship to ACES leadership and members.",
        email: "adviser@aces.edu"
      },
      {
        position: "CO-ADVISER",
        name: "Cindy A. Lasco",
        image: "/officers/2023-2024/co-adviser.jpg",
        description: "Supporting the adviser in providing guidance and mentorship to ACES leadership.",
        email: "coadviser@aces.edu"
      },
      {
        position: "GOVERNOR",
        name: "Caryl Jane Sombadon Talaid",
        image: "/officers/2023-2024/governor.jpg",
        description: "Led ACES with exceptional leadership and innovative vision for the 2023-2024 academic year.",
        email: "governor@aces.edu"
      },
      {
        position: "VICE GOVERNOR",
        name: "Jethro Malabar",
        image: "/officers/2023-2024/vice-governor.jpg",
        description: "Supported the governor in managing ACES operations and student initiatives.",
        email: "vicegovernor@aces.edu"
      },
      {
        position: "SECRETARY",
        name: "Angel Eroy",
        image: "/officers/2023-2024/secretary.jpg",
        description: "Maintained records and ensured smooth communication within the organization.",
        email: "secretary@aces.edu"
      },
      {
        position: "TREASURER",
        name: "Lai Lanie Ventura",
        image: "/officers/2023-2024/treasurer.jpg",
        description: "Managed financial resources and ensured transparent financial operations.",
        email: "treasurer@aces.edu"
      },
      {
        position: "AUDITOR",
        name: "Rassey Perez",
        image: "/officers/2023-2024/auditor.jpg",
        description: "Oversaw financial integrity and ensured proper resource allocation.",
        email: "auditor@aces.edu"
      },
      {
        position: "BUSINESS MANAGER",
        name: "John Paul Colita",
        image: "/officers/2023-2024/business-manager.jpg",
        description: "Coordinated business partnerships and managed external relations.",
        email: "businessmanager@aces.edu"
      },
      {
        position: "PIO",
        name: "Ryan Pete Lad",
        image: "/officers/2023-2024/pio.jpg",
        description: "Managed public relations and communication with the student body and community.",
        email: "pio@aces.edu"
      },
      {
        position: "PIO 2",
        name: "Lester Jon Nunez",
        image: "/officers/2023-2024/pio2.jpg",
        description: "Assisted in public relations and communication with the student body and community.",
        email: "pio2@aces.edu"
      }
    ],
    "2024-2025": [
      {
        position: "ADVISER",
        name: "April Joy Uy",
        image: "/officers/2024-2025/adviser.jpg",
        description: "Providing guidance and mentorship to ACES leadership and members.",
        email: "adviser@aces.edu"
      },
      {
        position: "CO-ADVISER",
        name: "Clint Laurence Mabandos Dueñas",
        image: "/officers/2024-2025/co-adviser.jpg",
        description: "Supporting the adviser in providing guidance and mentorship to ACES leadership.",
        email: "coadviser@aces.edu"
      },
      {
        position: "GOVERNOR",
        name: "Tristan Portugaliza",
        image: "/officers/2024-2025/GOVERNOR.png",
        description: "Leading ACES with vision and dedication to empower computing and engineering students.",
        email: "governor@aces.edu"
      },
      {
        position: "VICE GOVERNOR",
        name: "John Paul Colita",
        image: "/officers/2024-2025/VICE-GOVERNOR.png",
        description: "Supporting the governor in managing ACES operations and student initiatives.",
        email: "vicegovernor@aces.edu"
      },
      {
        position: "SECRETARY",
        name: "Zandra Kate Ruin",
        image: "/officers/2024-2025/SECRETARY.png",
        description: "Maintaining records and ensuring smooth communication within the organization.",
        email: "secretary@aces.edu"
      },
      {
        position: "TREASURER",
        name: "Kate Rodriguez",
        image: "/officers/2024-2025/TREASURER.png",
        description: "Managing financial resources and ensuring transparent financial operations.",
        email: "treasurer@aces.edu"
      },
      {
        position: "AUDITOR",
        name: "Rodgeline Bansagan",
        image: "/officers/2024-2025/AUDITOR.png",
        description: "Overseeing financial integrity and ensuring proper resource allocation.",
        email: "auditor@aces.edu"
      },
      {
        position: "BUSINESS MANAGER",
        name: "Rezrafel Umbukan",
        image: "/officers/2024-2025/BUSINESS MANAGER.png",
        description: "Coordinating business partnerships and managing external relations.",
        email: "businessmanager@aces.edu"
      },
      {
        position: "PIO",
        name: "Roberto Jr M. Prisoris",
        image: "/officers/2024-2025/pio.jpg",
        description: "Managing public relations and communication with the student body and community.",
        email: "pio@aces.edu"
      },
      {
        position: "PIO 2",
        name: "Joomer Jake C. Caballero",
        image: "/officers/2024-2025/pio2.jpg",
        description: "Assisted in public relations and communication with the student body and community.",
        email: "pio2@aces.edu"
      }
    ],
    "2025-2026": [
      {
        position: "ADVISER",
        name: "April Joy Uy",
        image: "/officers/2025-2026/adviser.jpg",
        description: "Providing guidance and mentorship to ACES leadership and members.",
        email: "adviser@aces.edu"
      },
      {
        position: "CO-ADVISER",
        name: "Algasher Ato",
        image: "/officers/2025-2026/co-adviser.jpg",
        description: "Supporting the adviser in providing guidance and mentorship to ACES leadership.",
        email: "coadviser@aces.edu"
      },
      {
        position: "GOVERNOR",
        name: "Jenalyn E. Jonasan",
        image: "/officers/2025-2026/governor.jpg",
        description: "Leading ACES into the future with innovative approaches and student-centered leadership.",
        email: "governor@aces.edu"
      },
      {
        position: "VICE GOVERNOR",
        name: "Clarence Jay P. Magbutay",
        image: "/officers/2025-2026/vice-governor.jpg",
        description: "Supporting the governor in managing ACES operations and student initiatives.",
        email: "vicegovernor@aces.edu"
      },
      {
        position: "SECRETARY",
        name: "Muhajer M. Onofre",
        image: "/officers/2025-2026/secretary.jpg",
        description: "Maintaining records and ensuring smooth communication within the organization.",
        email: "secretary@aces.edu"
      },
      {
        position: "TREASURER",
        name: "Cyrine S. Ganloy",
        image: "/officers/2025-2026/treasurer.jpg",
        description: "Managing financial resources and ensuring transparent financial operations.",
        email: "treasurer@aces.edu"
      },
      {
        position: "AUDITOR",
        name: "Kian Carl O. Escala",
        image: "/officers/2025-2026/auditor.jpg",
        description: "Overseeing financial integrity and ensuring proper resource allocation.",
        email: "auditor@aces.edu"
      },
      {
        position: "BUSINESS MANAGER",
        name: "Adelfo P. Manawataw Jr.",
        image: "/officers/2025-2026/business-manager.jpg",
        description: "Coordinating business partnerships and managing external relations.",
        email: "businessmanager@aces.edu"
      },
      {
        position: "PIO",
        name: "Christian Kirt V. Basog",
        image: "/officers/2025-2026/pio.jpg",
        description: "Managing public relations and communication with the student body and community.",
        email: "pio@aces.edu"
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
              <Link href="/" className="text-orange-600 font-bold text-xl hover:text-orange-700 transition-colors">
                ACES
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
                <Link href="/#about" className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
                <Link href="/#organizations" className="text-gray-700 hover:text-orange-600 transition-colors">Organizations</Link>
                <Link href="/officers" className="text-orange-600 font-semibold">Officers</Link>
                <Link href="/#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/join" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors animate-pulse-glow">
                Join ACES
              </Link>
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bg-white shadow-lg border-b border-orange-200 transform transition-transform duration-300 ease-in-out">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block py-3 text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                href="/#about" 
                className="block py-3 text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/#organizations" 
                className="block py-3 text-gray-700 hover:text-orange-600 transition-colors border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Organizations
              </Link>
              <Link 
                href="/officers" 
                className="block py-3 text-orange-600 font-semibold border-b border-gray-100"
                onClick={toggleMobileMenu}
              >
                Officers
              </Link>
              <Link 
                href="/#contact" 
                className="block py-3 text-gray-700 hover:text-orange-600 transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}

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
                <div className="relative h-64 bg-gradient-primary flex items-center justify-center">
                  <Image
                    src={officer.image}
                    alt={`${officer.name} - ${officer.position}`}
                    width={180}
                    height={180}
                    className="object-contain border-4 border-orange-500 rounded-full"
                  />
                </div>
                
                {/* Officer Info */}
                <div className="p-4">
                  <div className="text-center mb-2">
                    <h3 className="text-2xl font-bold text-orange-600 mb-1">{officer.position}</h3>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{officer.name}</h4>
                    <p className="text-gray-600 text-sm">{officer.description}</p>
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
            Interested in becoming an ACES officer? We&apos;re always looking for passionate students to join our leadership team.
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
