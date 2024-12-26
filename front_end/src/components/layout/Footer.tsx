import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/Wwte8mrH9oUKa73d8', '_blank');
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">About Us</h3>
            <p className="text-gray-400">
              AlgoSketch is a platform dedicated to making algorithm learning interactive and engaging through visual representations.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/problems" className="text-gray-400 hover:text-white">
                  Problems
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-gray-400 hover:text-white">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-white">
                  Research
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-gray-300 font-medium mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Emails
                </h4>
                <ul className="space-y-1">
                  {[
                    'contact@algosketch.com',
                    'wassimfourat.elamri@supcom.tn',
                    'fedi.hassine@supcom.tn'
                  ].map((email) => (
                    <li key={email}>
                      <button
                        onClick={() => handleEmailClick(email)}
                        className="text-gray-400 hover:text-emerald-500 transition-colors"
                      >
                        {email}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-2 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone
                </h4>
                <ul className="space-y-1">
                  {[
                    '92586722',
                    '94645958'
                  ].map((phone) => (
                    <li key={phone}>
                      <button
                        onClick={() => handlePhoneClick(phone)}
                        className="text-gray-400 hover:text-emerald-500 transition-colors"
                      >
                        +(216) {phone}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Address
                </h4>
                <button
                  onClick={handleLocationClick}
                  className="text-gray-400 hover:text-emerald-500 transition-colors"
                >
                  Technopark El Ghazela, Supcom, Tunis
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AlgoSketch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};