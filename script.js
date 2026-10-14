/* =====================================================================
   DATA: edit content here. Image paths are the same ones used by the
   previous site (folder "assets/", case-sensitive on GitHub Pages).
   Images that do not exist yet are skipped automatically.
   ===================================================================== */
const SKILLS = [
  [
    "Power Electronics & Motor Control",
    [
      ["DC and AC Converter", 1],
      ["Interleaved Buck Converter"],
      ["Inverter (Multilevel)"],
      ["Electric Motors", 1],
      ["Motor Control via VSD", 1],
      ["DC Motor"],
      ["BLDC"],
      ["3-phase induction"],
    ],
  ],
  [
    "Embedded Systems & Control",
    [
      ["Microcontrollers", 1],
      ["STM32F4"],
      ["Arduino / Arduino IDE", 1],
      ["AVR (Atmega8535)"],
      ["C / C++ (CodeVisionAVR)"],
      ["Sensor Integration", 1],
    ],
  ],
  [
    "Design, Simulation & Hardware",
    [
      ["Schematic and PCB Design", 1],
      ["TARGET 3001!"],
      ["PSIM Simulation", 1],
      ["Proteus 8 Professional"],
      ["Soldering", 1],
      ["Troubleshooting (wiring, parameters)", 1],
      ["Oscilloscopes & Multimeters"],
    ],
  ],
  [
    "Industrial Automation & Robotics",
    [
      ["PLC Programming", 1],
      ["Omron PLC"],
      ["SCADA / HMI", 1],
      ["Modbus"],
      ["VSD (Schneider)"],
      ["Pneumatics"],
      ["Robotics (line-following robots)", 1],
    ],
  ],
  [
    "IoT & Telecommunications",
    [
      ["Internet of Things (IoT)", 1],
      ["ESP8266 / NodeMCU"],
      ["Real-time Data Logging"],
      ["Telecommunications", 1],
      ["Filter Design (LPF/HPF/BPF/BSF)"],
      ["Amplitude Modulation"],
    ],
  ],
  [
    "Professional & Tools",
    [
      ["Technical Documentation", 1],
      ["Public Speaking (conference presentation)", 1],
      ["Data Analysis (Dashboard)", 1],
      ["n8n (Workflow Automation)", 1],
      ["Telegram Bot"],
      ["Google Sheets / Google Drive"],
    ],
  ],
];

