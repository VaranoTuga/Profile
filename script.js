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
  ["Electrical Installation Design", [
    { title:"Hospital Electrical Installation Design", meta:"Technical Drawing final project | Excel load calculation | Apr 2023 – Jun 2023",
      desc:"Designed the lighting, air-conditioning, and power-outlet installation for the ground floor and first floor of a four-level hospital building, as part of a two-person team project. Calculated the number of luminaire points per room from required illuminance, lumen output, light loss factor (0.8), and coefficient of utilization (0.5), and sized air conditioners from room area using a BTU/h load method, then selected luminaire and AC models for each room across more than 100 rooms. Produced the installation drawings at 1:200 scale together with an Excel load-calculation workbook.",
      tags:[\"Lighting design\",\"AC load calculation\",\"Electrical drawing\",\"Excel\"],
      sets:[{ label:\"View documentation\", caption:\"Hospital electrical installation drawings (AC, lighting, outlets)\", images:[\"assets/proj-hospital-electrical-1.jpeg\",\"assets/proj-hospital-electrical-2.jpeg\",\"assets/proj-hospital-electrical-3.jpeg\"] }] }
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

/* =====================================================================
   Helpers: probe which images really exist, then use only those
   ===================================================================== */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const probe = src => new Promise(res => { const i = new Image(); i.onload = () => res(src); i.onerror = () => res(null); i.src = src; });
const ph = (paths, big) => `<div class="ph" role="img" aria-label="Photo not added yet"><span>Add photos here</span><code>${esc(paths[0])}</code>${big && paths.length > 1 ? `<small>and ${paths.length - 1} more: -2, -3</small>` : ""}</div>`;

const sets = {};      // key -> { title, caption, images, ok }
let n = 0;
function makeSet(title, caption, images) {
  const key = "s" + (n++);
  sets[key] = { title, caption, images, ok: [] };
  return key;
}
const coverBtn = (key, extra = "") => `<button class="cover ${extra}" type="button" data-view="${key}" data-cover aria-label="View photos: ${esc(sets[key].title)}">${ph(sets[key].images)}</button>`;

async function hydrate() {
  await Promise.all(Object.entries(sets).map(async ([key, s]) => {
    s.ok = (await Promise.all(s.images.map(probe))).filter(Boolean);
    document.querySelectorAll(`[data-cover][data-view="${key}"]`).forEach(el => {
      if (s.ok.length) el.innerHTML = `<img src="${esc(s.ok[0])}" alt="${esc(s.title)}" loading="lazy">` + (s.ok.length > 1 ? `<span class="count">${s.ok.length} photos</span>` : "");
    });
    document.querySelectorAll(`[data-count][data-view="${key}"]`).forEach(el => {
      el.textContent = s.ok.length ? ` (${s.ok.length} ${s.ok.length === 1 ? "photo" : "photos"})` : "";
    });
  }));
}

/* =====================================================================
   Rendering
   ===================================================================== */
$("skills-grid").innerHTML = SKILLS.map(([name, list]) => `
  <div class="skill-group"><h3>${esc(name)}</h3>
  <ul class="chips">${list.map(([t, hl]) => `<li class="${hl ? "hl" : ""}"><button type="button" class="chip-btn" aria-pressed="false" data-kw="${esc(t)}">${esc(t)}</button></li>`).join("")}</ul></div>`).join("");

$("exp-list").innerHTML = EXPERIENCE.map(x => {
  const s = x.sets[0];
  const key = s ? makeSet(x.title, s.caption, s.images) : null;
  return `<li class="tl-item">
    <p class="tl-date">${esc(x.date)}</p>
    <div class="tl-card ${key ? "" : "no-cover"}">
      <div class="card-body">
        <h3>${esc(x.title)}</h3>
        <p class="org">${esc(x.org)}</p>
        <p class="desc">${esc(x.desc)}</p>
        ${x.bullets.length ? `<ul>${x.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
      </div>
      ${key ? coverBtn(key) : ""}
    </div>
  </li>`;
}).join("");

$("projects-root").innerHTML = PROJECT_GROUPS.map(([group, items]) => `
  <div class="proj-group">
    <h3 class="sub">${esc(group)}</h3>
    <div class="projects">${items.map(p => {
      const keys = p.sets.map(s => makeSet(p.title + (p.sets.length > 1 ? `: ${s.label.replace("View ", "")}` : ""), s.caption, s.images));
      return `<article class="card ${p.featured || items.length === 1 ? "featured" : ""}">
        ${coverBtn(keys[0])}
        <div class="card-body">
          <h4>${esc(p.title)}</h4>
          <p class="meta">${esc(p.meta)}</p>
          <p class="desc">${esc(p.desc)}</p>
          ${p.sets.length > 1 ? `<div class="set-btns">${p.sets.map((s, i) => `<button class="set-btn" type="button" data-view="${keys[i]}">${esc(s.label)}<span data-count data-view="${keys[i]}"></span></button>`).join("")}</div>` : ""}
          <ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
        </div>
      </article>`;
    }).join("")}</div>
  </div>`).join("");

$("edu-grid").innerHTML = EDU_GROUPS.map(([g, items]) => `
  <div class="edu-group"><h3>${esc(g)}</h3>
  <ul>${items.map(([role, what, note]) => `<li><b>${esc(role)}</b>: ${esc(what)}${note ? `<span>${esc(note)}</span>` : ""}</li>`).join("")}</ul></div>`).join("");

$("cert-grid").innerHTML = CERTS.map(c => {
  const key = makeSet(c.title, c.caption, c.images);
  return `<article class="card">
    ${coverBtn(key, "contain")}
    <div class="card-body">
      <h4>${esc(c.title)}</h4>
      ${c.meta ? `<p class="meta">${esc(c.meta)}</p>` : ""}
      ${c.id ? `<p class="org">${esc(c.id)}</p>` : ""}
    </div>
  </article>`;
}).join("");

hydrate();

/* =====================================================================
   Photo viewer (windowed dialog)
   ===================================================================== */
const dlg = $("viewer");
let cur = null, idx = 0, opener = null;

function show(i) {
  const list = cur.ok;
  $("v-img").classList.remove("zoom");
  if (!list.length) {
    $("v-img").innerHTML = `<div class="ph"><span>Photos not added yet</span>${cur.images.map(p => `<code>${esc(p)}</code>`).join("")}</div>`;
    $("v-count").textContent = ""; $("v-prev").hidden = $("v-next").hidden = true; $("v-thumbs").innerHTML = "";
    return;
  }
  idx = (i + list.length) % list.length;
  $("v-img").innerHTML = `<img src="${esc(list[idx])}" alt="${esc(cur.title)}, photo ${idx + 1}">`;
  $("v-count").textContent = list.length > 1 ? `${idx + 1} / ${list.length}` : "";
  $("v-prev").hidden = $("v-next").hidden = list.length < 2;
  $("v-thumbs").innerHTML = list.length > 1 ? list.map((s, k) => `<button type="button" data-k="${k}" aria-label="Photo ${k + 1}" aria-current="${k === idx}"><img src="${esc(s)}" alt=""></button>`).join("") : "";
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-view]");
  if (!b || b.hasAttribute("data-count")) return;
  cur = sets[b.dataset.view]; opener = b;
  $("v-title").textContent = cur.caption;
  show(0);
  if (!dlg.open) dlg.showModal();
});
$("v-prev").onclick = () => show(idx - 1);
$("v-next").onclick = () => show(idx + 1);
$("v-close").onclick = () => dlg.close();
$("v-thumbs").addEventListener("click", e => { const b = e.target.closest("[data-k]"); if (b) show(Number(b.dataset.k)); });
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("close", () => { if (opener) opener.focus(); });
dlg.addEventListener("keydown", e => {
  if (!cur || cur.ok.length < 2) return;
  if (e.key === "ArrowLeft") show(idx - 1);
  if (e.key === "ArrowRight") show(idx + 1);
});

/* =====================================================================
   Theme toggle
   ===================================================================== */
const root = document.documentElement;
const effective = () => root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
function paintToggle() {
  const next = effective() === "dark" ? "Light" : "Dark";
  $("theme-label").textContent = next;
  $("theme").setAttribute("aria-label", `Switch to ${next.toLowerCase()} theme`);
}
try { const saved = localStorage.getItem("theme"); if (saved) root.dataset.theme = saved; } catch (_) {}
$("theme").onclick = () => {
  const t = effective() === "dark" ? "light" : "dark";
  root.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch (_) {}
  paintToggle();
};
paintToggle();

/* =====================================================================
   Interaction setup
   ===================================================================== */
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = matchMedia("(hover: hover) and (pointer: fine)").matches;

/* =====================================================================
   Hero: a board whose pads are clickable. A pulse travels from the chip
   to the pad, then the page jumps to the matching skill group.
   ===================================================================== */
(function board() {
  const L = [["Power",175,60,0],["MCU",205,160,1],["PLC",255,300,3],["SCADA",285,400,3]];
  const R = [["IoT",175,60,4],["PCB",205,160,2],["PSIM",255,300,2],["Modbus",285,400,3]];
  const cx0 = 240, cx1 = 400;
  let nodes = "", pins = "", d = 0;
  const node = (name, t, path, cx, ly, anchor, lx) => `
    <g class="node" tabindex="0" role="link" data-t="${t}" aria-label="${name}: jump to ${esc(SKILLS[t][0])}">
      <path class="hit" d="${path}"/>
      <path class="trace" pathLength="1" style="animation-delay:${(d++) * .15}s" d="${path}"/>
      <circle class="pad" cx="${cx}" cy="${ly[0]}" r="10"/><circle class="hole" cx="${cx}" cy="${ly[0]}" r="4"/>
      <text class="silk" ${anchor ? `text-anchor="${anchor}"` : ""} x="${lx}" y="${ly[1]}">${name}</text>
    </g>`;
  L.forEach(([name, y0, ty, t]) => {
    const dx = Math.abs(ty - y0), x1 = cx0 - 40, x2 = x1 - dx;
    nodes += node(name, t, `M${cx0} ${y0}H${x1}L${x2} ${ty}H44`, 40, [ty, ty + (ty < y0 ? -14 : 28)], "", 56);
    pins += `<rect class="pin" x="${cx0 - 14}" y="${y0 - 5}" width="14" height="10" rx="1"/>`;
  });
  R.forEach(([name, y0, ty, t]) => {
    const dx = Math.abs(ty - y0), x1 = cx1 + 40, x2 = x1 + dx;
    nodes += node(name, t, `M${cx1} ${y0}H${x1}L${x2} ${ty}H596`, 600, [ty, ty + (ty < y0 ? -14 : 28)], "end", 584);
    pins += `<rect class="pin" x="${cx1}" y="${y0 - 5}" width="14" height="10" rx="1"/>`;
  });
  $("board").innerHTML = `
  <svg viewBox="0 0 640 460" focusable="false" aria-label="Circuit board diagram. Each pad links to a skill group.">
    ${nodes}
    <rect class="chip" x="${cx0}" y="130" width="160" height="200" rx="6"/>
    ${pins}
    <circle class="dot1" cx="${cx0 + 20}" cy="150" r="5"/>
    <text class="silk-big" x="320" y="248" text-anchor="middle">V.T</text>
    <text class="silk" x="320" y="276" text-anchor="middle">S1-EE 2026</text>
    ${REDUCE ? "" : `<circle class="dot1" r="5"><animateMotion dur="4.5s" begin="2.2s" repeatCount="indefinite" path="M${cx0} 175H200L85 60H44"/></circle>`}
  </svg>
  <p class="board-hint">Click a pad to jump to related skills</p>`;

  const svg = $("board").querySelector("svg");
  function jump(t) {
    const g = $("skills-grid").children[t];
    g.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth", block: "center" });
    g.classList.add("flash");
    setTimeout(() => g.classList.remove("flash"), 1900);
  }
  function activate(nd) {
    const t = Number(nd.dataset.t);
    if (REDUCE) return jump(t);
    const p = nd.querySelector(".trace"), len = p.getTotalLength();
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("r", 8); c.setAttribute("class", "pulse");
    svg.appendChild(c);
    const t0 = performance.now(), dur = 650;
    (function step(now) {
      const k = Math.min((now - t0) / dur, 1), pt = p.getPointAtLength(len * k);
      c.setAttribute("cx", pt.x); c.setAttribute("cy", pt.y);
      if (k < 1) return requestAnimationFrame(step);
      c.remove();
      nd.classList.add("lit"); setTimeout(() => nd.classList.remove("lit"), 900);
      jump(t);
    })(t0);
  }
  svg.addEventListener("click", e => { const n = e.target.closest(".node"); if (n) activate(n); });
  svg.addEventListener("keydown", e => {
    const n = e.target.closest(".node");
    if (n && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); activate(n); }
  });

  // Board follows the mouse: soft tilt plus a copper light under the cursor
  if (FINE && !REDUCE) {
    const box = $("board"), hero = document.querySelector(".hero");
    hero.addEventListener("pointermove", e => {
      const r = box.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      svg.style.transform = `perspective(900px) rotateX(${(-py * 9).toFixed(2)}deg) rotateY(${(px * 12).toFixed(2)}deg)`;
      box.style.setProperty("--bx", ((px + .5) * 100).toFixed(1) + "%");
      box.style.setProperty("--by", ((py + .5) * 100).toFixed(1) + "%");
    });
    hero.addEventListener("pointerleave", () => { svg.style.transform = ""; });
  }
})();

/* =====================================================================
   Click a skill: highlight related experience and projects
   ===================================================================== */
(function skillFilter() {
  const STOP = new Set(["and","via","the","for","with","system","systems","control","design","simulation","programming","electronics","electronic","motor","motors","professional","foreign","languages","internet","things","tools","tool","detail","schematic","integration","calibration","workflow","technical","public"]);
  const targets = () => [...document.querySelectorAll("#exp-list .tl-card, #projects-root .card")];
  const bar = $("filterbar");
  let matches = [], pos = -1, activeBtn = null;

  const tokens = txt => txt.toLowerCase().split(/[^a-z0-9+!]+/).filter(w => w.length >= 2 && !STOP.has(w));
  const has = (text, tok) => new RegExp("(^|[^a-z0-9])" + tok.replace(/[.*+?^${}()|[\]\\!]/g, "\\$&") + "(?![a-z0-9])").test(text);

  function clear() {
    targets().forEach(t => t.classList.remove("dim", "match"));
    if (activeBtn) { activeBtn.setAttribute("aria-pressed", "false"); activeBtn.parentElement.classList.remove("on"); }
    activeBtn = null; matches = []; pos = -1; bar.hidden = true;
  }
  function apply(btn) {
    clear();
    activeBtn = btn;
    btn.setAttribute("aria-pressed", "true"); btn.parentElement.classList.add("on");
    const toks = tokens(btn.dataset.kw);
    targets().forEach(t => {
      const text = t.textContent.toLowerCase();
      const ok = toks.some(k => has(text, k));
      t.classList.toggle("match", ok); t.classList.toggle("dim", !ok);
      if (ok) matches.push(t);
    });
    const n = matches.length;
    $("fb-text").textContent = n ? `${btn.dataset.kw}: ${n} related ${n === 1 ? "item" : "items"}` : `No related items for ${btn.dataset.kw}`;
    $("fb-next").hidden = !n;
    if (!n) targets().forEach(t => t.classList.remove("dim"));
    bar.hidden = false;
  }
  function next() {
    if (!matches.length) return;
    pos = (pos + 1) % matches.length;
    const el = matches[pos];
    el.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth", block: "center" });
    if (!REDUCE) el.animate([{ transform: "scale(1)" }, { transform: "scale(1.012)" }, { transform: "scale(1)" }], { duration: 420 });
  }
  $("skills-grid").addEventListener("click", e => {
    const b = e.target.closest(".chip-btn");
    if (!b) return;
    b === activeBtn ? clear() : apply(b);
  });
  $("fb-clear").onclick = clear;
  $("fb-next").onclick = next;
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !dlg.open && !bar.hidden) clear(); });
})();

/* =====================================================================
   Photo zoom inside the viewer: click to zoom, move the mouse to pan
   ===================================================================== */
$("v-img").addEventListener("click", e => {
  if (e.target.closest("img")) $("v-img").classList.toggle("zoom");
});
$("v-img").addEventListener("pointermove", e => {
  const img = $("v-img").querySelector("img");
  if (!img || !$("v-img").classList.contains("zoom")) return;
  const r = img.getBoundingClientRect();
  img.style.transformOrigin = `${((e.clientX - r.left) / r.width * 100).toFixed(1)}% ${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`;
});

/* =====================================================================
   Pointer effects: click ripple, cursor ring, card spotlight,
   photo parallax, magnetic buttons
   ===================================================================== */
(function pointerFx() {
  if (!REDUCE) {
    document.addEventListener("pointerdown", e => {
      if (e.button) return;
      const r = document.createElement("span");
      r.className = "ripple";
      r.style.left = e.clientX + "px"; r.style.top = e.clientY + "px";
      (dlg.open ? dlg : document.body).appendChild(r);
      r.addEventListener("animationend", () => r.remove());
    });
  }
  if (!FINE || REDUCE) return;

  // Cursor ring (lives in the dialog while it is open so it stays visible)
  const layer = document.createElement("div");
  layer.className = "cursor-layer"; layer.setAttribute("aria-hidden", "true");
  layer.innerHTML = '<div class="cursor-ring off"><i></i></div>';
  document.body.appendChild(layer);
  const ring = layer.firstChild, disc = ring.firstChild;
  new MutationObserver(() => (dlg.open ? dlg : document.body).appendChild(layer))
    .observe(dlg, { attributes: true, attributeFilter: ["open"] });
  let mx = 0, my = 0, rx = 0, ry = 0;
  (function loop() {
    rx += (mx - rx) * .22; ry += (my - ry) * .22;
    ring.style.transform = `translate3d(${rx.toFixed(1)}px,${ry.toFixed(1)}px,0)`;
    requestAnimationFrame(loop);
  })();
  document.documentElement.addEventListener("mouseleave", () => ring.classList.add("off"));

  const SPOT = ".card, .tl-card, .skill-group, .edu-group, .edu";
  const MAG = ".btn, .set-btn, .theme-toggle";
  let lastSpot = null, lastCover = null, lastMag = null;
  const reset = (el, ...vars) => el && vars.forEach(v => el.style.removeProperty(v));

  document.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    if (ring.classList.contains("off")) { rx = mx = e.clientX; ry = my = e.clientY; }
    mx = e.clientX; my = e.clientY; ring.classList.remove("off");
    const t = e.target;

    let mode = "";
    if (t.closest("#v-img img")) mode = $("v-img").classList.contains("zoom") ? "Back" : "Zoom";
    else if (t.closest("[data-cover]")) mode = "View";
    else if (t.closest("a, button, [role='link'], .chips li")) mode = "link";
    disc.dataset.mode = mode;

    const sp = t.closest(SPOT);
    if (sp !== lastSpot) { reset(lastSpot, "--mx", "--my"); lastSpot = sp; }
    if (sp) { const r = sp.getBoundingClientRect(); sp.style.setProperty("--mx", (e.clientX - r.left) + "px"); sp.style.setProperty("--my", (e.clientY - r.top) + "px"); }

    const cv = t.closest(".cover");
    if (cv !== lastCover) { reset(lastCover, "--tx", "--ty"); lastCover = cv; }
    if (cv) { const r = cv.getBoundingClientRect(); cv.style.setProperty("--tx", (-((e.clientX - r.left) / r.width - .5) * 16).toFixed(1) + "px"); cv.style.setProperty("--ty", (-((e.clientY - r.top) / r.height - .5) * 12).toFixed(1) + "px"); }

    const mg = t.closest(MAG);
    if (mg !== lastMag) { if (lastMag) lastMag.style.transform = ""; lastMag = mg; }
    if (mg) { const r = mg.getBoundingClientRect(); mg.style.transform = `translate(${((e.clientX - (r.left + r.width / 2)) * .22).toFixed(1)}px,${((e.clientY - (r.top + r.height / 2)) * .3).toFixed(1)}px)`; }
  });
  document.documentElement.addEventListener("mouseleave", () => {
    reset(lastSpot, "--mx", "--my"); reset(lastCover, "--tx", "--ty");
    if (lastMag) lastMag.style.transform = "";
  });
})();
