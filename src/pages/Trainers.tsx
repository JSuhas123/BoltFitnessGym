import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Enhanced3DScene from '../components/3D/Enhanced3DScene';
import EnhancedFloatingElements from '../components/3D/EnhancedFloatingElements';

const Trainers = () => {
  const trainers = [
  {
    name: 'Vinod',
    title: 'Head Personal Trainer & Strength Specialist',
    experience: '10+ years experience',
    specialties: ['Strength Training', 'Power Lifting', 'Athletic Performance'],
    image: '/images/trainers/.jpg',
    rating: 4.9,
    clients: 150
  },
  {
    name: 'Satish U',
    title: 'HIIT & Functional Training Expert',
    experience: '20+ years experience',
    certifications: ['NASM-CPT', 'CrossFit Level 2', 'FMS Level 2'],
    specialties: ['HIIT Training', 'Functional Movement', 'Weight Loss'],
    image: '/images/trainers/satish.jpg',
    rating: 4.8,
    clients: 120
  },
  {
    name: 'Khadar Basha',
    title: 'Sports Performance & Rehabilitation',
    experience: '12+ years experience',
    certifications: ['CSCS', 'ATC', 'SFMA Level 2'],
    specialties: ['Injury Prevention', 'Sports Performance', 'Corrective Exercise'],
    image: '/images/trainers/khadar.jpg',
    rating: 4.9,
    clients: 85
  },
  {
    name: 'William',
    title: 'Nutrition & Lifestyle Coach',
    experience: '12+ years experience',
    certifications: ['RD', 'NASM-CPT', 'Behavior Change Specialist'],
    specialties: ['Nutrition Planning', 'Lifestyle Coaching', 'Body Composition'],
    image: '/images/trainers/william.jpg',
    rating: 4.8,
    clients: 180
  },
  {
    name: 'Ritesh',
    title: 'Group Fitness & Dance Instructor',
    experience: '2+ years experience',
    certifications: ['ACE-GFI', 'Zumba Certified', 'Barre Above Certified'],
    specialties: ['Group Fitness', 'Sports Performance', 'Barre Classes'],
    image: '/images/trainers/ritesh.jpg',
    rating: 4.7,
  },
  {
    name: 'Lohith',
    title: 'Group Fitness & Dance Instructor',
    experience: '2+ years experience',
    certifications: ['ACE-GFI', 'Zumba Certified', 'Barre Above Certified'],
    specialties: ['Group Fitness', 'Sports Performanc', 'Barre Classes'],
    image: '/images/trainers/lohith.jpg',
    rating: 4.7,
  }
];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* 3D Background */}
        <Enhanced3DScene className="absolute inset-0 w-full h-full opacity-20" intensity="medium" />
        
        {/* Floating Elements */}
        <EnhancedFloatingElements variant="trainers" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Expert <motion.span 
              className="text-yellow-400 relative"
              whileHover={{ scale: 1.05 }}
            >
              Trainers
              <motion.div
                className="absolute -inset-2 bg-yellow-400/20 rounded-lg -z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our team of certified professionals brings years of experience and passion to help you 
            achieve your fitness goals safely and effectively.
          </motion.p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {trainers.map((trainer, index) => (
              <motion.div 
                key={trainer.name} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Trainer Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <motion.img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300" />
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 flex items-center space-x-1 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{trainer.rating}</span>
                  </motion.div>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{trainer.name}</h3>
                    <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                      {trainer.experience}
                    </span>
                  </div>
                  

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {trainer.specialties.map((specialty, idx) => (
                        <span key={`${trainer.name}-specialty-${idx}`} className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Training Excellence</h2>
            <p className="text-lg sm:text-xl text-gray-600">Numbers that speak to our commitment to your success</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { value: "50+", label: "Combined Years of Experience" },
              { value: "225", label: "Active Training Clients" },
              { value: "4.9", label: "Average Trainer Rating" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center p-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Training Philosophy
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            At Bolt Fitness, we believe that every individual is unique, with distinct goals, challenges, 
            and capabilities. Our trainers take a personalized approach, combining evidence-based methods 
            with motivational support to create sustainable, long-term results.
          </motion.p>
          
          <motion.p 
            className="text-base sm:text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Whether you're a beginner taking your first steps into fitness or an experienced athlete 
            looking to break through plateaus, our expert team is here to guide, support, and celebrate 
            your journey every step of the way.
          </motion.p>
        </div>
        
        {/* Background animation */}
        <motion.div
          className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>
    </div>
  );
};

export default Trainers;