const EXPERIENCE = [
  {
    date: "Jul 2026–Aug 2026",
    title: "Assistant to Consultant",
    org: "PT Ardi Widya Utama, Jakarta (Hybrid)",
    desc: "Assisted a university lecturer serving as consultant to the Ministry of Transportation (Kementerian Perhubungan) on an Operating System document for the state-owned Kereta Ukur (railway measurement train).",
    bullets: [
      "Took meeting notes during coordination meetings with the Ministry to keep follow-up items documented, and proofread the report for accuracy.",
      "Completed the technical documentation by sourcing and inserting missing train-component images into the report.",
    ],
    sets: [
      {
        caption: "Assistant to Consultant, PT Ardi Widya Utama",
        images: [
          "assets/exp-ardi-widya-utama-1.jpeg",
          "assets/exp-ardi-widya-utama-2.jpeg",
          "assets/exp-ardi-widya-utama-3.jpeg",
        ],
      },
    ],
  },
  {
    date: "Jul 2025–Aug 2026",
    title: "Basic Electronics Teacher",
    org: "SMA Tri Tunggal Semarang, Semarang",
    desc: "Delivered a progressive Basic Electronics training curriculum to Grades 10–12, covering circuit theory, electronic components, digital logic, Arduino programming, sensors and actuators, and IoT systems using NodeMCU (ESP8266).",
    bullets: [
      "Guided hands-on projects, including logic circuits, line-following robots, automated plant-watering systems, and IoT-based monitoring devices.",
    ],
    sets: [
      {
        caption: "Basic Electronics Teacher, SMA Tri Tunggal Semarang",
        images: [
          "assets/exp-basic-electronics-teacher-1.jpeg",
          "assets/exp-basic-electronics-teacher-2.jpeg",
          "assets/exp-basic-electronics-teacher-3.jpeg",
        ],
      },
    ],
  },
  {
    date: "Mar 2026–Jun 2026",
    title: "Teaching Assistant: Electric Drives (Practicum)",
    org: "UNIKA Soegijapranata, Semarang",
    desc: "Guided simulation and hardware sessions on DC motor speed control (Buck Chopper), BLDC commutation, and three-phase induction motor control via VVVF/VSD.",
    bullets: [
      "Correlated PSIM simulation results with hardware measurements to validate motor drive performance.",
      "Troubleshot wiring, parameter, and control-signal issues; evaluated lab reports and gave technical feedback.",
    ],
    sets: [],
  },
  {
    date: "Sep–Dec 2025 and Sep–Dec 2024",
    title:
      "Teaching Assistant: Fundamentals of Electrical Engineering (Practicum)",
    org: "UNIKA Soegijapranata, Semarang",
    desc: "Reinforced core circuit theory, then guided students into Arduino-based sensor/actuator integration (DC and stepper motors), hardware simulation in Proteus 8, and schematic/PCB design in TARGET 3001!.",
    bullets: [
      "Trained students on lab instrumentation: power supplies, oscilloscopes, multimeters, and soldering equipment.",
    ],
    sets: [],
  },
  {
    date: "Sep 2025–Dec 2025",
    title:
      "Teaching Assistant: Microprocessors and Microcontrollers (Practicum)",
    org: "UNIKA Soegijapranata, Semarang",
    desc: "Supported lab sessions on microcontroller applications using Arduino (Arduino IDE) and Atmega8535 (CodeVisionAVR), and reviewed practicum reports for grading.",
    bullets: [],
    sets: [],
  },
  {
    date: "Mar 2025–Jun 2025",
    title: "Teaching Assistant: Fundamentals of Telecommunications (Practicum)",
    org: "UNIKA Soegijapranata, Semarang",
    desc: "Taught filter circuit design (LPF, HPF, BPF, BSF), amplitude modulation (AM-DSB-SC, AM-SSB-C), and voltage-to-frequency / frequency-to-voltage signal conversion.",
    bullets: [],
    sets: [],
  },
  {
    date: "Feb 2025–Mar 2025",
    title: "Operational Specialist Internship, Operation Facility Division",
    org: "PT PLN (Persero) UP2B DKI Jakarta and Banten, East Jakarta",
    desc: "Assisted field mentors during on-site substation visits for network maintenance and upgrades at a regional load dispatch center.",
    bullets: [
      "Gained hands-on exposure to an IT WAN network migration project and received an introduction to SCADA systems from the telecommunications and SCADA teams.",
    ],
    sets: [
      {
        caption: "Internship, PT PLN (Persero) UP2B DKI Jakarta and Banten",
        images: [
          "assets/exp-pln-internship-1.jpeg",
          "assets/exp-pln-internship-2.jpeg",
          "assets/exp-pln-internship-3.jpeg",
        ],
      },
    ],
  },
  {
    date: "Sep 2024–Dec 2024",
    title:
      "Teaching Assistant: Electrical Measurements and Circuits (Practicum)",
    org: "UNIKA Soegijapranata, Semarang",
    desc: "Guided measurement exercises on RLC circuit behavior in transient and steady state, 3-phase AC Star-Delta configurations, and transformer polarity.",
    bullets: ["Trained students on oscilloscopes, multimeters, and AFGs."],
    sets: [],
  },
];

