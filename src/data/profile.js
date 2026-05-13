const monogramSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 720">
    <defs>
      <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#173047" />
        <stop offset="52%" stop-color="#0f766e" />
        <stop offset="100%" stop-color="#d97706" />
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="720" height="720" rx="80" fill="url(#bg)" />
    <rect width="720" height="720" rx="80" fill="url(#grid)" />
    <circle cx="360" cy="260" r="124" fill="rgba(255,255,255,0.12)" />
    <text x="360" y="410" text-anchor="middle" fill="#fffaf2" font-size="250" font-family="Georgia, Times New Roman, serif" font-weight="700">RG</text>
    <text x="360" y="560" text-anchor="middle" fill="rgba(255,250,242,0.86)" font-size="38" font-family="Arial, sans-serif" letter-spacing="10">AI RESEARCH</text>
  </svg>
`.trim());

export const profile = {
  fullName: 'Riya Goyal',
  shortName: 'RG',
  role: 'AI Researcher and UGC NET-JRF Qualified Scholar',
  headline: 'M.Tech in Computer Science and Engineering (Artificial Intelligence)',
  affiliation: 'Indira Gandhi Delhi Technical University for Women',
  location: 'Punhana, Haryana, India',
  email: 'riya.goyal2599@gmail.com',
  phone: '+91 9034285780',
  linkedin: 'https://www.linkedin.com/in/riya-goyal-299642194/',
  github: 'https://github.com/riya2599',
  baseUrl: 'https://riya2599.github.io',
  profilePhoto: `data:image/svg+xml;charset=UTF-8,${monogramSvg}`,
  heroStatement:
    'Applied machine learning researcher with work spanning natural language processing, deep learning, cybercrime analytics, and clinical prediction. I build practical AI systems and study how model choices affect accuracy, interpretability, and real-world usefulness.',
  focusAreas: [
    'Natural Language Processing',
    'Deep Learning',
    'Applied Machine Learning',
    'Cybersecurity Analytics'
  ],
  heroBadges: [
    'UGC NET-JRF qualified',
    'M.Tech in CSE-AI',
    'Published researcher',
    'Research internship experience'
  ],
  heroFacts: [
    { value: '2', label: 'peer-reviewed publications' },
    { value: '6', label: 'major academic projects' },
    { value: '2', label: 'research and AI internships' },
    { value: '2023', label: 'UGC NET-JRF qualification' }
  ],
  metrics: [
    { label: 'Publications', value: '2', icon: 'fa-file-lines' },
    { label: 'Research Projects', value: '6', icon: 'fa-diagram-project' },
    { label: 'Academic Distinctions', value: '4+', icon: 'fa-award' },
    { label: 'Core Focus Areas', value: '4', icon: 'fa-flask' }
  ],
  highlights: [
    {
      icon: 'fa-brain',
      title: 'Research Depth in AI',
      description:
        'Published work in cybercrime classification and depression detection, supported by hands-on experimentation with embeddings, classifiers, and ensemble methods.'
    },
    {
      icon: 'fa-laptop-code',
      title: 'Built Across the Stack',
      description:
        'Delivered projects in web systems, student management, image classification, and healthcare prediction using Python, JavaScript, CNNs, and classic ML.'
    },
    {
      icon: 'fa-user-graduate',
      title: 'Strong Academic Record',
      description:
        'Completed an M.Tech in CSE-AI with 81.41% and a B.Tech in CSE with 90.70%, reflecting both research orientation and technical consistency.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Research-to-Application Mindset',
      description:
        'Works on socially relevant AI topics such as mental health analysis, malware classification, and predictive healthcare with a bias toward practical deployment.'
    }
  ],
  biography: [
    'Riya Goyal is an early-career AI researcher focused on building dependable machine learning systems for text, image, and structured data. Her work sits at the intersection of natural language processing, deep learning, and application-driven research.',
    'She completed her M.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence from IGDTUW after earning a B.Tech in Computer Science from Bhagwan Parshuram Institute of Technology, GGSIPU. Her academic path combines strong scores with research exposure through internships, publications, and project-led exploration.',
    'Her research portfolio includes cybercrime classification, depression detection through word and sentence embeddings, malware image classification, and predictive models for healthcare. She is particularly interested in how model architecture and feature representation influence performance on socially meaningful problems.'
  ],
  aboutSections: [
    {
      title: 'Research direction',
      description:
        'Riya is interested in applied AI problems where careful modeling decisions can create measurable improvements in accuracy, robustness, and interpretability. Her current body of work reflects a preference for domains where machine learning can support human decision-making in high-impact settings.'
    },
    {
      title: 'Methodological strengths',
      description:
        'Her projects combine classical machine learning, neural architectures, and empirical comparison. She has worked with logistic regression, SVMs, CNNs, word embeddings, sentence embeddings, and ensemble learning pipelines.'
    },
    {
      title: 'Professional orientation',
      description:
        'With UGC NET-JRF qualification and research internship experience, she is positioning herself for deeper work in AI research, advanced study, and collaborative projects that connect experimentation with real-world utility.'
    }
  ],
  researchInterests: [
    {
      icon: 'fa-comments',
      title: 'NLP for wellbeing and classification',
      description:
        'Text classification, embedding analysis, and model comparison for socially relevant language understanding tasks.'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Cybercrime and malware analytics',
      description:
        'ML and deep learning approaches for cybercrime classification and image-based malware detection.'
    },
    {
      icon: 'fa-heart-pulse',
      title: 'Predictive healthcare models',
      description:
        'Structured-data modeling for disease prediction and decision support using interpretable ML baselines.'
    },
    {
      icon: 'fa-microchip',
      title: 'Deep learning evaluation',
      description:
        'Benchmarking architectures and embeddings to understand where representation choices improve downstream performance.'
    }
  ],
  publicationIntro:
    'The current publication record shows a clear trajectory toward applied AI research, especially in text analytics and cybersecurity-oriented classification. Each paper reflects comparative experimentation and problem-focused modeling.',
  researchThemes: [
    {
      icon: 'fa-language',
      title: 'Representation learning for text',
      description:
        'Comparing word- and sentence-level embeddings to understand their effect on depression detection performance.'
    },
    {
      icon: 'fa-layer-group',
      title: 'Ensemble learning for difficult classes',
      description:
        'Using combined learners to improve classification quality for cybercrime-related datasets.'
    },
    {
      icon: 'fa-bug-slash',
      title: 'Deep learning for security',
      description:
        'Treating malware as an image recognition problem to benchmark modern DL architectures against prior methods.'
    }
  ],
  publications: [
    {
      year: '2023',
      type: 'Journal',
      title: 'Depression Detection Model Using Word and Sentence Embedding with Different Classifiers',
      authors: 'KM Ankita Rai, Riya Goyal, and Monika Choudhary',
      venue: 'DOI indexed publication',
      doi: '10.33564/IJEAST.2023.v08i02.003',
      url: 'https://doi.org/10.33564/IJEAST.2023.v08i02.003',
      summary:
        'Investigates depression detection through comparative evaluation of word and sentence embeddings across multiple classifiers.'
    },
    {
      year: '2022',
      type: 'Journal',
      title: 'Ensem_SLDR: Classification of Cybercrime Using Ensemble Learning Technique',
      authors: 'Hemakshi Pandey, Riya Goyal, Deepali Virmani, and Charu Gupta',
      venue: 'International Journal of Computer Network and Information Security, 14(1), 81-90',
      doi: '10.5815/ijcnis.2022.01.07',
      url: 'https://doi.org/10.5815/ijcnis.2022.01.07',
      summary:
        'Presents an ensemble-learning approach for cybercrime classification and compares the proposed method with relevant baselines.'
    }
  ],
  projects: [
    {
      category: 'NLP Research',
      title: 'Depression Detection with Embedding-Based Classifiers',
      description:
        'Studied how word embeddings and sentence embeddings affect depression detection accuracy across different classification models.',
      technologies: ['Python', 'NLP', 'Word Embeddings', 'Sentence Embeddings', 'Classification'],
      impact: 'Mapped representation choices to measurable performance differences.'
    },
    {
      category: 'Deep Learning Security',
      title: 'Malware Classification Using Deep Learning Approaches',
      description:
        'Designed a modified deep learning architecture for image-based malware classification and compared it with reported state-of-the-art approaches.',
      technologies: ['Deep Learning', 'Image Classification', 'Security Analytics'],
      impact: 'Framed malware analysis as a high-signal computer vision problem.'
    },
    {
      category: 'Computer Vision',
      title: 'Fashion MNIST Data Classification',
      description:
        'Built a convolutional neural network to identify fashion product categories from grayscale image inputs.',
      technologies: ['CNN', 'Python', 'Computer Vision'],
      impact: 'Demonstrated end-to-end model training and evaluation for image recognition.'
    },
    {
      category: 'Healthcare AI',
      title: 'Heart Disease Prediction',
      description:
        'Implemented heart disease prediction pipelines using logistic regression and SVM to evaluate predictive performance on healthcare data.',
      technologies: ['Machine Learning', 'Python', 'Logistic Regression', 'SVM'],
      impact: 'Applied interpretable predictive modeling to a clinically relevant use case.'
    },
    {
      category: 'Web Systems',
      title: 'Online Examination System',
      description:
        'Developed a browser-based examination platform with instant result display and automatic submission on timeout.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      impact: 'Focused on reliable exam workflow and time-bound submission behavior.'
    },
    {
      category: 'Software Application',
      title: 'Student Management System',
      description:
        'Created an application for adding, searching, and managing student and course records through a simple workflow.',
      technologies: ['Python', 'XAMPP Server'],
      impact: 'Showed practical backend-oriented problem solving for academic administration tasks.'
    }
  ],
  experiences: [
    {
      role: 'Research Intern',
      organization: 'IGDTUW',
      period: 'Jun 2022 - Jul 2022',
      location: 'Delhi, India',
      description:
        'Worked on a depression detection model using word and sentence embeddings with different classifiers in a focused research setting.',
      highlights: [
        'Compared multiple representation strategies for text-based mental health detection.',
        'Contributed to a study that later resulted in a DOI-indexed publication.',
        'Built empirical intuition around model selection for NLP classification tasks.'
      ]
    },
    {
      role: 'Artificial Intelligence Intern',
      organization: 'Personifwy',
      period: 'Feb 2022 - May 2022',
      location: 'Remote',
      description:
        'Built and evaluated AI prototypes across object recognition, handwritten digit classification, and news categorization tasks.',
      highlights: [
        'Worked with CNN-based vision pipelines for object and digit recognition.',
        'Explored NLP workflows for news classification.',
        'Strengthened implementation skills across multiple AI problem types.'
      ]
    }
  ],
  education: [
    {
      degree: 'M.Tech in Computer Science and Engineering - Artificial Intelligence',
      institution: 'Indira Gandhi Delhi Technical University for Women',
      year: '2023',
      score: '81.41%',
      focus: 'Artificial Intelligence, machine learning, and applied research',
      notes: 'Advanced study centered on AI methods and research-oriented problem solving.'
    },
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Bhagwan Parshuram Institute of Technology, GGSIPU',
      year: '2021',
      score: '90.70%',
      focus: 'Computer science fundamentals with strong academic performance',
      notes: 'Developed a strong base in programming, systems, theory, and software development.'
    },
    {
      degree: 'Senior Secondary (Class 12)',
      institution: 'S.D.V.N. Sr. Sec. School, CBSE',
      year: '2016',
      score: '87.80%',
      notes: 'Built the academic foundation that led into engineering studies.'
    },
    {
      degree: 'Secondary (Class 10)',
      institution: 'S.D.V.N. Sr. Sec. School, CBSE',
      year: '2014',
      score: 'CGPA 10',
      notes: 'Strong early academic performance.'
    }
  ],
  awards: [
    {
      year: '2023',
      title: 'Qualified UGC NET-JRF',
      description: 'Cleared the UGC NET-JRF examination in December 2023, marking national-level research eligibility.'
    },
    {
      year: '2021',
      title: 'Qualified GATE',
      description: 'Qualified the Graduate Aptitude Test in Engineering, demonstrating strong grounding in core CS concepts.'
    },
    {
      year: '2022',
      title: 'Research Publication Record',
      description: 'Built a peer-reviewed publication track in applied AI across cybercrime and mental health text analysis.'
    },
    {
      year: '2021',
      title: 'High Distinction in B.Tech',
      description: 'Graduated with 90.70% in Computer Science and Engineering.'
    }
  ],
  credentials: [
    {
      icon: 'fa-certificate',
      title: 'Core Java Certification',
      issuer: 'Internshala',
      year: 'Credential',
      description: 'Formal training in Java fundamentals, syntax, and programming practice.'
    },
    {
      icon: 'fa-certificate',
      title: 'Python Certification',
      issuer: 'Udemy',
      year: 'Credential',
      description: 'Extended hands-on fluency in Python for software development and machine learning workflows.'
    },
    {
      icon: 'fa-users',
      title: 'Annual Sports Day Coordinator',
      issuer: 'Campus leadership',
      year: 'Activity',
      description: 'Coordinated an annual campus event, demonstrating organization, teamwork, and execution capability.'
    }
  ],
  academicActivities: [
    'Participation certificate - NCAT',
    'Participation certificate - Eloquence 2018',
    'Participation certificate - Eloquence 2019',
    'Consistent project work across AI, web, and academic software systems'
  ],
  skillGroups: [
    {
      title: 'Programming Languages',
      icon: 'fa-code',
      items: ['Python', 'C', 'C++', 'Core Java', 'JavaScript']
    },
    {
      title: 'AI and Research Areas',
      icon: 'fa-brain',
      items: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Convolutional Neural Networks', 'Ensemble Learning']
    },
    {
      title: 'Databases and Web',
      icon: 'fa-database',
      items: ['Oracle SQL', 'RDBMS', 'HTML', 'CSS']
    },
    {
      title: 'Platforms and Tools',
      icon: 'fa-screwdriver-wrench',
      items: ['VS Code', 'NetBeans', 'XAMPP Server', 'Windows']
    },
    {
      title: 'Core CS Foundations',
      icon: 'fa-network-wired',
      items: ['Operating Systems', 'Compilers', 'Theory of Computation', 'DBMS']
    }
  ],
  professionalStrengths: ['Problem solving', 'Positive team contribution', 'Time management', 'Adaptability'],
  collaborationNote:
    'Riya is open to conversations around AI research, advanced study, research internships, and technically grounded collaborations in machine learning and NLP.',
  socialLinks: [
    { iconSet: 'fa-brands', icon: 'fa-github', label: 'GitHub', url: 'https://github.com/riya2599' },
    { iconSet: 'fa-brands', icon: 'fa-linkedin-in', label: 'LinkedIn', url: 'https://www.linkedin.com/in/riya-goyal-299642194/' },
    { iconSet: 'fa-solid', icon: 'fa-envelope', label: 'Email', url: 'mailto:riya.goyal2599@gmail.com' },
    { iconSet: 'fa-solid', icon: 'fa-file-pdf', label: 'Resume', url: '/Riya_Goyal-1.pdf' }
  ],
  cvUrl: '/Riya_Goyal-1.pdf',
  resumeUrl: '/Riya_Goyal-1.pdf'
};
