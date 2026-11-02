import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'erapor',
    slug: 'erapor-keagamaan-sd-patra-dharma-3',
    title: 'E-Rapor Keagamaan & Al-Qur\'an',
    category: 'web',
    descriptionKey: 'projects.items.erapor.short_desc',
    featuresKeys: [
      'projects.items.erapor.features.0',
      'projects.items.erapor.features.1',
      'projects.items.erapor.features.2',
      'projects.items.erapor.features.3',
    ],
    tags: ['PHP', 'MySQL', 'Bootstrap', 'School System', 'TCPDF / FPDF'],
    status: 'production',
    statusLabelKey: 'projects.status.production',
    githubUrl: 'https://github.com/MaulanaMA/e-rapor-keagamaan',
    liveUrl: '#',
    image: 'erapor',
    role: 'Lead Full-Stack Developer',
    period: '2024',
    highlights: [
      'SD Patra Dharma 3 Balikpapan Implementation',
      'Multi-tier RBAC for teachers and staff',
      'Official printable PDF output',
    ]
  },
  {
    id: 'ar_routing',
    slug: 'augmented-reality-routing-learning',
    title: 'Augmented Reality Routing Learning App',
    category: 'ar',
    descriptionKey: 'projects.items.ar_routing.short_desc',
    featuresKeys: [
      'projects.items.ar_routing.features.0',
      'projects.items.ar_routing.features.1',
      'projects.items.ar_routing.features.2',
      'projects.items.ar_routing.features.3',
    ],
    tags: ['Unity', 'C#', 'Augmented Reality', 'Computer Networking', '3D Modeling'],
    status: 'research',
    statusLabelKey: 'projects.status.research',
    githubUrl: 'https://github.com/MaulanaMA/ar-routing-simulation',
    image: 'ar_routing',
    role: 'AR & Networking Researcher',
    period: '2025',
    highlights: [
      'Interactive 3D Hardware Inspection',
      'Dynamic Packet Animation',
      'Real-world Educational Impact',
    ]
  },
  {
    id: 'school_scheduling',
    slug: 'school-scheduling-management-system',
    title: 'School Scheduling Management System',
    category: 'system',
    descriptionKey: 'projects.items.school_scheduling.short_desc',
    featuresKeys: [
      'projects.items.school_scheduling.features.0',
      'projects.items.school_scheduling.features.1',
      'projects.items.school_scheduling.features.2',
      'projects.items.school_scheduling.features.3',
    ],
    tags: ['Web Application', 'Relational Database', 'Scheduling Algorithm', 'UI/UX'],
    status: 'completed',
    statusLabelKey: 'projects.status.completed',
    githubUrl: 'https://github.com/MaulanaMA/school-scheduling-system',
    image: 'school_scheduling',
    role: 'Backend & System Architect',
    period: '2024',
    highlights: [
      'Zero-Collision Constraint Checker',
      'Timetable Matrix Export',
      'Workload Quota Tracking',
    ]
  },
  {
    id: 'network_lab',
    slug: 'networking-and-server-laboratory',
    title: 'Networking & Server Laboratory Environment',
    category: 'network',
    descriptionKey: 'projects.items.network_lab.short_desc',
    featuresKeys: [
      'projects.items.network_lab.features.0',
      'projects.items.network_lab.features.1',
      'projects.items.network_lab.features.2',
      'projects.items.network_lab.features.3',
    ],
    tags: ['MikroTik RouterOS', 'Cisco IOS', 'VLAN', 'Linux Server', 'Firewall/NAT'],
    status: 'completed',
    statusLabelKey: 'projects.status.completed',
    githubUrl: 'https://github.com/MaulanaMA/network-lab-infrastructure',
    image: 'network_lab',
    role: 'Network Administrator',
    period: '2023 - 2024',
    highlights: [
      'Subnet & VLAN Segmentation',
      'MikroTik QoS Bandwidth Queue',
      'Hardened Linux Gateway',
    ]
  }
];
