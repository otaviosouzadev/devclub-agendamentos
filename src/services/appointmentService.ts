import type { Appointment, AppointmentFormData, AppointmentStatus } from '../types/appointment';

const STORAGE_KEY = 'devclub-appointments-v2';

const iso = (offset: number) => new Date(Date.now() + offset * 86400000).toISOString().slice(0, 10);

const seed: Appointment[] = [
  { id: crypto.randomUUID(), name: 'Mariana Silva', phone: '(11) 98765-4321', service: 'Consultoria', date: iso(1), time: '10:00', status: 'Confirmado', notes: 'Primeiro atendimento.', createdAt: new Date().toISOString() },
  { id: crypto.randomUUID(), name: 'Lucas Almeida', phone: '(11) 99832-1180', service: 'Suporte técnico', date: iso(1), time: '14:00', status: 'Agendado', createdAt: new Date().toISOString() },
  { id: crypto.randomUUID(), name: 'Carla Mendes', phone: '(11) 97654-9012', service: 'Instalação', date: iso(2), time: '09:00', status: 'Agendado', createdAt: new Date().toISOString() },
  { id: crypto.randomUUID(), name: 'Rafael Souza', phone: '(11) 96543-2201', service: 'Manutenção', date: iso(-1), time: '16:00', status: 'Concluído', createdAt: new Date().toISOString() },
];

function read(): Appointment[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
    return seed;
  }
  try { return JSON.parse(data) as Appointment[]; }
  catch { localStorage.setItem(STORAGE_KEY, JSON.stringify(seed)); return seed; }
}

function write(items: Appointment[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event('appointments-updated'));
}

export const appointmentService = {
  list(): Appointment[] {
    return read().sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
  },
  create(data: AppointmentFormData): Appointment {
    const occupied = read().some((item) => item.date === data.date && item.time === data.time && item.status !== 'Cancelado');
    if (occupied) throw new Error('Este horário acabou de ser reservado. Escolha outro horário.');
    const appointment: Appointment = { ...data, id: crypto.randomUUID(), status: 'Agendado', createdAt: new Date().toISOString() };
    write([...read(), appointment]);
    return appointment;
  },
  updateStatus(id: string, status: AppointmentStatus) { write(read().map((item) => item.id === id ? { ...item, status } : item)); },
  remove(id: string) { write(read().filter((item) => item.id !== id)); },
  occupiedTimes(date: string): string[] { return read().filter((item) => item.date === date && item.status !== 'Cancelado').map((item) => item.time); },
};
