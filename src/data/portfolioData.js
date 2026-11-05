export const portfolioData = {
  personal: {
    name: "Ashvani Singh",
    title: "Full Stack Developer",
    tagline: "Building scalable backend architectures and high-performance interactive web applications.",
    bio: "Full Stack Developer and undergraduate in B.Tech (Artificial Intelligence & Data Science, 2027 Batch) at G.L. Bajaj Institute of Technology & Management. Passionate about Java backend engineering, Spring Boot microservices, React.js frontend ecosystems, and relational database design. Grounded in algorithmic efficiency and clean architectural patterns.",
    image: "/images/profile.jpg",
    education: {
      degree: "B.Tech in Artificial Intelligence & Data Science (AIDS)",
      institution: "G.L. Bajaj Institute of Technology & Management",
      period: "2023 – 2027 (2027 Batch)",
      cgpa: "7.6",
      location: "Greater Noida / Gorakhpur, Uttar Pradesh, India",
      highlights: [
        "Specialization in Artificial Intelligence & Data Science (AIDS) - 2027 Batch",
        "Core Computer Science fundamentals: Data Structures, Algorithms & OOP in Java",
        "Database Management Systems & relational schema normalization",
        "Active technical builder leading full-stack system implementations"
      ]
    },
    contact: {
      email: "ashvanisingh930@gmail.com",
      phone: "+91 6306426858",
      phoneFormatted: "+91 63064 26858",
      location: "Gorakhpur, Uttar Pradesh, India",
      timeZone: "Asia/Kolkata",
      timeZoneLabel: "IST (UTC+5:30)",
      linkedIn: "https://linkedin.com/in/ashvani-singh-334a0a296/",
      defaultGithub: "https://github.com/Ashvani6858",
      githubRepo: "https://github.com/Ashvani6858/Ashvani-Portfolio",
      leetCode: "https://leetcode.com/u/Ashvani6858/",
      status: "Available for Software Engineering Internships & Full-Time Roles",
      responseTime: "Replies within a few hours"
    }
  },

  skills: [
    // Programming Languages
    {
      name: "Java",
      category: "Languages",
      level: "Core Language",
      description: "Robust OOP paradigms, multithreading, Collections Framework, Streams API, and JVM memory model fundamentals.",
      useCase: "Core language for enterprise systems, Spring Boot backend services, and algorithmic problem-solving.",
      icon: "Coffee",
      color: "#f89820",
      highlight: "Enterprise Core"
    },
    {
      name: "Python",
      category: "Languages",
      level: "Programming Language",
      description: "Scripting, algorithmic computations, rapid prototyping, and automated backend utilities.",
      useCase: "Data structures implementation, backend automation, and algorithmic scripting.",
      icon: "Terminal",
      color: "#3776ab",
      highlight: "Scripting & Automation"
    },
    {
      name: "C",
      category: "Languages",
      level: "Systems Programming",
      description: "Low-level memory management, pointers, computer architecture concepts, and runtime efficiency.",
      useCase: "Foundation of algorithmic complexity and deep understanding of operating systems.",
      icon: "Cpu",
      color: "#659ad2",
      highlight: "Systems Foundation"
    },

    // Backend Engineering
    {
      name: "Spring Boot",
      category: "Backend",
      level: "Enterprise Framework",
      description: "Enterprise RESTful microservices, Spring Data JPA, Spring Security, IoC container, and Bean lifecycle management.",
      useCase: "Core backend architecture for MediMatrix hospital management and enterprise services.",
      icon: "Layers",
      color: "#6db33f",
      highlight: "Microservices & JPA"
    },
    {
      name: "Node.js",
      category: "Backend",
      level: "Runtime Environment",
      description: "Asynchronous event-driven I/O, non-blocking network requests, and scalable server-side execution.",
      useCase: "High-concurrency API layer and real-time processing in ParkEase smart parking platform.",
      icon: "Server",
      color: "#83cd29",
      highlight: "Event-Driven I/O"
    },
    {
      name: "Express.js",
      category: "Backend",
      level: "Web Framework",
      description: "Modular routing, middleware pipelines, error-handling middleware, and REST API controllers.",
      useCase: "Clean RESTful micro-endpoints and authentication gateways.",
      icon: "Network",
      color: "#ffffff",
      highlight: "API Pipelines"
    },
    {
      name: "REST APIs",
      category: "Backend",
      level: "Architecture",
      description: "Stateless architectural style, HTTP status standards, idempotency, JSON serialization, and versioned endpoints.",
      useCase: "Designed clean contracts between frontend client applications and relational databases.",
      icon: "Workflow",
      color: "#38bdf8",
      highlight: "Clean API Contracts"
    },

    // Frontend Development
    {
      name: "React.js",
      category: "Frontend",
      level: "UI Library",
      description: "Component lifecycle, custom hooks, virtual DOM reconciliation, state management, and SPA architecture.",
      useCase: "Interactive client portals, admin dashboards, and responsive web experiences.",
      icon: "Atom",
      color: "#61dafb",
      highlight: "Modern SPAs & Hooks"
    },
    {
      name: "HTML5",
      category: "Frontend",
      level: "Markup Standard",
      description: "Semantic document structure, accessibility (a11y), canvas graphics, and modern web standards.",
      useCase: "Accessible, SEO-optimized markup foundations across all web deployments.",
      icon: "Code",
      color: "#e34f26",
      highlight: "Semantic & A11y"
    },
    {
      name: "CSS3",
      category: "Frontend",
      level: "Styling & Layout",
      description: "Flexbox, CSS Grid, custom properties, responsive media queries, glassmorphism, and keyframe animations.",
      useCase: "Fluid layouts, dark-mode styling, and micro-interactions with hardware-accelerated animations.",
      icon: "Palette",
      color: "#1572b6",
      highlight: "Modern Responsive UI"
    },

    // Databases & ORM
    {
      name: "MySQL",
      category: "Databases",
      level: "Relational Database",
      description: "Structured querying, foreign key constraints, indexing strategies, ACID guarantees, and query optimization.",
      useCase: "Primary relational storage for ParkEase parking reservations and audit records.",
      icon: "Database",
      color: "#00758f",
      highlight: "ACID Transactions"
    },
    {
      name: "PostgreSQL",
      category: "Databases",
      level: "Advanced RDBMS",
      description: "Enterprise relational database with complex joins, JSONB storage, schema migrations, and concurrency controls.",
      useCase: "High-integrity clinical and patient record storage in MediMatrix hospital management.",
      icon: "DatabaseBackup",
      color: "#336791",
      highlight: "Enterprise Schemas"
    },
    {
      name: "Prisma ORM",
      category: "Databases",
      level: "Type-Safe ORM",
      description: "Declarative schema modeling, automated type-safe migrations, complex relations, and transaction handling.",
      useCase: "Zero-overhead database interactions with double-booking prevention locks in ParkEase.",
      icon: "Binary",
      color: "#2d3748",
      highlight: "Type-Safe Models"
    },

    // Security & Auth
    {
      name: "JWT Authentication",
      category: "Security",
      level: "Token Architecture",
      description: "Stateless JSON Web Tokens with HMAC-SHA256 signing, claims payloads, expiration handling, and refresh cycles.",
      useCase: "Decentralized session verification across microservices and protected client routes.",
      icon: "KeyRound",
      color: "#d63aff",
      highlight: "Stateless Security"
    },
    {
      name: "bcrypt",
      category: "Security",
      level: "Cryptographic Hashing",
      description: "Adaptive salt generation, work factor scaling, and protection against rainbow table & brute-force attacks.",
      useCase: "One-way credential hashing before database persistence across all user registrations.",
      icon: "ShieldCheck",
      color: "#10b981",
      highlight: "Salted Hashing"
    },
    {
      name: "Role-Based Access Control (RBAC)",
      category: "Security",
      level: "Authorization Pattern",
      description: "Granular permission hierarchies separating Customer, Administrator, Doctor, and Receptionist roles.",
      useCase: "Strict route guards and controller-level security checks protecting administrative operations.",
      icon: "Lock",
      color: "#f59e0b",
      highlight: "Granular Guards"
    },

    // Testing
    {
      name: "JUnit",
      category: "Testing",
      level: "Testing Framework",
      description: "Unit testing, assertions, test suites, mock dependencies, and regression testing for Java backends.",
      useCase: "Automated verification of business logic, controllers, and service layers in Spring Boot.",
      icon: "CheckCircle2",
      color: "#25a162",
      highlight: "Unit & Regression"
    },
    {
      name: "Postman",
      category: "Testing",
      level: "API Testing & Docs",
      description: "Automated API test collections, environment variables, pre-request scripts, and mock servers.",
      useCase: "End-to-end integration testing and interactive API verification across microservices.",
      icon: "Send",
      color: "#ff6c37",
      highlight: "E2E API Testing"
    },

    // Core CS Concepts
    {
      name: "Data Structures",
      category: "Core Concepts",
      level: "Computer Science",
      description: "Arrays, Linked Lists, Trees, Graphs, Hash Tables, Heaps, Stacks, and Queues with optimal space/time bounds.",
      useCase: "Algorithmic efficiency, state management, and memory footprint minimization.",
      icon: "Boxes",
      color: "#a855f7",
      highlight: "Optimized Layouts"
    },
    {
      name: "Algorithms",
      category: "Core Concepts",
      level: "Computer Science",
      description: "Sorting, Searching, Dynamic Programming, Greedy approaches, and Graph traversal algorithms.",
      useCase: "Solving real-world scheduling, pathfinding, and reservation conflicts.",
      icon: "BrainCircuit",
      color: "#ec4899",
      highlight: "Algorithmic Logic"
    },
    {
      name: "Object-Oriented Programming (OOP)",
      category: "Core Concepts",
      level: "Design Philosophy",
      description: "Encapsulation, Inheritance, Polymorphism, Abstraction, and SOLID architectural design principles.",
      useCase: "Modular, extensible software architecture and clean class hierarchies in Java.",
      icon: "Component",
      color: "#3b82f6",
      highlight: "SOLID Architecture"
    },
    {
      name: "DBMS",
      category: "Core Concepts",
      level: "Systems Theory",
      description: "Relational model, B-Tree indexes, concurrency control, normalization (1NF-BCNF), and transaction isolation levels.",
      useCase: "Data integrity, zero-redundancy schemas, and deadlock prevention in concurrent systems.",
      icon: "HardDrive",
      color: "#06b6d4",
      highlight: "Relational Theory"
    },

    // Tools & Cloud
    {
      name: "Git & GitHub",
      category: "Tools",
      level: "Version Control",
      description: "Branching strategies, atomic commits, pull requests, code reviews, and remote repository management.",
      useCase: "Collaborative development, version history management, and open-source project tracking.",
      icon: "GitBranch",
      color: "#f05032",
      highlight: "Version Control"
    },
    {
      name: "VS Code",
      category: "Tools",
      level: "Primary IDE",
      description: "Advanced debugging, workspace configurations, language servers, and productivity extensions.",
      useCase: "Rapid daily development workflow across Java, JavaScript, React, and SQL.",
      icon: "AppWindow",
      color: "#007acc",
      highlight: "Development Hub"
    },
    {
      name: "Render",
      category: "Tools",
      level: "Cloud Hosting",
      description: "Automated continuous web service deployment, background workers, environment management, and zero-downtime builds.",
      useCase: "Production web hosting and automated CI/CD pipeline deployment for backend microservices.",
      icon: "Cloud",
      color: "#46e3b7",
      highlight: "Cloud Web Services"
    },
    {
      name: "Aiven",
      category: "Tools",
      level: "Managed Cloud DB",
      description: "Fully managed cloud databases with automated backups, high availability, and SSL encrypted connections.",
      useCase: "Production PostgreSQL and MySQL database instances hosting live application data.",
      icon: "ServerCrash",
      color: "#ff3554",
      highlight: "Managed Cloud DB"
    }
  ],

  projects: [
    {
      id: "parkease",
      title: "PARKEASE",
      subtitle: "Full-Stack Smart Parking Management & Booking System",
      badge: "Production Full-Stack Platform",
      period: "2024",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Prisma ORM", "JWT", "bcrypt", "Socket.IO"],
      summary: "A robust full-stack smart parking management platform that empowers drivers to search parking facilities, view interactive slot availability in real time, and reserve parking spots with automated QR ticket validation.",
      impact: "Eliminates physical ticketing delays, guarantees zero double-bookings via atomic database locks, and equips administrators with instant revenue and occupancy telemetry.",
      features: [
        "Secure user authentication with JWT and salted bcrypt password hashing",
        "Role-based access control (RBAC) separating Customers and Facility Administrators",
        "Interactive visual parking floor and slot selector with live occupancy states",
        "Atomic database transaction locks ensuring 100% double-booking prevention",
        "Seamless vehicle registration supporting multiple vehicle types and plates",
        "Instant booking confirmation with demo payment processing gateway",
        "Dynamic SVG QR-based digital parking ticket generation",
        "Live Admin Dashboard with occupancy graphs, revenue tracking, and analytics",
        "QR-based physical check-in and check-out scanner verification"
      ],
      architecture: {
        pattern: "Client-Server Micro-Architecture",
        frontend: "React SPA with Tailwind CSS, custom interactive SVG slot grid, and responsive mobile layout",
        backend: "Node.js & Express.js REST API with modular controllers, services, and JWT authorization middleware",
        database: "MySQL managed with Prisma ORM type-safe queries, relation mapping, and automated migrations",
        security: "HTTP-only token handling, parameterized SQL execution, and bcrypt work factor 10"
      },
      codeSnippet: `// Double-Booking Prevention Transaction with Prisma
const booking = await prisma.$transaction(async (tx) => {
  // Check if slot is reserved during overlapping window
  const conflicting = await tx.booking.findFirst({
    where: {
      slotId: targetSlotId,
      status: 'CONFIRMED',
      OR: [
        { startTime: { lte: requestedEnd }, endTime: { gte: requestedStart } }
      ]
    }
  });

  if (conflicting) {
    throw new Error('Slot occupied during the selected timeframe.');
  }

  // Atomically claim slot and issue QR-coded ticket
  return await tx.booking.create({
    data: {
      userId,
      slotId: targetSlotId,
      vehicleNumber,
      startTime: requestedStart,
      endTime: requestedEnd,
      qrToken: generateSecureTicketToken(),
      status: 'CONFIRMED'
    }
  });
});`
    },
    {
      id: "medimatrix",
      title: "MEDIMATRIX",
      subtitle: "Enterprise Hospital Service & Patient Care Management System",
      badge: "Enterprise Java & Spring Boot",
      period: "2025",
      technologies: ["React.js", "Spring Boot", "PostgreSQL", "JWT", "Spring Security", "Hibernate / JPA", "HTML5", "CSS3"],
      summary: "An enterprise-grade hospital management and patient workflow ecosystem built to streamline clinical operations, doctor OPD scheduling, real-time consultation queues, and secure electronic health records.",
      impact: "Modernizes hospital administrative operations, guarantees role-strict medical record confidentiality, and optimizes patient throughput across medical specialties.",
      features: [
        "Patient admission workflow and Electronic Health Record (EHR) registry",
        "Specialty doctor OPD scheduling with dynamic slot allocation",
        "Real-time patient appointment booking and live OPD queue tracker",
        "Granular RBAC with Spring Security protecting Admin, Doctor, Receptionist, and Patient actions",
        "Relational PostgreSQL schema with ACID compliance and Hibernate JPA auditing",
        "Stateless JWT authorization filters with claims validation on every API request",
        "Comprehensive RESTful endpoints with centralized global exception handling (@ControllerAdvice)"
      ],
      architecture: {
        pattern: "Tiered Enterprise Architecture (Controller-Service-Repository)",
        frontend: "React.js dashboard with modular medical viewports, dynamic OPD queues, and responsive styling",
        backend: "Java Spring Boot application with Spring Security, JPA/Hibernate, and Bean validation",
        database: "PostgreSQL with normalized schemas, foreign keys, and audit logging",
        security: "JWT stateless filters, role hierarchies, password encoding with BCryptPasswordEncoder"
      },
      codeSnippet: `// Spring Security JWT Filter & Controller Architecture
@RestController
@RequestMapping("/api/v1/appointments")
@CrossOrigin(origins = "*")
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @PostMapping("/book")
    @PreAuthorize("hasAnyRole('PATIENT', 'ADMIN')")
    public ResponseEntity<AppointmentResponse> bookAppointment(
            @Valid @RequestBody AppointmentRequest request,
            @AuthenticationPrincipal UserPrincipal currentUser) {
        
        AppointmentResponse response = appointmentService.createBooking(request, currentUser.getId());
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}`
    }
  ],

  journey: [
    {
      year: "2023 – 2027",
      title: "B.Tech in Artificial Intelligence & Data Science (AIDS)",
      organization: "G.L. Bajaj Institute of Technology & Management",
      badge: "2027 Batch",
      score: "CGPA: 7.6",
      description: "Undergraduate curriculum in Artificial Intelligence & Data Science (2027 Batch). Focused on algorithmic problem-solving, advanced Java object-oriented design, relational database internals, and modern software engineering.",
      takeaways: [
        "Deep foundation in Data Structures, Algorithms, and Complexity Analysis",
        "Extensive practical coursework in DBMS, Operating Systems, and Computer Networks",
        "Hands-on full-stack development, moving from classroom concepts to production architectures"
      ]
    },
    {
      year: "2024",
      title: "Architecting ParkEase: Smart Parking Platform",
      organization: "Full-Stack Engineering Project",
      badge: "Full-Stack & Cloud",
      score: "Production Milestone",
      description: "Conceptualized, architected, and built ParkEase from scratch. Designed the complete database schema with Prisma ORM, implemented atomic concurrency locks to prevent double-booking, and engineered dynamic QR ticket issuance.",
      takeaways: [
        "Real-world transaction safety with MySQL and Prisma ORM",
        "Custom role-based authorization pipelines for Admins and Drivers",
        "Cloud database deployment on Aiven and API service on Render"
      ]
    },
    {
      year: "2025",
      title: "Engineering MediMatrix: Hospital Service Management",
      organization: "Enterprise Java Architecture",
      badge: "Enterprise Milestone",
      score: "Systems Architecture",
      description: "Engineered MediMatrix using Spring Boot and PostgreSQL. Implemented strict Spring Security filters, patient admission workflows, real-time OPD doctor queue scheduling, and automated JUnit testing.",
      takeaways: [
        "Mastery of Spring Boot IoC, Spring Data JPA, and RESTful service patterns",
        "PostgreSQL relational modeling for complex healthcare data schemas",
        "Robust JWT authentication and role-based access control"
      ]
    },
    {
      year: "Present & Future",
      title: "Software Engineering & Industry Impact",
      organization: "Ready for High-Impact Engineering Roles",
      badge: "Career Horizons",
      score: "Open for Opportunities",
      description: "Actively seeking Software Engineering internships, Java Developer positions, and Full-Stack Developer opportunities. Ready to contribute clean, scalable code and reliable backend systems to ambitious engineering teams.",
      takeaways: [
        "Immediate availability for remote and on-site engineering roles",
        "Strong foundation in Java, Spring Boot, React, and Relational Databases",
        "Continuous commitment to clean code, automated testing, and scalable architecture"
      ]
    }
  ],

  doors: [
    {
      id: "backend-java",
      title: "Enterprise Java & Backend",
      doorNumber: "01",
      tagline: "High-Throughput Microservices & Clean OOP",
      color: "from-amber-500/20 to-orange-600/10",
      accentColor: "#f59e0b",
      skills: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs"],
      description: "Architecting resilient server-side services with disciplined separation of concerns, transactional integrity, and stateless JWT security pipelines.",
      stats: { primary: "Spring Boot", metric: "Microservices", speed: "Sub-50ms API P99" }
    },
    {
      id: "fullstack-react",
      title: "Modern Full-Stack & UI",
      doorNumber: "02",
      tagline: "Fluid, Responsive & Component-Driven",
      color: "from-cyan-500/20 to-blue-600/10",
      accentColor: "#06b6d4",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
      description: "Building responsive, modern Single Page Applications featuring intuitive interactive data visualizers, custom slot pickers, and accessible interfaces.",
      stats: { primary: "React.js", metric: "Interactive SPAs", speed: "60 FPS Transitions" }
    },
    {
      id: "data-security",
      title: "Databases, ORM & Security",
      doorNumber: "03",
      tagline: "ACID Guarantees & Defensive Auth",
      color: "from-emerald-500/20 to-teal-600/10",
      accentColor: "#10b981",
      skills: ["MySQL", "PostgreSQL", "Prisma ORM", "JWT", "bcrypt", "RBAC"],
      description: "Designing normalized relational schemas with zero-loss data consistency, atomic concurrency locks, and salted cryptographic protection.",
      stats: { primary: "PostgreSQL & Prisma", metric: "ACID Locked", speed: "100% Concurrency Safe" }
    },
    {
      id: "cs-cloud",
      title: "Core CS & Cloud DevOps",
      doorNumber: "04",
      tagline: "Algorithmic Precision & Cloud Delivery",
      color: "from-purple-500/20 to-violet-600/10",
      accentColor: "#a855f7",
      skills: ["Data Structures", "Algorithms", "DBMS", "OOP", "Git", "Render", "Aiven"],
      description: "Grounded in foundational computer science principles, continuous automated verification with JUnit & Postman, and automated cloud deployments.",
      stats: { primary: "DS & Algo", metric: "GL Bajaj CS", speed: "7.6 CGPA Grounded" }
    }
  ]
};