const PROJECT_GROUPS = [
  [
    "Power Electronics & Research",
    [
      {
        title: "Interleaved Buck Converter for Generator Excitation",
        featured: true,
        meta: "FORTEI-ICEE 2026, IEEE conference, Makassar | 24–26 Sep 2026",
        desc: "Designed a three-leg interleaved buck converter topology for enhanced current quality in synchronous generator excitation applications, introducing a single shared current sensor across all three legs instead of a dedicated sensor per leg to simplify the feedback circuit and reduce component count. Authored and presented the paper at FORTEI-ICEE 2026 (FORTEI x IEEE Indonesia Section), Politeknik Negeri Ujung Pandang, Makassar.",
        tags: ["Interleaved buck", "Generator excitation", "IEEE paper"],
        sets: [
          {
            label: "View prototype photos",
            caption: "Interleaved buck converter prototype",
            images: [
              "assets/proj-buck-converter-1.jpeg",
              "assets/proj-buck-converter-2.jpeg",
              "assets/proj-buck-converter-3.jpeg",
            ],
          },
          {
            label: "View accepted paper",
            caption: "FORTEI-ICEE 2026: accepted paper",
            images: [
              "assets/paper-fortei-icee-2026-1.jpg",
              "assets/paper-fortei-icee-2026-2.jpeg",
              "assets/paper-fortei-icee-2026-3.jpeg",
            ],
          },
        ],
      },
      {
        title: "Five-Level Single-Phase Buck-Boost Inverter",
        featured: true,
        meta: "Multi-cell H-bridge inverter | Jun 2026 – Sep 2026",
        desc: "Designed and built a five-level single-phase buck-boost inverter prototype using seven active power switches, with the topology and switching sequences simulated in PSIM and converted into a lookup table for real-time control. Control started on an Arduino Mega and was later migrated to an STM32F4 for faster processing and more flexible switching signal generation, producing a stable multilevel AC output.",
        tags: ["Arduino Mega", "STM32F4", "PSIM"],
        sets: [
          {
            label: "View documentation",
            caption: "Multi-cell H-bridge inverter",
            images: [
              "assets/proj-hbridge-inverter-1.jpeg",
              "assets/proj-hbridge-inverter-2.jpg",
              "assets/proj-hbridge-inverter-3.jpeg",
            ],
          },
        ],
      },
      {
        title: "AC-AC Chopper",
        meta: "PWM voltage control | Arduino Uno",
        desc: "Designed and built an AC-AC chopper that controls AC output voltage through PWM switching. Designed the schematic and PCB for both the power circuit and the PWM driver circuit, and wrote the PWM program on an Arduino Uno. Verified the output on an oscilloscope, which showed a stable 50 Hz sine wave (49.9955 Hz measured) driving a lamp load.",
        tags: ["AC-AC chopper", "PWM", "Arduino Uno", "PCB design"],
        link: "https://www.youtube.com/watch?v=RTapv4xi3MI",
        sets: [
          {
            label: "View documentation",
            caption: "AC-AC chopper prototype and output waveform",
            images: [
              "assets/proj-ac-chopper-1.jpeg",
              "assets/proj-ac-chopper-2.jpeg",
            ],
          },
        ],
      },
      {
        title: "Three-Phase Inverter for Induction Motor",
        meta: "Three-phase inverter | Induction motor | Nov 2024 – Dec 2024",
        desc: "Designed the schematic and PCB for a three-phase inverter power stage and its driver circuit, built to drive a three-phase induction motor. Tested the hardware on a lab bench with a DC supply, oscilloscope, and multimeter, and confirmed the hardware results against the simulation.",
        tags: [
          "3-phase inverter",
          "Induction motor",
          "PCB design",
          "Simulation vs hardware",
        ],
        sets: [
          {
            label: "View documentation",
            caption: "Three-phase inverter test setup",
            images: ["assets/proj-inverter-3phase-1.jpeg"],
          },
        ],
      },
      {
        title: "Zeta Converter",
        meta: "DC-DC converter | Sep 2024 – Oct 2024",
        desc: "Designed the schematic and PCB for a Zeta DC-DC converter and its PWM control board, then confirmed the hardware results against the simulation, including a lamp-load test.",
        tags: [
          "Zeta converter",
          "DC-DC",
          "PCB design",
          "Simulation vs hardware",
        ],
        sets: [
          {
            label: "View documentation",
            caption: "Zeta converter prototype and lamp-load test",
            images: [
              "assets/proj-zeta-converter-1.jpeg",
              "assets/proj-zeta-converter-2.jpeg",
              "assets/proj-zeta-converter-3.jpeg",
            ],
          },
        ],
      },
    ],
  ],
  [
    "Industrial Automation & Control",
    [
      {
        title: "PLC Learning Module: Pneumatics & Motor Control",
        meta: "Omron PLC | Nov 2024 – Dec 2024",
        desc: "Built a PLC learning module for hands-on student training, consisting of a pneumatic system module and a forward-reverse 3-phase motor control module. The components of each module were tested before integration, and the module is equipped with push buttons and an emergency stop button.",
        tags: ["Omron PLC", "Pneumatics", "3-phase motor"],
        link: "https://youtu.be/Vciiqnsr6KE",
        sets: [
          {
            label: "View documentation",
            caption: "PLC learning module (Omron)",
            images: [
              "assets/proj-plc-omron-1.jpeg",
              "assets/proj-plc-omron-2.jpeg",
              "assets/proj-plc-omron-3.jpeg",
            ],
          },
        ],
      },
      {
        title: "SCADA Learning Module",
        meta: "Modbus | Schneider VSD | May 2025 – Jun 2025",
        desc: "Built a SCADA learning module for hands-on training, verifying each component before integrating a sensor module (Renatta power meter via Modbus communication) and an actuator module (pilot lamps and a Schneider VSD). The module is equipped with push buttons and a system-wide emergency stop button.",
        tags: ["Modbus", "Schneider VSD", "SCADA"],
        link: "https://youtu.be/r5_0ShnXf90",
        sets: [
          {
            label: "View documentation",
            caption: "SCADA learning module",
            images: [
              "assets/proj-scada-module-1.jpeg",
              "assets/proj-scada-module-2.jpeg",
              "assets/proj-scada-module-3.jpeg",
            ],
          },
        ],
      },
    ],
  ],
  [
    "IoT & Monitoring Systems",
    [
      {
        title: "Automatic Solar Panel Cleaning System",
        meta: "IoT control | Nov 2025",
        desc: "Developed an Automatic Solar Panel (PV) Cleaning System with an IoT-based control system, designed to remove dust and fallen leaves from the panel surface using pressurized water sprayed through nozzles to restore panel efficiency and electrical power output.",
        tags: ["IoT", "Photovoltaic", "Pressurized water"],
        sets: [
          {
            label: "View documentation",
            caption: "Automatic PV cleaning system",
            images: [
              "assets/proj-pv-cleaning-1.jpeg",
              "assets/proj-pv-cleaning-2.jpeg",
              "assets/proj-pv-cleaning-3.jpeg",
            ],
          },
        ],
      },
      {
        title: "IoT Structural Tilt Monitoring Dashboard",
        meta: "Real-time dashboard | Jan 2026 – Mar 2026",
        desc: "Developed an IoT-based structural tilt monitoring system to measure the tilt angle of the UNIKA Sporthall building, using two MPU9250 sensors placed at separate points (one on a level reference surface and one at the monitored point) to calculate the relative tilt angle in real time. Readings are logged to an SD card and synced to a Google Spreadsheet via a live dashboard.",
        tags: ["MPU9250", "SD card logging", "Google Sheets"],
        sets: [
          {
            label: "View documentation",
            caption: "IoT tilt monitoring dashboard",
            images: [
              "assets/proj-tilt-monitoring-1.jpg",
              "assets/proj-tilt-monitoring-2.jpg",
              "assets/proj-tilt-monitoring-3.png",
            ],
          },
        ],
      },
    ],
  ],
  [
    "Electrical Installation Design",
    [
      {
        title: "Hospital Electrical Installation Design",
        meta: "Technical Drawing final project | Excel load calculation | Apr 2023 – Jun 2023",
        desc: "Designed the lighting, air-conditioning, and power-outlet installation for the ground floor and first floor of a four-level hospital building, as part of a two-person team project. Calculated the number of luminaire points per room from required illuminance, lumen output, light loss factor (0.8), and coefficient of utilization (0.5), and sized air conditioners from room area using a BTU/h load method, then selected luminaire and AC models for each room across more than 100 rooms. Produced the installation drawings at 1:200 scale together with an Excel load-calculation workbook.",
        tags: [
          "Lighting design",
          "AC load calculation",
          "Electrical drawing",
          "Excel",
        ],
        sets: [
          {
            label: "View documentation",
            caption:
              "Hospital electrical installation drawings (AC, lighting, outlets)",
            images: [
              "assets/proj-hospital-electrical-1.jpeg",
              "assets/proj-hospital-electrical-2.jpeg",
              "assets/proj-hospital-electrical-3.jpeg",
            ],
          },
        ],
      },
    ],
  ],
  [
    "Software Automation",
    [
      {
        title: "Automated Receipt-Processing Telegram Bot",
        meta: "n8n | AI vision | Google Sheets | Apr 2026",
        desc: "Developed an automated personal expense-tracking system using a Telegram bot, n8n, AI vision, Google Drive, and Google Sheets. The system analyzes receipt images with AI to extract transaction details such as merchant, date, total amount, and category, then sends the results back to Telegram for user verification. Once confirmed, receipts are stored automatically in Google Drive with sequential numbering, while expense records are organized by date and month in Google Sheets.",
        tags: ["n8n", "Telegram", "AI vision", "Google Drive"],
        sets: [
          {
            label: "View documentation",
            caption: "Automated Receipt-Processing Telegram Bot",
            images: [
              "assets/proj-n8n-automation-1.png",
              "assets/proj-n8n-automation-2.png",
              "assets/proj-n8n-automation-3.png",
            ],
          },
        ],
      },
    ],
  ],
];

