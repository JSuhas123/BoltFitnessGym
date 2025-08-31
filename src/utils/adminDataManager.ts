// Admin Data Manager - Hidden functionality for exporting user nutrition data
import { NutritionFormData } from '../types';

export interface NutritionSubmission {
  id: string;
  timestamp: string;
  data: NutritionFormData;
  ipAddress?: string;
  userAgent?: string;
}

class AdminDataManager {
  private readonly STORAGE_KEY = 'bfn_admin_data';
  private readonly ADMIN_KEY = 'bfn_admin_access';

  // Store nutrition submission (called when user submits form)
  storeNutritionSubmission(formData: NutritionFormData): void {
    try {
      const submission: NutritionSubmission = {
        id: this.generateId(),
        timestamp: new Date().toISOString(),
        data: { ...formData },
        userAgent: navigator.userAgent
      };

      const existingData = this.getStoredSubmissions();
      existingData.push(submission);
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(existingData));
    } catch (error) {
      console.error('Failed to store nutrition submission:', error);
    }
  }

  // Get all stored submissions (admin only)
  getStoredSubmissions(): NutritionSubmission[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Failed to retrieve submissions:', error);
      return [];
    }
  }

  // Generate CSV data
  generateCSV(): string {
    const submissions = this.getStoredSubmissions();
    
    if (submissions.length === 0) {
      return 'No data available';
    }

    // CSV Headers
    const headers = [
      'ID',
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Age',
      'Gender',
      'Height (cm)',
      'Weight (kg)',
      'Activity Level',
      'Fitness Goal',
      'Dietary Restrictions',
      'User Agent'
    ];

    // Convert data to CSV rows
    const rows = submissions.map(submission => {
      const data = submission.data;
      return [
        submission.id,
        new Date(submission.timestamp).toLocaleString(),
        data.name || '',
        data.email || '',
        data.phone || '',
        data.age || '',
        data.gender || '',
        data.height || '',
        data.weight || '',
        data.activityLevel || '',
        data.fitnessGoal || '',
        data.dietaryRestrictions || '',
        submission.userAgent || ''
      ].map(field => `"${String(field).replace(/"/g, '""')}"`); // Escape quotes
    });

    // Combine headers and rows
    const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\\n');
    return csvContent;
  }

  // Download CSV file
  downloadCSV(): void {
    const csvContent = this.generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `nutrition-submissions-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  // Download Excel-compatible CSV (with BOM for proper encoding)
  downloadExcel(): void {
    const csvContent = this.generateCSV();
    const BOM = '\\uFEFF'; // Byte Order Mark for UTF-8
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `nutrition-submissions-${new Date().toISOString().split('T')[0]}.xlsx`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  // Get submission statistics
  getStatistics() {
    const submissions = this.getStoredSubmissions();
    
    const stats = {
      totalSubmissions: submissions.length,
      todaySubmissions: submissions.filter(s => 
        new Date(s.timestamp).toDateString() === new Date().toDateString()
      ).length,
      thisWeekSubmissions: submissions.filter(s => {
        const submissionDate = new Date(s.timestamp);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return submissionDate >= weekAgo;
      }).length,
      goalDistribution: {} as Record<string, number>,
      genderDistribution: {} as Record<string, number>,
      averageAge: 0
    };

    // Calculate distributions
    submissions.forEach(submission => {
      const data = submission.data;
      
      // Goal distribution
      if (data.fitnessGoal) {
        stats.goalDistribution[data.fitnessGoal] = (stats.goalDistribution[data.fitnessGoal] || 0) + 1;
      }
      
      // Gender distribution
      if (data.gender) {
        stats.genderDistribution[data.gender] = (stats.genderDistribution[data.gender] || 0) + 1;
      }
    });

    // Calculate average age
    const agesWithData = submissions.filter(s => s.data.age).map(s => Number(s.data.age));
    stats.averageAge = agesWithData.length > 0 
      ? agesWithData.reduce((sum, age) => sum + age, 0) / agesWithData.length 
      : 0;

    return stats;
  }

  // Clear all data (admin only)
  clearAllData(): void {
    if (confirm('Are you sure you want to delete all nutrition submission data? This action cannot be undone.')) {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }

  // Admin authentication check
  isAdminAuthenticated(): boolean {
    return localStorage.getItem(this.ADMIN_KEY) === 'authenticated';
  }

  // Admin login
  adminLogin(password: string): boolean {
    // Simple password protection - you can change this password
    const adminPassword = 'boltfitness2025';
    
    if (password === adminPassword) {
      localStorage.setItem(this.ADMIN_KEY, 'authenticated');
      return true;
    }
    return false;
  }

  // Admin logout
  adminLogout(): void {
    localStorage.removeItem(this.ADMIN_KEY);
  }

  private generateId(): string {
    return 'nf_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
}

export const adminDataManager = new AdminDataManager();
