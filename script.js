/* =====================================================================
   DATA: edit content here. Image paths are the same ones used by the
   previous site (folder "assets/", case-sensitive on GitHub Pages).
   Images that do not exist yet are skipped automatically.
   ===================================================================== */
const SKILLS = [
  ["Power Electronics & Motor Control", [["DC and AC Converter",1],["Interleaved Buck Converter"],["Inverter (Multilevel)"],["Electric Motors",1],["Motor Control via VSD",1],["DC Motor"],["BLDC"],["3-phase induction"]]],
  ["Embedded Systems & Control", [["Microcontrollers",1],["STM32F4"],["Arduino / Arduino IDE",1],["AVR (Atmega8535)"],["C / C++ (CodeVisionAVR)"],["Sensor Integration",1]]],
  ["Design, Simulation & Hardware", [["Schematic and PCB Design",1],["TARGET 3001!"],["PSIM Simulation",1],["Proteus 8 Professional"],["Soldering",1],["Troubleshooting (wiring, parameters)",1],["Oscilloscopes & Multimeters"]]],
  ["Industrial Automation & Robotics", [["PLC Programming",1],["Omron PLC"],["SCADA / HMI",1],["Modbus"],["VSD (Schneider)"],["Pneumatics"],["Robotics (line-following robots)",1]]],
  ["IoT & Telecommunications", [["Internet of Things (IoT)",1],["ESP8266 / NodeMCU"],["Real-time Data Logging"],["Telecommunications",1],["Filter Design (LPF/HPF/BPF/BSF)"],["Amplitude Modulation"]]],
  ["Professional & Tools", [["Technical Documentation",1],["Public Speaking (conference presentation)",1],["Data Analysis (Dashboard)",1],["n8n (Workflow Automation)",1],["Telegram Bot"],["Google Sheets / Google Drive"]]]
];