const EDU_GROUPS = [
  [
    "Organizations",
    [
      [
        "Member",
        "Electrical Engineering Energy Student Association (KMTEE)",
        "",
      ],
      ["Member", "Engineering Music Community (Komustik)", ""],
      [
        "Member",
        "Communication Forum of the Indonesian Electrical Engineering Student Associations (FKHMEI), Region VII/VIII",
        "",
      ],
    ],
  ],
  [
    "Campus programs",
    [
      [
        "Participant",
        "University Student Creativity Program Proposal (PKM)",
        "",
      ],
      [
        "Participant",
        "Student Organization Capacity Strengthening Program (PPK Ormawa)",
        "",
      ],
      ["Participant", "Advancing Talent and Goal Wonderfully (ATGW) 2022", ""],
      ["Participant", "Electro and Engineering Zone (EEZ) Seminar 2022", ""],
      ["Participant", "Basic Leadership Training (LKTD) 2024", ""],
    ],
  ],
  [
    "Committees",
    [
      [
        "Committee Member",
        "Electrical Engineering Welcoming Night (Malam Keakraban Teknik Elektro), 2023",
        "Event division. Conceptualized and designed the complete event rundown together with the team.",
      ],
      [
        "Committee Member",
        "Integrated New Student Orientation (PTMB), Faculty of Engineering, 2024",
        "Creative division. Produced the PTMB teaser video, created the cheer from scratch (song choice, lyrics, and choreography), and designed the venue decoration.",
      ],
      [
        "Committee Chair",
        "Robovaganza Line Follower Competition 2025, Electrical Engineering Dept.",
        "Led the committee: defined the event concept, oversaw execution so it stayed true to that concept, and designed the competition track layout.",
      ],
    ],
  ],
  [
    "Competitions",
    [
      [
        "KRTMI 2023",
        "Regional Participant, Thematic Division, Indonesian Thematic Robot Contest (Kontes Robot Tematik Indonesia)",
        "Team member, Team SAURO. Contributed to building a 4WD mobile robot with a gripper that picks up objects and carries them from one point to another.",
      ],
      [
        "PNBRC 2026",
        "National Participant, Politeknik Negeri Bali Robot Competition",
        "Sumo robot category. Upgraded the campus's existing robot by replacing its motors with higher-torque units coupled through a belt drive, and fitting a blade at the front.",
      ],
    ],
  ],
];

