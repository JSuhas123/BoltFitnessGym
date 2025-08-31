import { Trainer } from '../types';

// Trainer data with local image paths - fallback to online images if local images not available
export const trainersData: Trainer[] = [
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    title: 'Head Personal Trainer & Strength Specialist',
    experience: '8 years',
    certifications: ['ACSM-CPT', 'NASM-CES', 'Precision Nutrition Level 1'],
    specialties: ['Strength Training', 'Olympic Lifting', 'Athletic Performance'],
    image: '/images/trainers/sarah-mitchell.jpg',
    rating: 4.9,
    clients: 150,
    bio: 'Sarah is a passionate strength coach with over 8 years of experience helping clients achieve their fitness goals. She specializes in Olympic lifting and athletic performance, working with everyone from beginners to competitive athletes.',
    hourlyRate: 85,
    availability: [
      { day: 'Monday', timeSlots: ['6:00 AM', '7:00 AM', '5:00 PM', '6:00 PM'] },
      { day: 'Tuesday', timeSlots: ['6:00 AM', '7:00 AM', '5:00 PM', '6:00 PM'] },
      { day: 'Wednesday', timeSlots: ['6:00 AM', '7:00 AM', '5:00 PM', '6:00 PM'] },
      { day: 'Thursday', timeSlots: ['6:00 AM', '7:00 AM', '5:00 PM', '6:00 PM'] },
      { day: 'Friday', timeSlots: ['6:00 AM', '7:00 AM', '5:00 PM'] },
      { day: 'Saturday', timeSlots: ['8:00 AM', '9:00 AM', '10:00 AM'] }
    ]
  },
  {
    id: 'mike-rodriguez',
    name: 'Mike Rodriguez',
    title: 'HIIT & Functional Training Expert',
    experience: '6 years',
    certifications: ['NASM-CPT', 'CrossFit Level 2', 'FMS Level 2'],
    specialties: ['HIIT Training', 'Functional Movement', 'Weight Loss'],
    image: '/images/trainers/mike-rodriguez.jpg',
    rating: 4.8,
    clients: 120,
    bio: 'Mike brings high energy and expertise to every session. His functional training approach helps clients build real-world strength while achieving their weight loss and fitness goals.',
    hourlyRate: 75,
    availability: [
      { day: 'Monday', timeSlots: ['7:00 AM', '8:00 AM', '6:00 PM', '7:00 PM'] },
      { day: 'Tuesday', timeSlots: ['7:00 AM', '8:00 AM', '6:00 PM', '7:00 PM'] },
      { day: 'Wednesday', timeSlots: ['7:00 AM', '8:00 AM', '6:00 PM', '7:00 PM'] },
      { day: 'Thursday', timeSlots: ['7:00 AM', '8:00 AM', '6:00 PM', '7:00 PM'] },
      { day: 'Friday', timeSlots: ['7:00 AM', '8:00 AM', '6:00 PM'] },
      { day: 'Saturday', timeSlots: ['9:00 AM', '10:00 AM', '11:00 AM'] }
    ]
  },
  {
    id: 'emma-thompson',
    name: 'Emma Thompson',
    title: 'Yoga & Wellness Instructor',
    experience: '10 years',
    certifications: ['RYT-500', 'Yin Yoga Certified', 'Meditation Teacher'],
    specialties: ['Vinyasa Yoga', 'Meditation', 'Stress Management'],
    image: '/images/trainers/emma-thompson.jpg',
    rating: 5.0,
    clients: 200,
    bio: 'Emma creates a peaceful and transformative yoga experience for practitioners of all levels. Her holistic approach combines physical practice with mindfulness and stress management techniques.',
    hourlyRate: 70,
    availability: [
      { day: 'Monday', timeSlots: ['8:00 AM', '9:00 AM', '5:00 PM', '6:00 PM'] },
      { day: 'Tuesday', timeSlots: ['8:00 AM', '9:00 AM', '5:00 PM', '6:00 PM'] },
      { day: 'Wednesday', timeSlots: ['8:00 AM', '9:00 AM', '5:00 PM', '6:00 PM'] },
      { day: 'Thursday', timeSlots: ['8:00 AM', '9:00 AM', '5:00 PM', '6:00 PM'] },
      { day: 'Friday', timeSlots: ['8:00 AM', '9:00 AM', '5:00 PM'] },
      { day: 'Sunday', timeSlots: ['9:00 AM', '10:00 AM', '11:00 AM'] }
    ]
  },
  {
    id: 'david-park',
    name: 'David Park',
    title: 'Sports Performance & Rehabilitation',
    experience: '12 years',
    certifications: ['CSCS', 'ATC', 'SFMA Level 2'],
    specialties: ['Injury Prevention', 'Sports Performance', 'Corrective Exercise'],
    image: '/images/trainers/david-park.jpg',
    rating: 4.9,
    clients: 85,
    bio: 'David combines his athletic training background with advanced rehabilitation techniques to help clients recover from injuries and optimize their athletic performance.',
    hourlyRate: 95,
    availability: [
      { day: 'Monday', timeSlots: ['9:00 AM', '10:00 AM', '4:00 PM', '5:00 PM'] },
      { day: 'Tuesday', timeSlots: ['9:00 AM', '10:00 AM', '4:00 PM', '5:00 PM'] },
      { day: 'Wednesday', timeSlots: ['9:00 AM', '10:00 AM', '4:00 PM', '5:00 PM'] },
      { day: 'Thursday', timeSlots: ['9:00 AM', '10:00 AM', '4:00 PM', '5:00 PM'] },
      { day: 'Friday', timeSlots: ['9:00 AM', '10:00 AM', '4:00 PM'] },
      { day: 'Saturday', timeSlots: ['10:00 AM', '11:00 AM', '12:00 PM'] }
    ]
  },
  {
    id: 'lisa-chen',
    name: 'Lisa Chen',
    title: 'Nutrition & Lifestyle Coach',
    experience: '7 years',
    certifications: ['RD', 'NASM-CPT', 'Behavior Change Specialist'],
    specialties: ['Nutrition Planning', 'Lifestyle Coaching', 'Body Composition'],
    image: '/images/trainers/lisa-chen.jpg',
    rating: 4.8,
    clients: 180,
    bio: 'Lisa takes a comprehensive approach to health and wellness, combining nutrition science with behavior change strategies to help clients create sustainable lifestyle transformations.',
    hourlyRate: 80,
    availability: [
      { day: 'Monday', timeSlots: ['10:00 AM', '11:00 AM', '3:00 PM', '4:00 PM'] },
      { day: 'Tuesday', timeSlots: ['10:00 AM', '11:00 AM', '3:00 PM', '4:00 PM'] },
      { day: 'Wednesday', timeSlots: ['10:00 AM', '11:00 AM', '3:00 PM', '4:00 PM'] },
      { day: 'Thursday', timeSlots: ['10:00 AM', '11:00 AM', '3:00 PM', '4:00 PM'] },
      { day: 'Friday', timeSlots: ['10:00 AM', '11:00 AM', '3:00 PM'] },
      { day: 'Saturday', timeSlots: ['11:00 AM', '12:00 PM', '1:00 PM'] }
    ]
  },
  {
    id: 'alex-johnson',
    name: 'Alex Johnson',
    title: 'Group Fitness & Dance Instructor',
    experience: '5 years',
    certifications: ['ACE-GFI', 'Zumba Certified', 'Barre Above Certified'],
    specialties: ['Group Fitness', 'Dance Fitness', 'Barre Classes'],
    image: '/images/trainers/alex-johnson.jpg',
    rating: 4.7,
    clients: 220,
    bio: 'Alex brings infectious energy and creativity to group fitness classes. Their diverse background in dance and fitness makes workouts fun, challenging, and accessible to all fitness levels.',
    hourlyRate: 65,
    availability: [
      { day: 'Monday', timeSlots: ['5:30 PM', '6:30 PM', '7:30 PM'] },
      { day: 'Tuesday', timeSlots: ['5:30 PM', '6:30 PM', '7:30 PM'] },
      { day: 'Wednesday', timeSlots: ['5:30 PM', '6:30 PM', '7:30 PM'] },
      { day: 'Thursday', timeSlots: ['5:30 PM', '6:30 PM', '7:30 PM'] },
      { day: 'Friday', timeSlots: ['5:30 PM', '6:30 PM'] },
      { day: 'Saturday', timeSlots: ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'] },
      { day: 'Sunday', timeSlots: ['10:00 AM', '11:00 AM', '12:00 PM'] }
    ]
  }
];