const EXPERIENCE = [
  { date:"Jul 2026–Aug 2026", title:"Assistant to Consultant", org:"PT Ardi Widya Utama, Jakarta (Hybrid)",
    desc:"Assisted a university lecturer serving as consultant to the Ministry of Transportation (Kementerian Perhubungan) on an Operating System document for the state-owned Kereta Ukur (railway measurement train).",
    bullets:["Took meeting notes during coordination meetings with the Ministry to keep follow-up items documented, and proofread the report for accuracy.","Completed the technical documentation by sourcing and inserting missing train-component images into the report."],
    sets:[{ caption:"Assistant to Consultant, PT Ardi Widya Utama", images:["assets/exp-ardi-widya-utama-1.jpeg","assets/exp-ardi-widya-utama-2.jpeg","assets/exp-ardi-widya-utama-3.jpeg"] }] },
  { date:"Jul 2025–Aug 2026", title:"Basic Electronics Teacher", org:"SMA Tri Tunggal Semarang, Semarang",
    desc:"Delivered a progressive Basic Electronics training curriculum to Grades 10–12, covering circuit theory, electronic components, digital logic, Arduino programming, sensors and actuators, and IoT systems using NodeMCU (ESP8266).",
    bullets:["Guided hands-on projects, including logic circuits, line-following robots, automated plant-watering systems, and IoT-based monitoring devices."],
    sets:[{ caption:"Basic Electronics Teacher, SMA Tri Tunggal Semarang", images:["assets/exp-basic-electronics-teacher-1.jpeg","assets/exp-basic-electronics-teacher-2.jpeg","assets/exp-basic-electronics-teacher-3.jpeg"] }] },
  { date:"Mar 2026–Jun 2026", title:"Teaching Assistant: Electric Drives (Practicum)", org:"UNIKA Soegijapranata, Semarang",
    desc:"Guided simulation and hardware sessions on DC motor speed control (Buck Chopper), BLDC commutation, and three-phase induction motor control via VVVF/VSD.",
    bullets:["Correlated PSIM simulation results with hardware measurements to validate motor drive performance.","Troubleshot wiring, parameter, and control-signal issues; evaluated lab reports and gave technical feedback."], sets:[] },
  { date:"Sep–Dec 2025 and Sep–Dec 2024", title:"Teaching Assistant: Fundamentals of Electrical Engineering (Practicum)", org:"UNIKA Soegijapranata, Semarang",
    desc:"Reinforced core circuit theory, then guided students into Arduino-based sensor/actuator integration (DC and stepper motors), hardware simulation in Proteus 8, and schematic/PCB design in TARGET 3001!.",
    bullets:["Trained students on lab instrumentation: power supplies, oscilloscopes, multimeters, and soldering equipment."], sets:[] },
  { date:"Sep 2025–Dec 2025", title:"Teaching Assistant: Microprocessors and Microcontrollers (Practicum)", org:"UNIKA Soegijapranata, Semarang",
    desc:"Supported lab sessions on microcontroller applications using Arduino (Arduino IDE) and Atmega8535 (CodeVisionAVR), and reviewed practicum reports for grading.", bullets:[], sets:[] },
  { date:"Mar 2025–Jun 2025", title:"Teaching Assistant: Fundamentals of Telecommunications (Practicum)", org:"UNIKA Soegijapranata, Semarang",
    desc:"Taught filter circuit design (LPF, HPF, BPF, BSF), amplitude modulation (AM-DSB-SC, AM-SSB-C), and voltage-to-frequency / frequency-to-voltage signal conversion.", bullets:[], sets:[] },
  { date:"Feb 2025–Mar 2025", title:"Operational Specialist Internship, Operation Facility Division", org:"PT PLN (Persero) UP2B DKI Jakarta and Banten, East Jakarta",
    desc:"Assisted field mentors during on-site substation visits for network maintenance and upgrades at a regional load dispatch center.",
    bullets:["Gained hands-on exposure to an IT WAN network migration project and received an introduction to SCADA systems from the telecommunications and SCADA teams."],
    sets:[{ caption:"Internship, PT PLN (Persero) UP2B DKI Jakarta and Banten", images:["assets/exp-pln-internship-1.jpeg","assets/exp-pln-internship-2.jpeg","assets/exp-pln-internship-3.jpeg"] }] },
  { date:"Sep 2024–Dec 2024", title:"Teaching Assistant: Electrical Measurements and Circuits (Practicum)", org:"UNIKA Soegijapranata, Semarang",
    desc:"Guided measurement exercises on RLC circuit behavior in transient and steady state, 3-phase AC Star-Delta configurations, and transformer polarity.",
    bullets:["Trained students on oscilloscopes, multimeters, and AFGs."], sets:[] }
];

