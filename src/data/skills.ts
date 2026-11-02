import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    categoryKey: 'skills.categories.programming_backend',
    icon: 'Terminal',
    skills: [
      { name: 'PHP', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'RESTful API Design', level: 'Advanced' },
      { name: 'C# (Unity basics)', level: 'Intermediate' },
    ]
  },
  {
    categoryKey: 'skills.categories.frontend_web',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 & Modern CSS3', level: 'Advanced' },
      { name: 'Responsive Web Design', level: 'Advanced' },
      { name: 'Framer Motion', level: 'Intermediate' },
    ]
  },
  {
    categoryKey: 'skills.categories.database',
    icon: 'Database',
    skills: [
      { name: 'MySQL', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'Database Normalization & ERD', level: 'Advanced' },
      { name: 'SQL Query Optimization', level: 'Intermediate' },
    ]
  },
  {
    categoryKey: 'skills.categories.network_infra',
    icon: 'Network',
    skills: [
      { name: 'Cisco Routing & Switching', level: 'Advanced' },
      { name: 'MikroTik RouterOS', level: 'Advanced' },
      { name: 'VLAN & Subnetting (IPv4)', level: 'Advanced' },
      { name: 'Linux Server Administration', level: 'Intermediate' },
      { name: 'Network Cable Termination (Cat5e/6)', level: 'Advanced' },
      { name: 'Hardware & Power Maintenance', level: 'Advanced' },
    ]
  },
  {
    categoryKey: 'skills.categories.tools_devops',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Postman API Testing', level: 'Advanced' },
      { name: 'Visual Studio Code', level: 'Advanced' },
      { name: 'Cisco Packet Tracer / GNS3', level: 'Advanced' },
      { name: 'Linux CLI (Ubuntu/Debian)', level: 'Intermediate' },
    ]
  }
];
