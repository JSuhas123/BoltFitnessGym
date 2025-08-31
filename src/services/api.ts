const API_BASE = import.meta.env.PROD 
  ? 'https://your-app.herokuapp.com/api'
  : 'http://localhost:5000/api';

export const api = {
  post: async (endpoint: string, data: unknown) => {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Post Error:', error);
      throw error;
    }
  },
  
  get: async (endpoint: string) => {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Get Error:', error);
      throw error;
    }
  },

  // Authentication
  login: async (email: string, password: string) => {
    const result = await api.post('/login', { email, password });
    if (result.token) {
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', JSON.stringify(result.user));
    }
    return result;
  },

  register: async (userData: Record<string, unknown>) => {
    return await api.post('/register', userData);
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Forms
  submitNutritionForm: async (formData: Record<string, unknown>) => {
    return await api.post('/nutrition', formData);
  },

  submitContactForm: async (formData: Record<string, unknown>) => {
    return await api.post('/contact', formData);
  },

  // Membership
  signupMembership: async (membershipData: Record<string, unknown>) => {
    return await api.post('/membership', membershipData);
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  }
};

export default api;
