import type { ExperienceItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'coding_teacher',
    roleKey: 'experience.items.coding_teacher.role',
    companyKey: 'experience.items.coding_teacher.company',
    period: '2024 - Sekarang / Present',
    type: 'teaching',
    descriptionKey: 'experience.items.coding_teacher.desc',
    responsibilitiesKeys: [
      'experience.items.coding_teacher.responsibilities.0',
      'experience.items.coding_teacher.responsibilities.1',
      'experience.items.coding_teacher.responsibilities.2',
    ],
    techStack: ['Scratch', 'Blockly', 'Python Basics', 'Computational Thinking', 'Pedagogy']
  },
  {
    id: 'network_intern',
    roleKey: 'experience.items.network_intern.role',
    companyKey: 'experience.items.network_intern.company',
    period: '2024 - 2025',
    type: 'intern',
    descriptionKey: 'experience.items.network_intern.desc',
    responsibilitiesKeys: [
      'experience.items.network_intern.responsibilities.0',
      'experience.items.network_intern.responsibilities.1',
      'experience.items.network_intern.responsibilities.2',
    ],
    techStack: ['MikroTik', 'Cisco IOS', 'Cat6 Cabling', 'Subnetting', 'Fluke Tester']
  },
  {
    id: 'network_technician',
    roleKey: 'experience.items.network_technician.role',
    companyKey: 'experience.items.network_technician.company',
    period: '2023 - 2024',
    type: 'tech',
    descriptionKey: 'experience.items.network_technician.desc',
    responsibilitiesKeys: [
      'experience.items.network_technician.responsibilities.0',
      'experience.items.network_technician.responsibilities.1',
      'experience.items.network_technician.responsibilities.2',
    ],
    techStack: ['VLAN', 'DHCP Server', 'Bandwidth Management', 'Server Rack Assembly']
  },
  {
    id: 'electrical_technician',
    roleKey: 'experience.items.electrical_technician.role',
    companyKey: 'experience.items.electrical_technician.company',
    period: '2022 - 2023',
    type: 'tech',
    descriptionKey: 'experience.items.electrical_technician.desc',
    responsibilitiesKeys: [
      'experience.items.electrical_technician.responsibilities.0',
      'experience.items.electrical_technician.responsibilities.1',
    ],
    techStack: ['Electrical Grounding', 'UPS Maintenance', 'PC Assembly & Troubleshooting']
  },
  {
    id: 'organizational',
    roleKey: 'experience.items.organizational.role',
    companyKey: 'experience.items.organizational.company',
    period: '2022 - 2025',
    type: 'organization',
    descriptionKey: 'experience.items.organizational.desc',
    responsibilitiesKeys: [
      'experience.items.organizational.responsibilities.0',
      'experience.items.organizational.responsibilities.1',
    ],
    techStack: ['Leadership', 'Event Management', 'Public Speaking', 'Team Collaboration']
  }
];