const PROJECT_GROUPS = [
  ["Power Electronics & Research", [
    { title:"Interleaved Buck Converter for Generator Excitation", featured:true,
      meta:"FORTEI-ICEE 2026, IEEE conference, Makassar | 24–26 Sep 2026",
      desc:"Designed a three-leg interleaved buck converter topology for enhanced current quality in synchronous generator excitation applications, introducing a single shared current sensor across all three legs instead of a dedicated sensor per leg to simplify the feedback circuit and reduce component count. Authored and presented the paper at FORTEI-ICEE 2026 (FORTEI x IEEE Indonesia Section), Politeknik Negeri Ujung Pandang, Makassar.",
      tags:["Interleaved buck","Generator excitation","IEEE paper"],
      sets:[
        { label:"View prototype photos", caption:"Interleaved buck converter prototype", images:["assets/proj-buck-converter-1.jpeg","assets/proj-buck-converter-2.jpeg","assets/proj-buck-converter-3.jpeg"] },
        { label:"View accepted paper", caption:"FORTEI-ICEE 2026: accepted paper", images:["assets/paper-fortei-icee-2026-1.jpg","assets/paper-fortei-icee-2026-2.jpeg","assets/paper-fortei-icee-2026-3.jpeg"] }
      ] },
    { title:"Five-Level Single-Phase Buck-Boost Inverter", featured:true, meta:"Multi-cell H-bridge inverter | Jun 2026 – Sep 2026",
      desc:"Designed and built a five-level single-phase buck-boost inverter prototype using seven active power switches, with the topology and switching sequences simulated in PSIM and converted into a lookup table for real-time control. Control started on an Arduino Mega and was later migrated to an STM32F4 for faster processing and more flexible switching signal generation, producing a stable multilevel AC output.",
      tags:["Arduino Mega","STM32F4","PSIM"],
      sets:[{ label:"View documentation", caption:"Multi-cell H-bridge inverter", images:["assets/proj-hbridge-inverter-1.jpeg","assets/proj-hbridge-inverter-2.jpg","assets/proj-hbridge-inverter-3.jpeg"] }] }
  ]],
  ["Industrial Automation & Control", [
    { title:"PLC Learning Module: Pneumatics & Motor Control", meta:"Omron PLC | Nov 2024 – Dec 2024",
      desc:"Built a PLC learning module for hands-on student training, consisting of a pneumatic system module and a forward-reverse 3-phase motor control module. The components of each module were tested before integration, and the module is equipped with push buttons and an emergency stop button.",
      tags:["Omron PLC","Pneumatics","3-phase motor"],
      sets:[{ label:"View documentation", caption:"PLC learning module (Omron)", images:["assets/proj-plc-omron-1.jpeg","assets/proj-plc-omron-2.jpeg","assets/proj-plc-omron-3.jpeg"] }] },
    { title:"SCADA Learning Module", meta:"Modbus | Schneider VSD | May 2025 – Jun 2025",
      desc:"Built a SCADA learning module for hands-on training, verifying each component before integrating a sensor module (Renatta power meter via Modbus communication) and an actuator module (pilot lamps and a Schneider VSD). The module is equipped with push buttons and a system-wide emergency stop button.",
      tags:["Modbus","Schneider VSD","SCADA"],
      sets:[{ label:"View documentation", caption:"SCADA learning module", images:["assets/proj-scada-module-1.jpeg","assets/proj-scada-module-2.jpeg","assets/proj-scada-module-3.jpeg"] }] }
  ]],
  ["IoT & Monitoring Systems", [
    { title:"Automatic Solar Panel Cleaning System", meta:"IoT control | Nov 2025",
      desc:"Developed an Automatic Solar Panel (PV) Cleaning System with an IoT-based control system, designed to remove dust and fallen leaves from the panel surface using pressurized water sprayed through nozzles to restore panel efficiency and electrical power output.",
      tags:["IoT","Photovoltaic","Pressurized water"],
      sets:[{ label:"View documentation", caption:"Automatic PV cleaning system", images:["assets/proj-pv-cleaning-1.jpeg","assets/proj-pv-cleaning-2.jpeg","assets/proj-pv-cleaning-3.jpeg"] }] },
    { title:"IoT Structural Tilt Monitoring Dashboard", meta:"Real-time dashboard | Jan 2026 – Mar 2026",
      desc:"Developed an IoT-based structural tilt monitoring system to measure the tilt angle of the UNIKA Sporthall building, using two MPU9250 sensors placed at separate points (one on a level reference surface and one at the monitored point) to calculate the relative tilt angle in real time. Readings are logged to an SD card and synced to a Google Spreadsheet via a live dashboard.",
      tags:["MPU9250","SD card logging","Google Sheets"],
      sets:[{ label:"View documentation", caption:"IoT tilt monitoring dashboard", images:["assets/proj-tilt-monitoring-1.jpg","assets/proj-tilt-monitoring-2.jpg","assets/proj-tilt-monitoring-3.png"] }] }
  ]],
  ["Software Automation", [
    { title:"Automated Receipt-Processing Telegram Bot", meta:"n8n | AI vision | Google Sheets | Apr 2026",
      desc:"Developed an automated personal expense-tracking system using a Telegram bot, n8n, AI vision, Google Drive, and Google Sheets. The system analyzes receipt images with AI to extract transaction details such as merchant, date, total amount, and category, then sends the results back to Telegram for user verification. Once confirmed, receipts are stored automatically in Google Drive with sequential numbering, while expense records are organized by date and month in Google Sheets.",
      tags:["n8n","Telegram","AI vision","Google Drive"],
      sets:[{ label:"View documentation", caption:"Automated Receipt-Processing Telegram Bot", images:["assets/proj-n8n-automation-1.png","assets/proj-n8n-automation-2.png","assets/proj-n8n-automation-3.png"] }] }
  ]]
];

