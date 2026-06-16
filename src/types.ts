/**
 * Shared types for Nigel Henaku deep-tech strategic portfolio.
 */

export interface StrategicValue {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon identifier
}

export interface ServiceOffer {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
}

export interface WorkflowStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface ConsultationBooking {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  services: string[];
  status: 'pending' | 'confirmed';
  createdAt: string;
}
