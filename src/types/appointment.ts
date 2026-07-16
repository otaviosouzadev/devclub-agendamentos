export type AppointmentStatus = 'Agendado' | 'Confirmado' | 'Concluído' | 'Cancelado';

export interface Appointment {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  notes?: string;
  createdAt: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
}
