import { Service, Project, Course, MediaItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'consult-1',
    category: 'Consulting',
    title: 'Strategic Career & Life Blueprinting',
    description: 'Bespoke strategic mapping sessions for professionals seeking high-impact, transformative career acceleration or major field transitions.',
    features: [
      'Personalized 1-on-1 strategic roadmap design',
      'Competency gap analysis & positioning strategy',
      'Avenue identification for executive placement',
      'Life balance & purpose integration model'
    ],
    price: 'Custom range',
    duration: '4 weeks',
    targetAudience: 'Executives, Senior Professionals, Transitioners',
    iconName: 'Compass'
  },
  {
    id: 'consult-2',
    category: 'Consulting',
    title: 'Organizational Change & Alignment',
    description: 'Corporate advisory focused on systemic design, change generation, leadership alignment, and modern cultural modernization.',
    features: [
      'Strategic system diagnosis & reporting',
      'Executive alignment workshops',
      'Change implementation frameworks',
      'Post-transition culture metrics evaluation'
    ],
    price: 'Custom range',
    duration: '6 weeks',
    targetAudience: 'Enterprises, High-growth Startups, NGOs',
    iconName: 'Shuffle'
  },
  {
    id: 'train-1',
    category: 'Training',
    title: 'Advanced Research Methodology Masterclass',
    description: 'Immersive training designed to teach research execution, literature parsing, quantitative methods, and thesis/patent drafting.',
    features: [
      'Systematic literature review formulation',
      'Quantitative & qualitative data modelling',
      'High-tier academic journal standard guidelines',
      'Personalized peer-review critique cycles'
    ],
    price: 'Custom range',
    duration: '8 weeks',
    targetAudience: 'Postgraduates, Academic Researchers, R&D Labs',
    iconName: 'GraduationCap'
  },
  {
    id: 'train-2',
    category: 'Training',
    title: 'Executive Leadership & Mentoring Circle',
    description: 'High-density capacity development program focusing on critical soft skills, decision frameworks, and mentorship models.',
    features: [
      'Interactive cohort peer circles',
      'Bespoke decision-tree methodology sessions',
      'High-stress negotiation case scenarios',
      'Direct mentorship practice & critique'
    ],
    price: 'Custom range',
    duration: '6 weeks',
    targetAudience: 'Mid-to-Senior Leaders, Mentors-in-Training',
    iconName: 'Users'
  },
  {
    id: 'train-3',
    category: 'Training',
    title: 'Foundations of Evidence Synthesis',
    description: 'Comprehensive training on systematic reviews, meta-analyses, evidence appraisal, and structured synthesis for research labs, academics, and policy teams.',
    features: [
      'Systematic review protocol & PRISMA standards',
      'Database search string engineering & filtering',
      'Risk of bias & quality appraisal toolkits',
      'Meta-analytic data extraction & reporting'
    ],
    price: 'Custom range',
    duration: '6 weeks',
    targetAudience: 'Researchers, Clinical Analysts, Policy Advisors, Graduate Students',
    iconName: 'GraduationCap'
  },
  {
    id: 'train-4',
    category: 'Training',
    title: 'Systematic Review Methods and Protocol Development',
    description: 'In-depth training on framing research questions using PICO/SPIDER, designing PRISMA-compliant protocols, registering on PROSPERO, and executing systematic search strategies.',
    features: [
      'PICO & SPIDER framework formulation',
      'PRISMA-P compliant protocol drafting',
      'PROSPERO registration & workflow planning',
      'Multi-database search string engineering'
    ],
    price: 'Custom range',
    duration: '5 weeks',
    targetAudience: 'Researchers, Academics, Systematic Reviewers, Clinical Leads',
    iconName: 'GraduationCap'
  },
  {
    id: 'train-5',
    category: 'Training',
    title: 'Quantitative Evidence Synthesis and Meta-Analysis',
    description: 'Advanced statistical training on meta-analytic modeling, effect size calculations, heterogeneity quantification, forest/funnel plots, and publication bias diagnostics.',
    features: [
      'Effect size calculation (OR, RR, SMD, WMD)',
      'Fixed-effects vs. random-effects modeling',
      'Heterogeneity analysis (I², Tau² & subgrouping)',
      'Funnel plots, Egger tests & sensitivity checks'
    ],
    price: 'Custom range',
    duration: '6 weeks',
    targetAudience: 'Biostatisticians, Quantitative Researchers, Epidemiologists, Data Analysts',
    iconName: 'GraduationCap'
  },
  {
    id: 'train-6',
    category: 'Training',
    title: 'Assessing Certainty, Strength, and Applicability of Evidence',
    description: 'Practical methodology training on risk of bias tools (RoB 2, ROBINS-I), applying GRADE principles to rate evidence certainty, and drafting Summary of Findings tables.',
    features: [
      'RoB 2 & ROBINS-I bias risk assessment',
      'GRADE methodology for evidence certainty',
      'Summary of Findings (SoF) table generation',
      'Contextual applicability & policy translation'
    ],
    price: 'Custom range',
    duration: '5 weeks',
    targetAudience: 'Policy Analysts, Health Technology Assessor Teams, Clinical Researchers',
    iconName: 'GraduationCap'
  },
  {
    id: 'train-7',
    category: 'Training',
    title: 'Advanced and Living Evidence Synthesis Approaches',
    description: 'Cutting-edge training on Network Meta-Analysis (NMA), scoping reviews, living systematic reviews (LSR), and AI-assisted screening automation.',
    features: [
      'Network Meta-Analysis & indirect comparisons',
      'Scoping review methodologies & mapping',
      'Living systematic review (LSR) workflows',
      'Machine learning & AI screening pipelines'
    ],
    price: 'Custom range',
    duration: '6 weeks',
    targetAudience: 'Senior Scholars, R&D Executives, Methodologists, Innovation Leads',
    iconName: 'GraduationCap'
  },
  {
    id: 'train-8',
    category: 'Training',
    title: 'Real-World Evidence Training',
    description: 'Specialized training on utilizing Real-World Data (RWD) from EHRs, registries, and administrative claims to generate robust Real-World Evidence (RWE) for health and policy decisions.',
    features: [
      'RWD sources: Electronic Health Records & claims',
      'Confounding control & propensity score matching',
      'Regulatory frameworks (FDA/EMA) for RWE',
      'Translating RWE into commercial & clinical strategy'
    ],
    price: 'Custom range',
    duration: '5 weeks',
    targetAudience: 'Healthcare Executives, Pharma R&D Teams, Outcomes Researchers, Policy Makers',
    iconName: 'GraduationCap'
  },
  {
    id: 'train-9',
    category: 'Training',
    title: 'Secondary Data Utilization & Research Mentorship',
    description: 'An intensive 2-6 month mentorship program designed to empower researchers, scholars, and policy analysts with the skills, analytical frameworks, and practical methods to effectively discover, wrangle, analyze, and publish using secondary data.',
    features: [
      'Secondary dataset identification & repository access',
      'Data cleaning, transformation & schema mapping',
      'Statistical modeling & bias mitigation strategies',
      'Manuscript drafting & high-impact publication guidance'
    ],
    price: 'Custom range',
    duration: '2-6 months',
    targetAudience: 'Researchers, Postgraduates, Policy Analysts, Health Data Scholars',
    iconName: 'GraduationCap'
  },
  {
    id: 'research-1',
    category: 'Research',
    title: 'Socio-Economic Development Studies',
    description: 'Bespoke empirical investigation, market scanning, and strategic forecasting on labor market evolutions and future trends.',
    features: [
      'Labor market dynamic indicators scanning',
      'Regional socio-economic change analytics',
      'Quantitative policy effect forecasting',
      'Comprehensive final whitepaper publication'
    ],
    price: 'Custom range',
    duration: '3-6 months',
    targetAudience: 'Government bodies, Strategic Policy Thinktanks',
    iconName: 'BarChart3'
  },
  {
    id: 'research-2',
    category: 'Research',
    title: 'Human Potential & Professional Longevity Survey',
    description: 'Empirical research targeting career longevity factors, mental endurance models, and productivity in high-cognitive industries.',
    features: [
      'Socio-demographic professional stress mapping',
      'High-performance longevity markers tracking',
      'Organizational support model design',
      'Corporate advisory implementation guides'
    ],
    price: 'Custom range',
    duration: '8 weeks',
    targetAudience: 'Healthcare Systems, High-tech HR Directors',
    iconName: 'Activity'
  },
  {
    id: 'research-3',
    category: 'Research',
    title: 'Comprehensive Research Services',
    description: 'End-to-end clinical, observational, and evidence-based research solutions spanning trial design, data collection, project management, tool development, and public health liaison advisory.',
    features: [
      'Clinical trials: design & implementation',
      'Evidence-based research (HTA, Systematic Reviews)',
      'Observational studies & survey design',
      'Medical Science & Public Health Liaison services',
      'Data collection & custom tool development',
      'Project implementation, management & topic generation'
    ],
    price: 'Custom range',
    duration: 'Flexible / Custom',
    targetAudience: 'Healthcare Systems, Clinical Researchers, Pharma, Public Health Agencies',
    iconName: 'Microscope'
  },
  {
    id: 'research-4',
    category: 'Research',
    title: 'Medical Writing and Editorial Services',
    description: 'Regulatory-grade medical writing, document editing, and scientific publication services tailored for biopharma, clinical research organizations, and healthcare institutions.',
    features: [
      'Study protocols & clinical study reports',
      'Investigational New Drug (IND) Applications',
      'Biologics License Applications (BLA)',
      'News releases & patient narratives',
      'Manuscript development & peer-reviewing',
      'Technical report writing & editorial oversight'
    ],
    price: 'Custom range',
    duration: 'Flexible / Custom',
    targetAudience: 'Biopharma, Clinical Research Organizations, Academics, Healthcare Systems',
    iconName: 'FileText'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Policy Framework for Career Redirection',
    client: 'National Directorate of Labor & Skills',
    category: 'Research & Policy Advisory',
    description: 'Architected and validated an empirical labor framework targeted at reskilling mid-career workers displaced by cognitive automation.',
    impact: 'Transformed career transition workflows for over 12,000 professionals nationwide.',
    metrics: [
      { label: 'Transition Rate', value: '+34%' },
      { label: 'Cohort Retained', value: '88%' },
      { label: 'Policy Enacted', value: 'Q3 2025' }
    ],
    tags: ['Automation Study', 'Labor Policy', 'Socio-Economic Research'],
    imagePrompt: 'A highly sophisticated visual abstract of human-computer interaction, node graphs, dark theme blue and purple vector details'
  },
  {
    id: 'proj-2',
    title: 'SaaS Enterprise Mentorship Strategy Escalation',
    client: 'Aetheris Tech Group',
    category: 'Capacity Development & Consulting',
    description: 'Designed and deployed a full scale internal professional coaching and structural career navigation strategy for 1,200 staff.',
    impact: 'Drastically improved engineer retention, streamlined internal management tracks, and raised peer training efficacy.',
    metrics: [
      { label: 'Staff Attrition', value: '-22%' },
      { label: 'Mentorship Rating', value: '4.9/5' },
      { label: 'Promotion Velocity', value: '1.4x' }
    ],
    tags: ['Corporate Training', 'Career Pathing', 'Internal Mentorship'],
    imagePrompt: 'Elegant minimal isometric architectural columns illuminated in blue light, symbolizing organizational growth and guidance'
  },
  {
    id: 'proj-3',
    title: 'Academic Research Methodology Training Hub',
    client: 'Alliance of Allied Universities',
    category: 'Education & Research Teaching',
    description: 'Conceptualized and structured a virtual research-teaching sandbox for doctoral candidates looking to optimize scholarly publishing rates.',
    impact: 'Boosted peer-reviewed research outputs across four major university departments.',
    metrics: [
      { label: 'Publish Rate', value: '+45%' },
      { label: 'Review Time', value: '-30%' },
      { label: 'Active Researchers', value: '340+' }
    ],
    tags: ['Academic Publishing', 'Research Sandbox', 'Doctoral Cohort'],
    imagePrompt: 'A stylized minimalist abstract visualization of bookshelves and connecting geometric glowing lights in dark gradient'
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Elite Career Strategy & Life Alignment Cohort',
    type: 'mentorship',
    duration: '12 Weeks',
    rating: 4.9,
    description: 'A selective, highly rigorous cohort-based training program combining executive coaching, career pathing, and life balance strategies with seasoned global guides.',
    modules: [
      'Phase 1: Unearthing Latent Values & Strengths',
      'Phase 2: Competency Bridging & Dynamic Reskilling',
      'Phase 3: High-End Strategic Network Activation',
      'Phase 4: Legacy, Longevity, and Life Design Integration'
    ],
    instructor: 'Dr. Ola Adetokunboh, Principal Advisor',
    seatsRemaining: 4
  },
  {
    id: 'course-2',
    title: 'Scholarly Research Blueprint & Publication Strategy',
    type: 'certification',
    duration: '8 Weeks',
    rating: 4.8,
    description: 'Learn step-by-step paper formulation, scientific query framing, robust literature parsing, and how to successfully navigate rigorous peer reviews in tier-1 journals.',
    modules: [
      'Module 1: Query Genesis & Epistemology Foundations',
      'Module 2: Meta-Analysis & Advanced Literature Parsing',
      'Module 3: Rigorous Methodology Selection (Quant & Qual)',
      'Module 4: Review Response & Scholar Brand Positioning'
    ],
    instructor: 'Prof. Marcus Vance, Research Director',
    seatsRemaining: 7
  },
  {
    id: 'course-3',
    title: 'Corporate Change Maker Leadership Accelerator',
    type: 'masterclass',
    duration: '4 Weeks',
    rating: 5.0,
    description: 'For managers and future leaders. Gain direct mastery of systemic organizational diagnosis, alignment engineering, and employee empowerment tactics.',
    modules: [
      'Session 1: Structural Diagnosis & Systems Thinking',
      'Session 2: Psychological Safety & Alignment Dynamics',
      'Session 3: Operationalizing Agile Change Frameworks',
      'Session 4: Measurable KPI Alignment & Continuous Growth'
    ],
    instructor: 'Sarah Jenkins, Senior Partner',
    seatsRemaining: 12
  },
  {
    id: 'course-4',
    title: 'Foundations of Evidence Synthesis',
    type: 'certification',
    duration: '6 Weeks',
    rating: 4.9,
    description: 'Master systematic literature reviews, meta-analyses, and evidence appraisal frameworks designed for researchers, clinicians, executives, and policy experts.',
    modules: [
      'Module 1: Systematic Review Protocol Formulation',
      'Module 2: Search Strategy & Database Querying',
      'Module 3: Quality Appraisal & Risk of Bias Assessment',
      'Module 4: Meta-Analysis & Data Synthesis Frameworks'
    ],
    instructor: 'Prof. Marcus Vance, Research Director',
    seatsRemaining: 6
  },
  {
    id: 'course-5',
    title: 'Systematic Review Methods and Protocol Development',
    type: 'certification',
    duration: '5 Weeks',
    rating: 4.9,
    description: 'Master framing research questions using PICO/SPIDER, drafting PRISMA-P compliant protocols, PROSPERO registration, and multi-database search syntax construction.',
    modules: [
      'Module 1: Framing Research Questions & PICO/SPIDER Guidelines',
      'Module 2: PRISMA-P Protocol Standards & PROSPERO Registration',
      'Module 3: Comprehensive Search Syntax & Database Engineering',
      'Module 4: Study Selection Criteria & Deduplication Workflows'
    ],
    instructor: 'Prof. Marcus Vance, Research Director',
    seatsRemaining: 8
  },
  {
    id: 'course-6',
    title: 'Quantitative Evidence Synthesis and Meta-Analysis',
    type: 'masterclass',
    duration: '6 Weeks',
    rating: 5.0,
    description: 'Hands-on quantitative training covering effect size derivation, fixed & random-effects meta-analytic modeling, heterogeneity testing, and publication bias diagnostics.',
    modules: [
      'Module 1: Effect Sizes & Data Extraction Protocols',
      'Module 2: Fixed vs. Random Effects Meta-Analysis Models',
      'Module 3: Subgroup Analysis, Meta-Regression & Heterogeneity',
      'Module 4: Diagnostics, Funnel Plot Symmetry & Reporting Standards'
    ],
    instructor: 'Dr. Ola Adetokunboh, Principal Advisor',
    seatsRemaining: 5
  },
  {
    id: 'course-7',
    title: 'Assessing Certainty, Strength, and Applicability of Evidence',
    type: 'certification',
    duration: '5 Weeks',
    rating: 4.9,
    description: 'Comprehensive guide to evaluating risk of bias using RoB 2 & ROBINS-I, applying GRADE principles to rate evidence certainty, and drafting Summary of Findings tables.',
    modules: [
      'Module 1: Risk of Bias Appraisal Tools (RoB 2, ROBINS-I)',
      'Module 2: GRADE Domains & Quality Degradation Ratings',
      'Module 3: Summary of Findings (SoF) Table Engineering',
      'Module 4: Evidence Applicability & Policy Recommendation Drafting'
    ],
    instructor: 'Sarah Jenkins, Senior Partner',
    seatsRemaining: 10
  },
  {
    id: 'course-8',
    title: 'Advanced and Living Evidence Synthesis Approaches',
    type: 'masterclass',
    duration: '6 Weeks',
    rating: 4.9,
    description: 'Explore advanced evidence synthesis methods including Network Meta-Analysis, living evidence ecosystems, scoping review frameworks, and AI-enabled screening workflows.',
    modules: [
      'Module 1: Network Meta-Analysis & Direct/Indirect Comparisons',
      'Module 2: Scoping Reviews & Evidence Mapping Frameworks',
      'Module 3: Living Systematic Review Workflows & Maintenance',
      'Module 4: Automation Tools & Machine Learning in Screening'
    ],
    instructor: 'Prof. Marcus Vance, Research Director',
    seatsRemaining: 7
  },
  {
    id: 'course-9',
    title: 'Real-World Evidence Training',
    type: 'certification',
    duration: '5 Weeks',
    rating: 4.8,
    description: 'Learn to design observational studies, handle observational data bias via propensity score matching, and produce regulatory-grade Real-World Evidence from EHR and claims data.',
    modules: [
      'Module 1: Real-World Data Ecosystems (EHR, Claims, Registries)',
      'Module 2: Study Design & Controlling Observational Confounding',
      'Module 3: Propensity Score Matching & Causal Inference',
      'Module 4: Regulatory Compliance (FDA/EMA) & Strategic Impact'
    ],
    instructor: 'Dr. Ola Adetokunboh, Principal Advisor',
    seatsRemaining: 9
  },
  {
    id: 'course-10',
    title: 'Secondary Data Utilization & Research Mentorship',
    type: 'mentorship',
    duration: '2-6 Months',
    rating: 5.0,
    description: 'A selective 2-6 month mentorship program engineered to empower researchers with the skills, analytical frameworks, and practical workflows needed to utilize secondary data effectively for evidence generation.',
    modules: [
      'Module 1: Secondary Data Sources, Access & Repository Curation',
      'Module 2: Data Cleaning, Wrangling & Schema Standardization',
      'Module 3: Advanced Analytical Models for Complex Secondary Datasets',
      'Module 4: Manuscript Preparation, Evidence Translation & Publishing'
    ],
    instructor: 'Dr. Ola Adetokunboh & Senior Research Mentors',
    seatsRemaining: 6
  }
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'media-1',
    type: 'podcast',
    title: 'Episode 42: Cultivating Career Antifragility in an AI Era',
    speaker: 'Dr. Ola Adetokunboh with Guest Dr. Julian Sterling',
    duration: '45 mins',
    date: 'July 12, 2026',
    url: '#',
    description: 'A deep dive discussion on why standard career models are crumbling, and how professionals can cultivate dynamic competence, adaptive skill-edges, and structural longevity.',
    category: 'Career Strategies'
  },
  {
    id: 'media-2',
    type: 'lecture',
    title: 'Mastering the Literature Review: Structured Synthesis vs. Summarization',
    speaker: 'Prof. Marcus Vance',
    duration: '22 mins',
    date: 'June 28, 2026',
    url: '#',
    description: 'A tactical screen-recording workshop showing academics and graduate students how to utilize advanced mapping matrices to construct syntheses that identify actual knowledge gaps.',
    category: 'Research Teaching'
  },
  {
    id: 'media-3',
    type: 'podcast',
    title: 'Episode 41: Generating Systemic Change: Overcoming Executive Friction',
    speaker: 'Sarah Jenkins',
    duration: '38 mins',
    date: 'May 14, 2026',
    url: '#',
    description: 'Analyzing case studies of corporate transformation and discussing why 70% of traditional change initiatives fail, highlighting modern psych-aligned alternatives.',
    category: 'Consulting'
  },
  {
    id: 'media-4',
    type: 'video',
    title: 'Building a High-Performance Human Mentorship Ecosystem',
    speaker: 'Dr. Ola Adetokunboh',
    duration: '15 mins',
    date: 'April 02, 2026',
    url: '#',
    description: 'Keynote presentation delivered at the Global HR Development Forum detailing the quantitative returns on investment of peer mentor networks.',
    category: 'Mentorship'
  }
];
