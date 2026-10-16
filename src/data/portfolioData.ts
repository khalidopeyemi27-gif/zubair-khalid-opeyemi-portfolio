import { Project, TechnicalCategory, Experience, SocialProfileLinks } from '../types/portfolio';
import omiruAbstractImg from '../assets/images/omiru_abstract_iot_1790439403713.jpg';

export const OmiruProject: Project = {
  id: 'omiru-agroflow',
  title: 'Omiru / AgroFlow',
  subtitle: 'IoT · Embedded Systems · Smart Agriculture',
  category: 'IoT · Embedded Systems · Smart Agriculture',
  featured: true,
  isConfidentialPublicSafe: true,
  publicIndicatorTag: 'Public project overview',
  shortDescription: 'Omiru / AgroFlow is an IoT-based smart agriculture project involving ESP32 sensor nodes, environmental and soil monitoring, and automated irrigation.',
  overview: 'Omiru / AgroFlow is an IoT-based smart agriculture project involving ESP32 sensor nodes, environmental and soil monitoring, and automated irrigation.',
  problem: 'Agricultural field management requires continuous monitoring of environmental conditions, soil moisture profiles, and water flow rates to optimize irrigation schedules, prevent crop stress, and conserve water resources.',
  approach: 'Field sensor nodes collect telemetry data from temperature, humidity, flow, and soil probes, streaming readings over IoT communication paths to cloud database services while evaluating relay actuation triggers for automated irrigation.',
  contribution: [
    'Contributed to ESP32-based embedded firmware development and sensor interfacing.',
    'Worked on environmental temperature, humidity, water flow, and soil moisture sensor sampling.',
    'Developed and tested firmware sampling routines for environmental monitoring hardware.',
    'Performed hardware testing and evaluated power-system considerations for field node operations.',
    'Integrated IoT telemetry communication pathways between embedded microcontrollers and cloud services.',
    'Worked on software integration connecting hardware telemetry streams to Firebase and Node.js database layers.',
    'Participated in smart-agriculture system testing and actuator relay validation.'
  ],
  publicTechnicalOverview: 'High-level architecture flow: Sensors → ESP32 sensor nodes → Communication / Gateway → Software / Cloud Services → Monitoring & Control.',
  technicalImplementation: [
    'Sensors: Environmental probes (DHT22, DS18B20, JSN-SR04T, YF-S201, soil sensors).',
    'ESP32 sensor nodes: Microcontroller hardware executing sensor sampling loops and relay triggers.',
    'Communication / Gateway: Wireless telemetry payload formatting and gateway transmission.',
    'Software / Cloud Services: Node.js service layer and Firebase real-time store for telemetry logging.',
    'Monitoring & Control: Dashboard display and automated solenoid valve irrigation output.'
  ],
  technologies: [
    'ESP32',
    'DHT22',
    'DS18B20',
    'JSN-SR04T',
    'YF-S201',
    'Soil sensors',
    'Solenoid valves',
    'Relay control',
    'IoT',
    'Firebase',
    'Node.js'
  ],
  architectureSteps: [
    {
      id: 'step-1',
      title: 'Sensors',
      description: 'Physical environmental probes collecting field telemetry.',
      components: ['DHT22', 'DS18B20', 'JSN-SR04T', 'YF-S201', 'Soil Sensors']
    },
    {
      id: 'step-2',
      title: 'ESP32 sensor nodes',
      description: 'Embedded microcontroller hardware sampling sensors and managing relay outputs.',
      components: ['ESP32 MCU', 'ADC Ingestion', 'Relay Actuation Modules']
    },
    {
      id: 'step-3',
      title: 'Communication / Gateway',
      description: 'Telemetry payload formatting and gateway transmission.',
      components: ['Wireless IoT Protocols', 'JSON Formatting', 'Connection Buffering']
    },
    {
      id: 'step-4',
      title: 'Software / Cloud Services',
      description: 'Backend application layer for telemetry persistence and state synchronization.',
      components: ['Node.js API Services', 'Firebase Realtime Store', 'Data Logging']
    },
    {
      id: 'step-5',
      title: 'Monitoring & Control',
      description: 'Remote monitoring display and automated solenoid valve control output.',
      components: ['Dashboard Display', 'Solenoid Valve Actuation']
    }
  ],
  challengesAndLearning: [
    'Sensor integration & signal noise handling: Developed techniques to ensure reliable signal acquisition over physical analog lines in noisy hardware environments.',
    'Hardware debugging: Built systematic bench-testing procedures for pin assignments, sensor calibration, and relay actuation routines.',
    'Power considerations: Evaluated energy requirements and sleep/wake cycles for embedded microcontrollers in autonomous field hardware.',
    'Communication reliability: Handled data buffering and reconnection logic for wireless IoT nodes in variable network conditions.',
    'Testing physical systems: Validated mechanical solenoid valves and hydraulic flow meters under real liquid pressure conditions.',
    'Integrating hardware with software: Standardized structured telemetry formats connecting microcontroller firmware to Node.js / Firebase software services.'
  ],
  currentStatus: 'Internship Project · Public Overview',
  image: omiruAbstractImg,
  hasRealImage: false,
  imagePlaceholderLabel: 'Conceptual IoT Topology Diagram (3D Illustration — Not physical hardware)',
  date: '2024 - Present',
  role: 'Product Development Intern / Embedded & IoT Contributor',
  repositoryNote: 'Repository not publicly available (confidentiality)',
  links: []
};

