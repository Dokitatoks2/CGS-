export interface Service {
  id: string;
  category: 'Consulting' | 'Training' | 'Research';
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  targetAudience: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  impact: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  imagePrompt: string;
}

export interface Course {
  id: string;
  title: string;
  type: 'mentorship' | 'masterclass' | 'certification';
  duration: string;
  rating: number;
  description: string;
  modules: string[];
  instructor: string;
  seatsRemaining: number;
}

export interface MediaItem {
  id: string;
  type: 'podcast' | 'video' | 'lecture';
  title: string;
  speaker: string;
  duration: string;
  date: string;
  url: string;
  description: string;
  category: string;
}

export interface BookingState {
  serviceId?: string;
  date?: string;
  timeSlot?: string;
  name: string;
  email: string;
  notes: string;
  mentorshipInterest?: boolean;
}

export interface StrategyBlueprint {
  careerField: string;
  currentLevel: 'Student' | 'Entry Level' | 'Mid Level' | 'Executive' | 'Transitioner';
  primaryObstacle: string;
  longTermGoal: string;
  hoursPerWeek: number;
}

export interface GeneratedStrategy {
  roadmap: {
    phase: string;
    timeline: string;
    focus: string;
    actions: string[];
  }[];
  skillsToAcquire: string[];
  researchResourceRecommendation: string;
  mentorshipAdvice: string;
}
