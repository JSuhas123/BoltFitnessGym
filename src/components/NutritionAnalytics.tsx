import { motion } from 'framer-motion';
import { BarChart3, CheckCircle, Download, TrendingUp } from 'lucide-react';
import React from 'react';
import { useNutritionAnalytics } from '../hooks/useNutrition';

const NutritionAnalytics: React.FC = () => {
  const { analytics, trackGoalSelection } = useNutritionAnalytics();

  const stats = [
    {
      label: 'Guides Downloaded',
      value: analytics.totalGuideDownloads,
      icon: Download,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      label: 'Available Guides',
      value: analytics.availableGuides,
      icon: CheckCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      label: 'Conversion Rate',
      value: `${Math.round(analytics.conversionRate)}%`,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      label: 'Unique Goals',
      value: analytics.popularFitnessGoals.length,
      icon: BarChart3,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const sortedGoals = analytics.popularFitnessGoals
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const maxCount = Math.max(...analytics.popularFitnessGoals.map(g => g.count), 1);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Nutrition Analytics</h3>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-50 rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`w-8 h-8 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
            </div>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Popular Fitness Goals */}
      {sortedGoals.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Popular Fitness Goals</h4>
          <div className="space-y-3">
            {sortedGoals.map((goalData, index) => (
              <div key={goalData.goal} className="flex items-center justify-between">
                <span className="text-gray-700 capitalize">
                  {goalData.goal.replace('-', ' ')}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(goalData.count / maxCount) * 100}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="bg-blue-500 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-8 text-right">
                    {goalData.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Goal Tracking */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-md font-semibold text-blue-900 mb-3">Track Goal Interest</h4>
        <p className="text-sm text-blue-700 mb-4">
          Click a goal to track user interest in real-time:
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'weight-loss',
            'muscle-gain',
            'strength',
            'endurance',
            'general-fitness',
            'athletic-performance'
          ].map((goal) => (
            <button
              key={goal}
              onClick={() => trackGoalSelection(goal)}
              className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-xs font-medium transition-colors"
            >
              {goal.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Download Progress</span>
          <span className="text-sm text-gray-600">
            {analytics.totalGuideDownloads} / 200 guides
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min((analytics.totalGuideDownloads / 200) * 100, 100)}%` }}
            transition={{ duration: 1.5 }}
            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default NutritionAnalytics;