const EDU_GROUPS = [
  ["Organizations", [
    ["Member","Electrical Engineering Energy Student Association (KMTEE)",""],
    ["Member","Engineering Music Community (Komustik)",""]
  ]],
  ["Campus programs", [
    ["Participant","University Student Creativity Program Proposal (PKM)",""],
    ["Participant","Student Organization Capacity Strengthening Program (PPK Ormawa)",""]
  ]],
  ["Committees", [
    ["Committee Member","Electrical Engineering Welcoming Night (Malam Keakraban Teknik Elektro), 2023","Event division. Conceptualized and designed the complete event rundown together with the team."],
    ["Committee Member","Integrated New Student Orientation (PTMB), Faculty of Engineering, 2024","Creative division. Produced the PTMB teaser video, created the cheer from scratch (song choice, lyrics, and choreography), and designed the venue decoration."],
    ["Committee Chair","Robovaganza Line Follower Competition 2025, Electrical Engineering Dept.","Led the committee: defined the event concept, oversaw execution so it stayed true to that concept, and designed the competition track layout."]
  ]],
  ["Competitions", [
    ["KRTMI 2023","Regional Participant, Thematic Division, Indonesian Thematic Robot Contest (Kontes Robot Tematik Indonesia)","Team member, Team SAURO. Contributed to building a 4WD mobile robot with a gripper that picks up objects and carries them from one point to another."],
    ["PNBRC 2026","National Participant, Politeknik Negeri Bali Robot Competition","Sumo robot category. Upgraded the campus's existing robot by replacing its motors with higher-torque units coupled through a belt drive, and fitting a blade at the front."]
  ]]
];

const CERTS = [
  { title:"TOEFL", meta:"Score 533", caption:"TOEFL: Score 533", images:["assets/cert-toefl-1.png","assets/cert-toefl-2.jpeg","assets/cert-toefl-3.jpeg"] },
  { title:"KRTMI 2023", meta:"Regional", caption:"KRTMI 2023: Regional", images:["assets/cert-krti-2023-1.png","assets/cert-krti-2023-2.jpeg","assets/cert-krti-2023-3.jpeg"] },
  { title:"PNBRC 2026", meta:"National", caption:"PNBRC 2026: National", images:["assets/cert-pnbrc-2026-1.png","assets/cert-pnbrc-2026-2.jpeg","assets/cert-pnbrc-2026-3.jpeg"] },
  { title:"Certificate of Authorship", meta:"FORTEI-ICEE 2026", id:"ID 004/FORTEI-ICEE/9/2026", caption:"Certificate of Authorship, FORTEI-ICEE 2026 (ID 004/FORTEI-ICEE/9/2026)", images:["assets/cert-fortei-authorship-1.jpeg","assets/cert-fortei-authorship-2.jpeg"] },
  { title:"Certificate of Presentation", meta:"FORTEI-ICEE 2026", id:"ID 015/FORTEI-ICEE/9/2026", caption:"Certificate of Presentation, FORTEI-ICEE 2026 (ID 015/FORTEI-ICEE/9/2026)", images:["assets/cert-fortei-presentation-1.jpeg","assets/cert-fortei-presentation-2.jpeg"] },
  { title:"Data Analyst Bootcamp", meta:"Intermediate | Karirnex, Sep 2026", caption:"Data Analyst Bootcamp (Intermediate), Karirnex by PT Ebiz Karisma Internasional, Sep 2026", images:["assets/cert-bootcamp-data-analyst-1.jpg","assets/cert-bootcamp-data-analyst-2.jpg"] }
];