export const AlertLensNGProject: Project = {
  id: 'alert-lens-ng',
  title: 'Alert Lens NG',
  subtitle: 'Digital Safety · Software · AI',
  category: 'Digital Safety · Software · AI',
  featured: true,
  shortDescription: 'Alert Lens NG is a digital-safety engine designed to help users identify suspicious links and scam-related procedures using understandable, evidence-based warnings.',
  overview: 'Alert Lens NG is a digital-safety engine designed to help users identify suspicious links and scam-related procedures using understandable, evidence-based warnings.',
  problem: 'Users frequently encounter misleading URLs, phishing links, and deceptive online scam procedures that trick them into exposing credentials or sensitive information.',
  approach: 'Provides controlled navigation wrappers and heuristic detection models to analyze link structures, brand mismatches, and scam procedure patterns, delivering plain-language warning messages and independent verification guidance before user interaction.',
  contribution: [
    'Developed ProtectedLink controlled navigation wrapper logic.',
    'Implemented BLOCK / WARN / ALLOW decision trigger evaluation.',
    'Integrated URL intelligence checks and conservative brand-mismatch detection routines.',
    'Configured HTTP/IP indicator evaluation and scam procedure pattern recognition.',
    'Designed evidence-based warning messages and plain-language safety guidance interfaces.',
    'Incorporated privacy-conscious local evaluation patterns.'
  ],
  technicalImplementation: [
    'ProtectedLink controlled navigation module.',
    'BLOCK / WARN / ALLOW decision engine logic.',
    'URL intelligence & brand-mismatch evaluation.',
    'HTTP/IP indicator checks & scam procedure detection.',
    'Evidence-based warning messages & plain-language safety guidance.',
    'Privacy-conscious design preserving user navigation privacy.'
  ],
  technologies: [
    'TypeScript',
    'React',
    'Node.js',
    'URL Intelligence',
    'Applied Detection Logic',
    'Tailwind CSS'
  ],
  challengesAndLearning: [
    'False positive minimization: Calibrated brand-mismatch and heuristic thresholds to avoid flagging legitimate web domains.',
    'Communication of warning evidence: Structured warning dialogs to explain safety indicators clearly without guaranteeing absolute safety or maliciousness.'
  ],
  currentStatus: 'Software Prototype · Heuristic Advisory Engine',
  disclaimer: 'Alert Lens NG uses heuristic warnings to support user decisions. It cannot guarantee detection of every phishing attempt or online threat.',
  hasRealImage: false,
  imagePlaceholderLabel: 'Alert Lens NG Interface & Safety Guidance Placeholder',
  date: '2024',
  role: 'Software Developer',
  repositoryNote: 'Public repository link not available',
  links: []
};

