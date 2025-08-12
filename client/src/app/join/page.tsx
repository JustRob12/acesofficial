"use client";

import Image from "next/image";
import { useState } from "react";

export default function JoinACES() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    course: "",
    year: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We'll contact you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
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
                <a href="/#organizations" className="text-gray-700 hover:text-orange-600 transition-colors">
                  Organizations
                </a>
                <a href="/#news" className="text-gray-700 hover:text-orange-600 transition-colors">News</a>
                <a href="/officers" className="text-gray-700 hover:text-orange-600 transition-colors">Officers</a>
                <a href="/#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
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
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join <span className="text-orange-600">ACES</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Become part of the Association of Computing and Engineering Students and unlock endless opportunities for growth, learning, and networking.
            </p>
          </div>
        </div>
      </div>

      {/* Membership Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Fees & Process */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Membership Details</h2>
            
            {/* Fee Structure */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">💰 Membership Fee</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Full Year (2 Semesters)</span>
                  <span className="text-2xl font-bold text-orange-600">₱120</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-semibold text-gray-700">Per Semester</span>
                  <span className="text-xl font-bold text-gray-600">₱60</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Payment is made to the current treasurer
              </p>
            </div>

            {/* How to Join */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">📋 How to Join</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span>Fill out the membership form below</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <span>Submit your payment of ₱120 to the current treasurer</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <span>Receive your official ACES membership card</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  <span>Start participating in all ACES activities!</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Member Benefits</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Access to All Faculty Activities</h3>
                    <p className="text-gray-600">Participate in workshops, seminars, competitions, and social events organized by the faculty.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Learning & Development</h3>
                    <p className="text-gray-600">Access to exclusive training sessions, coding bootcamps, and skill development programs.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Networking Opportunities</h3>
                    <p className="text-gray-600">Connect with fellow students, alumni, and industry professionals through events and meetups.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership Experience</h3>
                    <p className="text-gray-600">Opportunities to take on leadership roles, organize events, and develop management skills.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Career Support</h3>
                    <p className="text-gray-600">Resume workshops, interview preparation, and job placement assistance.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-orange-100">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Study Resources</h3>
                    <p className="text-gray-600">Access to study materials, past exam papers, and collaborative study groups.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join ACES?</h2>
            <p className="text-orange-100 text-lg">Fill out the form below and we'll get back to you with next steps!</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="studentId" className="block text-sm font-semibold text-gray-700 mb-2">Student ID</label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your student ID"
                />
              </div>
              <div>
                <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select your course</option>
                  <option value="BS Computer Science">BS Computer Science</option>
                  <option value="BS Information Technology">BS Information Technology</option>
                  <option value="BS Computer Engineering">BS Computer Engineering</option>
                  <option value="BS Electronics Engineering">BS Electronics Engineering</option>
                  <option value="BS Electrical Engineering">BS Electrical Engineering</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-semibold text-gray-700 mb-2">Year Level</label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Select your year level</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Additional Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Tell us why you want to join ACES or any questions you have..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-4 px-8 rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

             {/* Footer */}
       <footer className="bg-gray-900 text-white py-12">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <p className="text-gray-400 mb-4">&copy; 2025 ACES - Association of Computing and Engineering Students. All rights reserved.</p>
           
           {/* Developer Credit */}
           <div className="flex items-center justify-center space-x-4 mb-4">
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