const CERTS = [
  {
    title: "TOEFL",
    meta: "Score 533",
    caption: "TOEFL: Score 533",
    images: [
      "assets/cert-toefl-1.png",
      "assets/cert-toefl-2.jpeg",
      "assets/cert-toefl-3.jpeg",
    ],
  },
  {
    title: "KRTMI 2023",
    meta: "Regional",
    caption: "KRTMI 2023: Regional",
    images: [
      "assets/cert-krti-2023-1.png",
      "assets/cert-krti-2023-2.jpeg",
      "assets/cert-krti-2023-3.jpeg",
    ],
  },
  {
    title: "PNBRC 2026",
    meta: "National",
    caption: "PNBRC 2026: National",
    images: [
      "assets/cert-pnbrc-2026-1.png",
      "assets/cert-pnbrc-2026-2.jpeg",
      "assets/cert-pnbrc-2026-3.jpeg",
    ],
  },
  {
    title: "Certificate of Authorship",
    meta: "FORTEI-ICEE 2026",
    id: "ID 004/FORTEI-ICEE/9/2026",
    caption:
      "Certificate of Authorship, FORTEI-ICEE 2026 (ID 004/FORTEI-ICEE/9/2026)",
    images: [
      "assets/cert-fortei-authorship-1.jpeg",
      "assets/cert-fortei-authorship-2.jpeg",
    ],
  },
  {
    title: "Certificate of Presentation",
    meta: "FORTEI-ICEE 2026",
    id: "ID 015/FORTEI-ICEE/9/2026",
    caption:
      "Certificate of Presentation, FORTEI-ICEE 2026 (ID 015/FORTEI-ICEE/9/2026)",
    images: [
      "assets/cert-fortei-presentation-1.jpeg",
      "assets/cert-fortei-presentation-2.jpeg",
    ],
  },
  {
    title: "Data Analyst Bootcamp",
    meta: "Intermediate | Karirnex, Sep 2026",
    caption:
      "Data Analyst Bootcamp (Intermediate), Karirnex by PT Ebiz Karisma Internasional, Sep 2026",
    images: [
      "assets/cert-bootcamp-data-analyst-1.jpg",
      "assets/cert-bootcamp-data-analyst-2.jpg",
    ],
  },
  {
    title: "ATGW 2022",
    meta: "Campus program | Excellent",
    caption: "Advancing Talent and Goal Wonderfully (ATGW) 2022, Excellent",
    images: ["assets/campus-atgw-2022.jpg"],
  },
  {
    title: "EEZ Seminar 2022",
    meta: "Campus program | Participant",
    caption: "Electro and Engineering Zone (EEZ) Seminar 2022, Participant",
    images: ["assets/campus-eez-2022.jpg"],
  },
  {
    title: "LKTD 2024",
    meta: "Campus program | Participant",
    caption: "Basic Leadership Training (LKTD) 2024, Participant",
    images: ["assets/campus-lktd-2024.jpg"],
  },
];

