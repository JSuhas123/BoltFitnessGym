import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-500 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
              </motion.div>
              <span className="text-3xl font-black">
                BOLT <span className="text-yellow-400">FITNESS</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Premier fitness center in Bengaluru offering state-of-the-art equipment, 
              expert personal training, and comprehensive wellness programs. Transform your 
              fitness journey with us in the heart of Vijnan nagar.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  2nd Floor, No 1 & 2, Malleshpalya Main Rd,<br />
                  next to Zudio, Vignan Nagar,<br />
                  Doddanekkundi, Bengaluru, Karnataka 560075
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <a href="tel:+919741563405" className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                  +91 97415 63405
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <a href="mailto:boltfitness1.0@gmail.com" className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                  boltfitness1.0@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">Mon-Sun: 5:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-yellow-400/20 mt-8 pt-8">
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Bolt Fitness. All rights reserved.
            </p>
            <motion.p 
              className="text-gray-500 text-xs"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Created with ❤️ by{' '}
              <motion.a
                href="https://surgewing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                Surgewing Technologies
              </motion.a>
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;