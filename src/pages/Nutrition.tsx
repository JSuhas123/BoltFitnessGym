import { motion } from 'framer-motion';
import { Apple } from 'lucide-react';
import Enhanced3DScene from '../components/3D/Enhanced3DScene';
import EnhancedFloatingElements from '../components/3D/EnhancedFloatingElements';
import NutritionForm from '../components/forms/NutritionForm';
import NutritionAnalytics from '../components/NutritionAnalytics';

const Nutrition = () => {
  const nutritionTips = [
    {
      id: 'pre-workout',
      title: 'Pre-Workout Fuel',
      content: 'Consume a balanced meal 2-3 hours before training, including complex carbs and lean protein.',
      icon: '⚡',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'post-workout',
      title: 'Post-Workout Recovery',
      content: 'Within 30 minutes post-workout, eat protein and carbs in a 3:1 ratio for optimal recovery.',
      icon: '🏃‍♂️',
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'hydration',
      title: 'Hydration Matters',
      content: 'Drink at least 8-10 glasses of water daily, more during intense training sessions.',
      icon: '💧',
      color: 'bg-cyan-100 text-cyan-800'
    },
    {
      id: 'timing',
      title: 'Meal Timing',
      content: 'Eat smaller, frequent meals throughout the day to maintain stable energy levels.',
      icon: '⏰',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: 'balance',
      title: 'Macronutrient Balance',
      content: 'Aim for 40% carbs, 30% protein, and 30% healthy fats for optimal body composition.',
      icon: '⚖️',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      id: 'supplements',
      title: 'Smart Supplementation',
      content: 'Focus on whole foods first, use supplements to fill specific nutritional gaps.',
      icon: '💊',
      color: 'bg-pink-100 text-pink-800'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-900 via-black to-green-900 text-white overflow-hidden">
        {/* 3D Background */}
        <Enhanced3DScene className="absolute inset-0 w-full h-full opacity-20" intensity="high" />
        
        {/* Floating Elements */}
        <EnhancedFloatingElements variant="nutrition" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fuel Your <motion.span 
              className="text-yellow-400 relative"
              whileHover={{ scale: 1.05 }}
            >
              Success
              <motion.div
                className="absolute -inset-2 bg-yellow-400/20 rounded-lg -z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.5, 0.2] 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Unlock your potential with personalized nutrition guidance designed to complement your fitness journey 
            and accelerate your results.
          </motion.p>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Essential Nutrition Tips</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Science-backed strategies to optimize your nutrition for better performance and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {nutritionTips.map((tip, index) => (
              <motion.div 
                key={tip.id} 
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {tip.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.content}</p>
                <motion.div 
                  className={`inline-block px-2 py-1 rounded text-xs font-semibold mt-3 ${tip.color}`}
                  whileHover={{ scale: 1.05 }}
                >
                  Expert Tip
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Nutrition Guide Form */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Personalized Nutrition Guide</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Unlock personalized nutrition recommendations with our comprehensive, science-based guide.
            </p>
          </motion.div>

          <NutritionForm />
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nutrition Impact</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              See how our nutrition guidance is helping people achieve their fitness goals.
            </p>
          </motion.div>

          <NutritionAnalytics />
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
