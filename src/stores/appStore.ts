import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { NutritionGuide, User } from '../types';

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  
  // Nutrition state
  nutritionGuides: NutritionGuide[];
  nutritionAnalytics: {
    totalDownloads: number;
    availableGuides: number;
    conversionRate: number;
  };
  
  // UI state
  isLoading: boolean;
  errors: string[];
  notifications: Array<{
    id: string;
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
    timestamp: Date;
  }>;
  
  // Actions
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  addError: (error: string) => void;
  clearErrors: () => void;
  addNotification: (type: 'success' | 'error' | 'info' | 'warning', message: string) => void;
  removeNotification: (id: string) => void;
  addNutritionGuide: (guide: NutritionGuide) => void;
  updateNutritionAnalytics: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      nutritionGuides: [],
      nutritionAnalytics: {
        totalDownloads: 0,
        availableGuides: 200,
        conversionRate: 0
      },
      isLoading: false,
      errors: [],
      notifications: [],

      // Actions
      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user 
      }),

      setLoading: (isLoading) => set({ isLoading }),

      addError: (error) => set((state) => ({ 
        errors: [...state.errors, error] 
      })),

      clearErrors: () => set({ errors: [] }),

      addNotification: (type, message) => {
        const notification = {
          id: Date.now().toString(),
          type,
          message,
          timestamp: new Date()
        };
        set((state) => ({ 
          notifications: [...state.notifications, notification] 
        }));
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
          get().removeNotification(notification.id);
        }, 5000);
      },

      removeNotification: (id) => set((state) => ({
        notifications: state.notifications.filter(n => n.id !== id)
      })),

      addNutritionGuide: (guide) => set((state) => {
        const updatedGuides = [...state.nutritionGuides, guide];
        const totalDownloads = updatedGuides.length;
        
        return {
          nutritionGuides: updatedGuides,
          nutritionAnalytics: {
            ...state.nutritionAnalytics,
            totalDownloads,
            availableGuides: Math.max(0, 200 - totalDownloads),
            conversionRate: totalDownloads > 0 ? (totalDownloads / (totalDownloads + 50)) * 100 : 0
          }
        };
      }),

      updateNutritionAnalytics: () => {
        const guides = get().nutritionGuides;
        const totalDownloads = guides.length;
        
        set((state) => ({
          nutritionAnalytics: {
            ...state.nutritionAnalytics,
            totalDownloads,
            availableGuides: Math.max(0, 200 - totalDownloads),
            conversionRate: totalDownloads > 0 ? (totalDownloads / (totalDownloads + 50)) * 100 : 0
          }
        }));
      }
    }),
    {
      name: 'bolt-fitness-store',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        nutritionGuides: state.nutritionGuides,
        nutritionAnalytics: state.nutritionAnalytics
      })
    }
  )
);