export const SiteForgeProject: Project = {
  id: 'siteforge',
  title: 'SiteForge',
  subtitle: 'Developer Tools · React · TypeScript · Framer',
  category: 'Developer Tools · React · TypeScript · Framer',
  featured: true,
  shortDescription: 'SiteForge is a Framer development tool focused on inspecting, auditing, and improving design implementations.',
  overview: 'SiteForge is a Framer development tool focused on inspecting, auditing, and improving design implementations.',
  problem: 'Designers and developers often encounter layout inconsistencies, missing styling rules, and unoptimized frame structures when translating UI designs into production Framer components.',
  approach: 'Delivers automated Frame Audit inspection, StyleFix correction utilities, copyable problem reports, and automated structure testing via the Framer Plugin API to streamline design translation.',
  contribution: [
    'Developed Frame Audit inspection routines for detecting UI layout inconsistencies.',
    'Built StyleFix automation utilities to assist with design rule corrections.',
    'Created copyable problem reporting features for streamlined developer workflows.',
    'Implemented automated testing utilities for Framer component structure validation.',
    'Integrated Framer frame creation and Framer Plugin API interfaces.'
  ],
  technicalImplementation: [
    'Frame Audit UI inspection engine.',
    'StyleFix automated layout correction utilities.',
    'Copyable problem reporting system.',
    'Automated testing & structure validation modules.',
    'Framer frame creation via Framer Plugin API.'
  ],
  technologies: [
    'React',
    'TypeScript',
    'Framer Plugin API',
    'UI Auditing',
    'Automated Testing',
    'Developer Tooling'
  ],
  challengesAndLearning: [
    'Framer API integration: Managed asynchronous frame traversal and node property inspection in the Framer canvas environment.',
    'Rule accuracy: Standardized layout audit checks across varying component hierarchy structures.'
  ],
  currentStatus: 'Developer Tool Prototype · Framer Plugin Utility',
  hasRealImage: false,
  imagePlaceholderLabel: 'SiteForge Frame Audit Interface Placeholder',
  date: '2024',
  role: 'Software Developer',
  repositoryNote: 'Public repository link not available',
  links: []
};

export const FireGasAlarmProject: Project = {
  id: 'esp32-fire-gas-alarm',
  title: 'ESP32 Fire & Gas Alarm System',
  subtitle: 'Embedded Systems · Sensors · IoT',
  category: 'Embedded Systems · Sensors · IoT',
  featured: false,
  shortDescription: 'An ESP32-based fire and gas monitoring prototype integrating environmental and hazard sensors with local alerts and connected monitoring.',
  overview: 'An ESP32-based fire and gas monitoring prototype integrating environmental and hazard sensors with local alerts and connected monitoring.',
  problem: 'Detecting combustible gas leaks, smoke, and temperature spikes in residential or laboratory environments requires real-time sensing, fast local alarms, and remote notification.',
  approach: 'Interfaces an ESP32 microcontroller with MQ-2 gas sensors, flame detectors, DHT22 temperature/humidity probes, an LCD display, piezo buzzer, and status LEDs for local alarm triggering and IoT telemetry.',
  contribution: [
    'Programmed ESP32 firmware for multi-sensor polling and analog threshold evaluation.',
    'Interfaced MQ-2 gas sensor, flame detector, and DHT22 temperature/humidity probes.',
    'Implemented local audio-visual alert routines using LCD display, status LEDs, and piezo buzzer.',
    'Configured sensor calibration routines to stabilize baseline gas detection readings.',
    'Integrated Blynk IoT telemetry connectivity for remote status updates.'
  ],
  technicalImplementation: [
    'ESP32 microcontroller sensor acquisition firmware.',
    'MQ-2 gas sensor & flame detector signal processing.',
    'DHT22 temperature & humidity monitoring.',
    'LCD display, status LEDs & piezo buzzer alarm actuation.',
    'Blynk IoT telemetry status dashboard integration.'
  ],
  technologies: [
    'ESP32',
    'MQ-2',
    'Flame sensor',
    'DHT22',
    'LCD',
    'LEDs',
    'Buzzer',
    'Blynk'
  ],
  challengesAndLearning: [
    'Sensor calibration: Calibrated analog gas sensor baseline thresholds under varying ambient air conditions.',
    'Low-latency actuation: Optimized polling loops to trigger local buzzer and LED alerts without delay.'
  ],
  currentStatus: 'Engineering Hardware Prototype',
  disclaimer: 'Educational benchtop prototype for sensor experimentation and firmware testing. It is not certified or intended for commercial life-safety use.',
  hasRealImage: false,
  imagePlaceholderLabel: 'ESP32 Prototype Circuit Setup Placeholder',
  date: '2023 - 2024',
  role: 'Embedded Hardware Developer',
  repositoryNote: 'Public repository link not available',
  links: []
};