const OK = new Set([
  "assets/campus-atgw-2022.jpg",
  "assets/campus-eez-2022.jpg",
  "assets/campus-lktd-2024.jpg",
  "assets/cert-bootcamp-data-analyst-1.jpg",
  "assets/cert-bootcamp-data-analyst-2.jpg",
  "assets/cert-fortei-authorship-1.jpeg",
  "assets/cert-fortei-presentation-1.jpeg",
  "assets/cert-krti-2023-1.png",
  "assets/cert-pnbrc-2026-1.png",
  "assets/cert-toefl-1.png",
  "assets/exp-ardi-widya-utama-1.jpeg",
  "assets/exp-ardi-widya-utama-2.jpeg",
  "assets/exp-ardi-widya-utama-3.jpeg",
  "assets/exp-basic-electronics-teacher-1.jpeg",
  "assets/exp-pln-internship-1.jpeg",
  "assets/exp-pln-internship-2.jpeg",
  "assets/paper-fortei-icee-2026-1.jpg",
  "assets/profile.jpg",
  "assets/proj-ac-chopper-1.jpeg",
  "assets/proj-ac-chopper-2.jpeg",
  "assets/proj-buck-converter-1.jpeg",
  "assets/proj-hbridge-inverter-1.jpeg",
  "assets/proj-hbridge-inverter-2.jpg",
  "assets/proj-hospital-electrical-1.jpeg",
  "assets/proj-hospital-electrical-2.jpeg",
  "assets/proj-hospital-electrical-3.jpeg",
  "assets/proj-inverter-3phase-1.jpeg",
  "assets/proj-n8n-automation-1.png",
  "assets/proj-n8n-automation-2.png",
  "assets/proj-n8n-automation-3.png",
  "assets/proj-plc-omron-1.jpeg",
  "assets/proj-plc-omron-2.jpeg",
  "assets/proj-pv-cleaning-1.jpeg",
  "assets/proj-pv-cleaning-2.jpeg",
  "assets/proj-scada-module-1.jpeg",
  "assets/proj-tilt-monitoring-1.jpg",
  "assets/proj-tilt-monitoring-2.jpg",
  "assets/proj-tilt-monitoring-3.png",
  "assets/proj-zeta-converter-1.jpeg",
  "assets/proj-zeta-converter-2.jpeg",
  "assets/proj-zeta-converter-3.jpeg",
]);
const $ = (id) => document.getElementById(id),
  $$ = (s) => [...document.querySelectorAll(s)];
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
const src = (p) => (OK.has(p) ? p : null);
const REDUCE = matchMedia("(prefers-reduced-motion:reduce)").matches;
const sets = {};
let n = 0;
const mk = (title, caption, images) => {
  const k = "s" + n++;
  sets[k] = { title, caption, ok: images.map(src).filter(Boolean) };
  return k;
};
const cover = (k, x = "") => {
  const s = sets[k];
  return s.ok.length
    ? `<button class="cover ch ${x}" type="button" data-view="${k}" aria-label="View photos: ${esc(s.title)}"><img src="${s.ok[0]}" alt="${esc(s.title)}" loading="lazy">${s.ok.length > 1 ? `<span class="ct">${s.ok.length} PHOTOS</span>` : ""}</button>`
    : "";
};
const dsc = (t) =>
  t.length > 230
    ? `<p class="dsc">${esc(t)}</p><button class="more" type="button">Read more</button>`
    : `<p>${esc(t)}</p>`;

/* stats */
const NP = PROJECT_GROUPS.reduce((a, g) => a + g[1].length, 0);
$("statg").innerHTML = [
  [3.59, 2, "GPA", "/ 4.00"],
  [1, 0, "IEEE conference paper", ""],
  [6, 0, "Lab courses assisted", ""],
  [NP, 0, "Projects built", ""],
  [EXPERIENCE.length, 0, "Roles & internships", ""],
]
  .map(
    ([v, d, l, s]) =>
      `<div class="stat rv"><b><span data-n="${v}" data-d="${d}">0</span>${s ? `<small> ${s}</small>` : ""}</b><span>${l}</span></div>`,
  )
  .join("");
$("mq").innerHTML = ((h) => h + h)(
  SKILLS.flatMap((g) => g[1])
    .filter((s) => s[1])
    .map((s) => `<span>${esc(s[0])}</span><span>✦</span>`)
    .join(""),
);

/* projects */
$("pf").innerHTML = [["All"], ...PROJECT_GROUPS.map((g) => [g[0]])]
  .map(
    ([g], i) =>
      `<button class="f" type="button" data-g="${esc(g)}" aria-pressed="${i == 0}">${esc(g)}</button>`,
  )
  .join("");
$("pg").innerHTML = PROJECT_GROUPS.flatMap(([g, items]) =>
  items.map((p) => {
    const ks = p.sets.map((s) =>
        mk(
          p.title +
            (p.sets.length > 1 ? ": " + s.label.replace("View ", "") : ""),
          s.caption,
          s.images,
        ),
      ),
      w = !!p.featured;
    const tx = `<div><span class="tag">${esc(w ? "Featured · " + g : g)}</span><h4>${esc(p.title)}</h4><p class="mono date" style="margin-bottom:8px">${esc(p.meta)}</p>${dsc(p.desc)}<div class="btns">${p.sets.length > 1 ? p.sets.map((s, i) => (sets[ks[i]].ok.length ? `<button class="btn sm o ch" type="button" data-view="${ks[i]}">${esc(s.label)}</button>` : "")).join("") : ""}${p.link ? `<a class="btn sm ch" href="${esc(p.link)}" target="_blank" rel="noopener">Watch demo</a>` : ""}</div><ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>`;
    return `<article class="card ch rv ${w ? "wide" : ""}" data-g="${esc(g)}" data-t>${w ? `<div>${cover(ks[0])}</div>` : cover(ks[0])}${tx}</article>`;
  }),
).join("");
$("pf").onclick = (e) => {
  const b = e.target.closest(".f");
  if (!b) return;
  $$("#pf .f").forEach((x) => x.setAttribute("aria-pressed", x === b));
  $$("#pg .card").forEach(
    (c) => (c.hidden = b.dataset.g !== "All" && c.dataset.g !== b.dataset.g),
  );
};

/* experience */
const kind = (x) =>
  /Teach/.test(x.title) ? "Teaching" : "Industry & research";
