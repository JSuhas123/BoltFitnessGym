import { motion } from 'framer-motion';
import { BarChart3, Download, Eye, FileText, Lock, LogOut, Trash2, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { adminDataManager, NutritionSubmission } from '../utils/adminDataManager';

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [submissions, setSubmissions] = useState<NutritionSubmission[]>([]);
  const [statistics, setStatistics] = useState<{
    totalSubmissions: number;
    todaySubmissions: number;
    thisWeekSubmissions: number;
    goalDistribution: Record<string, number>;
    genderDistribution: Record<string, number>;
    averageAge: number;
  } | null>(null);
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    setIsAuthenticated(adminDataManager.isAdminAuthenticated());
    if (adminDataManager.isAdminAuthenticated()) {
      loadData();
    }
  }, []);

  const loadData = () => {
    setSubmissions(adminDataManager.getStoredSubmissions());
    setStatistics(adminDataManager.getStatistics());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminDataManager.adminLogin(password)) {
      setIsAuthenticated(true);
      setLoginError('');
      loadData();
    } else {
      setLoginError('Invalid password');
    }
    setPassword('');
  };

  const handleLogout = () => {
    adminDataManager.adminLogout();
    setIsAuthenticated(false);
    setSubmissions([]);
    setStatistics(null);
  };

  const handleDownloadCSV = () => {
    adminDataManager.downloadCSV();
  };

  const handleDownloadExcel = () => {
    adminDataManager.downloadExcel();
  };

  const handleClearData = () => {
    adminDataManager.clearAllData();
    loadData();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 p-8 rounded-lg shadow-2xl w-full max-w-md"
        >
          <div className="text-center mb-6">
            <Lock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Admin Access</h2>
            <p className="text-gray-400">Nutrition Data Management</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
            </div>
            
            {loginError && (
              <p className="text-red-400 text-sm mb-4">{loginError}</p>
            )}
            
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Nutrition Data Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Statistics Cards */}
        {statistics && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
            >
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-2xl font-bold">{statistics.totalSubmissions}</p>
                  <p className="text-gray-400 text-sm">Total Submissions</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-2xl font-bold">{statistics.todaySubmissions}</p>
                  <p className="text-gray-400 text-sm">Today</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-purple-400" />
                <div>
                  <p className="text-2xl font-bold">{statistics.thisWeekSubmissions}</p>
                  <p className="text-gray-400 text-sm">This Week</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
            >
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-yellow-400" />
                <div>
                  <p className="text-2xl font-bold">{Math.round(statistics.averageAge) || 'N/A'}</p>
                  <p className="text-gray-400 text-sm">Avg Age</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8">
          <button
            onClick={handleDownloadCSV}
            className="flex items-center justify-center gap-2 bg-blue-600 px-4 sm:px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Download CSV
          </button>
          
          <button
            onClick={handleDownloadExcel}
            className="flex items-center justify-center gap-2 bg-green-600 px-4 sm:px-6 py-3 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Download Excel
          </button>
          
          <button
            onClick={() => setShowSubmissions(!showSubmissions)}
            className="flex items-center justify-center gap-2 bg-purple-600 px-4 sm:px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
          >
            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
            {showSubmissions ? 'Hide' : 'View'} Submissions
          </button>
          
          <button
            onClick={handleClearData}
            className="flex items-center justify-center gap-2 bg-red-600 px-4 sm:px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            Clear All Data
          </button>
        </div>

        {/* Goal Distribution Chart */}
        {statistics && Object.keys(statistics.goalDistribution).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8"
          >
            <h3 className="text-xl font-bold mb-4">Fitness Goals Distribution</h3>
            <div className="space-y-2">
              {Object.entries(statistics.goalDistribution).map(([goal, count]) => (
                <div key={goal} className="flex items-center justify-between">
                  <span className="capitalize">{goal.replace('-', ' ')}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width: `${((count as number) / statistics.totalSubmissions) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-400 min-w-[40px] text-right">{count as number}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Submissions Table */}
        {showSubmissions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden"
          >
            <div className="p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold">Recent Submissions</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Goal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                      Age
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {submissions.slice(0, 10).map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-800/50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {new Date(submission.timestamp).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {submission.data.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {submission.data.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-400 text-black">
                          {submission.data.fitnessGoal?.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {submission.data.age || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
