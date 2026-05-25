const companyProfile = [
  { k: "Headquarters", v: "Bonn, Germany" },
  { k: "Year founded", v: "1995" },
  { k: "Consolidated companies", v: "326" },
  { k: "Segments", v: "Germany, USA, Europe, Systems Solutions" },
  { k: "Total connections", v: "298 million" },
  { k: "Network traffic", v: "245,000 PB" },
  { k: "Employees (2025)", v: "~199,000" },
  { k: "Workforce mix (2021)", v: "~61% international / 39% domestic" },
  { k: "Report period", v: "2009-2025" },
  { k: "Climate target", v: "-55% Scopes 1-3 by 2030 (vs 2020)" },
];

const kpiCards = [
  { label: "Scope 1 (2025)", value: "223,790 tCO2e" },
  { label: "Scope 2 MB (2025)", value: "16,375 tCO2e" },
  { label: "Scope 2 LB (2025)", value: "3,736,800 tCO2e" },
  { label: "Scope 3 (2025 estimate)", value: "8,507 ktCO2e" },
  { label: "Net zero operations", value: "Achieved in 2025" },
  { label: "Digital society reach", value: "40M people (2025)" },
];

const emissions = {
  years: [2021, 2022, 2023, 2024, 2025],
  scope1: [218971, 212044, 239602, 236355, 223790],
  scope2Market: [27290, 21019, 17957, 16212, 16375],
  scope2Location: [4634657, 4232913, 3979565, 4002218, 3736800],
};

const carbonIntensity = {
  years: [2023, 2024, 2025],
  market: [95, 86, 73],
  location: [130, 121, 105],
};

const indexed = {
  labels: ["2020", "2024", "2025", "2030"],
  scope12: [100, 10.4, 9.8, 5.0],
  scope3: [100, 89.3, 73.4, 45.0],
};

const sdgMentions = {
  years: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  values: [0, 0, 0, 0, 0, 0, 3, 42, 75, 89, 53, 57, 85, 83, 88, 38, 43],
};

const analysisExtras = {
  waterfall: {
    labels: ["Baseline 2020", "Scope 1+2 reduction", "Scope 3 reduction", "Residual/other", "Net 2025"],
    values: [13781, -3387, -3090, 1205, 8509],
  },
  materiality: {
    axes: ["Climate", "Circularity", "Supply chain", "Digital inclusion", "Cyber/Data trust", "Human capital"],
    impact: [9, 8, 8, 7, 6, 7],
    financial: [9, 7, 8, 6, 9, 7],
  },
  targets2030: [
    { label: "Scope 1+2", progress: 90.2, target: 95 },
    { label: "Scope 3", progress: 26.6, target: 55 },
    { label: "Circularity", progress: 62, target: 100 },
    { label: "Digital society", progress: 96.25, target: 100 },
  ],
};

const roadmapMilestones = [
  {
    year: 1996,
    title: "First sustainability activities report",
  },
  {
    year: 2000,
    title: "Founding member of the UN Global Compact",
  },
  {
    year: 2008,
    title: "First official CR strategy and program adopted",
  },
  {
    year: 2021,
    title: "100% renewable electricity reached across the Group",
  },
  {
    year: 2024,
    title: "First report fully aligned with ESRS standards",
  },
  {
    year: 2025,
    title: "Operational net zero (Scopes 1 and 2) and TCS introduced",
  },
  {
    year: 2030,
    title: "Fully circular economy target for network technology and devices in Europe",
  },
  {
    year: 2040,
    title: "Full net zero across the value chain (Scope 3)",
  },
];

const cr2025 = {
  scope1T: 223790,
  scope2MarketT: 16375,
  scope12T: 240165,
  scope2LocationT: 3736800,
  scope3Kt: 8507,
  totalResidualKt: 8747,
  savingsAchievedPct: {
    scope1: 14.0,
    scope2: 99.2,
    scope3: 26.6,
  },
};

const cr2025Scope3Parts = [
  {
    label: "Purchased goods and services",
    pct: 39.4,
    note: "Devices and network equipment",
  },
  {
    label: "Capital goods",
    pct: 20.5,
    note: "Assets and infrastructure",
  },
  {
    label: "Upstream logistics",
    pct: 7.7,
    note: "Upstream transport and distribution",
  },
  {
    label: "Use of sold products",
    pct: 13.0,
    note: "Energy consumed at customer side",
  },
  {
    label: "Use of leased products",
    pct: 7.8,
    note: "Leased products in operation",
  },
  {
    label: "Other Scope 3 categories",
    pct: 11.6,
    note: "Remaining GHG Protocol categories",
  },
];

const cr2025Fields = [
  {
    name: "Germany",
    scope12T: 85000,
    scope3T: 2100000,
    profile: "High upstream Scope 3 share",
  },
  {
    name: "United States (TMUS)",
    scope12T: 46000,
    scope3T: 6300000,
    profile: "Largest Scope 3 contributor",
  },
  {
    name: "Europe",
    scope12T: 49000,
    scope3T: 1600000,
    profile: "Focus on device reduction",
  },
  {
    name: "Systems Solutions",
    scope12T: 8000,
    scope3T: 300000,
    profile: "Emissions linked to data centers",
  },
];