$("ef").innerHTML = ["All", "Industry & research", "Teaching"]
  .map(
    (g, i) =>
      `<button class="f" type="button" data-g="${esc(g)}" aria-pressed="${i == 0}">${esc(g)}</button>`,
  )
  .join("");
$("exp").innerHTML = EXPERIENCE.map((x) => {
  const s = x.sets[0],
    k = s ? mk(x.title, s.caption, s.images) : null,
    c = k ? cover(k) : "";
  return `<div class="tli rv" data-g="${esc(kind(x))}"><article class="card ch ${c ? "" : "nc"}" data-t><div><p class="mono date">${esc(x.date)}</p><h3>${esc(x.title)}</h3><p class="org">${esc(x.org)}</p><p>${esc(x.desc)}</p>${x.bullets.length ? `<ul class="bl">${x.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}</div>${c}</article></div>`;
}).join("");
$("ef").onclick = (e) => {
  const b = e.target.closest(".f");
  if (!b) return;
  $$("#ef .f").forEach((x) => x.setAttribute("aria-pressed", x === b));
  $$("#exp .tli").forEach(
    (c) => (c.hidden = b.dataset.g !== "All" && c.dataset.g !== b.dataset.g),
  );
};

$("act").innerHTML = EDU_GROUPS.map(
  ([g, it]) =>
    `<article class="card ch rv"><h3>${esc(g)}</h3><ul class="bl" style="margin-top:10px">${it
      .map(([r, w, nt, im]) => {
        const k = im ? mk(w, "Certificate: " + w, [im]) : null;
        return `<li><b style="color:var(--ink)">${esc(r)}</b>: ${esc(w)}${nt ? `<br>${esc(nt)}` : ""}${k && sets[k].ok.length ? `<br><button class="btn sm o ch" type="button" data-view="${k}" style="margin-top:8px">View certificate</button>` : ""}</li>`;
      })
      .join("")}</ul></article>`,
).join("");
$("certs").innerHTML = CERTS.map((c) => {
  const k = mk(c.title, c.caption, c.images);
  return `<article class="card ch rv">${cover(k, "contain")}<h4>${esc(c.title)}</h4>${c.meta ? `<p class="mono date" style="margin:0">${esc(c.meta)}</p>` : ""}${c.id ? `<p style="margin:4px 0 0">${esc(c.id)}</p>` : ""}</article>`;
}).join("");
$("sk").innerHTML = SKILLS.map(
  ([g, l]) =>
    `<article class="card ch rv"><h3>${esc(g)}</h3><ul class="chips" style="margin-top:12px">${l.map(([t, h]) => `<li><button class="chip ${h ? "hl" : ""}" type="button" aria-pressed="false" data-kw="${esc(t)}">${esc(t)}</button></li>`).join("")}</ul></article>`,
).join("");

/* read more */
document.addEventListener("click", (e) => {
  const m = e.target.closest(".more");
  if (!m) return;
  const p = m.previousElementSibling,
    o = p.classList.toggle("open");
  m.textContent = o ? "Show less" : "Read more";
});

/* skill filter */
(() => {
  const STOP = new Set(
    "and via the for with system systems control design simulation programming electronics motor motors professional internet things tools detail schematic integration technical public".split(
      " ",
    ),
  );
  let ms = [],
    pos = -1,
    act = null;
  const tg = () => $$("#pg .card,#exp .card");
  const clear = () => {
    tg().forEach((t) => t.classList.remove("dim", "hit"));
    if (act) act.setAttribute("aria-pressed", "false");
    act = null;
    ms = [];
    pos = -1;
    $("fb").hidden = true;
  };
  const go = () => {
    if (ms.length) {
      pos = (pos + 1) % ms.length;
      ms[pos].scrollIntoView({
        behavior: REDUCE ? "auto" : "smooth",
        block: "center",
      });
      $("fbt").textContent =
        `${act.dataset.kw}: ${pos + 1} of ${ms.length} matches`;
    }
  };
  $("sk").onclick = (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    if (b === act) return clear();
    clear();
    act = b;
    b.setAttribute("aria-pressed", "true");
    const tk = b.dataset.kw
      .toLowerCase()
      .split(/[^a-z0-9+!]+/)
      .filter((w) => w.length > 1 && !STOP.has(w));
    $$("#pf .f")[0].click();
    $$("#ef .f")[0].click();
    tg().forEach((t) => {
      const tx = t.textContent.toLowerCase(),
        ok = tk.some((k) =>
          new RegExp(
            "(^|[^a-z0-9])" +
              k.replace(/[.*+?^${}()|[\]\\!]/g, "\\$&") +
              "(?![a-z0-9])",
          ).test(tx),
        );
      t.classList.toggle("hit", ok);
      t.classList.toggle("dim", !ok);
      if (ok) ms.push(t);
    });
    $("fb").hidden = false;
    if (!ms.length) {
      $("fbt").textContent = "No direct matches for " + b.dataset.kw;
    } else {
      pos = -1;
      go();
    }
  };
  $("fbn").onclick = go;
  $("fbc").onclick = clear;
})();

/* viewer */
const dlg = $("viewer");
let cur,
  idx = 0;
function show(i) {
  const l = cur.ok;
  idx = (i + l.length) % l.length;
  $("vi").innerHTML =
    `<img src="${l[idx]}" alt="${esc(cur.title)}, photo ${idx + 1}">`;
  $("vc").textContent = l.length > 1 ? `${idx + 1} / ${l.length}` : "";
  $("vp").hidden = $("vn").hidden = l.length < 2;
  $("vth").innerHTML =
    l.length > 1
      ? l
          .map(
            (s, k) =>
              `<button type="button" data-k="${k}" aria-label="Photo ${k + 1}" aria-current="${k === idx}"><img src="${s}" alt=""></button>`,
          )
          .join("")
      : "";
}
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-view]");
  if (!b) return;
  cur = sets[b.dataset.view];
  $("vt").textContent = cur.caption;
  show(0);
  dlg.showModal();
});
$("vp").onclick = () => show(idx - 1);
$("vn").onclick = () => show(idx + 1);
$("vx").onclick = () => dlg.close();
$("vth").onclick = (e) => {
  const b = e.target.closest("[data-k]");
  if (b) show(+b.dataset.k);
};
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});
dlg.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") show(idx - 1);
  if (e.key === "ArrowRight") show(idx + 1);
});

/* reveal, counters, meter */
const count = (el) => {
  const v = +el.dataset.n,
    d = +el.dataset.d;
  if (REDUCE) {
    el.textContent = v.toFixed(d);
    return;
  }
  const t0 = performance.now();
  (function f(t) {
    const k = Math.min((t - t0) / 1400, 1);
    el.textContent = (v * (1 - Math.pow(1 - k, 3))).toFixed(d);
    if (k < 1) requestAnimationFrame(f);
  })(t0);
};
const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      const t = e.target;
      t.classList.add("in");
      t.querySelectorAll("[data-n]").forEach(count);
      t.querySelectorAll("[data-w]").forEach(
        (m) => (m.style.width = m.dataset.w + "%"),
      );
      io.unobserve(t);
    }),
  { threshold: 0.15 },
);
$$(".rv").forEach((r) => io.observe(r));

/* scrollspy + progress */
const links = $$("#menu a"),
  secs = links.map((a) => $(a.getAttribute("href").slice(1)));
const sp = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        links.forEach((a) =>
          a.classList.toggle(
            "on",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
secs.forEach((s) => sp.observe(s));
addEventListener(
  "scroll",
  () => {
    const h = document.documentElement;
    $("prog").style.width =
      (scrollY / (h.scrollHeight - innerHeight)) * 100 + "%";
  },
  { passive: true },
);

/* hero: rotating role + parallax */
const W = [
  "power converters",
  "embedded systems",
  "PLC & SCADA control",
  "IoT monitoring",
];
let wi = 0;
if (!REDUCE)
  setInterval(() => {
    const r = $("rw");
    r.style.opacity = 0;
    setTimeout(() => {
      wi = (wi + 1) % W.length;
      r.textContent = W[wi];
      r.style.opacity = 1;
    }, 300);
  }, 2400);
if (matchMedia("(hover:hover) and (pointer:fine)").matches && !REDUCE) {
  const h = $("home"),
    x = $("hex");
  h.addEventListener("pointermove", (e) => {
    const r = x.getBoundingClientRect(),
      px = (e.clientX - r.left) / r.width - 0.5,
      py = (e.clientY - r.top) / r.height - 0.5;
    x.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(1)}deg) rotateY(${(px * 10).toFixed(1)}deg)`;
  });
  h.addEventListener("pointerleave", () => (x.style.transform = ""));
  document.addEventListener("pointermove", (e) => {
    const c = e.target.closest && e.target.closest("#pg .card:not(.wide)");
    $$("#pg .card").forEach((k) => (k.style.transform = ""));
    if (c) {
      const r = c.getBoundingClientRect();
      c.style.transform = `perspective(800px) translateY(-4px) rotateX(${(-((e.clientY - r.top) / r.height - 0.5) * 4).toFixed(1)}deg) rotateY(${(((e.clientX - r.left) / r.width - 0.5) * 5).toFixed(1)}deg)`;
    }
  });
}

/* theme */
const root = document.documentElement,
  eff = () =>
    root.dataset.theme ||
    (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
const paint = () =>
  ($("tt").textContent = eff() === "dark" ? "☀ Light" : "☾ Dark");
try {
  const s = localStorage.getItem("theme");
  if (s) root.dataset.theme = s;
} catch (_) {}
$("tt").onclick = () => {
  const t = eff() === "dark" ? "light" : "dark";
  root.dataset.theme = t;
  try {
    localStorage.setItem("theme", t);
  } catch (_) {}
  paint();
};
paint();
