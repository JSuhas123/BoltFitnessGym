import { motion } from 'framer-motion';
import { ArrowRight, Award, Flame, Play, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {

  // Replace this with your actual YouTube video ID
  const youtubeVideoId = "o2U6iLky_dE"; // Extract from your YouTube URL

  return (
    <div>
      {/* Floating Social Media Links */}
      <div className="fixed left-1 xs:left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2 xs:gap-3 sm:gap-4">
        <motion.a
          href="https://www.instagram.com/bolt_fitnessindia?igsh=bXQ3NTlmMHU3ZGJ5&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 xs:p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] sm:min-w-[48px] sm:min-h-[48px] flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </motion.a>
        
        <motion.a
          href="https://www.facebook.com/share/1AwXnjTmZx/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 p-2 xs:p-2.5 sm:p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] sm:min-w-[48px] sm:min-h-[48px] flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </motion.a>
      </div>
      
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 opacity-30">
    <img
      src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg"
      alt="Gym interior"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
  </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white w-full max-w-6xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 py-4 xs:py-6 sm:py-8 md:py-12">
    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
      <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-3">
        TRANSFORM YOUR
      </span>
      <span className="block text-yellow-400">LIMITS</span>
    </h1>

    <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-light max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2">
      Unleash your potential with{" "}
      <span className="text-yellow-400 font-semibold">
        cutting-edge technology
      </span>{" "}
      and expert guidance
    </p>

    {/* CTA Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center max-w-2xl mx-auto px-2">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-yellow-400/25 w-full sm:w-auto min-h-[48px]"
      >
        <Zap className="h-5 w-5" />
        <span>Start Journey</span>
        <ArrowRight className="h-5 w-5" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold transition-all duration-300 backdrop-blur-sm text-center w-full sm:w-auto min-h-[48px]"
      >
        Meet Trainers
      </motion.button>
    </div>

    {/* Scroll Indicator */}
    <motion.div
      className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-yellow-400 rounded-full flex justify-center">
        <motion.div
          className="w-1 h-2 sm:h-3 bg-yellow-400 rounded-full mt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  </div>
</section>



      {/* YouTube Video Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-yellow-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -25, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-yellow-400/5 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6"
              whileHover={{ scale: 1.02 }}
            >
              See Our Gym in <span className="text-yellow-400">Action</span>
            </motion.h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto px-4">
              Take a virtual tour of our state-of-the-art facilities and witness the energy that drives our community
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Video Container with enhanced styling */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl shadow-2xl">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-2xl sm:rounded-3xl opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative bg-black rounded-xl sm:rounded-2xl overflow-hidden aspect-video shadow-inner">
                {/* YouTube Embed */}
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1&showinfo=0&controls=1&autoplay=0`}
                  title="Bolt Fitness Gym Tour"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="bg-yellow-400 p-4 sm:p-6 rounded-full shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 text-black ml-1" />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-yellow-400 rounded-tl-lg" />
              <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg" />
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg" />
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-yellow-400 rounded-br-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #facc15 2px, transparent 2px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              Why Choose <span className="text-yellow-500">Bolt Fitness?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">Experience fitness like never before</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              {
                image: "/images/state.jpg",
                title: "State-of-the-Art Equipment",
                description: "Latest fitness technology and equipment from industry-leading brands for optimal results.",
                icon: Award
              },
              {
                image: "/images/personal.jpg",
                title: "Expert Personal Trainers",
                description: "Certified professionals dedicated to helping you achieve your fitness goals safely and effectively.",
                icon: Users
              },
              {
                image: "/images/group.jpg",
                title: "Dynamic Classes",
                description: "Energizing fitness classes led by passionate instructors in a motivating environment.",
                icon: Flame
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                    <motion.img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <motion.div
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-yellow-400 p-2 sm:p-3 rounded-full"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                    </motion.div>
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-black/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 25, 0],
              y: [0, -15, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-black/10 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0],
              y: [0, 10, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(0,0,0,0.5)",
                  "0 0 20px rgba(0,0,0,0.3)",
                  "0 0 0px rgba(0,0,0,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Transform Your Life?
            </motion.h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 font-medium opacity-90 px-4">
              Join thousands of members who have already started their fitness journey with us.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/membership"
                className="bg-black hover:bg-gray-800 text-yellow-400 px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 inline-flex items-center space-x-2 sm:space-x-3 md:space-x-4 shadow-2xl hover:shadow-black/50"
              >
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                <span className="hidden sm:inline">Get Started Today</span>
                <span className="sm:hidden">Get Started</span>
                <ArrowRight className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;