const scopeTimeline = [
  [2009, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2010, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2011, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2012, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2013, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2014, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2015, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2016, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2017, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2018, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2019, "NA", "NA", "NA", "NA", "Scope references present, table not robustly extractable"],
  [2020, "NA", "NA", "NA", "11,595 kt", "Scope 3 baseline from transition plan"],
  [2021, "218,971", "27,290", "4,634,657", "NA", "Recent CR historical table"],
  [2022, "212,044", "21,019", "4,232,913", "NA", "Recent CR historical table"],
  [2023, "239,602", "17,957", "3,979,565", "10,693 kt (total emissions)", "Value from CR2023 (total emissions)"],
  [2024, "236,355", "16,212", "4,002,218", "10,354 kt (estimate)", "Calculated using 10.7% reduction vs baseline"],
  [2025, "223,790", "16,375", "3,736,800", "8,507 kt (published)", "Published value in CR2025 expected savings"],
];

const reports = [
  { year: 2008, file: "./reports/dl-cr-report-08.pdf" },
  { year: 2009, file: "./reports/dl-cr-report-09.pdf" },
  { year: 2010, file: "./reports/dl-cr-report-10.pdf" },
  { year: 2011, file: "./reports/dl-cr-bericht-2011-en.pdf" },
  { year: 2012, file: "./reports/dl-cr-bericht-2012-en.pdf" },
  { year: 2013, file: "./reports/dl-cr-bericht-2013-en.pdf" },
  { year: 2014, file: "./reports/dl-cr-bericht-2014-en.pdf" },
  { year: 2015, file: "./reports/dl-cr-bericht-2015-en.pdf" },
  { year: 2016, file: "./reports/dl-cr-bericht-2016-en.pdf" },
  { year: 2017, file: "./reports/dl-cr-bericht-2017-en.pdf" },
  { year: 2018, file: "./reports/dl-cr-bericht-2018-en.pdf" },
  { year: 2019, file: "./reports/dl-cr-bericht-2019-en.pdf" },
  { year: 2020, file: "./reports/dl-cr-bericht-2020-en.pdf" },
  { year: 2021, file: "./reports/dl-cr-bericht-2021-en.pdf" },
  { year: 2022, file: "./reports/dl-cr-bericht-2022-en.pdf" },
  { year: 2023, file: "./reports/dl-cr-bericht-2023-en.pdf" },
  { year: 2024, file: "./reports/entire-dtag-cr24.pdf" },
  { year: 2025, file: "./reports/entire-dtag-cr25.pdf" },
];

const projects = [
  {
    sdg: "2",
    odd: "SDG 2 - Zero Hunger",
    title: "5G Precision Agriculture",
    date: "2022",
    description: "Real-time solution to improve GPS precision in agriculture and optimize seed/fertilizer use.",
    kpi: "Emissions reduction and yield gains (indirect SDG 2 contribution)",
  },
  {
    sdg: "7",
    odd: "SDG 7 - Clean Energy",
    title: "100% Renewable Electricity",
    date: "2021",
    description: "Group-wide sourcing of 100% renewable electricity.",
    kpi: "Very low market-based Scope 2 maintained from 2021 to 2025",
  },
  {
    sdg: "9",
    odd: "SDG 9 - Industry/Innovation",
    title: "Device as a Service (everphone)",
    date: "2022",
    description: "Circular management of enterprise smartphones/tablets across the full life cycle.",
    kpi: "~50 kgCO2e avoided per device; refurbishment >97%",
  },
  {
    sdg: "11",
    odd: "SDG 11 - Sustainable Cities",
    title: "AR FieldAdvisor",
    date: "2022",
    description: "Remote maintenance through augmented reality to avoid technical travel.",
    kpi: "~614 kgCO2e avoided / 100 interventions",
  },
  {
    sdg: "11",
    odd: "SDG 11 - Sustainable Cities",
    title: "Mein Telekom Techniker",
    date: "2022",
    description: "Technician tracking app to reduce failed visits and unnecessary logistics.",
    kpi: "~14 kgCO2e avoided per intervention (reported order of magnitude)",
  },
  {
    sdg: "11",
    odd: "SDG 11 - Sustainable Cities",
    title: "Airport CDM (T-Systems)",
    date: "2022",
    description: "Collaborative optimization of airport operations to reduce delays and fuel burn.",
    kpi: "Up to 92 kgCO2 avoided per takeoff",
  },
  {
    sdg: "12",
    odd: "SDG 12 - Responsible Consumption",
    title: "EcoShift mobility platform",
    date: "2022",
    description: "Employee mobility carbon dashboard (business travel + commuting).",
    kpi: "~12 tCO2/year saved per 100 employees",
  },
  {
    sdg: "4",
    odd: "SDG 4 - Quality Education",
    title: "AwareNessi Cyber Activity",
    date: "2022",
    description: "Educational cybersecurity magazine for children and parents, multilingual.",
    kpi: "16 languages; 60h employee volunteering per issue",
  },
  {
    sdg: "4",
    odd: "SDG 4 - Quality Education",
    title: "Teachtoday",
    date: "2022",
    description: "Media literacy program using multimedia learning methods.",
    kpi: ">2x more effective than conventional methods (PwC study)",
  },
  {
    sdg: "16",
    odd: "SDG 16 - Institutions",
    title: "Human Rights Impact Assessments",
    date: "2022",
    description: "On-site assessments (Slovakia, Czechia, Romania) and remediation measures.",
    kpi: "RHIA process and awareness workshops deployed",
  },
  {
    sdg: "13",
    odd: "SDG 13 - Climate Action",
    title: "Net zero own operations",
    date: "2025",
    description: "Net zero achieved for Scope 1+2 through deep reduction and residual neutralization.",
    kpi: ">94% reduction vs 2017; 250,000 tCO2e neutralized in 2025",
  },
  {
    sdg: "15",
    odd: "SDG 15 - Life on Land",
    title: "Removal projects",
    date: "2025",
    description: "Neutralization via carbon removal projects, including reforestation and technology-based sinks.",
    kpi: "243,000 tCO2e from removal projects in 2025",
  },
  {
    sdg: "11",
    odd: "SDG 11 - Sustainable Communities",
    title: "Digital society reach",
    date: "2025",
    description: "Large-scale inclusive digital society programs.",
    kpi: "40M people reached in 2025; 77M cumulative (2024-2025)",
  },
];

