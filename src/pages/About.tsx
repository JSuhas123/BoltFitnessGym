import { motion } from 'framer-motion';
import { Award, Heart, Target, Users } from 'lucide-react';
import Enhanced3DScene from '../components/3D/Enhanced3DScene';
import EnhancedFloatingElements from '../components/3D/EnhancedFloatingElements';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about helping you achieve your fitness goals and live a healthier life.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where everyone feels welcome and motivated to succeed.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the highest quality equipment, training, and customer service.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Focused on delivering measurable results through personalized fitness solutions.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-8 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* 3D Background */}
        <Enhanced3DScene className="absolute inset-0 w-full h-full opacity-30" intensity="low" />
        
        {/* Floating Elements */}
        <EnhancedFloatingElements variant="fitness" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                About <motion.span 
                  className="text-yellow-400 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  Bolt Fitness
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
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Founded in 2024, Bolt Fitness has been at the forefront of the fitness revolution, 
                helping hundreds of individuals transform their lives through dedicated training and support.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Our mission is to create a welcoming environment where fitness enthusiasts of all levels 
                can pursue their goals with confidence, guided by expert trainers and supported by 
                cutting-edge equipment.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg"
                  alt="Gym environment"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.title} 
                className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="h-8 w-8 text-yellow-400" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/images/story.jpg"
                  alt="Founder story"
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Bolt Fitness was born from a simple belief: everyone deserves access to quality fitness 
                  facilities and expert guidance. Our founders started this journey after 
                  experiencing firsthand how proper training and motivation can completely transform lives.
                </p>
                <p>
                  What began as a small neighborhood gym has evolved into a premier fitness destination, 
                  but our core mission remains unchanged: to provide an inclusive, supportive environment 
                  where members can achieve their personal best.
                </p>
                <p>
                  Our team of certified trainers, nutritionists, and wellness experts work 
                  together to ensure every member receives the personalized attention they deserve.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;