// Helper function to get trainer by ID
export const getTrainerById = (id: string): Trainer | undefined => {
  return trainersData.find(trainer => trainer.id === id);
};

// Helper function to get available trainers for a specific specialty
export const getTrainersBySpecialty = (specialty: string): Trainer[] => {
  return trainersData.filter(trainer => 
    trainer.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase()))
  );
};

// Helper function to get trainers sorted by rating
export const getTrainersByRating = (): Trainer[] => {
  return [...trainersData].sort((a, b) => b.rating - a.rating);
};

// Helper function to check if trainer is available on a specific day and time
export const isTrainerAvailable = (trainerId: string, day: string, timeSlot: string): boolean => {
  const trainer = getTrainerById(trainerId);
  if (!trainer) return false;
  
  const dayAvailability = trainer.availability?.find(a => a.day === day);
  return dayAvailability?.timeSlots.includes(timeSlot) || false;
};

// Fallback image URLs (using the same Pexels images as before)
export const fallbackImages: Record<string, string> = {
  'sarah-mitchell': 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg',
  'mike-rodriguez': 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
  'emma-thompson': 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg',
  'david-park': 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
  'lisa-chen': 'https://images.pexels.com/photos/1552108/pexels-photo-1552108.jpeg',
  'alex-johnson': 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg'
};

// Helper function to get trainer image with fallback
export const getTrainerImage = (trainerId: string): string => {
  const trainer = getTrainerById(trainerId);
  if (!trainer) return fallbackImages[trainerId] || fallbackImages['sarah-mitchell'];
  
  // For now, use fallback images. In production, you would check if local image exists
  return fallbackImages[trainerId] || trainer.image;
};