function oddIconPath(sdg) {
  return `odd-icons/odd-${String(sdg).padStart(2, "0")}.svg`;
}

function initKpis() {
  const wrap = document.getElementById("kpi-grid");
  kpiCards.forEach((kpi) => {
    const div = document.createElement("article");
    div.className = "kpi-card";
    div.innerHTML = `<p class="kpi-label">${kpi.label}</p><p class="kpi-value">${kpi.value}</p>`;
    wrap.appendChild(div);
  });
}

function initCompany() {
  const wrap = document.getElementById("company-grid");
  companyProfile.forEach((item) => {
    const div = document.createElement("article");
    div.className = "company-item";
    div.innerHTML = `<p class="k">${item.k}</p><p class="v">${item.v}</p>`;
    wrap.appendChild(div);
  });
}

function initScopeTable() {
  const tbody = document.querySelector("#scopeTable tbody");
  scopeTimeline.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function pct(a, b) {
  if (a === 0 || a === null || a === undefined || b === null || b === undefined) return null;
  return ((b - a) / a) * 100;
}

function renderAdvancedNumbers() {
  const wrap = document.getElementById("numbersGrid");
  const s1 = emissions.scope1;
  const s2m = emissions.scope2Market;
  const s2l = emissions.scope2Location;
  const combined = s1.map((v, i) => v + s2m[i]);

  const cards = [
    {
      label: "Reduction S1 (2021->2025)",
      value: `${pct(s1[0], s1[s1.length - 1]).toFixed(1)}%`,
    },
    {
      label: "Reduction S2 MB (2021->2025)",
      value: `${pct(s2m[0], s2m[s2m.length - 1]).toFixed(1)}%`,
    },
    {
      label: "Reduction S2 LB (2021->2025)",
      value: `${pct(s2l[0], s2l[s2l.length - 1]).toFixed(1)}%`,
    },
    {
      label: "Reduction S1+S2 MB (2021->2025)",
      value: `${pct(combined[0], combined[combined.length - 1]).toFixed(1)}%`,
    },
    {
      label: "Scope 1 share in S1+S2 (2025)",
      value: `${((s1[s1.length - 1] / combined[combined.length - 1]) * 100).toFixed(1)}%`,
    },
    {
      label: "Absolute delta S1+S2 MB (2021->2025)",
      value: `${formatK(combined[combined.length - 1] - combined[0])} tCO2e`,
    },
    {
      label: "Carbon intensity MB (2023->2025)",
      value: `${pct(carbonIntensity.market[0], carbonIntensity.market[2]).toFixed(1)}%`,
    },
    {
      label: "Carbon intensity LB (2023->2025)",
      value: `${pct(carbonIntensity.location[0], carbonIntensity.location[2]).toFixed(1)}%`,
    },
  ];

  cards.forEach((c) => {
    const card = document.createElement("article");
    card.className = "num-card";
    const isDelta = c.value.includes("-");
    card.innerHTML = `<p class="label">${c.label}</p><p class="value ${isDelta ? "delta-down" : ""}">${c.value}</p>`;
    wrap.appendChild(card);
  });
}

function renderEvolutionTable() {
  const tbody = document.querySelector("#evolutionTable tbody");
  const years = emissions.years;
  const s1 = emissions.scope1;
  const s2m = emissions.scope2Market;
  const s2l = emissions.scope2Location;

  years.forEach((y, i) => {
    const tr = document.createElement("tr");
    const c = s1[i] + s2m[i];

    const yoyS1 = i === 0 ? null : pct(s1[i - 1], s1[i]);
    const yoyS2m = i === 0 ? null : pct(s2m[i - 1], s2m[i]);
    const yoyS2l = i === 0 ? null : pct(s2l[i - 1], s2l[i]);
    const yoyC = i === 0 ? null : pct(s1[i - 1] + s2m[i - 1], c);

    const row = [
      y,
      formatK(s1[i]),
      yoyS1 === null ? "-" : `${yoyS1.toFixed(1)}%`,
      formatK(s2m[i]),
      yoyS2m === null ? "-" : `${yoyS2m.toFixed(1)}%`,
      formatK(s2l[i]),
      yoyS2l === null ? "-" : `${yoyS2l.toFixed(1)}%`,
      formatK(c),
      yoyC === null ? "-" : `${yoyC.toFixed(1)}%`,
    ];

    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = String(cell);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
}

function initDownloads() {
  const wrap = document.getElementById("reportDownloads");
  reports.forEach((r) => {
    const card = document.createElement("article");
    card.className = "download-card";
    card.innerHTML = `
      <p class="year">Report ${r.year}</p>
      <a href="${r.file}" download>Download PDF</a>
    `;
    wrap.appendChild(card);
  });
}

function formatK(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

function formatPct(v, digits = 2) {
  return `${v.toFixed(digits)}%`;
}

function setCanvasColumnAttributes(canvasId, columns, chartLabel = "Chart") {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const attrsToRemove = [];
  for (let i = 0; i < canvas.attributes.length; i++) {
    const attrName = canvas.attributes[i].name;
    if (attrName.startsWith("data-col-")) attrsToRemove.push(attrName);
  }
  attrsToRemove.forEach((name) => canvas.removeAttribute(name));

  canvas.setAttribute("role", "img");
  canvas.setAttribute("data-columns-count", String(columns.length));

  const ariaParts = [];
  columns.forEach((col, idx) => {
    const n = idx + 1;
    const label = String(col.label ?? "");
    const value = String(col.value ?? "");
    const description = String(col.description ?? "");
    canvas.setAttribute(`data-col-${n}-label`, label);
    canvas.setAttribute(`data-col-${n}-value`, value);
    canvas.setAttribute(`data-col-${n}-description`, description);
    ariaParts.push(`${label}: ${value}${description ? ` (${description})` : ""}`);
  });

  canvas.setAttribute("aria-label", `${chartLabel}. ${ariaParts.join("; ")}`);
}

function drawAxes(ctx, w, h, left, top, right, bottom) {
  ctx.strokeStyle = "#5c6770";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(left, h - bottom);
  ctx.lineTo(w - right, h - bottom);
  ctx.stroke();
}

function drawLineChart(canvasId, labels, datasets, opts = {}) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const m = { left: 60, right: 24, top: 20, bottom: 48 };
  const all = datasets.flatMap((d) => d.data);
  const max = opts.max || Math.max(...all) * 1.08;
  const min = opts.min || 0;

  drawAxes(ctx, w, h, m.left, m.top, m.right, m.bottom);

  const plotW = w - m.left - m.right;
  const plotH = h - m.top - m.bottom;
  const xStep = plotW / (labels.length - 1 || 1);

  for (let i = 0; i < 5; i++) {
    const yv = min + ((max - min) * i) / 4;
    const y = h - m.bottom - (plotH * i) / 4;
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.beginPath();
    ctx.moveTo(m.left, y);
    ctx.lineTo(w - m.right, y);
    ctx.stroke();
    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(formatK(Math.round(yv)), 8, y + 4);
  }

  labels.forEach((lb, i) => {
    const x = m.left + i * xStep;
    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(lb, x - 14, h - 25);
  });

  datasets.forEach((set) => {
    ctx.strokeStyle = set.color;
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    set.data.forEach((v, i) => {
      const x = m.left + i * xStep;
      const y = h - m.bottom - ((v - min) / (max - min || 1)) * plotH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    set.data.forEach((v, i) => {
      const x = m.left + i * xStep;
      const y = h - m.bottom - ((v - min) / (max - min || 1)) * plotH;
      ctx.fillStyle = set.color;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  datasets.forEach((set, i) => {
    const lx = m.left + i * 230;
    const ly = 16;
    ctx.fillStyle = set.color;
    ctx.fillRect(lx, ly - 7, 12, 12);
    ctx.fillStyle = "#111";
    ctx.font = "12px Segoe UI";
    ctx.fillText(set.name, lx + 18, ly + 3);
  });
}

function drawBarChart(canvasId, labels, values, color) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const m = { left: 60, right: 24, top: 20, bottom: 70 };
  const max = Math.max(...values) * 1.12;
  drawAxes(ctx, w, h, m.left, m.top, m.right, m.bottom);

  const plotW = w - m.left - m.right;
  const plotH = h - m.top - m.bottom;
  const bw = (plotW / values.length) * 0.65;

  values.forEach((v, i) => {
    const x = m.left + (plotW / values.length) * i + 4;
    const bh = (v / max) * plotH;
    const y = h - m.bottom - bh;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, bw, bh);

    ctx.fillStyle = "#5c6770";
    ctx.font = "10px Segoe UI";
    ctx.save();
    ctx.translate(x + bw / 2, h - 34);
    ctx.rotate(-0.35);
    ctx.fillText(String(labels[i]), -30, 0);
    ctx.restore();

    ctx.fillStyle = "#111";
    ctx.font = "10px Segoe UI";
    ctx.fillText(formatK(Math.round(v)), x - 2, Math.max(14, y - 6));
  });

  for (let i = 0; i < 5; i++) {
    const yv = (max * i) / 4;
    const y = h - m.bottom - (plotH * i) / 4;
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.beginPath();
    ctx.moveTo(m.left, y);
    ctx.lineTo(w - m.right, y);
    ctx.stroke();
    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(formatK(Math.round(yv)), 8, y + 4);
  }

  setCanvasColumnAttributes(
    canvasId,
    labels.map((label, i) => ({
      label,
      value: formatK(Math.round(values[i])),
      description: "Bar column",
    })),
    "Bar chart",
  );
}

function drawDonutChart(canvasId, labels, values, colors) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const total = values.reduce((a, b) => a + b, 0);
  const cx = 200;
  const cy = h / 2;
  const rOuter = 112;
  const rInner = 58;

  let angle = -Math.PI / 2;
  values.forEach((v, i) => {
    const slice = (v / total) * Math.PI * 2;
    const next = angle + slice;

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, rOuter, angle, next);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();

    angle = next;
  });

  ctx.beginPath();
  ctx.arc(cx, cy, rInner, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();

  ctx.fillStyle = "#111";
  ctx.font = "700 14px Segoe UI";
  ctx.fillText("Total", cx - 18, cy - 6);
  ctx.font = "700 16px Segoe UI";
  ctx.fillText(formatK(Math.round(total)), cx - 44, cy + 16);

  labels.forEach((label, i) => {
    const y = 46 + i * 42;
    const pct = (values[i] / total) * 100;
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(420, y - 10, 12, 12);
    ctx.fillStyle = "#111";
    ctx.font = "12px Segoe UI";
    ctx.fillText(label, 438, y);
    ctx.fillStyle = "#5c6770";
    ctx.fillText(`${formatK(Math.round(values[i]))} (${formatPct(pct, 2)})`, 438, y + 15);
  });

  setCanvasColumnAttributes(
    canvasId,
    labels.map((label, i) => ({
      label,
      value: `${formatK(Math.round(values[i]))} (${formatPct((values[i] / total) * 100, 2)})`,
      description: "Donut slice",
    })),
    "Donut chart",
  );
}

function drawWaterfallChart(canvasId, labels, values) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const m = { left: 70, right: 20, top: 20, bottom: 62 };
  const plotW = w - m.left - m.right;
  const plotH = h - m.top - m.bottom;
  const maxY = 14500;
  const minY = 0;
  drawAxes(ctx, w, h, m.left, m.top, m.right, m.bottom);

  const step = plotW / values.length;
  const barW = step * 0.58;

  function yScale(v) {
    return h - m.bottom - ((v - minY) / (maxY - minY)) * plotH;
  }

  let running = values[0];
  values.forEach((v, i) => {
    const x = m.left + i * step + (step - barW) / 2;
    let yTop;
    let yBottom;
    let color = "#adb5bd";

    if (i === 0 || i === values.length - 1) {
      yTop = yScale(v);
      yBottom = yScale(0);
      color = "#e20074";
      running = v;
    } else {
      const next = running + v;
      yTop = yScale(Math.max(running, next));
      yBottom = yScale(Math.min(running, next));
      color = v < 0 ? "#2b8a3e" : "#d9480f";
      running = next;
    }

    ctx.fillStyle = color;
    ctx.fillRect(x, yTop, barW, Math.max(2, yBottom - yTop));

    if (i > 0) {
      const prevY = yScale(running - v);
      const currY = yScale(running);
      ctx.strokeStyle = "rgba(0,0,0,0.25)";
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(x - 8, prevY);
      ctx.lineTo(x + barW + 8, currY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    ctx.fillStyle = "#111";
    ctx.font = "11px Segoe UI";
    ctx.fillText(formatK(Math.round(i === 0 || i === values.length - 1 ? v : running)), x - 2, yTop - 6);

    ctx.save();
    ctx.translate(x + barW / 2, h - 36);
    ctx.rotate(-0.35);
    ctx.fillStyle = "#5c6770";
    ctx.fillText(labels[i], -32, 0);
    ctx.restore();
  });

  for (let i = 0; i < 5; i++) {
    const val = (maxY * i) / 4;
    const y = yScale(val);
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.beginPath();
    ctx.moveTo(m.left, y);
    ctx.lineTo(w - m.right, y);
    ctx.stroke();
    ctx.fillStyle = "#5c6770";
    ctx.fillText(formatK(Math.round(val)), 10, y + 4);
  }

  setCanvasColumnAttributes(
    canvasId,
    labels.map((label, i) => ({
      label,
      value: formatK(Math.round(values[i])),
      description: i === 0 || i === values.length - 1 ? "Absolute value" : "Delta value",
    })),
    "Waterfall chart",
  );
}

function drawRoadmapChart(canvasId, items) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const m = { left: 64, right: 42, top: 40, bottom: 48 };
  const minYear = Math.min(...items.map((d) => d.year));
  const maxYear = Math.max(...items.map((d) => d.year));
  const axisY = Math.round(h * 0.53);
  const span = w - m.left - m.right;
  const boxW = 168;
  const boxH = 72;
  const boxGap = 10;

  function xScale(year) {
    return m.left + ((year - minYear) / (maxYear - minYear || 1)) * span;
  }

  function drawWrappedText(text, x, y, maxWidth, lineHeight, maxLines = 3) {
    const words = text.split(" ");
    let line = "";
    const lines = [];
    words.forEach((word) => {
      const testLine = line ? `${line} ${word}` : word;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    });
    if (line) lines.push(line);
    const renderLines = lines.slice(0, maxLines);
    if (lines.length > maxLines) {
      renderLines[maxLines - 1] = `${renderLines[maxLines - 1]}...`;
    }
    renderLines.forEach((l, i) => {
      ctx.fillText(l, x, y + i * lineHeight);
    });
  }

  function drawRoundedRect(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function placeWithoutOverlap(sideItems, minX, maxX) {
    const sorted = [...sideItems].sort((a, b) => a.x - b.x);
    const positioned = [];

    sorted.forEach((item, idx) => {
      let left = Math.max(minX, Math.min(maxX - boxW, item.x - boxW / 2));
      if (idx > 0) {
        const prev = positioned[idx - 1];
        left = Math.max(left, prev.left + boxW + boxGap);
      }
      positioned.push({ ...item, left });
    });

    const overflow = positioned.length
      ? Math.max(0, positioned[positioned.length - 1].left + boxW - maxX)
      : 0;

    if (overflow > 0) {
      positioned.forEach((p) => {
        p.left -= overflow;
      });

      const underflow = Math.max(0, minX - Math.min(...positioned.map((p) => p.left)));
      if (underflow > 0) {
        positioned.forEach((p) => {
          p.left += underflow;
        });
      }
    }

    return positioned;
  }

  const prepared = items.map((item, i) => ({
    ...item,
    x: xScale(item.year),
    side: i % 2 === 0 ? "top" : "bottom",
    isHistory: item.year <= 2025,
  }));

  const topItems = prepared.filter((d) => d.side === "top");
  const bottomItems = prepared.filter((d) => d.side === "bottom");

  const topPlaced = placeWithoutOverlap(topItems, m.left, w - m.right);
  const bottomPlaced = placeWithoutOverlap(bottomItems, m.left, w - m.right);

  const placedByYear = new Map([...topPlaced, ...bottomPlaced].map((d) => [d.year, d]));

  ctx.strokeStyle = "#adb5bd";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(m.left, axisY);
  ctx.lineTo(w - m.right, axisY);
  ctx.stroke();

  ctx.fillStyle = "#5c6770";
  ctx.font = "11px Segoe UI";
  ctx.fillText(String(minYear), m.left - 18, axisY + 28);
  ctx.fillText(String(maxYear), w - m.right - 14, axisY + 28);

  prepared.forEach((item) => {
    const placed = placedByYear.get(item.year);
    const boxY = item.side === "top" ? m.top + 6 : axisY + 48;
    const anchorY = item.side === "top" ? boxY + boxH : boxY;
    const anchorX = placed.left + boxW / 2;

    ctx.strokeStyle = "rgba(17,17,17,0.35)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(item.x, axisY);
    ctx.lineTo(anchorX, anchorY);
    ctx.stroke();

    ctx.fillStyle = item.isHistory ? "#e20074" : "#1971c2";
    ctx.beginPath();
    ctx.arc(item.x, axisY, 5.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#d0d6dc";
    ctx.lineWidth = 1;
    drawRoundedRect(placed.left, boxY, boxW, boxH, 8);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#111";
    ctx.font = "700 12px Segoe UI";
    ctx.fillText(String(item.year), placed.left + 10, boxY + 18);

    ctx.fillStyle = "#495057";
    ctx.font = "11px Segoe UI";
    drawWrappedText(item.title, placed.left + 10, boxY + 34, boxW - 20, 12, 3);

  });

  ctx.fillStyle = "#e20074";
  ctx.fillRect(m.left, 18, 12, 12);
  ctx.fillStyle = "#111";
  ctx.font = "12px Segoe UI";
  ctx.fillText("Historical milestones", m.left + 18, 28);
  ctx.fillStyle = "#1971c2";
  ctx.fillRect(m.left + 174, 18, 12, 12);
  ctx.fillStyle = "#111";
  ctx.fillText("Future targets", m.left + 192, 28);

  setCanvasColumnAttributes(
    canvasId,
    items.map((item) => ({
      label: String(item.year),
      value: item.title,
      description: "Roadmap milestone",
    })),
    "Roadmap timeline chart",
  );
}

function drawRadarChart(canvasId, axes, seriesA, seriesB) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) * 0.33;
  const levels = 5;
  const n = axes.length;

  for (let l = 1; l <= levels; l++) {
    const r = (radius * l) / levels;
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = "rgba(0,0,0,0.12)";
    ctx.stroke();
  }

  axes.forEach((ax, i) => {
    const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
    const x = cx + Math.cos(a) * (radius + 16);
    const y = cy + Math.sin(a) * (radius + 16);
    ctx.strokeStyle = "rgba(0,0,0,0.2)";
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius);
    ctx.stroke();
    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(ax, x - 30, y + 4);
  });

  function drawSeries(values, fill, stroke) {
    ctx.beginPath();
    values.forEach((v, i) => {
      const a = -Math.PI / 2 + (2 * Math.PI * i) / n;
      const r = (radius * v) / 10;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
  }

  drawSeries(seriesA, "rgba(226,0,116,0.20)", "#e20074");
  drawSeries(seriesB, "rgba(11,114,133,0.20)", "#0b7285");

  ctx.fillStyle = "#e20074";
  ctx.fillRect(20, 20, 12, 12);
  ctx.fillStyle = "#111";
  ctx.fillText("Impact materiality", 38, 30);
  ctx.fillStyle = "#0b7285";
  ctx.fillRect(180, 20, 12, 12);
  ctx.fillStyle = "#111";
  ctx.fillText("Financial materiality", 198, 30);
}

function drawTargetProgressChart(canvasId, rows) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const left = 210;
  const right = 30;
  const top = 34;
  const rowH = 68;
  const barW = w - left - right;

  rows.forEach((r, i) => {
    const y = top + i * rowH;
    ctx.fillStyle = "#111";
    ctx.font = "12px Segoe UI";
    ctx.fillText(r.label, 22, y + 20);

    ctx.fillStyle = "#e9ecef";
    ctx.fillRect(left, y, barW, 20);

    const progressW = Math.max(0, Math.min(barW, (barW * r.progress) / 100));
    ctx.fillStyle = r.progress >= r.target ? "#2b8a3e" : "#e20074";
    ctx.fillRect(left, y, progressW, 20);

    const targetX = left + (barW * r.target) / 100;
    ctx.strokeStyle = "#343a40";
    ctx.beginPath();
    ctx.moveTo(targetX, y - 4);
    ctx.lineTo(targetX, y + 24);
    ctx.stroke();

    ctx.fillStyle = "#5c6770";
    ctx.font = "11px Segoe UI";
    ctx.fillText(`Progress: ${r.progress}%`, left, y + 40);
    ctx.fillText(`Target: ${r.target}%`, Math.min(w - 120, targetX + 6), y + 14);
  });
}

function drawOddMixChart(canvasId, data) {
  const c = document.getElementById(canvasId);
  const ctx = c.getContext("2d");
  const w = c.width;
  const h = c.height;
  ctx.clearRect(0, 0, w, h);

  const counts = {};
  data.forEach((p) => {
    counts[p.sdg] = (counts[p.sdg] || 0) + 1;
  });

  const entries = Object.entries(counts)
    .map(([sdg, n]) => ({ sdg, n }))
    .sort((a, b) => Number(a.sdg) - Number(b.sdg));

  const labels = entries.map((e) => `SDG ${e.sdg}`);
  const values = entries.map((e) => e.n);

  drawBarChart(canvasId, labels, values, "#495057");
}

function drawYoYChart(canvasId) {
  const yoyS1 = [];
  const yoyS2m = [];
  const yoyS2l = [];
  const years = emissions.years.slice(1);
  for (let i = 1; i < emissions.years.length; i++) {
    yoyS1.push(pct(emissions.scope1[i - 1], emissions.scope1[i]));
    yoyS2m.push(pct(emissions.scope2Market[i - 1], emissions.scope2Market[i]));
    yoyS2l.push(pct(emissions.scope2Location[i - 1], emissions.scope2Location[i]));
  }

  drawLineChart(
    canvasId,
    years,
    [
      { name: "YoY S1 %", data: yoyS1, color: "#e20074" },
      { name: "YoY S2 MB %", data: yoyS2m, color: "#2b8a3e" },
      { name: "YoY S2 LB %", data: yoyS2l, color: "#0b7285" },
    ],
    { min: -25, max: 15 },
  );
}

function drawCarbonIntensityChart(canvasId) {
  drawLineChart(
    canvasId,
    carbonIntensity.years,
    [
      { name: "Intensity MB", data: carbonIntensity.market, color: "#e20074" },
      { name: "Intensity LB", data: carbonIntensity.location, color: "#495057" },
    ],
    { min: 60, max: 140 },
  );
}

function drawCr2025OpsChart(canvasId) {
  drawBarChart(
    canvasId,
    ["Scope 1", "Scope 2 MB", "Scope 1+2 total"],
    [cr2025.scope1T, cr2025.scope2MarketT, cr2025.scope12T],
    "#e20074",
  );
}

function drawCr2025ResidualChart(canvasId) {
  drawBarChart(
    canvasId,
    ["Scope 3", "Scope 1+2", "Total residual"],
    [cr2025.scope3Kt, cr2025.scope12T / 1000, cr2025.totalResidualKt],
    "#0b7285",
  );
}

function drawCr2025SavingsChart(canvasId) {
  drawBarChart(
    canvasId,
    ["Scope 1", "Scope 2", "Scope 3"],
    [
      cr2025.savingsAchievedPct.scope1,
      cr2025.savingsAchievedPct.scope2,
      cr2025.savingsAchievedPct.scope3,
    ],
    "#2b8a3e",
  );
}

function drawCr2025ScopeShareChart(canvasId) {
  drawDonutChart(
    canvasId,
    ["Scope 1", "Scope 2 (market-based)", "Scope 3"],
    [cr2025.scope1T, cr2025.scope2MarketT, cr2025.scope3Kt * 1000],
    ["#e20074", "#2b8a3e", "#0b7285"],
  );
}

function drawCr2025OpsShareChart(canvasId) {
  drawDonutChart(
    canvasId,
    ["Scope 1", "Scope 2 (market-based)"],
    [cr2025.scope1T, cr2025.scope2MarketT],
    ["#e20074", "#2b8a3e"],
  );
}

function drawCr2025Scope3PartsChart(canvasId) {
  drawBarChart(
    canvasId,
    ["Goods&Services", "Capital goods", "Upstream log.", "Use sold", "Use leased", "Other"],
    cr2025Scope3Parts.map((p) => Math.round((p.pct / 100) * cr2025.scope3Kt * 1000)),
    "#1971c2",
  );
}

function drawCr2025FieldsChart(canvasId, key, color) {
  drawBarChart(
    canvasId,
    cr2025Fields.map((f) => f.name),
    cr2025Fields.map((f) => f[key]),
    color,
  );
}

function renderCr2025BreakdownTables() {
  const totalGrossT = cr2025.scope1T + cr2025.scope2MarketT + cr2025.scope3Kt * 1000;

  const globalRows = [
    {
      metric: "Scope 1 (direct)",
      value: cr2025.scope1T,
      pct: (cr2025.scope1T / totalGrossT) * 100,
      unit: "tCO2e",
      note: "Fossil fuels (fleet, heating)",
    },
    {
      metric: "Scope 2 (indirect - energy, market-based)",
      value: cr2025.scope2MarketT,
      pct: (cr2025.scope2MarketT / totalGrossT) * 100,
      unit: "tCO2e",
      note: "Low level maintained with renewable electricity",
    },
    {
      metric: "Scope 3 (value chain)",
      value: cr2025.scope3Kt * 1000,
      pct: ((cr2025.scope3Kt * 1000) / totalGrossT) * 100,
      unit: "tCO2e",
      note: "Upstream and downstream emissions",
    },
    {
      metric: "Gross total",
      value: totalGrossT,
      pct: 100,
      unit: "tCO2e",
      note: "Before neutralization measures",
    },
  ];

  const globalBody = document.getElementById("scopeGlobalTableBody");
  globalRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.metric}</td>
      <td>${formatK(Math.round(row.value))}</td>
      <td>${formatPct(row.pct, 2)}</td>
      <td>${row.unit}</td>
      <td>${row.note}</td>
    `;
    globalBody.appendChild(tr);
  });

  const scopeDetailsBody = document.getElementById("scopeDetailsTableBody");
  const scope12Total = cr2025.scope12T;

  const internalRows = [
    {
      detail: "Scope 1 within Scope 1+2",
      tons: cr2025.scope1T,
      pct: (cr2025.scope1T / scope12Total) * 100,
      note: "Fleet, natural gas, fugitive emissions",
    },
    {
      detail: "Scope 2 (market-based) within Scope 1+2",
      tons: cr2025.scope2MarketT,
      pct: (cr2025.scope2MarketT / scope12Total) * 100,
      note: "Operational residual with renewable electricity",
    },
    {
      detail: "Scope 2 (location-based, comparison)",
      tons: cr2025.scope2LocationT,
      pct: (cr2025.scope2LocationT / scope12Total) * 100,
      note: "Comparison without market-based accounting",
    },
  ];

  cr2025Scope3Parts.forEach((part) => {
    internalRows.push({
      detail: `Scope 3 - ${part.label}`,
      tons: (part.pct / 100) * cr2025.scope3Kt * 1000,
      pct: part.pct,
      note: part.note,
    });
  });

  internalRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.detail}</td>
      <td>${formatK(Math.round(row.tons))}</td>
      <td>${formatPct(row.pct, 2)}</td>
      <td>${row.note}</td>
    `;
    scopeDetailsBody.appendChild(tr);
  });

  const fieldBody = document.getElementById("fieldSplitTableBody");
  const totalS12Field = cr2025Fields.reduce((sum, f) => sum + f.scope12T, 0);
  const totalS3Field = cr2025Fields.reduce((sum, f) => sum + f.scope3T, 0);

  cr2025Fields.forEach((f) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${f.name}</td>
      <td>${formatK(f.scope12T)}</td>
      <td>${formatPct((f.scope12T / totalS12Field) * 100, 2)}</td>
      <td>${formatK(f.scope3T)}</td>
      <td>${formatPct((f.scope3T / totalS3Field) * 100, 2)}</td>
      <td>${f.profile}</td>
    `;
    fieldBody.appendChild(tr);
  });
}

function initCharts() {
  drawRoadmapChart("chartRoadmap", roadmapMilestones);

  drawLineChart(
    "chartScopeMarket",
    emissions.years,
    [
      { name: "Scope 1", data: emissions.scope1, color: "#e20074" },
      { name: "Scope 2 market", data: emissions.scope2Market, color: "#2b8a3e" },
    ],
  );

  drawLineChart(
    "chartScopeLocation",
    emissions.years,
    [{ name: "Scope 2 location", data: emissions.scope2Location, color: "#0b7285" }],
  );

  drawLineChart(
    "chartIndexed",
    indexed.labels,
    [
      { name: "Scope 1+2 index", data: indexed.scope12, color: "#e20074" },
      { name: "Scope 3 index", data: indexed.scope3, color: "#1971c2" },
    ],
    { max: 110 },
  );

  drawBarChart("chartSdgMentions", sdgMentions.years, sdgMentions.values, "#7f5539");

  drawWaterfallChart(
    "chartWaterfall",
    analysisExtras.waterfall.labels,
    analysisExtras.waterfall.values,
  );

  drawRadarChart(
    "chartRadar",
    analysisExtras.materiality.axes,
    analysisExtras.materiality.impact,
    analysisExtras.materiality.financial,
  );

  drawTargetProgressChart("chartTargets", analysisExtras.targets2030);
  drawOddMixChart("chartOddMix", projects);
  drawYoYChart("chartYoY");
  drawCarbonIntensityChart("chartCarbonIntensity");
  drawCr2025OpsChart("chartCr2025Ops");
  drawCr2025ResidualChart("chartCr2025Residual");
  drawCr2025SavingsChart("chartCr2025Savings");
  drawCr2025ScopeShareChart("chartCr2025ScopeShare");
  drawCr2025OpsShareChart("chartCr2025OpsShare");
  drawCr2025Scope3PartsChart("chartCr2025Scope3Parts");
  drawCr2025FieldsChart("chartCr2025FieldsS12", "scope12T", "#e20074");
  drawCr2025FieldsChart("chartCr2025FieldsS3", "scope3T", "#0b7285");
}

function unique(arr) {
  return [...new Set(arr)];
}

function initFilters() {
  const sdgSel = document.getElementById("filterSdg");
  const yearSel = document.getElementById("filterYear");

  unique(projects.map((p) => p.sdg))
    .sort((a, b) => Number(a) - Number(b))
    .forEach((v) => {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = `SDG ${v}`;
      sdgSel.appendChild(o);
    });

  unique(projects.map((p) => p.date))
    .sort()
    .forEach((v) => {
      const o = document.createElement("option");
      o.value = v;
      o.textContent = v;
      yearSel.appendChild(o);
    });

  sdgSel.addEventListener("change", renderProjects);
  yearSel.addEventListener("change", renderProjects);
}

function renderProjects() {
  const sdgVal = document.getElementById("filterSdg").value;
  const yearVal = document.getElementById("filterYear").value;
  const list = document.getElementById("projectList");

  const filtered = projects
    .filter((p) => {
    const bySdg = sdgVal === "all" || p.sdg === sdgVal;
    const byYear = yearVal === "all" || p.date === yearVal;
    return bySdg && byYear;
    })
    .sort((a, b) => {
      const sdgDelta = Number(a.sdg) - Number(b.sdg);
      if (sdgDelta !== 0) return sdgDelta;
      return String(a.date).localeCompare(String(b.date));
    });

  list.innerHTML = "";
  if (!filtered.length) {
    list.innerHTML = "<p>No projects match the selected filters.</p>";
    return;
  }

  filtered.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-head">
        <img class="odd-icon" src="${oddIconPath(p.sdg)}" alt="SDG ${p.sdg}" />
        <h4>${p.title}</h4>
      </div>
      <div class="meta">${p.odd} • Date: ${p.date}</div>
      <p>${p.description}</p>
      <span class="kpi-chip">KPI: ${p.kpi}</span>
    `;
    list.appendChild(card);
  });
}

function init() {
  initKpis();
  initCompany();
  renderCr2025BreakdownTables();
  renderAdvancedNumbers();
  renderEvolutionTable();
  initScopeTable();
  initDownloads();
  initCharts();
  initFilters();
  renderProjects();
}

init();