export const SelectedProjects: Project[] = [
  OmiruProject,
  AlertLensNGProject,
  SiteForgeProject
];

export const OtherProjects: Project[] = [
  FireGasAlarmProject
];

export const AllProjects: Project[] = [
  ...SelectedProjects,
  ...OtherProjects
];

export const TechnicalCategories: TechnicalCategory[] = [
  {
    title: 'Embedded Systems',
    description: 'Microcontrollers, sensor integration, low-level firmware, and physical system testing.',
    skills: ['ESP32', 'Sensors', 'Hardware Integration', 'Firmware Development', 'C++', 'MQ-2 / Flame Sensors', 'DHT22', 'Relay Control']
  },
  {
    title: 'Software',
    description: 'Modern frontend interfaces, component architecture, type systems, and web application logic.',
    skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'Tailwind CSS', 'Vite', 'HTML5/CSS3']
  },
  {
    title: 'IoT & Cloud',
    description: 'Connected hardware streams, telemetry routing, backend persistence, and remote monitoring.',
    skills: ['Firebase', 'Connected Devices', 'Telemetry', 'Monitoring', 'WebSockets', 'Blynk', 'REST APIs', 'JSON Schemas']
  },
  {
    title: 'AI / Intelligent Systems',
    description: 'Applied detection logic, URL intelligence models, and intelligent software workflows.',
    skills: ['AI-Assisted Development', 'Intelligent Software Systems', 'Applied Detection Logic', 'URL Intelligence', 'Pattern Recognition']
  }
];

export const WorkExperiences: Experience[] = [
  {
    period: '2024 - Present',
    role: 'Product Development Intern',
    company: 'Climaverb Innovations',
    location: 'Omiru / AgroFlow Project',
    summary: 'Contributing to ESP32 embedded firmware, sensor sampling systems, hardware testing, and cloud telemetry integration for smart agriculture solutions.',
    highlights: [
      'Contributed to ESP32 firmware routines for environmental and soil sensor sampling.',
      'Participated in hardware bench-testing and power-system considerations.',
      'Worked on integrating hardware telemetry feeds with Node.js and Firebase cloud services.',
      'Validated actuator relay control for automated irrigation.'
    ],
    technologies: ['ESP32', 'IoT', 'Firebase', 'Node.js', 'Sensors', 'Hardware Testing']
  }
];

export const PersonalProfileLinks: SocialProfileLinks = {
  github: 'https://github.com/khalidopeyemi27-gif',
  linkedin: 'https://www.linkedin.com/in/khalid-zubair-50265b388',
  resume: 'mailto:Khalidopeyemi27@gmail.com?subject=Resume%20Request%20-%20Zubair%20Khalid%20Opeyemi',
  email: 'Khalidopeyemi27@gmail.com',
};
